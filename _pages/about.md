---
permalink: /
layout: page-content
title: "About Billy"
title_zh: "关于 Billy"
author_profile: true
show_page_title: false
watermark_label: "About Billy"
watermark_label_zh: "关于 Billy"
content_width: wide
redirect_from: 
  - /about/
  - /about.html
---
<div class="about-hero-gif">
  <img src="../images/welcome.gif" alt="Welcome animation" decoding="async" fetchpriority="high">
</div>

<section class="about-section about-section--intro">
  <h1>{% include i18n-text.html en="About Me" zh="关于我" %}</h1>

  {% include i18n-text.html en="I build robotics perception systems that connect strong research with product reality, from tactile sensing and multi-sensor fusion to V-SLAM and large-scale vision pipelines." zh="我专注于机器人感知系统，擅长把扎实研究与产品现实连接起来，工作横跨触觉感知、多传感器融合、V-SLAM 与大规模视觉生成流程。" wrapper_tag="p" class="about-lead" %}

  <div class="about-highlights">
    <span class="about-highlight">{% include i18n-text.html en="Tactile sensing" zh="触觉感知" %}</span>
    <span class="about-highlight">{% include i18n-text.html en="Multi-sensor fusion" zh="多传感器融合" %}</span>
    <span class="about-highlight">{% include i18n-text.html en="V-SLAM & autonomy" zh="V-SLAM 与自动驾驶" %}</span>
    <span class="about-highlight">{% include i18n-text.html en="Research to product" zh="研究到产品落地" %}</span>
  </div>

  <div class="about-glance">
    <section class="about-glance__story">
      <span class="about-glance__eyebrow">{% include i18n-text.html en="Profile" zh="人物画像" %}</span>
      <h2 class="about-glance__title">{% include i18n-text.html en="A perception engineer shaped by top-ranked academic work, startup execution, and real product constraints." zh="由顶尖学术训练、创业执行经验与真实产品约束共同塑造的感知工程师。" %}</h2>
      <p class="about-glance__text">{% include i18n-text.html en="My path started in pattern recognition and computer science, then expanded through tactile sensing papers, multi-sensor fusion research, V-SLAM engineering, and autonomous-driving visual pipelines. I am most useful where algorithms, systems design, and deployment pressure meet." zh="我的路径从模式识别与计算机科学出发，随后延伸到触觉感知论文、多传感器融合研究、V-SLAM 工程以及自动驾驶视觉流程。我最擅长处理的，正是算法、系统设计与部署压力真正交汇的地方。" %}</p>
    </section>
    <div class="about-glance__stats" aria-label="Profile snapshot" data-i18n-aria-label-en="Profile snapshot" data-i18n-aria-label-zh="个人概览">
      <article class="about-stat">
        <div class="about-stat__head">
          <span class="about-stat__value">MRes</span>
          <div class="about-stat__logos about-stat__logos--dual" aria-hidden="true">
            <img class="about-stat__logo" src="../images/UoL.webp" alt="" loading="lazy" decoding="async">
            <img class="about-stat__logo" src="../images/ZJU.webp" alt="" loading="lazy" decoding="async">
          </div>
        </div>
        <span class="about-stat__label">UoL x ZJU</span>
        <span class="about-stat__meta">{% include i18n-text.html en="Pattern Recognition and Intelligent Systems, Distinction, Best Overall Award" zh="模式识别与智能系统，Distinction 毕业，Best Overall Award" %}</span>
      </article>
      <article class="about-stat">
        <div class="about-stat__head">
          <span class="about-stat__value">BEng</span>
          <div class="about-stat__logos" aria-hidden="true">
            <img class="about-stat__logo" src="../images/SUSTech.webp" alt="" loading="lazy" decoding="async">
          </div>
        </div>
        <span class="about-stat__label">SUSTech</span>
        <span class="about-stat__meta">{% include i18n-text.html en="Computer Science and Technology, capstone ranked 2nd in the College of Engineering" zh="计算机科学与技术，综合设计项目获工学院第 2 名" %}</span>
      </article>
      <article class="about-stat">
        <div class="about-stat__head">
          <span class="about-stat__value">{% include i18n-text.html en="Industry" zh="产业经历" %}</span>
        </div>
        <span class="about-stat__label">Jabbr · OMOway · Boundary AI</span>
        <span class="about-stat__meta">{% include i18n-text.html en="AI algorithms, V-SLAM, and product-facing perception engineering" zh="AI 算法、V-SLAM 与面向产品的感知工程实践" %}</span>
      </article>
    </div>
  </div>

  <div class="about-profile-grid">
    <article class="about-panel">
      <span class="about-panel__eyebrow">{% include i18n-text.html en="Cross-Stack Perception" zh="跨栈感知能力" %}</span>
      <h3 class="about-panel__title">{% include i18n-text.html en="From embodied sensing and multi-sensor fusion to V-SLAM and scene generation." zh="从具身感知与多传感器融合，一路延伸到 V-SLAM 与场景生成。" %}</h3>
      <p class="about-panel__text lang-en">My work is not limited to a single perception niche. I have built tactile sensing systems, multi-sensor fusion pipelines, SLAM components, and data-generation workflows for autonomous-driving scenarios, which gives me a broad but coherent understanding of perception systems.</p>
      <p class="about-panel__text lang-zh">我的工作并不局限于某一个细分感知方向，而是横跨触觉感知系统、多传感器融合流程、SLAM 组件以及自动驾驶场景的数据生成方法。这让我对感知系统形成了更完整且连贯的理解。</p>
    </article>

    <article class="about-panel">
      <span class="about-panel__eyebrow">{% include i18n-text.html en="Research That Transfers" zh="可迁移的研究能力" %}</span>
      <h3 class="about-panel__title">{% include i18n-text.html en="Papers are only part of the story; I care about how they survive contact with real systems." zh="论文只是起点，我更在意它们如何经得起真实系统的检验。" %}</h3>
      <p class="about-panel__text lang-en">My publication record ranges from tactile sensing in <em>ACS Nano</em> and <em>Nature Communications</em> to multi-sensor USV tracking in <em>Ocean Engineering</em> and large-scale novel-view synthesis accepted to <em>IROS</em>. Across topics, the common thread is building methods that matter at the system level rather than optimizing in isolation.</p>
      <p class="about-panel__text lang-zh">我的论文工作从 <em>ACS Nano</em> 与 <em>Nature Communications</em> 的触觉感知，延伸到 <em>Ocean Engineering</em> 的多传感器无人艇跟踪，以及被 <em>IROS</em> 接收的大规模新视角图像合成。不同题目背后的共同主线，是关注真正影响系统表现的方法，而不是脱离场景的局部优化。</p>
    </article>

    <article class="about-panel">
      <span class="about-panel__eyebrow">{% include i18n-text.html en="Product Judgment" zh="产品判断力" %}</span>
      <h3 class="about-panel__title">{% include i18n-text.html en="Labs, startups, and a period in frontier-tech investing shaped how I make decisions." zh="实验室、创业团队，以及一段前沿科技投资经历，共同塑造了我的判断方式。" %}</h3>
      <p class="about-panel__text lang-en">Beyond academic labs, I have worked on V-SLAM and AI systems in startup and product environments, and spent a period engaging with more than 100 startups as an AI industry analyst. That combination makes me attentive not only to technical quality, but also to timing, scope, and product usefulness.</p>
      <p class="about-panel__text lang-zh">除了学术实验室，我也在创业与产品环境中做过 V-SLAM 和 AI 系统，还曾以 AI 产业分析师身份深度接触 100 余家创业公司。这种组合让我在关注技术质量之外，也会同时考虑节奏、边界与产品价值。</p>
    </article>

    <article class="about-panel about-panel--accent">
      <span class="about-panel__eyebrow">{% include i18n-text.html en="Communication & Craft" zh="表达与审美" %}</span>
      <h3 class="about-panel__title">{% include i18n-text.html en="I treat visuals, demos, and writing as part of technical work rather than decoration." zh="我把视觉表达、演示与写作视为技术工作的一部分，而不是附属装饰。" %}</h3>
      <p class="about-panel__text lang-en">In several projects I took ownership of illustrations, videos, and presentation materials in addition to algorithms and experiments. Outside work, photography and visual storytelling continue to sharpen how I explain systems. Some of that work is <a href="https://unsplash.com/@billyxue">here</a>.</p>
      <p class="about-panel__text lang-zh">在不少项目里，我除了负责算法与实验，也主动承担插图、视频和展示材料的制作。工作之外，摄影与视觉叙事也持续影响我解释技术系统的方式。部分作品可以在<a href="https://unsplash.com/@billyxue">这里</a>看到。</p>
    </article>
  </div>
