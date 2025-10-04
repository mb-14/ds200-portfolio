export const siteConfig = {
  name: "Miroojin Bakshi",
  title: "PhD Student at IISc Bangalore",
  description: "Portfolio website of Miroojin Bakshi",
  accentColor: "#74c0fc",
  social: {
    email: "mbakshi1094@gmail.com",
    linkedin: "https://www.linkedin.com/in/miroojin-bakshi-70166610a/",
    github: "https://github.com/mb-14",
    gscholar: "https://scholar.google.co.in/citations?user=lN6RKC4AAAAJ&hl=en"
  },
  aboutMe:
    "I’m a PhD student at IISc Bangalore, working in the NLP Lab in the Department of Computational and Data Sciences. My research interests include large language model understanding, interpretability, and evaluation. Prior to this, I worked for ~6 years as a software engineer across fintech and payments, building scalable data platforms, backend services, and mobile/web applications.",
  skills: [
    "Python",
    "transformers",
    "pytorch",
    "Hugging Face",
    "scikit-learn",
    "pandas",
    "NumPy",
    "Scala",
    "Java",
    "JavaScript",
    "Go",
    "SQL",
    "Postgres",
    "ElasticSearch",
    "Snowflake",
    "Redis",
    "MySQL",
    "SQLite",
    "Airflow",
    "Apache Beam",
    "Akka",
    "Kafka",
    "Kinesis",
    "AWS",
    "SQS",
    "Docker",
    "Prometheus",
    "Grafana",
    "Git",
    "React",
    "Svelte",
    "Bootstrap",
    "Express.js",
    "Flask",
    "Gin",
    "Laravel"
  ],
  projects: [
    {
      name: "OpenStamp",
      description: "A watermarking technique for open-source LLMs.",
      link: "https://github.com/mb-14/openstamp",
      skills: ["pytorch", "scikit-learn", "transformers"]
    },
    {
      name: "gomarkov",
      description:
        "Golang library for building Markov chains with a simple API for training and generating sequences.",
      link: "https://github.com/mb-14/gomarkov",
      skills: ["golang", "markov-chains"]
    },
    {
      name: "embeddings.js",
      description:
        "Word embeddings fine-tuned for web browsers using TensorFlow.js, enabling client-side NLP.",
      link: "https://github.com/mb-14/embeddings.js",
      skills: ["glove", "TensorFlow.js"]
    }
  ],
  experience: [
    {
      company: "Leapfin",
      title: "Principal Software Engineer",
      dateRange: "Mar 2019 – Apr 2022",
      bullets: [
        "Migrated data pipeline and rules engine to a scalable event-driven architecture.",
        "Designed and implemented financial data audit logging with lineage tracking.",
        "Developed schema inference tooling with Apache Beam.",
        "Implemented ETL logic, admin tools, and platform enhancements."
      ],
      link: "https://leapfin.com"
    },
    {
      company: "Razorpay",
      title: "Software Engineer",
      dateRange: "Jun 2016 - Aug 2018",
      bullets: [
        "Built in-house risk engine service from scratch.",
        "Developed ETL pipelines for payment fraud detection models.",
        "Rewrote internal event pipeline in Go.",
        "Built the ePOS app for offline payments.",
        "Refined Checkout SDK for mobile apps."
      ],
      link: "https://razorpay.com"
    },
    {
      company: "Codelearn",
      title: "Engineering Intern",
      dateRange: "May 2014 - Jul 2014",
      bullets: [
        "Designed Android-based coding challenge for learners on a Rails/Android platform."
      ],
      link: "https://www.crunchbase.com/organization/codelearn"
    }
  ],
  education: [
    {
      school: "Indian Institute of Science, Bangalore",
      degree: "Ph.D. in Computational and Data Sciences (in progress)",
      dateRange: "2022 - Present",
      achievements: ["Research focus: LLM interpretability, LLM evaluation, watermarking"]
    },
    {
      school: "Indian Institute of Technology Indore",
      degree: "B.Tech, Computer Science",
      dateRange: "2012 - 2016",
      achievements: [
        "Best Working Prototype Award for Final Year Project"
      ]
    }
  ]
};
