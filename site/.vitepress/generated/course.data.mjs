export const courseData = {
  "course": {
    "code": "待补充",
    "titleZh": "人工智能原理与应用",
    "titleEn": "Principles and Applications of Artificial Intelligence",
    "theoryHours": 42,
    "labHours": 20,
    "credits": "待定",
    "prerequisites": [
      "高等数学",
      "数字图像处理"
    ],
    "grading": "百分制",
    "prerequisiteRule": "全部通过",
    "assessment": "大作业",
    "department": "人工智能与数据科学学院",
    "audience": "研究生",
    "firstOffered": "26年春",
    "availableTerms": [
      "春",
      "秋"
    ],
    "textbook": "无",
    "references": "无",
    "summary": "聚焦人工智能的历史演进、机器学习与深度学习核心思想、大模型与多模态技术，以及 AI for Science 的跨学科案例，强调直觉理解、方法联系与实践应用。"
  },
  "modules": [
    {
      "id": "module-1",
      "titleZh": "人工智能的演进：从规则推理到数据驱动",
      "titleEn": "The Evolution of AI",
      "hours": 3,
      "summary": "以历史视角解释人工智能从符号主义、统计学习到深度学习的演进，并串联现代大模型的综合范式。",
      "keyPoints": [
        "从图灵测试到达特茅斯会议，理解人工智能的学科起点与原始目标。",
        "对比符号主义、联结主义、行为主义三大范式及其代表问题。",
        "结合大模型说明现代 AI 如何融合知识、学习与交互。"
      ]
    },
    {
      "id": "module-2",
      "titleZh": "数据科学与机器学习：智能的基石",
      "titleEn": "Data Science and Machine Learning",
      "hours": 6,
      "summary": "以“问题到数据、数据到模型”为主线，搭建数据科学与机器学习的入门认知框架。",
      "keyPoints": [
        "理解数据科学生命周期与数据预处理的重要性。",
        "区分监督学习、无监督学习、强化学习的核心任务与思维方式。",
        "从浅层模型过渡到深度网络，建立表示能力与模型复杂度的直觉。"
      ]
    },
    {
      "id": "module-3",
      "titleZh": "深度神经网络与生成式 AI 革命",
      "titleEn": "Deep Neural Networks and the Generative AI Revolution",
      "hours": 21,
      "summary": "以表示学习和生成能力为主线，讲解深度学习、大模型、计算机视觉与多模态 AI 的关键突破。",
      "keyPoints": [
        "掌握 CNN、RNN、注意力机制与 Transformer 的核心直觉。",
        "理解预训练范式、提示工程、RAG 与 Agents 的应用逻辑。",
        "从视觉识别、扩散模型、多模态对齐到具身智能，形成完整技术图景。"
      ]
    },
    {
      "id": "module-4",
      "titleZh": "AI 赋能科学实践案例",
      "titleEn": "AI for Science",
      "hours": 12,
      "summary": "面向生命、地理、化学、数学、地空与物理等学科，分析 AI 赋能科学研究的典型场景与方法迁移。",
      "keyPoints": [
        "理解 AI 在科学研究中的角色：建模、预测、生成、优化与自动化。",
        "掌握不同学科案例背后的共性方法，如表示学习、生成模型与智能决策。",
        "从案例中提炼跨学科选题方向，为课程大作业提供思路。"
      ]
    }
  ],
  "weeks": [
    {
      "week": 1,
      "slug": "week-01",
      "moduleId": "module-1",
      "title": "人工智能的演进与三大范式",
      "theoryHours": 3,
      "labHours": 0,
      "focus": "从历史浪潮与思想谱系切入课程，建立“符号主义、联结主义、行为主义”三大范式的整体认识。",
      "outline": [
        "1.1.1 从图灵测试到达特茅斯会议：人工智能的诞生与早期雄心",
        "1.1.2 符号主义的辉煌与困境：专家系统与第一次寒冬",
        "1.1.3 统计学习的兴起：从数据中学习的范式转换",
        "1.1.4 深度学习的突破与第三次浪潮",
        "1.2.1-1.2.3 三大范式及其在现代大模型中的融合"
      ],
      "objectives": [
        "能解释人工智能发展历程中的关键转折。",
        "能区分三大范式分别回答“思考、感知、行动”的方式。",
        "能用大模型举例说明现代 AI 的融合趋势。"
      ],
      "practice": [
        "阅读课程大纲与课程项目要求，完成选题兴趣登记。",
        "整理一个 AI 发展里程碑时间轴作为课前或课后小练习。"
      ],
      "href": "/course/weeks/week-01",
      "module": {
        "id": "module-1",
        "titleZh": "人工智能的演进：从规则推理到数据驱动",
        "titleEn": "The Evolution of AI",
        "hours": 3,
        "summary": "以历史视角解释人工智能从符号主义、统计学习到深度学习的演进，并串联现代大模型的综合范式。",
        "keyPoints": [
          "从图灵测试到达特茅斯会议，理解人工智能的学科起点与原始目标。",
          "对比符号主义、联结主义、行为主义三大范式及其代表问题。",
          "结合大模型说明现代 AI 如何融合知识、学习与交互。"
        ]
      },
      "materials": []
    },
    {
      "week": 2,
      "slug": "week-02",
      "moduleId": "module-2",
      "title": "数据科学导论与特征工程",
      "theoryHours": 3,
      "labHours": 0,
      "focus": "用数据科学生命周期建立建模前的完整思维链条，理解问题定义和特征准备的重要性。",
      "outline": [
        "2.1.1 数据科学生命周期：问题定义、数据收集、处理、建模、部署",
        "2.1.2 数据预处理与特征工程：为模型准备“食材”"
      ],
      "objectives": [
        "能从应用问题反推所需数据与建模目标。",
        "能描述数据清洗、标准化、编码和特征构造的基本作用。",
        "能为后续实验准备规范的数据处理流程。"
      ],
      "practice": [
        "选择一个公开数据集，完成问题定义和数据字段梳理。",
        "设计一页数据预处理流程图。"
      ],
      "href": "/course/weeks/week-02",
      "module": {
        "id": "module-2",
        "titleZh": "数据科学与机器学习：智能的基石",
        "titleEn": "Data Science and Machine Learning",
        "hours": 6,
        "summary": "以“问题到数据、数据到模型”为主线，搭建数据科学与机器学习的入门认知框架。",
        "keyPoints": [
          "理解数据科学生命周期与数据预处理的重要性。",
          "区分监督学习、无监督学习、强化学习的核心任务与思维方式。",
          "从浅层模型过渡到深度网络，建立表示能力与模型复杂度的直觉。"
        ]
      },
      "materials": []
    },
    {
      "week": 3,
      "slug": "week-03",
      "moduleId": "module-2",
      "title": "机器学习三种范式与从浅层到深度",
      "theoryHours": 3,
      "labHours": 2,
      "focus": "梳理监督学习、无监督学习、强化学习三大框架，并建立神经网络“为什么需要深度”的直觉。",
      "outline": [
        "2.2.1 监督学习：回归与分类的思想",
        "2.2.2 无监督学习：聚类与降维的思想",
        "2.2.3 强化学习：智能体与环境交互的核心框架",
        "2.3 从浅层模型到深度网络：为何需要“深度”"
      ],
      "objectives": [
        "能针对不同问题选择合适的学习范式。",
        "能从表示能力角度理解深层网络的必要性。",
        "能将实验数据集与机器学习任务建立映射关系。"
      ],
      "practice": [
        "实验 1：数据探索与基线模型搭建。",
        "对比一个分类任务中的线性模型与树模型表现。"
      ],
      "href": "/course/weeks/week-03",
      "module": {
        "id": "module-2",
        "titleZh": "数据科学与机器学习：智能的基石",
        "titleEn": "Data Science and Machine Learning",
        "hours": 6,
        "summary": "以“问题到数据、数据到模型”为主线，搭建数据科学与机器学习的入门认知框架。",
        "keyPoints": [
          "理解数据科学生命周期与数据预处理的重要性。",
          "区分监督学习、无监督学习、强化学习的核心任务与思维方式。",
          "从浅层模型过渡到深度网络，建立表示能力与模型复杂度的直觉。"
        ]
      },
      "materials": []
    },
    {
      "week": 4,
      "slug": "week-04",
      "moduleId": "module-3",
      "title": "深度学习基础：CNN、RNN 与注意力",
      "theoryHours": 3,
      "labHours": 2,
      "focus": "以感知和序列建模为切口，建立卷积网络、循环网络和注意力机制的工作直觉。",
      "outline": [
        "3.1.1 卷积神经网络：局部感知、参数共享、层次化特征提取",
        "3.1.2 循环神经网络与注意力机制：序列处理、短期记忆与关键信息聚焦"
      ],
      "objectives": [
        "能解释 CNN 为何适合图像感知任务。",
        "能说明 RNN 与注意力机制在序列建模中的角色。",
        "能为后续 NLP 和视觉模块做好模型结构准备。"
      ],
      "practice": [
        "实验 2：图像分类入门或序列建模小实验。",
        "绘制一个神经网络前向传播示意图。"
      ],
      "href": "/course/weeks/week-04",
      "module": {
        "id": "module-3",
        "titleZh": "深度神经网络与生成式 AI 革命",
        "titleEn": "Deep Neural Networks and the Generative AI Revolution",
        "hours": 21,
        "summary": "以表示学习和生成能力为主线，讲解深度学习、大模型、计算机视觉与多模态 AI 的关键突破。",
        "keyPoints": [
          "掌握 CNN、RNN、注意力机制与 Transformer 的核心直觉。",
          "理解预训练范式、提示工程、RAG 与 Agents 的应用逻辑。",
          "从视觉识别、扩散模型、多模态对齐到具身智能，形成完整技术图景。"
        ]
      },
      "materials": []
    },
    {
      "week": 5,
      "slug": "week-05",
      "moduleId": "module-3",
      "title": "语言表示与 Transformer 革命",
      "theoryHours": 3,
      "labHours": 2,
      "focus": "从词袋模型到词向量，再到自注意力架构，建立现代 NLP 的主线认知。",
      "outline": [
        "3.2.1 从词袋到词向量：语言的分布式表示",
        "3.2.2 Transformer 架构革命：自注意力机制如何统一理解与生成"
      ],
      "objectives": [
        "能解释词表示为何是语言建模的基础。",
        "能描述 Transformer 相比传统序列模型的核心优势。",
        "能用直觉语言解释自注意力的作用。"
      ],
      "practice": [
        "实验 3：文本表示与分类或词向量可视化。",
        "对比词袋和词向量在一个小任务中的表现差异。"
      ],
      "href": "/course/weeks/week-05",
      "module": {
        "id": "module-3",
        "titleZh": "深度神经网络与生成式 AI 革命",
        "titleEn": "Deep Neural Networks and the Generative AI Revolution",
        "hours": 21,
        "summary": "以表示学习和生成能力为主线，讲解深度学习、大模型、计算机视觉与多模态 AI 的关键突破。",
        "keyPoints": [
          "掌握 CNN、RNN、注意力机制与 Transformer 的核心直觉。",
          "理解预训练范式、提示工程、RAG 与 Agents 的应用逻辑。",
          "从视觉识别、扩散模型、多模态对齐到具身智能，形成完整技术图景。"
        ]
      },
      "materials": []
    },
    {
      "week": 6,
      "slug": "week-06",
      "moduleId": "module-3",
      "title": "预训练范式、大模型与应用扩展",
      "theoryHours": 3,
      "labHours": 2,
      "focus": "连接 BERT、GPT 到提示工程、RAG 与 Agents，理解大模型研发与应用范式的变化。",
      "outline": [
        "3.2.3 预训练范式：从 BERT 到 GPT",
        "3.2.4 大模型应用技术：提示工程、检索增强生成、智能体"
      ],
      "objectives": [
        "能说明预训练加微调或提示的工作模式。",
        "能理解 RAG、工具调用与 Agents 的扩展价值。",
        "能把课程大作业初步与大模型应用场景关联起来。"
      ],
      "practice": [
        "实验 4：提示工程与简单 RAG 原型。",
        "提交大作业方向初稿。"
      ],
      "href": "/course/weeks/week-06",
      "module": {
        "id": "module-3",
        "titleZh": "深度神经网络与生成式 AI 革命",
        "titleEn": "Deep Neural Networks and the Generative AI Revolution",
        "hours": 21,
        "summary": "以表示学习和生成能力为主线，讲解深度学习、大模型、计算机视觉与多模态 AI 的关键突破。",
        "keyPoints": [
          "掌握 CNN、RNN、注意力机制与 Transformer 的核心直觉。",
          "理解预训练范式、提示工程、RAG 与 Agents 的应用逻辑。",
          "从视觉识别、扩散模型、多模态对齐到具身智能，形成完整技术图景。"
        ]
      },
      "materials": []
    },
    {
      "week": 7,
      "slug": "week-07",
      "moduleId": "module-3",
      "title": "计算机视觉：识别任务与生成任务",
      "theoryHours": 3,
      "labHours": 2,
      "focus": "在视觉识别和视觉生成之间建立联系，理解检测、分割与扩散模型的任务差异。",
      "outline": [
        "3.3.1 视觉识别基础：目标检测、分割的核心思想",
        "3.3.2 视觉生成模型：扩散模型的工作原理直觉"
      ],
      "objectives": [
        "能区分分类、检测、分割等视觉任务。",
        "能用“从噪声到样本”的思路解释扩散模型。",
        "能将视觉任务和表征学习联系起来。"
      ],
      "practice": [
        "实验 5：目标检测或图像生成体验。",
        "阅读一篇扩散模型应用案例并做摘要。"
      ],
      "href": "/course/weeks/week-07",
      "module": {
        "id": "module-3",
        "titleZh": "深度神经网络与生成式 AI 革命",
        "titleEn": "Deep Neural Networks and the Generative AI Revolution",
        "hours": 21,
        "summary": "以表示学习和生成能力为主线，讲解深度学习、大模型、计算机视觉与多模态 AI 的关键突破。",
        "keyPoints": [
          "掌握 CNN、RNN、注意力机制与 Transformer 的核心直觉。",
          "理解预训练范式、提示工程、RAG 与 Agents 的应用逻辑。",
          "从视觉识别、扩散模型、多模态对齐到具身智能，形成完整技术图景。"
        ]
      },
      "materials": []
    },
    {
      "week": 8,
      "slug": "week-08",
      "moduleId": "module-3",
      "title": "三维视觉与表征学习",
      "theoryHours": 3,
      "labHours": 2,
      "focus": "从二维图像理解延伸到三维世界建模，理解多视角、空间结构与表示学习的关系。",
      "outline": [
        "3.3.3 三维视觉与表征学习：从 2D 到 3D 理解世界",
        "3.3 小结：视觉系统中的表征、识别与生成"
      ],
      "objectives": [
        "能解释 3D 视觉相比 2D 视觉的难点。",
        "能理解表征学习在视觉任务中的统一作用。",
        "能把空间感知任务与后续多模态内容接起来。"
      ],
      "practice": [
        "实验 6：三维重建或多视角表示学习案例分析。",
        "为期中汇报整理一个视觉方向 mini review。"
      ],
      "href": "/course/weeks/week-08",
      "module": {
        "id": "module-3",
        "titleZh": "深度神经网络与生成式 AI 革命",
        "titleEn": "Deep Neural Networks and the Generative AI Revolution",
        "hours": 21,
        "summary": "以表示学习和生成能力为主线，讲解深度学习、大模型、计算机视觉与多模态 AI 的关键突破。",
        "keyPoints": [
          "掌握 CNN、RNN、注意力机制与 Transformer 的核心直觉。",
          "理解预训练范式、提示工程、RAG 与 Agents 的应用逻辑。",
          "从视觉识别、扩散模型、多模态对齐到具身智能，形成完整技术图景。"
        ]
      },
      "materials": []
    },
    {
      "week": 9,
      "slug": "week-09",
      "moduleId": "module-3",
      "title": "多模态对齐与视觉语言模型",
      "theoryHours": 3,
      "labHours": 2,
      "focus": "讨论文本、图像、声音等模态如何对齐与融合，并引出视觉语言模型的工作方式。",
      "outline": [
        "3.4.1 多模态对齐与融合：同时理解文本、图像、声音",
        "3.4.2 视觉-语言大模型：CLIP、DALL-E 等工作原理与意义"
      ],
      "objectives": [
        "能说明多模态对齐与融合的基本目标。",
        "能解释视觉语言模型如何在共享空间中建模不同模态。",
        "能将多模态技术与科研场景中的跨源数据联系起来。"
      ],
      "practice": [
        "实验 7：图文匹配或图像描述生成。",
        "分析一个视觉语言模型在科研中的潜在应用。"
      ],
      "href": "/course/weeks/week-09",
      "module": {
        "id": "module-3",
        "titleZh": "深度神经网络与生成式 AI 革命",
        "titleEn": "Deep Neural Networks and the Generative AI Revolution",
        "hours": 21,
        "summary": "以表示学习和生成能力为主线，讲解深度学习、大模型、计算机视觉与多模态 AI 的关键突破。",
        "keyPoints": [
          "掌握 CNN、RNN、注意力机制与 Transformer 的核心直觉。",
          "理解预训练范式、提示工程、RAG 与 Agents 的应用逻辑。",
          "从视觉识别、扩散模型、多模态对齐到具身智能，形成完整技术图景。"
        ]
      },
      "materials": []
    },
    {
      "week": 10,
      "slug": "week-10",
      "moduleId": "module-3",
      "title": "具身智能与 AI 智能体",
      "theoryHours": 3,
      "labHours": 2,
      "focus": "从多模态感知过渡到决策与行动，理解具身智能和智能体系统的关键问题。",
      "outline": [
        "3.4.3 具身智能与 AI 智能体：多模态感知如何驱动决策与行动",
        "3.4 小结：通往更通用 AI 的路径"
      ],
      "objectives": [
        "能从感知、规划、执行三个层面理解智能体系统。",
        "能比较聊天式大模型与任务型智能体的差异。",
        "能把课程大作业进一步收敛到可验证的问题。"
      ],
      "practice": [
        "实验 8：工具调用或简单代理工作流编排。",
        "提交大作业中期方案。"
      ],
      "href": "/course/weeks/week-10",
      "module": {
        "id": "module-3",
        "titleZh": "深度神经网络与生成式 AI 革命",
        "titleEn": "Deep Neural Networks and the Generative AI Revolution",
        "hours": 21,
        "summary": "以表示学习和生成能力为主线，讲解深度学习、大模型、计算机视觉与多模态 AI 的关键突破。",
        "keyPoints": [
          "掌握 CNN、RNN、注意力机制与 Transformer 的核心直觉。",
          "理解预训练范式、提示工程、RAG 与 Agents 的应用逻辑。",
          "从视觉识别、扩散模型、多模态对齐到具身智能，形成完整技术图景。"
        ]
      },
      "materials": []
    },
    {
      "week": 11,
      "slug": "week-11",
      "moduleId": "module-4",
      "title": "AI 赋能生命科学与地理科学",
      "theoryHours": 3,
      "labHours": 2,
      "focus": "以生命科学和地理科学为例，理解 AI 如何服务复杂系统分析、预测和决策支持。",
      "outline": [
        "4.1 AI 赋能生命科学：生物医学研究、临床医学、公共卫生",
        "4.2 AI 赋能地理科学：环境监测、城市管理、地球系统科学"
      ],
      "objectives": [
        "能总结生命科学和地理科学中的典型 AI 应用链条。",
        "能识别跨学科问题中的数据来源、标签和评价指标。",
        "能从案例中提炼科研选题思路。"
      ],
      "practice": [
        "实验 9：跨学科案例复现或文献调研。",
        "形成一页 AI for Science 问题定义说明。"
      ],
      "href": "/course/weeks/week-11",
      "module": {
        "id": "module-4",
        "titleZh": "AI 赋能科学实践案例",
        "titleEn": "AI for Science",
        "hours": 12,
        "summary": "面向生命、地理、化学、数学、地空与物理等学科，分析 AI 赋能科学研究的典型场景与方法迁移。",
        "keyPoints": [
          "理解 AI 在科学研究中的角色：建模、预测、生成、优化与自动化。",
          "掌握不同学科案例背后的共性方法，如表示学习、生成模型与智能决策。",
          "从案例中提炼跨学科选题方向，为课程大作业提供思路。"
        ]
      },
      "materials": []
    },
    {
      "week": 12,
      "slug": "week-12",
      "moduleId": "module-4",
      "title": "AI 赋能化学与数学科学",
      "theoryHours": 3,
      "labHours": 2,
      "focus": "对比分子生成、反应预测、自动定理证明和 PDE 求解等任务，提炼科学智能的共性方法。",
      "outline": [
        "4.3 AI 赋能化学：分子与材料、反应与合成、过程与自动化",
        "4.4 AI 赋能数学科学：自动定理证明、偏微分方程求解、统计推断与数据科学"
      ],
      "objectives": [
        "能理解生成模型和符号推理在科学问题中的不同角色。",
        "能用案例说明 AI 如何与科学知识、规则和约束结合。",
        "能拓展课程大作业的方法论视野。"
      ],
      "practice": [
        "实验 10：阅读并比较两个 AI for Science 方向案例。",
        "完成大作业相关工作汇报草稿。"
      ],
      "href": "/course/weeks/week-12",
      "module": {
        "id": "module-4",
        "titleZh": "AI 赋能科学实践案例",
        "titleEn": "AI for Science",
        "hours": 12,
        "summary": "面向生命、地理、化学、数学、地空与物理等学科，分析 AI 赋能科学研究的典型场景与方法迁移。",
        "keyPoints": [
          "理解 AI 在科学研究中的角色：建模、预测、生成、优化与自动化。",
          "掌握不同学科案例背后的共性方法，如表示学习、生成模型与智能决策。",
          "从案例中提炼跨学科选题方向，为课程大作业提供思路。"
        ]
      },
      "materials": []
    },
    {
      "week": 13,
      "slug": "week-13",
      "moduleId": "module-4",
      "title": "AI 赋能地空科学与物理科学",
      "theoryHours": 3,
      "labHours": 2,
      "focus": "围绕大气建模、遥感、空间探测、物理建模与量子计算，理解 AI 在科学发现中的增益方式。",
      "outline": [
        "4.5 AI 赋能地空科学：气象预测、遥感、空间探测、行星探测",
        "4.6 AI 赋能物理科学：PDE/动力系统、凝聚态与材料、量子计算"
      ],
      "objectives": [
        "能说明物理先验与数据驱动方法如何协同。",
        "能比较观测数据、模拟数据和实验数据的差异。",
        "能把真实科学场景需求映射为 AI 任务。"
      ],
      "practice": [
        "完成大作业最终实验或案例分析。",
        "准备课程汇报材料与结果展示。"
      ],
      "href": "/course/weeks/week-13",
      "module": {
        "id": "module-4",
        "titleZh": "AI 赋能科学实践案例",
        "titleEn": "AI for Science",
        "hours": 12,
        "summary": "面向生命、地理、化学、数学、地空与物理等学科，分析 AI 赋能科学研究的典型场景与方法迁移。",
        "keyPoints": [
          "理解 AI 在科学研究中的角色：建模、预测、生成、优化与自动化。",
          "掌握不同学科案例背后的共性方法，如表示学习、生成模型与智能决策。",
          "从案例中提炼跨学科选题方向，为课程大作业提供思路。"
        ]
      },
      "materials": []
    },
    {
      "week": 14,
      "slug": "week-14",
      "moduleId": "module-4",
      "title": "AI for Science 综合研讨与课程大作业汇报",
      "theoryHours": 3,
      "labHours": 0,
      "focus": "以跨学科综合研讨形式回顾 AI for Science 的方法共性、应用边界与未来方向，并完成课程总结。",
      "outline": [
        "综合回顾模块 4 的六类学科案例",
        "围绕“讨论与展望”开展课程大作业汇报与专题研讨",
        "课程总结：从方法迁移到跨学科合作"
      ],
      "objectives": [
        "能从跨学科视角归纳课程方法论主线。",
        "能清晰表达课程大作业的问题、方法、结果与限制。",
        "能形成对未来研究方向的初步判断。"
      ],
      "practice": [
        "完成课程大作业终稿与课堂汇报。",
        "归档本学期资料，完善课程网站内容。"
      ],
      "href": "/course/weeks/week-14",
      "module": {
        "id": "module-4",
        "titleZh": "AI 赋能科学实践案例",
        "titleEn": "AI for Science",
        "hours": 12,
        "summary": "面向生命、地理、化学、数学、地空与物理等学科，分析 AI 赋能科学研究的典型场景与方法迁移。",
        "keyPoints": [
          "理解 AI 在科学研究中的角色：建模、预测、生成、优化与自动化。",
          "掌握不同学科案例背后的共性方法，如表示学习、生成模型与智能决策。",
          "从案例中提炼跨学科选题方向，为课程大作业提供思路。"
        ]
      },
      "materials": []
    }
  ]
};
