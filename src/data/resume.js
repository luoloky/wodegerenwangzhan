// Resume data - sourced from 罗立基's resume
export const resume = {
  name: '罗立基',
  nameEn: 'LUO LIJI',
  role: '视觉设计师 / 游戏开发者',
  roleEn: 'Visual Designer / Game Developer',
  tagline: '用视觉与代码构建可被感知的体验',
  email: '2624938856@qq.com',
  phone: '13128750826',
  location: '广西 · 玉林',
  school: '东莞理工学院',
  major: '计算机科学与技术',
  eduPeriod: '2023.09 — 2027.06',

  // Stats
  stats: [
    { value: '06', label: '设计竞赛获奖' },
    { value: '02', label: '主导项目' },
    { value: '10+', label: '设计技能' },
    { value: '2027', label: '预计毕业' },
  ],

  // Education courses (selected)
  courses: [
    'Web 前端应用开发',
    '数字图像处理与绘图',
    '程序设计',
    '面向对象程序设计',
    '数据结构与算法',
    '数据库原理与应用',
    '游戏开发与设计',
    '视觉传达设计',
    '交互设计',
    '数位摄影',
    '影视后期',
  ],

  // Awards
  awards: [
    { year: '2026', title: '"国青杯" 高校艺术设计作品展', honor: '学生组 · 二等奖' },
    { year: '2026', title: '第八届日本概念艺术设计奖', honor: '铜奖' },
    { year: '2026', title: 'HKDADC 香港数字艺术设计大赛', honor: '三等奖' },
    { year: '2026', title: '第13届未来设计师 · 全国高校数字艺术设计大赛', honor: '三等奖' },
    { year: '2025', title: '第四届 FA 国际前沿创新艺术设计大赛', honor: '铜奖' },
    { year: '2025', title: '万象东方 · 全国青年数字美学艺术创意大赛', honor: '三等奖' },
  ],

  // Projects
  projects: [
    {
      id: 'lihouhu',
      num: '01',
      title: '山西黎侯虎视觉形象规划设计',
      role: '视觉设计师',
      period: '2024.03 — 2024.06',
      category: '品牌视觉 / 非遗 IP',
      summary:
        '深挖非遗文化内核，提炼专属视觉符号，完成 IP 形象、LOGO、配色规范、版式视觉搭建。产出多场景适配延展物料（文创、宣传展板、线上传播素材），建立标准化视觉手册，推动非遗年轻化视觉改造。',
      tags: ['品牌视觉', 'IP 形象', '配色规范', '视觉手册', '非遗文化'],
      color: '#d0121b',
      // 封面：黎侯虎 logo 纹理
      cover: 'lihouhu',
      coverImage: '/images/lihouhu-logo.jpg',
      detailGallery: [
        '/images/lihouhu-gallery-01.jpg',
        '/images/lihouhu-gallery-02.jpg',
        '/images/lihouhu-gallery-03.jpg',
        '/images/lihouhu-gallery-04.jpg',
      ],
    },
    {
      id: 'forest',
      num: '02',
      title: '森林小卫士',
      role: 'Unity 开发者',
      period: '2023.09 — 2023.12',
      category: '游戏开发 / Unity',
      summary:
        '负责部分玩法方案设计，规划关卡机制，撰写游戏规则文档、关卡配置表。设计 NPC 交互逻辑、部分 UI 界面，持续测试游玩体验，调整关卡难度。配合美术完成角色、场景需求对接，输出交互草图与功能需求。',
      tags: ['Unity', '关卡设计', 'UI 界面', 'NPC 逻辑', '玩法设计'],
      color: '#2a6e3f',
      cover: 'forest',
      coverImage: '/images/slxws-cover.jpg',
      detailImage: '/images/slxws_02.jpg',
    },
    {
      id: 'ue5-terrain',
      num: '03',
      title: '风格化场景地形制作',
      role: '场景美术 / UE5',
      period: '2025 — 2026',
      category: '场景美术 / UE5',
      summary:
        '在 Unreal Engine 5 中完成风格化场景地形搭建：使用地形雕刻工具塑造起伏地形与河谷，配合分层材质系统表现草地、岩石、土路等不同地表；布置植被、岩石与氛围灯光，输出可漫游的实时场景，探索游戏场景美术从地形到氛围的完整流程。',
      tags: ['UE5', '地形雕刻', '风格化', '场景美术', '材质灯光'],
      color: '#6b7fd8',
      cover: 'conceptual',
      coverImage: '/images/ue-emm-cover.jpg',
      detailVideo: '/videos/ue-emm-walkthrough.mp4',
    },
    {
      id: 'lihouhu-ui',
      num: '04',
      title: '山西黎侯虎UI交互界面设计',
      role: 'UI 设计师 / 交互设计师',
      period: '2024.09 — 2024.12',
      category: 'UI/UX / 移动端',
      summary:
        '为山西黎侯虎非遗文创应用设计整套移动端 UI 交互界面，包括启动页、登录注册、首页、商城、消息、个人中心等核心页面。建立统一的色彩、图标、字体规范，将非遗视觉符号融入界面细节，实现传统文化与现代移动体验的平衡。',
      tags: ['UI 设计', '交互设计', '移动端', '非遗文创', '视觉规范'],
      color: '#d0121b',
      cover: 'lihouhu',
      coverImage: '/images/lihouhu-ui-01.jpg',
      detailGallery: [
        '/images/lihouhu-ui-gallery-01.jpg',
        '/images/lihouhu-ui-gallery-02.jpg',
        '/images/lihouhu-ui-gallery-03.jpg',
        '/images/lihouhu-ui-gallery-04.jpg',
      ],
    },
  ],

  // Skills / capabilities
  skills: [
    {
      num: '01',
      title: '视觉设计',
      en: 'Visual Design',
      desc: '品牌视觉、IP 形象、版式、配色系统。擅长以克制的方式表达情绪，让符号本身讲故事。',
      tools: ['Photoshop', 'Illustrator', 'Figma'],
    },
    {
      num: '02',
      title: '游戏开发',
      en: 'Game Development',
      desc: 'Unity 引擎下的玩法设计、关卡机制、NPC 逻辑、UI 界面与完整游戏流程搭建。',
      tools: ['Unity', 'C#', '关卡设计'],
    },
    {
      num: '03',
      title: '交互与 UI',
      en: 'Interaction & UI',
      desc: 'Web 前端与移动端界面，从交互逻辑、信息架构到视觉落地的端到端实现能力。',
      tools: ['React', 'HTML/CSS', '原型设计'],
    },
    {
      num: '04',
      title: '数字艺术',
      en: 'Digital Art',
      desc: '概念艺术、角色场景设计、影视后期与数位摄影。注重画面细节与美术风格的长期积累。',
      tools: ['Procreate', 'Blender', 'Premiere'],
    },
  ],

  // Social / contact extras
  socials: [
    { label: 'Email', value: '2624938856@qq.com', href: 'mailto:2624938856@qq.com' },
    { label: 'Phone', value: '+86 131 2875 0826', href: 'tel:13128750826' },
    { label: 'WeChat', value: 'lljemmmmm', href: '#' },
  ],
}
