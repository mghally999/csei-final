export const admissionCards = [
  {
    id: "undergraduate",
    title: "Undergraduate Admissions at CSEI | Degree Program Requirements",
    description:
      "Begin your journey with CSEI's undergraduate programs featuring 95% acceptance rate for qualified candidates. Our streamlined admission process includes academic evaluations, entrance exams, and personalized counseling sessions.",
    link: "/admissions/undergraduate",
    image: {
      url: "/images/admissions/undergrad.jpg",
      alt: "CSEI undergraduate students collaborating on campus project",
    },
    stats: [
      "95% acceptance rate",
      "50+ bachelor's programs",
      "3 application cycles yearly",
    ],
    keywords: [
      "undergraduate admissions",
      "degree program requirements",
      "college application process",
      "entrance exams",
      "bachelor's degree",
    ],
  },
  {
    id: "postgraduate",
    title: "Postgraduate Admissions | Master's & PhD Programs at CSEI",
    description:
      "Join CSEI's research-focused postgraduate community with 80+ specialized programs. Our admission criteria emphasize academic excellence, research proposals, and industry experience for advanced degrees.",
    link: "/admissions/postgraduate",
    image: {
      url: "/images/admissions/postgrad.jpg",
      alt: "CSEI postgraduate researcher in lab environment",
    },
    stats: [
      "80+ specialized programs",
      "1:5 faculty-student ratio",
      "Industry collaborations",
    ],
    keywords: [
      "masters programs",
      "phd admissions",
      "postgraduate requirements",
      "research proposals",
      "graduate studies",
    ],
  },
  {
    id: "international",
    title: "International Student Admissions | Global Education at CSEI",
    description:
      "CSEI welcomes students from 50+ countries with dedicated visa support, English language programs, and cultural integration services. Our international office maintains 98% visa approval success rate.",
    link: "/admissions/international",
    image: {
      url: "/images/admissions/international.jpg",
      alt: "Diverse group of CSEI international students on campus",
    },
    stats: [
      "50+ countries represented",
      "98% visa approval rate",
      "Dedicated ESL programs",
    ],
    keywords: [
      "international student admissions",
      "study abroad programs",
      "student visa process",
      "global education",
      "foreign students",
    ],
  },
  {
    id: "scholarships",
    title: "Scholarships & Financial Aid | Funding Your Education at CSEI",
    description:
      "Discover CSEI's $5M annual scholarship fund with merit-based, need-based, and special talent awards. Our financial aid advisors help 70% of students secure education funding through various programs.",
    link: "/admissions/scholarships",
    image: {
      url: "/images/admissions/scholarships.jpg",
      alt: "CSEI student receiving scholarship award certificate",
    },
    stats: [
      "$5M annual fund",
      "70% students receive aid",
      "15+ scholarship types",
    ],
    keywords: [
      "education scholarships",
      "financial aid",
      "tuition assistance",
      "merit-based awards",
      "college funding",
    ],
  },
];

export const admissionRequirements = {
  undergraduate: {
    title: "Undergraduate Admission Requirements | CSEI Academy",
    description:
      "Complete guide to CSEI's undergraduate admission criteria including academic qualifications, entrance exams, and application deadlines for our 50+ bachelor's degree programs.",
    contentSections: [
      {
        title: "Eligibility Criteria",
        items: [
          "Minimum 75% in 10+2 examinations",
          "Valid entrance exam score (CSEIET/JEE/NEET)",
          "English language proficiency",
        ],
      },
      {
        title: "Application Process",
        items: [
          "Online application form",
          "Document submission",
          "Entrance examination",
          "Personal interview",
        ],
      },
    ],
    meta: {
      title: "How to Apply for Undergraduate Programs | CSEI",
      description:
        "Step-by-step guide to CSEI's undergraduate admission process with 95% acceptance rate. Learn about required documents, eligibility criteria, and important dates.",
      keywords:
        "undergrad admission, college requirements, degree application, bachelor's admission",
      openGraph: {
        images: [{ url: "/images/admissions/undergrad-og.jpg" }],
      },
    },
  },
  postgraduate: {
    title: "Postgraduate Admission Requirements | CSEI Academy",
    description:
      "Detailed requirements for CSEI's master's and PhD programs including academic prerequisites, research proposals, and application procedures.",
    contentSections: [
      {
        title: "Master's Program Requirements",
        items: [
          "Relevant bachelor's degree",
          "Minimum 3.0 GPA",
          "Statement of purpose",
          "Letters of recommendation",
        ],
      },
      {
        title: "PhD Program Requirements",
        items: [
          "Master's degree in related field",
          "Research proposal",
          "Faculty interview",
          "Publication record preferred",
        ],
      },
    ],
    meta: {
      title: "Graduate Program Admissions | CSEI Academy",
      description:
        "Complete guide to applying for CSEI's postgraduate programs including deadlines, required documents, and selection criteria.",
      keywords:
        "masters admission, phd requirements, graduate programs, postgraduate application",
      openGraph: {
        images: [{ url: "/images/admissions/postgrad-og.jpg" }],
      },
    },
  },
  international: {
    title: "International Student Admissions | CSEI Global Education",
    description:
      "Comprehensive guide for international applicants including visa requirements, English proficiency tests, and application timeline.",
    contentSections: [
      {
        title: "Application Requirements",
        items: [
          "Academic transcripts (evaluated)",
          "English proficiency (TOEFL)",
          "Financial documentation",
          "Passport copy",
        ],
      },
      {
        title: "Visa Process",
        items: [
          "I-20 issuance",
          "SEVIS fee payment",
          "Visa interview preparation",
          "Post-arrival orientation",
        ],
      },
    ],
    meta: {
      title: "International Student Guide | CSEI Academy",
      description:
        "Complete international admission process with 98% visa success rate. Learn about requirements, deadlines, and support services.",
      keywords:
        "international admissions, study abroad, student visa, foreign students",
      openGraph: {
        images: [{ url: "/images/admissions/international-og.jpg" }],
      },
    },
  },
  scholarships: {
    title: "Scholarships & Financial Aid | CSEI Academy Funding",
    description:
      "Detailed information about CSEI's scholarship programs including eligibility criteria, application process, and award amounts.",
    contentSections: [
      {
        title: "Scholarship Types",
        items: [
          "Merit-based (up to 100% tuition)",
          "Need-based (income verification)",
          "Sports/Arts scholarships",
          "Research fellowships",
        ],
      },
      {
        title: "Application Process",
        items: [
          "Separate scholarship application",
          "Documentation requirements",
          "Interview for select awards",
          "Renewal criteria",
        ],
      },
    ],
    meta: {
      title: "Scholarship Opportunities | CSEI Academy",
      description:
        "Discover $5M in annual financial aid with 70% of students receiving funding. Learn how to apply for scholarships and grants.",
      keywords:
        "college scholarships, financial aid, tuition assistance, education funding",
      openGraph: {
        images: [{ url: "/images/admissions/scholarships-og.jpg" }],
      },
    },
  },
};

// Add these to your existing exports
export const admissionTimelines = {
  undergraduate: [
    { event: "Application Open", date: "January 1", deadline: false },
    { event: "Priority Deadline", date: "March 15", deadline: true },
    { event: "Final Deadline", date: "June 1", deadline: true },
  ],
  international: [
    { event: "Visa Application Start", date: "March 1", deadline: false },
    { event: "Document Submission", date: "April 30", deadline: true },
  ],
  scholarships: [
    { event: "FAFSA Deadline", date: "February 1", deadline: true },
    { event: "Scholarship Notification", date: "April 15", deadline: false },
  ],
};
