export const menuList = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "Academics",
    href: "/academics",
    mega: true,
    links: [
      {
        title: "Our Schools",
        links: [
          {
            label: "School of Computing",
            href: "/academics/schools/computing",
          },
          {
            label: "School of Health Sciences",
            href: "/academics/schools/health-sciences",
          },
          {
            label: "School of Culinary Arts",
            href: "/academics/schools/culinary-arts",
          },
          {
            label: "School of Business",
            href: "/academics/schools/business",
          },
        ],
      },
      {
        title: "Internships & Opportunities",
        links: [
          {
            label: "Introduction & Why CSEI",
            href: "/academics/intro-why",
          },
          {
            label: "Scholarships",
            href: "/academics/scholarships",
          },
        ],
      },
      {
        title: "Resources & Support",
        links: [
          {
            label: "News",
            href: "/academics/news",
          },
          {
            label: "Academic Support",
            href: "/academics/support",
          },
          {
            label: "Academic Calendar",
            href: "/academics/calendar",
          },
        ],
      },
    ],
  },
  {
    title: "Admission",
    href: "/admission",
    mega: true,
    links: [
      {
        title: "Start Your Journey",
        links: [
          {
            label: "Online Application",
            href: "/admission/online-application",
          },
          {
            label: "Admission Process",
            href: "/admission/process",
          },
        ],
      },
      {
        title: "International & Financials",
        links: [
          {
            label: "International Students",
            href: "/admission/international-students",
          },
          {
            label: "Tuition and Fees",
            href: "/admission/tuition-and-fees",
          },
          {
            label: "Financial Aid & Scholarships",
            href: "/admission/scholarships",
          },
        ],
      },
      {
        title: "Student Experience",
        links: [
          {
            label: "Student Voice",
            href: "/admission/student-voice",
          },
        ],
      },
    ],
  },
  {
    title: "Life With CSEI",
    href: "/life-with-csei",
  },

  {
    title: "Placements",
    href: "/placements",
    mega: true,
    links: [
      {
        title: "Overview & Objective",
        links: [
          {
            label: "Objective",
            href: "/placements/objectives",
          },
          {
            label: "Overview & Briefing",
            href: "/placements/overview",
          },
        ],
      },
      {
        title: "Why Choose CSEI",
        links: [
          {
            label: "Why Recruit CSEI Students",
            href: "/placements/why-csei",
          },
          {
            label: "Our Services",
            href: "/placements/services",
          },
        ],
      },
      {
        title: "Highlights & Partners",
        links: [
          {
            label: "Placement Highlights",
            href: "/placements/highlights",
          },
          {
            label: "Our Industry Partners",
            href: "/placements/partners",
          },
          {
            label: "Partner With Us / Book",
            href: "/placements/book",
          },
        ],
      },
    ],
  },

  // {
  //   title: "Courses",
  //   mega: true,
  //   links: [
  //     {
  //       title: "Course List Layouts",
  //       links: [
  //         { href: "/courses-list-1", label: "Course List v1" },
  //         { href: "/courses-list-2", label: "Course List v2" },
  //         { href: "/courses-list-3", label: "Course List v3" },
  //         { href: "/courses-list-4", label: "Course List v4" },
  //         { href: "/courses-list-5", label: "Course List v5" },
  //         { href: "/courses-list-6", label: "Course List v6" },
  //         { href: "/courses-list-7", label: "Course List v7" },
  //         { href: "/courses-list-8", label: "Course List v8" },
  //       ],
  //     },
  //     {
  //       title: "Course Single Layouts",
  //       links: [
  //         { href: "/courses/3", label: "Course Single v1" },
  //         { href: "/courses-single-2/2", label: "Course Single v2" },
  //         { href: "/courses-single-3/3", label: "Course Single v3" },
  //         { href: "/courses-single-4/4", label: "Course Single v4" },
  //         { href: "/courses-single-5/4", label: "Course Single v5" },
  //         { href: "/courses-single-6/7", label: "Course Single v6" },
  //         { href: "/course-cart", label: "Course Cart" },
  //         { href: "/course-checkout", label: "Course Checkout" },
  //       ],
  //     },
  //     {
  //       title: "About Courses",
  //       links: [
  //         { href: "/lesson-single-1", label: "Lesson Page v1" },
  //         { href: "/lesson-single-2", label: "Lesson Page v2" },
  //         { href: "/instructors-list-1", label: "Instructors List v1" },
  //         { href: "/instructors-list-2", label: "Instructors List v2" },
  //         { href: "/instructors/1", label: "Instructors Single" },
  //         { href: "/instructor-become", label: "Become an Instructor" },
  //       ],
  //     },
  //     {
  //       title: "Dashboard Pages",
  //       links: [
  //         { href: "/dashboard", label: "Dashboard" },
  //         { href: "/dshb-courses", label: "My Courses" },
  //         { href: "/dshb-bookmarks", label: "Bookmarks" },
  //         { href: "/dshb-listing", label: "Add Listing" },
  //         { href: "/dshb-reviews", label: "Reviews" },
  //         { href: "/dshb-settings", label: "Settings" },
  //         { href: "/dshb-administration", label: "Administration" },
  //         { href: "/dshb-assignment", label: "Assignment" },
  //         { href: "/dshb-calendar", label: "Calendar" },
  //         { href: "/dshb-dashboard", label: "Single Dashboard" },
  //         { href: "/dshb-dictionary", label: "Dictionary" },
  //         { href: "/dshb-forums", label: "Forums" },
  //         { href: "/dshb-grades", label: "Grades" },
  //         { href: "/dshb-messages", label: "Messages" },
  //         { href: "/dshb-participants", label: "Participants" },
  //         { href: "/dshb-quiz", label: "Quiz" },
  //         { href: "/dshb-survey", label: "Survey" },
  //       ],
  //     },
  //     {
  //       title: "Popular Courses",
  //       links: [
  //         { label: "Web Developer", href: "#" },
  //         { label: "Mobile Developer", href: "#" },
  //         { label: "Digital Marketing", href: "#" },
  //         { label: "Development", href: "#" },
  //         { label: "Finance & Accounting", href: "#" },
  //         { label: "Design", href: "#" },
  //         { label: "View All Courses", href: "#" },
  //       ],
  //     },
  //   ],
  // },
];
