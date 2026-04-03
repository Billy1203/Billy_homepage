require "fileutils"

module AutoWebp
  class Processor
    IMAGE_EXT_REGEX = /\.(?:png|jpe?g)\z/i
    URL_REGEX = /(?<url>(?!https?:\/\/|\/\/|data:|mailto:|javascript:)[^"'()\s<>]+?\.(?:png|jpe?g))(?<suffix>(?:\?[^"'()\s<>]*)?(?:#[^"'()\s<>]*)?)/i

    def initialize(site)
      @site = site
      @config = site.config.fetch("auto_webp", {})
      @enabled = @config.fetch("enabled", true)
      @quality = @config.fetch("quality", 82).to_i
      @converter = detect_converter
      @converted_count = 0
      @rewritten_count = 0
    end

    def run
      return unless @enabled
      unless @converter
        Jekyll.logger.warn(
          "auto_webp:",
          "no converter found; only pre-existing .webp files can be used"
        )
      end

      html_files = Dir.glob(File.join(site_dest, "**", "*.html"))
      html_files.each { |file| rewrite_html(file) }

      Jekyll.logger.info(
        "auto_webp:",
        "converted #{@converted_count} image(s), rewrote #{@rewritten_count} URL(s)"
      )
    end

    private

    def site_dest
      @site_dest ||= File.expand_path(@site.dest)
    end

    def rewrite_html(html_file)
      original = File.read(html_file)
      rewritten = original.gsub(URL_REGEX) do |match|
        url = Regexp.last_match(:url)
        suffix = Regexp.last_match(:suffix).to_s
        webp_url = to_webp_url(url, html_file)
        if webp_url
          @rewritten_count += 1
          "#{webp_url}#{suffix}"
        else
          match
        end
      end

      return if rewritten == original
      File.write(html_file, rewritten)
    end

    def to_webp_url(url, html_file)
      img_path = resolve_image_path(url, html_file)
      return nil unless img_path && File.file?(img_path)
      return nil unless img_path.match?(IMAGE_EXT_REGEX)

      webp_path = img_path.sub(IMAGE_EXT_REGEX, ".webp")
      unless File.file?(webp_path) && File.mtime(webp_path) >= File.mtime(img_path)
        return nil unless convert_image(img_path, webp_path)
      end

      url.sub(IMAGE_EXT_REGEX, ".webp")
    end

    def resolve_image_path(url, html_file)
      if url.start_with?("/")
        resolved = File.expand_path(url.sub(%r{\A/+}, ""), site_dest)
      else
        resolved = File.expand_path(url, File.dirname(html_file))
      end
      return nil unless under_site_dest?(resolved)

      resolved
    end

    def under_site_dest?(path)
      path == site_dest || path.start_with?(site_dest + File::SEPARATOR)
    end

    def convert_image(src, dst)
      return false unless @converter

      FileUtils.mkdir_p(File.dirname(dst))
      success = case @converter
                when :cwebp
                  system("cwebp", "-quiet", "-q", @quality.to_s, src, "-o", dst)
                when :magick
                  system("magick", src, "-quality", @quality.to_s, dst)
                when :convert
                  system("convert", src, "-quality", @quality.to_s, dst)
                else
                  false
                end

      if success
        @converted_count += 1
        true
      else
        Jekyll.logger.warn("auto_webp:", "failed to convert #{src}")
        false
      end
    end

    def detect_converter
      return :cwebp if executable_in_path?("cwebp")
      return :magick if executable_in_path?("magick")
      return :convert if executable_in_path?("convert")

      nil
    end

    def executable_in_path?(command)
      ENV.fetch("PATH", "").split(File::PATH_SEPARATOR).any? do |path|
        candidate = File.join(path, command)
        File.executable?(candidate) && !File.directory?(candidate)
      end
    end
  end
end

Jekyll::Hooks.register :site, :post_write do |site|
  AutoWebp::Processor.new(site).run
end
