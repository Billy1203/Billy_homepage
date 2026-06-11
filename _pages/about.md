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

  {% include i18n-text.html
    en="I work on robotics perception systems that connect research methods with product constraints,
    from tactile sensing and multi-sensor fusion to V-SLAM and large-scale vision pipelines."
    zh="我从事机器人感知系统相关工作，关注研究方法与产品约束之间的连接，
    工作横跨触觉感知、多传感器融合、V-SLAM 与大规模视觉生成流程。"
    wrapper_tag="p"
    class="about-lead"
  %}

  <div class="about-highlights">
    <span class="about-highlight">{% include i18n-text.html en="Multi-sensor fusion" zh="多传感器融合" %}</span>
    <span class="about-highlight">{% include i18n-text.html en="V-SLAM & autonomous driving" zh="V-SLAM 与自动驾驶" %}</span>
    <span class="about-highlight">{% include i18n-text.html en="Tactile sensing" zh="触觉感知" %}</span>
    <span class="about-highlight">{% include i18n-text.html en="Research to product" zh="研究到产品" %}</span>
  </div>

  <div class="about-glance">
    <section class="about-glance__story">
      <span class="about-glance__eyebrow">{% include i18n-text.html en="Profile" zh="人物画像" %}</span>
      <h2 class="about-glance__title">{% include i18n-text.html
        en="A perception engineer with academic training, startup execution, and product-facing system experience."
        zh="具备学术训练、创业执行经验与面向产品系统经验的感知工程师。"
      %}</h2>
      <p class="about-glance__text">{% include i18n-text.html
        en="My path started in pattern recognition and computer science, then expanded through tactile sensing papers,
        multi-sensor fusion research, V-SLAM engineering, and autonomous-driving visual pipelines.
        My work is concentrated where algorithms, system design, and deployment constraints meet."
        zh="我的路径从模式识别与计算机科学出发，随后延伸到触觉感知论文、多传感器融合研究、
        V-SLAM 工程以及自动驾驶视觉流程。
        目前的工作重点集中在算法、系统设计与部署约束的交汇处。"
      %}</p>
    </section>
    <div
      class="about-glance__stats"
      aria-label="Profile snapshot"
      data-i18n-aria-label-en="Profile snapshot"
      data-i18n-aria-label-zh="个人概览">
      <article class="about-stat">
        <div class="about-stat__head">
          <span class="about-stat__value">MRes</span>
          <div class="about-stat__logos about-stat__logos--dual" aria-hidden="true">
            <img class="about-stat__logo" src="../images/UoL.webp" alt="" loading="lazy" decoding="async">
            <img class="about-stat__logo" src="../images/ZJU.webp" alt="" loading="lazy" decoding="async">
          </div>
        </div>
        <span class="about-stat__label">UoL x ZJU</span>
        <span class="about-stat__meta">{% include i18n-text.html
          en="Pattern Recognition and Intelligent Systems, Distinction, Best Overall Award"
          zh="模式识别与智能系统，以 Distinction 学位毕业，获得 Best Overall Award"
        %}</span>
      </article>
      <article class="about-stat">
        <div class="about-stat__head">
          <span class="about-stat__value">BEng</span>
          <div class="about-stat__logos" aria-hidden="true">
            <img class="about-stat__logo" src="../images/SUSTech.webp" alt="" loading="lazy" decoding="async">
          </div>
        </div>
        <span class="about-stat__label">SUSTech</span>
        <span class="about-stat__meta">{% include i18n-text.html
          en="Computer Science and Technology, capstone ranked 2nd in the College of Engineering"
          zh="计算机科学与技术，获得工学院综合设计项目第 2 名"
        %}</span>
      </article>
      <article class="about-stat">
        <div class="about-stat__head">
          <span class="about-stat__value">{% include i18n-text.html en="Industry" zh="产业经历" %}</span>
        </div>
        <span class="about-stat__label">Jabbr · OMOway · Boundary AI</span>
        <span class="about-stat__meta">{% include i18n-text.html
          en="AI algorithms, V-SLAM, and product-facing perception engineering in startups"
          zh="AI 算法、V-SLAM 与面向产品的感知工程实践"
        %}</span>
      </article>
    </div>
  </div>

  <div class="about-profile-grid">
    <article class="about-panel">
      <span class="about-panel__eyebrow">{% include i18n-text.html en="Cross-Stack Perception" zh="跨栈感知能力" %}</span>
      <h3 class="about-panel__title">{% include i18n-text.html
        en="From embodied sensing and multi-sensor fusion to V-SLAM and scene generation."
        zh="从具身感知与多传感器融合，一路延伸到 V-SLAM 与场景生成。"
      %}</h3>
      <p class="about-panel__text">{% include i18n-text.html
        en="My work spans tactile sensing systems,
        multi-sensor fusion pipelines, SLAM components, and data-generation workflows for autonomous-driving scenarios,
        forming a connected view of perception systems across sensing, estimation, and data construction."
        zh="我的工作覆盖触觉感知系统、多传感器融合流程、
        SLAM 组件以及自动驾驶场景的数据生成方法，
        因而形成了贯穿传感、估计与数据构建的感知系统视角。"
      %}</p>
    </article>

    <article class="about-panel">
      <span class="about-panel__eyebrow">{% include i18n-text.html en="Research That Transfers" zh="可迁移的研究能力" %}</span>
      <h3 class="about-panel__title">{% include i18n-text.html
        en="Research work that carries into system-level implementation."
        zh="能够延伸到系统级实现的研究工作。"
      %}</h3>
      <p class="about-panel__text">{% include i18n-text.html
        en="My publications cover multi-sensor USV tracking in <em>Ocean Engineering</em>,
        tactile sensing in <em>ACS Nano</em> and <em>Nature Communications</em>,
        and large-scale novel-view synthesis accepted to <em>IROS</em>.
        Across these topics, the common thread is method development under system-level requirements."
        zh="我的论文工作从 <em>Ocean Engineering</em> 的多传感器无人艇跟踪，
        延伸到 <em>ACS Nano</em> 与 <em>Nature Communications</em> 的触觉感知，
        以及被 <em>IROS</em> 接收的大规模新视角图像合成。
        这些题目背后的共同主线，是在系统级需求下进行方法开发。"
      %}</p>
    </article>

    <article class="about-panel">
      <span class="about-panel__eyebrow">{% include i18n-text.html en="Product Judgment" zh="产品判断力" %}</span>
      <h3 class="about-panel__title">{% include i18n-text.html
        en="Labs, startups, and a period in frontier-tech investing shaped how I make decisions."
        zh="实验室、创业团队，以及一段前沿科技投资经历，共同塑造了我的判断方式。"
      %}</h3>
      <p class="about-panel__text">{% include i18n-text.html
        en="Beyond academic labs, I have worked on V-SLAM and AI systems in startup and product environments,
        and spent a period engaging with more than 100 startups as an AI industry analyst.
        This experience informs how I evaluate technical quality, timing, scope, and product usefulness."
        zh="除了学术实验室，我也在创业与产品环境中做过 V-SLAM 和 AI 系统，
        还曾以 AI 产业分析师身份深度接触 100 余家创业公司。
        这段经历影响了我对技术质量、推进节奏、工作边界与产品价值的判断。"
      %}</p>
    </article>

    <article class="about-panel about-panel--accent">
      <span class="about-panel__eyebrow">{% include i18n-text.html en="Communication & Craft" zh="表达与审美" %}</span>
      <h3 class="about-panel__title">{% include i18n-text.html
        en="I treat visuals, demos, and writing as part of technical work rather than decoration."
        zh="我把视觉表达、演示与写作视为技术工作的一部分，而不是附属装饰。"
      %}</h3>
      <p class="about-panel__text">{% include i18n-text.html
        en="In several projects I took ownership of illustrations, videos, and presentation materials
        in addition to algorithms and experiments. Photography and visual storytelling also inform
        how I document and explain technical systems. Some of that work is <a href='https://unsplash.com/@billyxue'>here</a>."
        zh="在多个项目中，我除了负责算法与实验，也主动承担插图、视频和展示材料的制作。
        摄影与视觉叙事也影响了我记录和解释技术系统的方式。
        部分作品可以在<a href='https://unsplash.com/@billyxue'>这里</a>看到。"
      %}</p>
    </article>
  </div>
