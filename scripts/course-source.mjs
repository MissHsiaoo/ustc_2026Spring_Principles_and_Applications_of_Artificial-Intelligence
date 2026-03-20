export const courseSource = {
  course: {
    titleZh: "人工智能原理与应用",
    titleEn: "Principles and Applications of Artificial Intelligence",
    theoryLabHours: "42/20",
    prerequisites: "高等数学，数字图像处理",
    grading: "百分制",
    prerequisiteRule: "全部通过",
    assessment: "大作业",
    department: "人工智能与数据科学学院",
    audience: "研究生",
    firstOffered: "26年春",
    availableTerms: "春、秋",
    specifiedTextbook: "无",
    referenceTextbook: "无",
  },
  chineseModules: [
    {
      id: "1",
      title: "人工智能的演进：从规则推理到数据驱动",
      hours: "3学时",
      coreConcept: "阐释AI并非横空出世，而是“理性主义”与“经验主义”在计算时代的延续与融合。",
      sections: [
        {
          title: "1.1 思想起源与历史浪潮",
          items: [
            "1.1.1 从图灵测试到达特茅斯会议：人工智能的诞生与早期雄心",
            "1.1.2 符号主义的辉煌与困境：专家系统与第一次寒冬",
            "1.1.3 统计学习的兴起：从数据中学习的范式转换",
            "1.1.4 深度学习的突破与第三次浪潮：表征学习的力量",
          ],
        },
        {
          title: "1.2 人工智能的三大范式（贯穿历史的视角）",
          items: [
            "1.2.1 符号主义（逻辑与知识）：如何让机器“思考”？",
            "1.2.2 联结主义（学习与关联）：如何让机器“感知”？",
            "1.2.3 行为主义（交互与优化）：如何让机器“行动”？",
          ],
        },
        {
          title: "小结",
          items: ["现代AI如何融合三大范式？——以大模型为例（知识内化于参数，通过交互学习）。"],
        },
      ],
    },
    {
      id: "2",
      title: "数据科学与机器学习：智能的基石",
      hours: "6学时",
      coreConcept: "将数据科学定位为AI的“前置学科”，机器学习是“实现方法”，强化“从问题到数据，从数据到模型”的思维链条。",
      sections: [
        {
          title: "2.1 数据科学导论：从观测到洞察",
          items: [
            "2.1.1 数据科学生命周期：问题定义、数据收集、处理、建模、部署",
            "2.1.2 数据预处理与特征工程：为模型准备“食材”",
          ],
        },
        {
          title: "2.2 机器学习核心思想：三种学习范式",
          items: [
            "2.2.1 监督学习（归纳与预测）：回归与分类的思想（以线性模型、决策树为例，避免陷入复杂公式）",
            "2.2.2 无监督学习（发现与结构）：聚类与降维的思想（探索数据内在结构）",
            "2.2.3 强化学习（试错与优化）：智能体与环境交互的核心框架（与生物学习类比）",
          ],
        },
        {
          title: "2.3 从浅层模型到深度网络：为何需要“深度”？",
          items: ["概念性桥梁：解释模型复杂度、表示能力与神经网络的基本直觉（神经元、分层抽象）。"],
        },
      ],
    },
    {
      id: "3",
      title: "深度神经网络与生成式AI革命",
      hours: "21学时",
      coreConcept: "这是课程的技术核心，但讲授重点应是关键突破的直觉解释和思想影响，而非数学细节。以“表示学习”和“生成能力”为主线串联。",
      sections: [
        {
          title: "3.1 深度学习基础：赋予机器感知能力（3学时）",
          items: [
            "3.1.1 卷积神经网络（CNN）：如何让机器“看见”——局部感知、参数共享、层次化特征提取",
            "3.1.2 循环神经网络（RNN）与注意力机制：如何让机器处理“序列”——短期记忆与聚焦关键信息",
          ],
        },
        {
          title: "3.2 自然语言处理与大模型时代（6学时）",
          items: [
            "3.2.1 从词袋到词向量：语言的分布式表示（将语义映射到向量空间）",
            "3.2.2 Transformer架构革命：自注意力机制如何统一理解与生成",
            "3.2.3 预训练范式：从BERT到GPT——“预训练+微调/提示”如何改变AI研发范式",
            "3.2.4 大模型应用技术：提示工程、检索增强生成（RAG）、智能体（Agents）——如何与大模型有效交互和扩展能力",
          ],
        },
        {
          title: "3.3 计算机视觉：从识别到创造（6学时）",
          items: [
            "3.3.1 视觉识别基础：目标检测、分割的核心思想",
            "3.3.2 视觉生成模型：扩散模型（Diffusion Model）的工作原理直觉——从噪声中“塑造”图像",
            "3.3.3 三维视觉与表征学习：从2D到3D理解世界",
          ],
        },
        {
          title: "3.4 多模态人工智能：跨越感知的鸿沟（6学时）",
          items: [
            "3.4.1 多模态对齐与融合：如何让AI同时理解文本、图像、声音？",
            "3.4.2 视觉-语言大模型：CLIP、DALL-E等工作原理与意义",
            "3.4.3 具身智能与AI智能体：多模态感知如何驱动决策与行动——通往更通用AI的路径",
          ],
        },
      ],
    },
    {
      id: "4",
      title: "AI赋能科学实践案例",
      hours: "12学时",
      sections: [
        {
          title: "4.1 AI赋能生命科学",
          items: [
            "4.1.1 AI与生命科学的交汇",
            "4.1.2 应用：AI+生物医学研究、临床医学、公共卫生",
            "4.1.3 讨论与展望",
          ],
        },
        {
          title: "4.2 AI赋能地理科学",
          items: [
            "4.2.1 AI与地理科学的交汇",
            "4.2.2 应用：AI+环境监测、城市管理、地球系统科学",
            "4.2.3 讨论与展望",
          ],
        },
        {
          title: "4.3 AI赋能化学",
          items: [
            "4.3.1 AI与化学的交汇",
            "4.3.2 应用：AI+分子与材料、反应与合成、过程与自动化",
            "4.3.3 讨论与展望",
          ],
        },
        {
          title: "4.4 AI赋能数学科学",
          items: [
            "4.4.1 AI与数学的交汇",
            "4.4.2 应用：AI+自动定理证明、偏微分方程求解、统计推断与数据科学",
            "4.4.3 讨论与展望",
          ],
        },
        {
          title: "4.5 AI赋能地空科学",
          items: [
            "4.5.1 AI与地空科学的交汇",
            "4.5.2 应用：AI+大气建模与气象预测、遥感、空间探测、行星探测",
            "4.5.3 讨论与展望",
          ],
        },
        {
          title: "4.6 AI赋能物理科学",
          items: [
            "4.6.1 AI与物理的交汇",
            "4.6.2 应用：AI+数据驱动物理建模（PDE/动力系统）、凝聚态与材料、量子计算",
            "4.6.3 讨论与展望",
          ],
        },
      ],
    },
  ],
  englishModules: [
    {
      id: "1",
      title: "Module 1: The Evolution of AI: From Rule-Based Reasoning to Data-Driven Intelligence",
      hours: "3 Hours",
      coreConcept: "To illustrate that AI did not emerge out of nowhere but represents a continuation and fusion of \"Rationalism\" and \"Empiricism\" in the computational age.",
      sections: [
        {
          title: "1.1 Intellectual Origins and Historical Waves",
          items: [
            "1.1.1 From the Turing Test to the Dartmouth Conference: The Birth and Early Ambitions of AI",
            "1.1.2 The Glory and Dilemma of Symbolism: Expert Systems and the First AI Winter",
            "1.1.3 The Rise of Statistical Learning: The Paradigm Shift Towards Learning from Data",
            "1.1.4 The Breakthrough of Deep Learning and the Third Wave: The Power of Representation Learning",
          ],
        },
        {
          title: "1.2 The Three Major Paradigms of AI (A Perspective Throughout History)",
          items: [
            "1.2.1 Symbolism (Logic and Knowledge): How to make machines \"think\"?",
            "1.2.2 Connectionism (Learning and Association): How to make machines \"perceive\"?",
            "1.2.3 Behaviorism (Interaction and Optimization): How to make machines \"act\"?",
            "Summary: How does Modern AI integrate these three paradigms? — The example of Large Language Models (knowledge internalized in parameters, learned through interaction).",
          ],
        },
      ],
    },
    {
      id: "2",
      title: "Module 2: Data Science and Machine Learning: The Foundation of Intelligence",
      hours: "6 Hours",
      coreConcept: "Positioning Data Science as the \"precursor discipline\" to AI and Machine Learning as the \"implementation method,\" reinforcing the thought chain from \"problem to data, and data to model.\"",
      sections: [
        {
          title: "2.1 Introduction to Data Science: From Observation to Insight",
          items: [
            "2.1.1 The Data Science Lifecycle: Problem Definition, Data Collection, Processing, Modeling, Deployment",
            "2.1.2 Data Preprocessing and Feature Engineering: Preparing the \"Ingredients\" for Models",
          ],
        },
        {
          title: "2.2 Core Ideas of Machine Learning: Three Learning Paradigms",
          items: [
            "2.2.1 Supervised Learning (Induction and Prediction): The ideas behind Regression and Classification (using Linear Models, Decision Trees as examples, avoiding complex formulas)",
            "2.2.2 Unsupervised Learning (Discovery and Structure): The ideas behind Clustering and Dimensionality Reduction (exploring the intrinsic structure of data)",
            "2.2.3 Reinforcement Learning (Trial-and-Error and Optimization): The core framework of Agent-Environment Interaction (analogous to biological learning)",
          ],
        },
        {
          title: "2.3 From Shallow Models to Deep Networks: Why \"Depth\"?",
          items: ["Conceptual Bridge: Explaining model complexity, representational power, and the basic intuition behind Neural Networks (neurons, hierarchical abstraction)."],
        },
      ],
    },
    {
      id: "3",
      title: "Module 3: Deep Neural Networks and the Generative AI Revolution",
      hours: "21 Hours",
      coreConcept: "This is the technical core of the course, but the teaching focus should be on the intuitive explanation and intellectual impact of key breakthroughs, not mathematical details. Use \"Representation Learning\" and \"Generative Capability\" as the main threads.",
      sections: [
        {
          title: "3.1 Fundamentals of Deep Learning: Endowing Machines with Perceptual Ability (3 Hours)",
          items: [
            "3.1.1 Convolutional Neural Networks (CNN): How to make machines \"see\" — Local Receptive Fields, Parameter Sharing, Hierarchical Feature Extraction.",
            "3.1.2 Recurrent Neural Networks (RNN) and the Attention Mechanism: How to make machines process \"sequences\" — Short-term Memory and Focusing on Key Information.",
          ],
        },
        {
          title: "3.2 Natural Language Processing and the Era of Large Models (6 Hours)",
          items: [
            "3.2.1 From Bag-of-Words to Word Embeddings: Distributed Representation of Language (mapping semantics to vector space).",
            "3.2.2 The Transformer Architecture Revolution: How the Self-Attention Mechanism unifies understanding and generation.",
            "3.2.3 The Pre-training Paradigm: From BERT to GPT — How \"Pre-training + Fine-tuning/Prompting\" changed the AI R&D paradigm.",
            "3.2.4 Large Model Application Techniques: Prompt Engineering, Retrieval-Augmented Generation (RAG), Agents — How to effectively interact with and extend the capabilities of large models.",
          ],
        },
        {
          title: "3.3 Computer Vision: From Recognition to Creation (6 Hours)",
          items: [
            "3.3.1 Fundamentals of Visual Recognition: The core ideas behind Object Detection, Segmentation.",
            "3.3.2 Visual Generative Models: The intuitive working principle of Diffusion Models — \"sculpting\" images from noise.",
            "3.3.3 3D Vision and Representation Learning: Understanding the world from 2D to 3D.",
          ],
        },
        {
          title: "3.4 Multimodal Artificial Intelligence: Bridging the Perceptual Gap (6 Hours)",
          items: [
            "3.4.1 Multimodal Alignment and Fusion: How to make AI understand text, images, and sound simultaneously?",
            "3.4.2 Vision-Language Large Models: The working principles and significance of models like CLIP and DALL-E.",
            "3.4.3 Embodied AI and AI Agents: How multimodal perception drives decision-making and action — A path towards more general AI.",
          ],
        },
      ],
    },
    {
      id: "4",
      title: "Module 4: AI for Science: Practical Case Studies",
      hours: "12 Hours",
      sections: [
        {
          title: "4.1 AI for Life Sciences",
          items: [
            "4.1.1 The Intersection of AI and Life Sciences",
            "4.1.2 Applications: AI + Biomedical Research, Clinical Medicine, Public Health",
            "4.1.3 Discussion and Outlook",
          ],
        },
        {
          title: "4.2 AI for Geographic Sciences",
          items: [
            "4.2.1 The Intersection of AI and Geographic Sciences",
            "4.2.2 Applications: AI + Environmental Monitoring, Urban Management, Earth System Science",
            "4.2.3 Discussion and Outlook",
          ],
        },
        {
          title: "4.3 AI for Chemistry",
          items: [
            "4.3.1 The Intersection of AI and Chemistry",
            "4.3.2 Applications: AI + Molecules & Materials, Reactions & Synthesis, Processes & Automation",
            "4.3.3 Discussion and Outlook",
          ],
        },
        {
          title: "4.4 AI for Mathematical Sciences",
          items: [
            "4.4.1 The Intersection of AI and Mathematical Sciences",
            "4.4.2 Applications: AI + Automated Theorem Proving, PDE Solving, Statistical Inference & Data Science",
            "4.4.3 Discussion and Outlook",
          ],
        },
        {
          title: "4.5 AI for Earth and Space Sciences",
          items: [
            "4.5.1 The Intersection of AI and Earth/Space Sciences",
            "4.5.2 Applications: AI + Atmospheric Modeling & Weather Forecasting, Remote Sensing, Space Exploration, Planetary Exploration",
            "4.5.3 Discussion and Outlook",
          ],
        },
        {
          title: "4.6 AI for Physical Sciences",
          items: [
            "4.6.1 The Intersection of AI and Physics",
            "4.6.2 Applications: AI + Data-Driven Physical Modeling (PDE/Dynamical Systems), Condensed Matter & Materials, Quantum Computing",
            "4.6.3 Discussion and Outlook",
          ],
        },
      ],
    },
  ],
};
