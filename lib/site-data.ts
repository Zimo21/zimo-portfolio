export const site = {
  name: "Zimo Zhang",
  title: "",
  location: "Toronto, ON (open to hybrid/remote)",
  email: "zzzzimo.zhang@mail.utoronto.ca",
  phone: "+1 236 965 4612",
  links: {
    github: "https://github.com/Zimo21",
    linkedin: "https://www.linkedin.com/in/zimo-zhang0628/",
    resume: "/resume.pdf",
    profile: "/profile.JPG",
    publication: "/PACSMV-202015-G27.pdf"
  },
  hero: {
    tagline:
      "",
    bullets: [
      "MEng ECE (Software Engineering) @ University of Toronto; BSc Math + Data Science minor @ UBC",
      "Seeking roles in Data Analytics, Data Science, AI, and Machine Learning Engineering",
    ],
  },
};

export type Project = {
  title: string;
  period?: string;
  tags: string[];
  summary: string;
  highlights: string[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  // {
  //   title: "Epileptic Seizure Prediction (EEG) + CIOPC Window Selection",
  //   period: "Jun 2025 – Aug 2025",
  //   tags: ["Python", "EEG", "Deep Learning", "Signal Processing"],
  //   summary:
  //     "Built an end-to-end pipeline for seizure prediction: multi-source EEG preprocessing, dataset adaptation, model training/validation, and CIOPC-based optimal preictal window selection.",
  //   highlights: [
  //     "Unified different EEG sources/formats; supported varying channel counts and window lengths.",
  //     "Evaluated prediction windows (e.g., 60/45/30/15 min) using sigmoid fitting and metrics (SPC/ND) aggregated into CIOPC.",
  //     "Documented preprocessing scripts and model input-channel modifications for reproducibility.",
  //   ],
  //   links: [{ label: "Write-up", href: "/projects#seizure" }],
  // },
  {
    title: "Reinforcement Learning–Based Traffic Signal Control",
    period: "Sep 2025 - Dec 2025",
    tags: ["Reinforcement Learning", "PPO", "SUMO", "Python"],
    summary:
      "Designed and implemented an adaptive traffic signal control system using reinforcement learning in a simulated four-way intersection.",
    highlights: [
      "Built a SUMO-based simulation environment for traffic signal control.",
      "Designed state, action, and reward components to optimize queue length and waiting time.",
      "Trained and evaluated a PPO-based agent and compared it with baseline strategies."
    ],
    links: [{ label: "Github", href: "https://github.com/chenyo34/smartTrafficControll_ece1508_group_project" }, { label: "Report", href: "/rl.pdf" }]
  },
  {
    title: "EV News Deconstructor: Automated Fact Verification",
    period: "Sep 2025 - Dec 2025",
    tags: ["NLP", "Fact Verification", "Information Retrieval", "Python"],
    summary:
      "Designed a multi-stage system to decompose EV-related news into factual claims and automatically verify them against scientific literature.",
    highlights: [
      "Built an end-to-end pipeline including claim extraction, evidence retrieval, and claim–evidence verification.",
      "Applied pre-trained natural language inference models to classify claims into multiple verification categories.",
      "Evaluated system performance using accuracy and F1-based metrics, analyzing the impact of data imbalance and retrieval quality."
    ],
    links: [{ label: "Github", href: "https://github.com/ece1786-2025/MediaDeconstructed" }, { label: "Report", href: "/nlp.pdf" }]
  },
  {
    title: "Interactive Visualization: Smoking & Cholesterol (KNHANES)",
    period: "Jan 2025 – Apr 2025",
    tags: ["Python", "Altair", "Data Viz"],
    summary:
      "Analyzed how smoking status relates to cholesterol using KNHANES data and built interactive visualizations.",
    highlights: [
      "Compared distributions across smoking groups; tested age/gender effects.",
      "Explored correlations among BMI, blood pressure, and cholesterol within smoking populations.",
    ],
    links: [{ label: "Github", href: "https://github.com/ubc-dsci320-2024w2/project-team_yyds" }],
  },

  {
    title: "Ocular Disease Prediction with CNN",
    period: "July 2024 - Aug 2024",
    tags: ["Python", "CNN", "Computer Vision"],
    summary:
      "Developed a fundus-image disease prediction model using a CNN and wrote an accepted conference paper.",
    highlights: [
      "Implemented data preprocessing and CNN training pipeline.",
      "Paper accepted at CSIC 2024.",
    ],
    links: [{ label: "Github", href: "https://github.com/Zimo21/OcularDiseaseMachineLearning"}, { label: "Publication", href: "/publications" }],
  },

  {
    title: "Travel Manager Application (Java + Oracle DB)",
    period: "Jan 2024 – Apr 2024",
    tags: ["Java", "Oracle", "SQL", "Database Design"],
    summary:
      "Designed and built a travel agency management application covering destinations, clients, tours, and activities.",
    highlights: [
      "Requirements analysis → relational schema design → implementation with constraints for integrity.",
      "Built a user-friendly interface for planning routes and preferences.",
    ],
    // links: [{ label: "Details", href: "/projects#travel" }],
  },

  {
    title: "Predictive Analysis of U.S. Rental Apartment Prices",
    period: "Sep 2023 - Dec 2023",
    tags: ["Data Analysis", "Statistical Modeling", "R"],
    summary:
      "Conducted a predictive analysis of U.S. rental apartment prices by modeling key price influencers using machine learning techniques.",
    highlights: [
      "Analyzed a dataset of 10,000 rental listings from 12 online platforms, performing data cleaning and preprocessing.",
      "Explored correlations between features such as apartment size, pet policies, and rental prices using Python and visualization tools.",
      "Built and optimized a linear regression model to improve rental price prediction accuracy."
    ],
    links: []
  },
  {
    title: "E-binder of Photo Cards Application",
    period: "Jul 2023 - Aug 2023",
    tags: ["Java", "Desktop Application", "Database"],
    summary:
      "Developed a Java-based desktop application to manage and organize K-pop photo card collections with efficient data storage and retrieval.",
    highlights: [
      "Designed and implemented core application features for managing photo card collections.",
      "Built a database to store and organize user inputs, enabling efficient retrieval and updates.",
      "Tested and optimized the application to improve performance and overall usability."
    ],
    links: []
  },

  {
  title: "Heart Disease Prediction",
  period: "Sep 2022 - Dec 2022",
  tags: ["Machine Learning", "Data Analysis", "Classification", "Python"],
  summary:
    "Conducted a data-driven study to identify key factors associated with heart disease and built predictive models to estimate disease risk.",
  highlights: [
    "Performed data preprocessing, statistical analysis, and visualization to explore factors influencing heart disease risk.",
    "Trained and compared multiple machine learning models for heart disease classification.",
    "Evaluated model performance to select an accurate and reliable prediction approach."
  ],
  links: []
},


];

export const experience = [
  {
    org: "Chinese Institute for Brain Research",
    role: "Algorithm Engineer Intern (Computing & Data Science Core)",
    time: "Jun 2025 – Aug 2025",
    tags: ["Python", "PyTorch", "EEG Signal Processing", "Time-series Modeling", "Model Evaluation", "Git"],
    bullets: [
      "Annotated mouse epileptic seizures; segmented EEG and trained deep-learning models for seizure prediction.",
      "Collaborated with research team; quickly adapted to new tools/methods across computing + neuroscience + data science.",
      "Proposed ideas for improving sensitivity and evaluation of preictal detection workflows.",
    ],
    links: [{ label: "Details", href: "/projects" }],
  },
  {
    org: "Shaanxi Zilu Electronic Technology Co.",
    role: "Software Development Intern",
    time: "Jul 2024 – Aug 2024",
    tags: ["C#", "SQL", "Healthcare Software"],
    bullets: [
      "Supported a Mobile Nursing Software project: requirements collection, data entry, and basic data integrity checks.",
      "Collaborated across planning → debugging/optimization; helped ensure stable information flow in the system design.",
      "Assisted medical staff onboarding to reduce friction integrating the system into daily workflows.",
    ],
  },
  // {
  //   org: "AI/ML Research Seminar (online)",
  //   role: "Participant (Prof. Mark Vogelsberger)",
  //   time: "Jul 2024 – Sep 2024",
  //   bullets: [
  //     "Studied neural networks and dimensionality reduction; implemented ML algorithms (SVM, regression, trees, RNN).",
  //     "Built a CNN-based fundus-image disease prediction model and completed an accepted paper submission.",
  //   ],
  // },
];

export const education = [
  {
    org: "University of Toronto",
    role: "Master of Engineering in Electrical & Computer Engineering (Software Engineering)",
    time: "Sept 2025 – May 2027",
    bullets: [
    ],
  },
  {
    org: "University of British Columbia",
    role: "Bachelor of Science in Mathematic with Minor in Data Science",
    time: "Sept 2021 – May 2025",
    bullets: [
    ],
  },
];

export const publication = {
  title:
    "A Study of Ocular Disease Prediction Based on Convolutional Neural Network Algorithm",
  venue: "2024 6th International Conference on Computer Science and Intelligent Communication (CSIC 2024)",
  status: "Accepted",
  authors: ["Zimo Zhang"],
  year: 2024,
};