</section>

<section class="about-section">
  <h2>{% include i18n-text.html en="Research Interests" zh="研究兴趣" %}</h2>

  <p class="about-closing">{% include i18n-text.html
    en="My current interests center on robotics perception, machine learning, computer vision, and embodied intelligence,
    especially where perception quality directly shapes system behavior, autonomy, and product usefulness.
    I am open to technical conversations and collaborations in robotics and perception."
    zh="我当前的兴趣仍然聚焦于机器人感知、机器学习、计算机视觉与具身智能，
    尤其关注那些会直接影响系统行为、自主能力与产品价值的感知问题。
    欢迎就机器人与感知相关方向进行技术交流或合作。"
  %}</p>
</section>

<h2>{% include i18n-text.html en="News" zh="动态" %}</h2>

<section
  class="about-news"
  data-news-stack
  aria-label="News timeline"
  data-i18n-aria-label-en="News timeline"
  data-i18n-aria-label-zh="动态时间线">
  <div class="about-news__list" role="list">
    <article class="about-news__item about-news__item--move" data-news-card role="listitem">
      <div class="about-news__pin" aria-hidden="true"></div>
      <div class="about-news__bubble">
        <div class="about-news__meta">
          <span class="about-news__date">2025-09</span>
          <span class="about-news__tag">{% include i18n-text.html en="Role" zh="新角色" %}</span>
        </div>
        <p class="about-news__text">{% include i18n-text.html
          en="Joined Jabbr as an AI Algorithm Engineer."
          zh="加入 Jabbr，担任 AI 算法工程师。"
        %}</p>
      </div>
    </article>

    <article class="about-news__item about-news__item--paper" data-news-card role="listitem">
      <div class="about-news__pin" aria-hidden="true"></div>
      <div class="about-news__bubble">
        <div class="about-news__meta">
          <span class="about-news__date">2025-06</span>
          <span class="about-news__tag">{% include i18n-text.html en="Paper" zh="论文" %}</span>
        </div>
        <p class="about-news__text">{% include i18n-text.html
          en="One paper accepted to IROS 2025 as an oral presentation."
          zh="一篇论文被 IROS 2025 接收，并获 oral presentation。"
        %}</p>
      </div>
    </article>

    <article class="about-news__item about-news__item--pivot" data-news-card role="listitem">
      <div class="about-news__pin" aria-hidden="true"></div>
      <div class="about-news__bubble">
        <div class="about-news__meta">
          <span class="about-news__date">2025-04</span>
          <span class="about-news__tag">{% include i18n-text.html en="Pivot" zh="调整" %}</span>
        </div>
        <p class="about-news__text">{% include i18n-text.html
          en="Overseas PhD enrollment plans changed because of research-background review constraints."
          zh="由于研究背景审查相关限制，海外 PhD 入学计划发生调整。"
        %}</p>
      </div>
    </article>

    <article class="about-news__item about-news__item--offer" data-news-card role="listitem">
      <div class="about-news__pin" aria-hidden="true"></div>
      <div class="about-news__bubble">
        <div class="about-news__meta">
          <span class="about-news__date">2025-03</span>
          <span class="about-news__tag">{% include i18n-text.html en="Offers" zh="Offer" %}</span>
        </div>
        <p class="about-news__text">{% include i18n-text.html
          en="Received multiple fully funded PhD offers in robotics."
          zh="获得多个机器人方向全额资助 PhD offer。"
        %}</p>
      </div>
    </article>

    <article class="about-news__item about-news__item--move" data-news-card role="listitem">
      <div class="about-news__pin" aria-hidden="true"></div>
      <div class="about-news__bubble">
        <div class="about-news__meta">
          <span class="about-news__date">2024-12</span>
          <span class="about-news__tag">{% include i18n-text.html en="Role" zh="新职位" %}</span>
        </div>
        <p class="about-news__text">{% include i18n-text.html
          en="Joined OMOway and worked on V-SLAM, visual localization, odometry,
          and map building for its first product."
          zh="加入 OMOway，参与首款产品的 V-SLAM、视觉定位、里程计与地图构建。"
        %}</p>
      </div>
    </article>

    <article class="about-news__item about-news__item--pivot" data-news-card role="listitem">
      <div class="about-news__pin" aria-hidden="true"></div>
      <div class="about-news__bubble">
        <div class="about-news__meta">
          <span class="about-news__date">2024-11</span>
          <span class="about-news__tag">{% include i18n-text.html en="Update" zh="进展" %}</span>
        </div>
        <p class="about-news__text">{% include i18n-text.html
          en="PhD enrollment did not proceed because of ATAS review issues."
          zh="艹TMD ATAS 审批没过，PhD 入学未能继续推进。"
        %}</p>
      </div>
    </article>

    <article class="about-news__item about-news__item--paper" data-news-card role="listitem">
      <div class="about-news__pin" aria-hidden="true"></div>
      <div class="about-news__bubble">
        <div class="about-news__meta">
          <span class="about-news__date">2024-05</span>
          <span class="about-news__tag">{% include i18n-text.html en="Paper" zh="论文" %}</span>
        </div>
        <p class="about-news__text">{% include i18n-text.html
          en="One paper accepted by Ocean Engineering."
          zh="一篇论文被 Ocean Engineering 接收。"
        %}</p>
      </div>
    </article>

    <article class="about-news__item about-news__item--offer" data-news-card role="listitem">
      <div class="about-news__pin" aria-hidden="true"></div>
      <div class="about-news__bubble">
        <div class="about-news__meta">
          <span class="about-news__date">2024-04</span>
          <span class="about-news__tag">{% include i18n-text.html en="Offers" zh="Offer" %}</span>
        </div>
        <p class="about-news__text">{% include i18n-text.html
          en="Received multiple fully funded PhD offers in robotics, spanning manipulation,
          arm control, tactile perception, and imitation learning."
          zh="获得多个机器人方向全额资助 PhD offer，
          涉及操作、机械臂控制、触觉感知和模仿学习。"
        %}</p>
      </div>
    </article>

    <article class="about-news__item about-news__item--role" data-news-card role="listitem">
      <div class="about-news__pin" aria-hidden="true"></div>
      <div class="about-news__bubble">
        <div class="about-news__meta">
          <span class="about-news__date">2024-03</span>
          <span class="about-news__tag">{% include i18n-text.html en="Role" zh="新职位" %}</span>
        </div>
        <p class="about-news__text">{% include i18n-text.html
          en="Returned to Shenzhen and joined Boundary AI to work on VSLAM systems."
          zh="回到深圳，加入 Boundary AI 从事 VSLAM 系统研发。"
        %}</p>
      </div>
    </article>

    <article class="about-news__item about-news__item--degree" data-news-card role="listitem">
      <div class="about-news__pin" aria-hidden="true"></div>
      <div class="about-news__bubble">
        <div class="about-news__meta">
          <span class="about-news__date">2024-02</span>
          <span class="about-news__tag">{% include i18n-text.html en="Degree" zh="学位" %}</span>
        </div>
        <p class="about-news__text">{% include i18n-text.html
          en="Graduated with M.Res. Distinction and received the Best Overall Master Student award,
          ranked 1st among 80+ students."
          zh="以 Distinction 完成 M.Res. 学位，并获得 Best Overall Master Student，
          80 余名学生中排名第 1。"
        %}</p>
      </div>
    </article>

    <article class="about-news__item about-news__item--paper" data-news-card role="listitem">
      <div class="about-news__pin" aria-hidden="true"></div>
      <div class="about-news__bubble">
        <div class="about-news__meta">
          <span class="about-news__date">2023-11</span>
          <span class="about-news__tag">{% include i18n-text.html en="Paper" zh="论文" %}</span>
        </div>
        <p class="about-news__text">{% include i18n-text.html
          en="One paper accepted by Nature Communications."
          zh="一篇论文被 Nature Communications 接收。"
        %}</p>
      </div>
    </article>
  </div>
</section>

---

<div class="visitor-stats">
  <a class="visitor-counter-shell" href="https://s01.flagcounter.com/more/ylM7/" target="_blank" rel="noopener" aria-label="Open visitor country details">
    <img
      class="visitor-counter js-theme-image"
      src="https://s01.flagcounter.com/count2/ylM7/bg_F7F1E6/txt_23313D/border_D8CBB7/columns_4/maxflags_8/viewers_0/labels_0/pageviews_0/"
      data-light-src="https://s01.flagcounter.com/count2/ylM7/bg_F7F1E6/txt_23313D/border_D8CBB7/columns_3/maxflags_6/viewers_0/labels_0/pageviews_0/"
      data-dark-src="https://s01.flagcounter.com/count2/ylM7/bg_1B2430/txt_EFE7DB/border_3A4A59/columns_4/maxflags_6/viewers_0/labels_0/pageviews_0/"
      alt="Visitor Counter"
      loading="lazy"
      decoding="async">
  </a>
</div>
