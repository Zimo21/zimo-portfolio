export const site = {
  name: "Zimo Zhang",
  title: "Software Engineering / Data & ML (Co-op)",
  location: "Toronto, ON (open to hybrid/remote)",
  email: "zhangzimo2021@163.com",
  phone: "+1 236 965 4612",
  links: {
    github: "https://github.com/your-github",
    linkedin: "https://www.linkedin.com/in/your-linkedin",
    resume: "/resume.pdf",
  },
  hero: {
    tagline:
      "I build data-driven software and ML pipelines — from EEG seizure prediction to healthcare systems.",
    bullets: [
      "MEng ECE (Software Engineering) @ University of Toronto; BSc Math + Data Science minor @ UBC",
      "Hands-on: EEG seizure prediction (preprocessing, segmentation, deep learning training, evaluation)",
      "Python / Java / SQL; data visualization; ML model evaluation",
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
  {
    title: "Epileptic Seizure Prediction (EEG) + CIOPC Window Selection",
    period: "Jun 2025 – Aug 2025",
    tags: ["Python", "EEG", "Deep Learning", "Signal Processing"],
    summary:
      "Built an end-to-end pipeline for seizure prediction: multi-source EEG preprocessing, dataset adaptation, model training/validation, and CIOPC-based optimal preictal window selection.",
    highlights: [
      "Unified different EEG sources/formats; supported varying channel counts and window lengths.",
      "Evaluated prediction windows (e.g., 60/45/30/15 min) using sigmoid fitting and metrics (SPC/ND) aggregated into CIOPC.",
      "Documented preprocessing scripts and model input-channel modifications for reproducibility.",
    ],
    links: [{ label: "Write-up", href: "/projects#seizure" }],
  },
  {
    title: "Ocular Disease Prediction with CNN (Publication)",
    period: "2024",
    tags: ["Python", "CNN", "Computer Vision"],
    summary:
      "Developed a fundus-image disease prediction model using a CNN and wrote an accepted conference paper.",
    highlights: [
      "Implemented data preprocessing and CNN training pipeline.",
      "Paper accepted at CSIC 2024.",
    ],
    links: [{ label: "Publication", href: "/publications" }],
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
    links: [{ label: "Details", href: "/projects#travel" }],
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
    links: [{ label: "Details", href: "/projects#viz" }],
  },
];

export const experience = [
  {
    org: "Chinese Institute for Brain Research",
    role: "Algorithm Engineer Intern (Computing & Data Science Core)",
    time: "Jun 2025 – Aug 2025",
    bullets: [
      "Annotated mouse epileptic seizures; segmented EEG and trained deep-learning models for seizure prediction.",
      "Collaborated with research team; quickly adapted to new tools/methods across computing + neuroscience + data science.",
      "Proposed ideas for improving sensitivity and evaluation of preictal detection workflows.",
    ],
  },
  {
    org: "Shaanxi Zilu Electronic Technology Co.",
    role: "Software Development Intern",
    time: "Jul 2024 – Aug 2024",
    bullets: [
      "Supported a Mobile Nursing Software project: requirements collection, data entry, and basic data integrity checks.",
      "Collaborated across planning → debugging/optimization; helped ensure stable information flow in the system design.",
      "Assisted medical staff onboarding to reduce friction integrating the system into daily workflows.",
    ],
  },
  {
    org: "AI/ML Research Seminar (online)",
    role: "Participant (Prof. Mark Vogelsberger)",
    time: "Jul 2024 – Sep 2024",
    bullets: [
      "Studied neural networks and dimensionality reduction; implemented ML algorithms (SVM, regression, trees, RNN).",
      "Built a CNN-based fundus-image disease prediction model and completed an accepted paper submission.",
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
