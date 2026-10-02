// Edit this file to update bilingual academic content.
window.HOMEPAGE = {
  "name": {
    "zh": "方鹏杰",
    "en": "Fong Pangkit"
  },
  "initials": "PF",
  "role": {
    "zh": "控制科学与工程 · 博士生",
    "en": "PhD Student · Control Science & Engineering"
  },
  "affiliation": {
    "zh": "上海交通大学\n自动化与感知学院",
    "en": "Shanghai Jiao Tong University\nSchool of Automation and Intelligent Sensing"
  },
  "location": {
    "zh": "中国 · 上海",
    "en": "Shanghai, China"
  },
  "bio": {
    "zh": "我是上海交通大学控制科学与工程专业博士生，导师为何建平教授。我的研究围绕多智能体协同、机器人学习与水下机器人展开，关注感知、规划与控制如何在真实机器人系统中协同工作。\n\n此前，我于上海交通大学获得控制工程硕士学位，于西安交通大学获得飞行器设计专业学士学位。我也参与机器人平台的机械、电路与嵌入式开发，以及实验室的科研传播工作。",
    "en": "I am a PhD student in Control Science and Engineering at Shanghai Jiao Tong University, advised by Prof. Jianping He. My research focuses on multi-agent coordination, robot learning, and underwater robotics, bringing perception, planning, and control together on real robotic systems.\n\nI received my master's degree in Control Engineering from Shanghai Jiao Tong University and my bachelor's degree in Aircraft Design from Xi'an Jiaotong University. My work also includes mechanical, electronic, and embedded development for robotic platforms, as well as science communication."
  },
  "photo": "./assets/portrait.jpg",
  "cv": "/cv/",
  "email": "fpjgaoge@gmail.com",
  "github": "https://github.com/FPJ-GAOGE",
  "scholar": "https://scholar.google.com.hk/citations?user=u5ba-IQAAAAJ&hl=zh-CN",
  "authorNames": [
    "Pangkit Fong",
    "Pang-Kit Fong"
  ],
  "news": [
    {
      "date": "2026-09-20",
      "text": {
        "zh": "FinsSim 水下机器人仿真与学习平台预印本已公开。",
        "en": "FinsSim, our integrated simulation platform for underwater robot learning, is available on arXiv."
      },
      "url": "https://arxiv.org/abs/2609.23943"
    },
    {
      "date": "2026-09-17",
      "text": {
        "zh": "水下视觉目标跟踪与自适应模型融合 MPC 研究预印本已公开。",
        "en": "Our preprint on underwater visual target tracking and adaptive model-fusion MPC is available."
      },
      "url": "https://arxiv.org/abs/2609.20731"
    },
    {
      "date": "2025-07",
      "text": {
        "zh": "参与中国国际大学生海洋水下机器人大赛，获 AUV 赛道第五名。",
        "en": "Participated in the China International University Underwater Robotics Competition; 5th place in the AUV track."
      }
    },
    {
      "date": "2025-06-11",
      "text": {
        "zh": "Aucamp 低成本分布式水下多机器人平台预印本已公开。",
        "en": "The Aucamp preprint on low-cost, distributed underwater multi-robot localization is available."
      },
      "url": "https://arxiv.org/abs/2506.09876"
    },
    {
      "date": "2024-07",
      "text": {
        "zh": "参与在英国牛津举办的 Learning for Dynamics & Control 2024 学术交流。",
        "en": "Attended Learning for Dynamics & Control 2024 in Oxford, UK."
      }
    },
    {
      "date": "2023-09",
      "text": {
        "zh": "开始在上海交通大学攻读控制科学与工程博士学位。",
        "en": "Started my PhD in Control Science and Engineering at Shanghai Jiao Tong University."
      }
    }
  ],
  "research": [
    {
      "title": {
        "zh": "水下机器人与感知控制",
        "en": "Underwater Robotics"
      },
      "description": {
        "zh": "视觉定位、目标跟踪、多传感器融合，以及面向真实水下平台的建模与预测控制。",
        "en": "Visual localization, target tracking, sensor fusion, and predictive control on real underwater platforms."
      },
      "visual": "underwater"
    },
    {
      "title": {
        "zh": "多智能体协同",
        "en": "Multi-Agent Coordination"
      },
      "description": {
        "zh": "分布式优化、覆盖与任务分配，研究通信与感知约束下的多机器人协作。",
        "en": "Distributed optimization, coverage, and task allocation under communication and sensing constraints."
      },
      "visual": "coordination"
    },
    {
      "title": {
        "zh": "机器人学习与智能规划",
        "en": "Robot Learning & Planning"
      },
      "description": {
        "zh": "结合强化学习、大语言模型和闭环反馈，探索从任务规划到实机控制的方法。",
        "en": "Reinforcement learning, language-model-based planning, and closed-loop feedback for real-world robot control."
      },
      "visual": "learning"
    }
  ],
  "publications": [
    {
      "title": "FinsSim: A Reality-Aligned Integrated Simulation Platform for Underwater Robot Learning",
      "authors": "Yu Zhang, Yuanmingqing Song, Xiangyun Rao, Pangkit Fong, Kunhao Zhang, Chongrong Fang, Jianping He",
      "venue": "arXiv:2609.23943",
      "year": "2026",
      "type": "Preprint",
      "url": "https://arxiv.org/abs/2609.23943",
      "pdf": "https://arxiv.org/pdf/2609.23943",
      "abstract": {
        "zh": "集成流体动力学模型、控制基线、多传感器定位与推力分配，串联水下机器人学习的仿真到实机流程。",
        "en": "A simulation-to-reality platform integrating hydrodynamics, control baselines, sensor-fusion localization, and thrust allocation for underwater robot learning."
      },
      "image": "./assets/papers/finssim.png",
      "imageAlt": {
        "zh": "FinsSim 仿真、机器人学习与实机部署流程总览",
        "en": "FinsSim overview: simulation, robot learning, and physical deployment"
      },
      "imageSource": "https://arxiv.org/html/2609.23943v1#S2.F1",
      "topic": "underwater"
    },
    {
      "title": "Underwater Visual Target Tracking with Target-Specific Depth Estimation and Adaptive Model-Fusion Predictive Control",
      "authors": "Yuheng Zhou, Haiyang Cheng, Yanqi Feng, Pangkit Fong, Mei Xuan Lee, Marcus Gee, Chongrong Fang, Jianping He",
      "venue": "arXiv:2609.20731",
      "year": "2026",
      "type": "Preprint",
      "url": "https://arxiv.org/abs/2609.20731",
      "pdf": "https://arxiv.org/pdf/2609.20731",
      "abstract": {
        "zh": "结合双目视觉、目标专属深度提取、卡尔曼滤波与自适应模型融合 MPC，实现约束下的水下目标跟踪。",
        "en": "Stereo visual servoing with target-specific depth estimation, Kalman filtering, and adaptive model-fusion MPC for constrained underwater target tracking."
      },
      "image": "./assets/papers/tracking.png",
      "imageAlt": {
        "zh": "水下视觉跟踪平台与任务示意",
        "en": "Underwater visual target-tracking platform and task overview"
      },
      "imageSource": "https://arxiv.org/html/2609.20731v1#S1.F1",
      "topic": "underwater"
    },
    {
      "title": "Static Timing Orchestration for Tree-Structured Robot Control Firmware",
      "authors": "Wang Xi, Feiran Wei, Mo Deng, Weiheng Lin, Pangkit Fong, Jianping He",
      "venue": "arXiv:2608.04600",
      "year": "2026",
      "type": "Preprint",
      "url": "https://arxiv.org/abs/2608.04600",
      "pdf": "https://arxiv.org/pdf/2608.04600",
      "abstract": {
        "zh": "提出 FineMote 固件生成框架，利用编译期信息为树状设备模型确定执行顺序，分析时序约束与决策延迟。",
        "en": "FineMote generates firmware with compile-time scheduling for tree-structured robot device models, with analysis of deadlines, precedence, and decision latency."
      },
      "topic": "systems"
    },
    {
      "title": "Aucamp: An Underwater Camera-Based Multi-Robot Platform with Low-Cost, Distributed, and Robust Localization",
      "authors": "Jisheng Xu, Ding Lin, Pangkit Fong, Chongrong Fang, Xiaoming Duan, Jianping He",
      "venue": "arXiv:2506.09876",
      "year": "2025",
      "type": "Preprint",
      "url": "https://arxiv.org/abs/2506.09876",
      "pdf": "https://arxiv.org/pdf/2506.09876",
      "abstract": {
        "zh": "基于单目相机的低成本水下多机器人平台，通过分布式更新协议实现定位，结合动力学与鲁棒姿态控制提高稳定性。",
        "en": "A low-cost underwater multi-robot platform with monocular sensing, distributed localization updates, and robust orientation control."
      },
      "image": "./assets/papers/aucamp.png",
      "imageAlt": {
        "zh": "Aucamp 水下多机器人平台总览",
        "en": "Overview of the Aucamp underwater multi-robot platform"
      },
      "imageSource": "https://arxiv.org/html/2506.09876v1#S0.F1",
      "topic": "underwater"
    },
    {
      "title": "HiCRISP: An LLM-Based Hierarchical Closed-Loop Robotic Intelligent Self-Correction Planner",
      "authors": "Chenlin Ming, Jiacheng Lin, Pangkit Fong, Han Wang, Xiaoming Duan, Jianping He",
      "venue": "2024 China Automation Congress (CAC), pp. 4310–4315",
      "year": "2024",
      "type": "Conference",
      "url": "https://doi.org/10.1109/CAC63892.2024.10865457",
      "pdf": "https://arxiv.org/pdf/2309.12089",
      "abstract": {
        "zh": "分层闭环规划框架分别处理高层规划与低层执行错误，通过大语言模型和反馈在机器人任务过程中进行自我修正。",
        "en": "A hierarchical closed-loop planner using language models and feedback to correct planning errors and action failures during robot task execution."
      },
      "image": "./assets/papers/hicrisp.png",
      "imageAlt": {
        "zh": "HiCRISP 分层闭环自我修正规划框架",
        "en": "HiCRISP hierarchical closed-loop self-correction framework"
      },
      "imageSource": "https://ming-bot.github.io/HiCRISP.github.io/",
      "imageLicense": "CC BY-SA 4.0",
      "imageLicenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "topic": "learning",
      "project": "https://ming-bot.github.io/HiCRISP.github.io/",
      "code": "https://github.com/ming-bot/HiCRISP"
    },
    {
      "title": "HiCRISP: A Hierarchical Closed-Loop Robotic Intelligent Self-Correction Planner",
      "authors": "Chenlin Ming, Jiacheng Lin, Pangkit Fong, Han Wang, Xiaoming Duan, Jianping He",
      "venue": {
        "zh": "arXiv:2309.12089 · CAC 2024 论文的预印本版本",
        "en": "arXiv:2309.12089 · Preprint version of the CAC 2024 paper"
      },
      "year": "2023",
      "type": "Preprint",
      "url": "https://arxiv.org/abs/2309.12089",
      "pdf": "https://arxiv.org/pdf/2309.12089",
      "image": "./assets/papers/hicrisp.png",
      "imageAlt": {
        "zh": "HiCRISP 分层闭环自我修正规划框架",
        "en": "HiCRISP hierarchical closed-loop self-correction framework"
      },
      "imageSource": "https://ming-bot.github.io/HiCRISP.github.io/",
      "imageLicense": "CC BY-SA 4.0",
      "imageLicenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "topic": "learning",
      "project": "https://ming-bot.github.io/HiCRISP.github.io/",
      "code": "https://github.com/ming-bot/HiCRISP"
    },
    {
      "title": "Thermally-induced transitions of multi-frequency defect wave localization and energy harvesting of phononic crystal plate",
      "authors": "Qian Geng, Pang-Kit Fong, Jingfeng Ning, Zhushan Shao, Yueming Li",
      "venue": "International Journal of Mechanical Sciences, 222, 107253",
      "year": "2022",
      "type": "Journal",
      "url": "https://doi.org/10.1016/j.ijmecsci.2022.107253",
      "abstract": {
        "zh": "研究热载荷下声子晶体板的多频缺陷态与振动能量采集，分析刚度变化对波局域和采集性能的影响。",
        "en": "A study of thermal stiffness changes, defect wave localization, and vibration energy harvesting in phononic crystal plates."
      },
      "topic": "mechanics"
    },
    {
      "title": "Optimal Attack Against Coverage Path Planning in Multi-robot System",
      "authors": "Pangkit Fong, Chongrong Fang, Jianping He",
      "venue": "Proceedings of 2021 5th Chinese Conference on Swarm Intelligence and Cooperative Control, pp. 1760–1772",
      "year": "2022",
      "type": "Conference",
      "url": "https://doi.org/10.1007/978-981-19-3998-3_164",
      "abstract": {
        "zh": "研究多机器人覆盖任务的对抗场景，以改进广度优先搜索在离散环境中求解最优攻击路径。",
        "en": "An optimal attack-planning approach for adversarial multi-robot coverage tasks using improved breadth-first search."
      },
      "topic": "coordination"
    }
  ],
  "projects": [
    {
      "title": {
        "zh": "FinsSim · 水下机器人仿真与学习平台",
        "en": "FinsSim · Underwater Robot Simulation & Learning"
      },
      "category": {
        "zh": "研究项目",
        "en": "RESEARCH"
      },
      "period": "2026",
      "description": {
        "zh": "连接 Unity、Isaac Lab、机器人学习与 ROS 2 实机部署，集成水动力学建模、多传感器定位和约束推力分配。",
        "en": "Connecting Unity and Isaac Lab simulation, robot learning, and ROS 2 deployment with hydrodynamic modeling, multi-sensor localization, and constrained thrust allocation."
      },
      "tags": [
        "Sim-to-Real",
        "Robot Learning",
        "ROS 2"
      ],
      "url": "https://arxiv.org/abs/2609.23943",
      "image": "./assets/papers/finssim.png",
      "imageAlt": {
        "zh": "FinsSim 仿真、机器人学习与实机部署流程总览",
        "en": "FinsSim overview: simulation, robot learning, and physical deployment"
      },
      "imageSource": "https://arxiv.org/html/2609.23943v1#S2.F1"
    },
    {
      "title": {
        "zh": "分布式水下多机器人平台",
        "en": "Distributed Underwater Multi-Robot Platform"
      },
      "category": {
        "zh": "研究项目",
        "en": "RESEARCH"
      },
      "period": {
        "zh": "2023.12–至今",
        "en": "2023.12–present"
      },
      "description": {
        "zh": "带领团队搭建水下多机器人平台，研究自主感知补光、目标跟踪、多传感器融合、视觉伺服与协同控制。",
        "en": "Leading underwater multi-robot platform development for active visual sensing, target tracking, sensor fusion, visual servoing, and cooperative control."
      },
      "tags": [
        "Underwater Robotics",
        "Perception",
        "Control"
      ],
      "url": "https://arxiv.org/abs/2506.09876",
      "image": "./assets/papers/aucamp.png",
      "imageAlt": {
        "zh": "Aucamp 水下多机器人平台总览",
        "en": "Overview of the Aucamp underwater multi-robot platform"
      },
      "imageSource": "https://arxiv.org/html/2506.09876v1#S0.F1"
    },
    {
      "title": {
        "zh": "FineSUB · 模型预测控制",
        "en": "FineSUB · Model Predictive Control"
      },
      "category": {
        "zh": "开源项目",
        "en": "OPEN SOURCE"
      },
      "period": "",
      "description": {
        "zh": "面向水下机器人的 MPC 控制实现，包括单模型、双模型融合与偏航控制。公开仓库提供代码和实机控制说明。",
        "en": "MPC implementations for underwater robotics, with single-model control, dual-model fusion, yaw control, and public code and documentation."
      },
      "tags": [
        "Python",
        "MPC",
        "Robotics"
      ],
      "url": "https://github.com/FPJ-GAOGE/MPC-fused-model",
      "image": "./assets/papers/tracking.png",
      "imageAlt": {
        "zh": "水下视觉跟踪平台与任务示意",
        "en": "Underwater visual target-tracking platform and task overview"
      },
      "imageSource": "https://arxiv.org/html/2609.20731v1#S1.F1"
    },
    {
      "title": {
        "zh": "大语言模型驱动的分层闭环机器人规划",
        "en": "Hierarchical Closed-Loop Planning with LLMs"
      },
      "category": {
        "zh": "研究项目",
        "en": "RESEARCH"
      },
      "period": "2023.09–2024.03",
      "description": {
        "zh": "参与 HiCRISP 研究，以高层与低层反馈处理规划和执行错误，支持机器人在任务中修正步骤并重新规划。",
        "en": "Contributed to HiCRISP, separating planning and action feedback to support self-correction during task execution."
      },
      "tags": [
        "LLMs",
        "Planning",
        "Closed Loop"
      ],
      "url": "https://ming-bot.github.io/HiCRISP.github.io/",
      "image": "./assets/papers/hicrisp.png",
      "imageAlt": {
        "zh": "HiCRISP 分层闭环自我修正规划框架",
        "en": "HiCRISP hierarchical closed-loop self-correction framework"
      },
      "imageSource": "https://ming-bot.github.io/HiCRISP.github.io/",
      "imageLicense": "CC BY-SA 4.0",
      "imageLicenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/"
    },
    {
      "title": {
        "zh": "数字孪生驱动的分布式智能调控",
        "en": "Digital-Twin-Based Distributed Robot Coordination"
      },
      "category": {
        "zh": "研究项目 · 腾讯 RoboticX",
        "en": "RESEARCH · TENCENT ROBOTICX"
      },
      "period": "2021.11–2022.11",
      "description": {
        "zh": "参与上海交大–腾讯 RoboticX 犀牛鸟专项研究，负责多智能体平台、机械电路、嵌入式开发与通信，并设计和部署分布式任务分配算法。",
        "en": "Developed a multi-agent testbed, mechanical and electronic systems, embedded software, communication services, and distributed task allocation in the SJTU–Tencent RoboticX project."
      },
      "tags": [
        "Digital Twin",
        "Distributed Optimization",
        "Embedded Systems"
      ]
    },
    {
      "title": {
        "zh": "多机器人覆盖路径规划的最优攻击",
        "en": "Optimal Attacks on Multi-Robot Coverage Planning"
      },
      "category": {
        "zh": "研究项目",
        "en": "RESEARCH"
      },
      "period": "2020.09–2022.09",
      "description": {
        "zh": "在对抗场景下，结合改进 BFS、最小代价排序和剪枝求解覆盖任务的最优攻击问题，并分析算法最优性。",
        "en": "Designed optimal adversarial strategies for coverage tasks using improved BFS, cost ordering, and pruning, with optimality analysis."
      },
      "tags": [
        "Multi-Robot Systems",
        "Path Planning",
        "Optimization"
      ],
      "url": "https://doi.org/10.1007/978-981-19-3998-3_164"
    },
    {
      "title": {
        "zh": "声子晶体板振动能量采集",
        "en": "Energy Harvesting with Phononic Crystal Plates"
      },
      "category": {
        "zh": "研究项目",
        "en": "RESEARCH"
      },
      "period": "2018.12–2020.06",
      "description": {
        "zh": "研究热效应对声子晶体板的影响，使用 COMSOL 开展多物理场仿真，以 Origin 进行数据处理和绘图。",
        "en": "Investigated thermal effects on phononic crystal plates using COMSOL multiphysics simulation and Origin data analysis."
      },
      "tags": [
        "Phononic Crystals",
        "COMSOL",
        "Energy Harvesting"
      ],
      "url": "https://doi.org/10.1016/j.ijmecsci.2022.107253"
    },
    {
      "title": {
        "zh": "智能绿地护理机器人",
        "en": "Intelligent Grounds-Maintenance Robot"
      },
      "category": {
        "zh": "工程项目 · 上海交大–福龙马",
        "en": "ENGINEERING · SJTU–FULONGMA"
      },
      "period": "2021.11–2023.11",
      "description": {
        "zh": "负责机械、电路与嵌入式开发，基于 Ubuntu、YOLOv4 和 ROS 1 带领团队开发控制、感知与规划模块，完成创新项目并参与成果传播。",
        "en": "Developed mechanical, electronic, and embedded systems, leading control, perception, and planning work with Ubuntu, YOLOv4, and ROS 1."
      },
      "tags": [
        "ROS 1",
        "YOLOv4",
        "Mechatronics"
      ]
    },
    {
      "title": {
        "zh": "覆盖与围捕任务的多无人机协同控制",
        "en": "Multi-UAV Cooperative Coverage and Encirclement"
      },
      "category": {
        "zh": "工程项目 · 深圳市机器人与人工智能研究院",
        "en": "ENGINEERING · SHENZHEN INSTITUTE OF ROBOTICS & AI"
      },
      "period": "2024.06–2025.06",
      "description": {
        "zh": "参与外协技术开发，研究二维与三维多智能体协同覆盖和围捕，考虑有限视场、局部通信及融合中心通信中断等约束。",
        "en": "Contributed to cooperative coverage and encirclement under limited fields of view, local communication, and interrupted access to a fusion center."
      },
      "tags": [
        "Multi-UAV",
        "Cooperative Control",
        "Coverage"
      ]
    }
  ],
  "education": [
    {
      "period": {
        "zh": "2023.09–至今",
        "en": "Sep 2023–present"
      },
      "title": {
        "zh": "博士 · 控制科学与工程",
        "en": "PhD · Control Science and Engineering"
      },
      "organization": {
        "zh": "上海交通大学 · 自动化与感知学院",
        "en": "Shanghai Jiao Tong University · School of Automation and Intelligent Sensing"
      },
      "description": {
        "zh": "导师：何建平教授；多智能体协同、机器人学习、水下机器人。",
        "en": "Advisor: Prof. Jianping He. Multi-agent coordination, robot learning, and underwater robotics."
      },
      "initials": "SJTU"
    },
    {
      "period": "2020.09–2023.06",
      "title": {
        "zh": "硕士 · 控制工程",
        "en": "Master's · Control Engineering"
      },
      "organization": {
        "zh": "上海交通大学 · 自动化系",
        "en": "Shanghai Jiao Tong University · Department of Automation"
      },
      "description": {
        "zh": "导师：何建平教授；多智能体与分布式优化。",
        "en": "Advisor: Prof. Jianping He. Multi-agent systems and distributed optimization."
      },
      "initials": "SJTU"
    },
    {
      "period": "2015.09–2020.06",
      "title": {
        "zh": "学士 · 飞行器设计",
        "en": "Bachelor's · Aircraft Design"
      },
      "organization": {
        "zh": "西安交通大学 · 航空航天系",
        "en": "Xi'an Jiaotong University · Department of Aerospace Engineering"
      },
      "initials": "XJTU"
    }
  ],
  "experience": [],
  "service": [],
  "outreach": {
    "title": {
      "zh": "上交 IWIN-FINS 实验室 · 科研传播",
      "en": "Science Communication · SJTU IWIN-FINS Lab"
    },
    "period": {
      "zh": "2022.10–至今",
      "en": "2022.10–present"
    },
    "description": {
      "zh": "运营实验室在 B 站、小红书等平台的科普与科技内容，制作 diffusion policy、机器人等主题的讲解视频。简历记录的累计播放量超过 150 万，点赞超过 3 万。",
      "en": "Creating science and technology content on Bilibili and Xiaohongshu, including explainers on diffusion policies and robotics. The CV records over 1.5 million cumulative views and 30,000 likes."
    },
    "url": "https://space.bilibili.com/1188256336"
  },
  "awards": [
    {
      "date": "2025.08",
      "text": {
        "zh": "“海聚英才”全球创新创业大赛",
        "en": "Hai Ju Ying Cai Global Innovation and Entrepreneurship Competition"
      }
    },
    {
      "date": "2025.07",
      "text": {
        "zh": "中国国际大学生海洋水下机器人大赛 · AUV 赛道第五名",
        "en": "5th Place, AUV Track · China International University Underwater Robotics Competition"
      }
    },
    {
      "date": "2022.10",
      "text": {
        "zh": "互联网+全国大学生创新创业大赛 · 上海市银奖",
        "en": "Shanghai Silver Award · China International College Students' Internet+ Innovation and Entrepreneurship Competition"
      }
    },
    {
      "date": "2018.10",
      "text": {
        "zh": "全国港澳台大学生三等奖学金",
        "en": "Third-Class National Scholarship for Hong Kong, Macao, and Taiwan Students"
      }
    },
    {
      "date": "2017.06",
      "text": {
        "zh": "全国大学生机械设计大赛 · 三等奖",
        "en": "Third Prize · National College Students' Mechanical Design Competition"
      }
    }
  ],
  "academicActivities": [
    {
      "date": "2024.07",
      "text": {
        "zh": "Learning for Dynamics & Control 2024 · 英国牛津",
        "en": "Learning for Dynamics & Control 2024 · Oxford, UK"
      }
    }
  ],
  "updated": "2026-10-03",
  "siteUrl": "https://fpj-gaoge.github.io/"
};