</section>

<section class="about-section">
  <h2>{% include i18n-text.html en="Research Interests" zh="研究兴趣" %}</h2>

  <p class="about-closing">{% include i18n-text.html en="My current interests center on robotics perception, machine learning, computer vision, and embodied intelligence, especially where perception quality directly shapes system behavior, autonomy, and product usefulness. If you are building something ambitious in robotics or perception, I would be glad to connect." zh="我当前的兴趣仍然聚焦于机器人感知、机器学习、计算机视觉与具身智能，尤其关注那些会直接影响系统行为、自主能力与产品价值的感知问题。如果你正在做有野心的机器人或感知相关项目，欢迎联系我。" %}</p>
</section>

<h2>{% include i18n-text.html en="News" zh="动态" %}</h2>

<section class="about-news" data-news-stack aria-label="News timeline" data-i18n-aria-label-en="News timeline" data-i18n-aria-label-zh="动态时间线">
  <div class="about-news__list" role="list">
    <article class="about-news__item about-news__item--move" data-news-card role="listitem">
      <div class="about-news__pin" aria-hidden="true"></div>
      <div class="about-news__bubble">
        <div class="about-news__meta">
          <span class="about-news__date">2025-09</span>
          <span class="about-news__tag">{% include i18n-text.html en="Role" zh="新角色" %}</span>
        </div>
        <p class="about-news__text">{% include i18n-text.html en="Joined Jabbr as an AI Algorithm Engineer." zh="加入 Jabbr，担任 AI 算法工程师。" %}</p>
      </div>
    </article>

    <article class="about-news__item about-news__item--paper" data-news-card role="listitem">
      <div class="about-news__pin" aria-hidden="true"></div>
      <div class="about-news__bubble">
        <div class="about-news__meta">
          <span class="about-news__date">2025-06</span>
          <span class="about-news__tag">{% include i18n-text.html en="Paper" zh="论文" %}</span>
        </div>
        <p class="about-news__text">{% include i18n-text.html en="Paper accepted to IROS 2025 as an oral presentation." zh="论文被 IROS 2025 接收，并获 oral presentation。" %}</p>
      </div>
    </article>

    <article class="about-news__item about-news__item--pivot" data-news-card role="listitem">
      <div class="about-news__pin" aria-hidden="true"></div>
      <div class="about-news__bubble">
        <div class="about-news__meta">
          <span class="about-news__date">2025-04</span>
          <span class="about-news__tag">{% include i18n-text.html en="Pivot" zh="调整" %}</span>
        </div>
        <p class="about-news__text">{% include i18n-text.html en="Overseas PhD enrollment became unlikely because of research-background sensitivity, but my focus on applied robotics remains unchanged." zh="由于研究背景相关因素，海外 PhD 入学前景变得不确定，但我对应用机器人方向的投入没有改变。" %}</p>
      </div>
    </article>

    <article class="about-news__item about-news__item--offer" data-news-card role="listitem">
      <div class="about-news__pin" aria-hidden="true"></div>
      <div class="about-news__bubble">
        <div class="about-news__meta">
          <span class="about-news__date">2025-03</span>
          <span class="about-news__tag">{% include i18n-text.html en="Offers" zh="Offer" %}</span>
        </div>
        <p class="about-news__text">{% include i18n-text.html en="Received multiple fully funded PhD offers in robotics." zh="获得多个机器人方向全额资助 PhD offer。" %}</p>
      </div>
    </article>

    <article class="about-news__item about-news__item--move" data-news-card role="listitem">
      <div class="about-news__pin" aria-hidden="true"></div>
      <div class="about-news__bubble">
        <div class="about-news__meta">
          <span class="about-news__date">2024-12</span>
          <span class="about-news__tag">{% include i18n-text.html en="Role" zh="新角色" %}</span>
        </div>
        <p class="about-news__text">{% include i18n-text.html en="Joined OMOway and worked on V-SLAM, visual localization, odometry, and map building for its first product." zh="加入 OMOway，参与首款产品的 V-SLAM、视觉定位、里程计与地图构建。" %}</p>
      </div>
    </article>

    <article class="about-news__item about-news__item--pivot" data-news-card role="listitem">
      <div class="about-news__pin" aria-hidden="true"></div>
      <div class="about-news__bubble">
        <div class="about-news__meta">
          <span class="about-news__date">2024-11</span>
          <span class="about-news__tag">{% include i18n-text.html en="Update" zh="进展" %}</span>
        </div>
        <p class="about-news__text">{% include i18n-text.html en="Unable to proceed with UK enrollment because of ATAS clearance issues." zh="因 ATAS 审批问题，未能继续推进英国入学。" %}</p>
      </div>
    </article>

    <article class="about-news__item about-news__item--paper" data-news-card role="listitem">
      <div class="about-news__pin" aria-hidden="true"></div>
      <div class="about-news__bubble">
        <div class="about-news__meta">
          <span class="about-news__date">2024-05</span>
          <span class="about-news__tag">{% include i18n-text.html en="Paper" zh="论文" %}</span>
        </div>
        <p class="about-news__text">{% include i18n-text.html en="Paper accepted by Ocean Engineering." zh="论文被 Ocean Engineering 接收。" %}</p>
      </div>
    </article>

    <article class="about-news__item about-news__item--offer" data-news-card role="listitem">
      <div class="about-news__pin" aria-hidden="true"></div>
      <div class="about-news__bubble">
        <div class="about-news__meta">
          <span class="about-news__date">2024-04</span>
          <span class="about-news__tag">{% include i18n-text.html en="Offers" zh="Offer" %}</span>
        </div>
        <p class="about-news__text">{% include i18n-text.html en="Received multiple fully funded PhD offers in robotics, spanning manipulation, arm control, tactile perception, and imitation learning." zh="获得多个机器人方向全额资助 PhD offer，涉及操作、机械臂控制、触觉感知和模仿学习。" %}</p>
      </div>
    </article>

    <article class="about-news__item about-news__item--move" data-news-card role="listitem">
      <div class="about-news__pin" aria-hidden="true"></div>
      <div class="about-news__bubble">
        <div class="about-news__meta">
          <span class="about-news__date">2024-03</span>
          <span class="about-news__tag">{% include i18n-text.html en="Move" zh="新阶段" %}</span>
        </div>
        <p class="about-news__text">{% include i18n-text.html en="Returned to Shenzhen and joined Boundary AI to work on VSLAM systems." zh="回到深圳，加入 Boundary AI 从事 VSLAM 系统研发。" %}</p>
      </div>
    </article>

    <article class="about-news__item about-news__item--award" data-news-card role="listitem">
      <div class="about-news__pin" aria-hidden="true"></div>
      <div class="about-news__bubble">
        <div class="about-news__meta">
          <span class="about-news__date">2024-02</span>
          <span class="about-news__tag">{% include i18n-text.html en="Award" zh="荣誉" %}</span>
        </div>
        <p class="about-news__text">{% include i18n-text.html en="Graduated with M.Res. Distinction and received the Best Overall Master Student award, ranked 1st among 80+ students." zh="以 Distinction 完成 M.Res. 学位，并获得 Best Overall Master Student，80 余名学生中排名第 1。" %}</p>
      </div>
    </article>

    <article class="about-news__item about-news__item--paper" data-news-card role="listitem">
      <div class="about-news__pin" aria-hidden="true"></div>
      <div class="about-news__bubble">
        <div class="about-news__meta">
          <span class="about-news__date">2023-11</span>
          <span class="about-news__tag">{% include i18n-text.html en="Paper" zh="论文" %}</span>
        </div>
        <p class="about-news__text">{% include i18n-text.html en="Paper accepted by Nature Communications." zh="论文被 Nature Communications 接收。" %}</p>
      </div>
    </article>
  </div>
</section>

---

<div class="visitor-stats">
  <a class="visitor-counter-shell" href="https://s01.flagcounter.com/more/ylM7/" target="_blank" rel="noopener" aria-label="Open visitor country details">
    <img
      class="visitor-counter js-theme-image"
      src="https://s01.flagcounter.com/count2/ylM7/bg_F7F1E6/txt_23313D/border_D8CBB7/columns_3/maxflags_6/viewers_0/labels_0/pageviews_0/"
      data-light-src="https://s01.flagcounter.com/count2/ylM7/bg_F7F1E6/txt_23313D/border_D8CBB7/columns_3/maxflags_6/viewers_0/labels_0/pageviews_0/"
      data-dark-src="https://s01.flagcounter.com/count2/ylM7/bg_1B2430/txt_EFE7DB/border_3A4A59/columns_4/maxflags_6/viewers_0/labels_0/pageviews_0/"
      alt="Visitor Counter"
      loading="lazy"
      decoding="async">
  </a>
</div>
