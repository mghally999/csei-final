// app/schools/[school]/page.jsx
import { notFound } from "next/navigation";
import CardGridLayout from "@/components/CardGridLayout";
import { computingData } from "@/data/schools/computing";
import { healthSciencesData } from "@/data/schools/health-sciences";
import { businessData } from "@/data/schools/business";
import { culinaryData } from "@/data/schools/culinary-arts";

const validSchools = {
  computing: computingData,
  "health-sciences": healthSciencesData,
  business: businessData,
  "culinary-arts": culinaryData,
};

export async function generateMetadata({ params }) {
  const data = validSchools[params.school];

  if (!data) {
    return {
      title: "School Not Found | CSEI Academy",
      description: "The requested school does not exist at CSEI Academy",
    };
  }

  return {
    title: data.meta?.title || data.title,
    description: data.meta?.description || data.description,
    keywords: data.meta?.keywords || "",
    openGraph: {
      images: [
        {
          url: data.meta?.image || "/images/schools/default-school-image.jpg",
          alt: `${data.title} at CSEI Academy`,
        },
      ],
    },
    alternates: {
      canonical: `https://www.csei.edu/schools/${params.school}`,
    },
  };
}

export default function SchoolPage({ params }) {
  const data = validSchools[params.school];

  if (!data) {
    notFound();
  }

  // Transform school data into card format
  const schoolCards = [
    {
      id: "programs",
      title: `${data.title} Programs`,
      description: "Explore our comprehensive academic offerings in this field",
      link: `/schools/${params.school}/programs`,
      image: {
        url: data.meta?.image || "/images/schools/default-programs.jpg",
        alt: `${data.title} students in classroom`,
      },
      stats: data.programs?.map((program) => program.label) || [],
    },
    {
      id: "features",
      title: "Why Choose Our School",
      description: "Discover what makes our programs stand out",
      link: `/schools/${params.school}/features`,
      image: {
        url: "/images/schools/features.jpg",
        alt: `${data.title} program features`,
      },
      stats: data.features || [],
    },
    ...(data.careers
      ? [
          {
            id: "careers",
            title: "Career Outcomes",
            description: "See where our graduates are working",
            link: `/schools/${params.school}/careers`,
            image: {
              url: "/images/schools/careers.jpg",
              alt: `${data.title} graduates working`,
            },
            stats: data.careers || [],
          },
        ]
      : []),
    ...(data.applyInfo
      ? [
          {
            id: "apply",
            title: "Application Information",
            description: "Start your journey with us",
            link: `/schools/${params.school}/apply`,
            image: {
              url: "/images/schools/apply.jpg",
              alt: "Student application process",
            },
            stats: data.applyInfo.map((info) => info.label) || [],
          },
        ]
      : []),
  ];

  return (
    <CardGridLayout
      title={data.title}
      description={data.description}
      cards={schoolCards}
      bgColor="bg-[#1a237e]"
      textColor="text-white"
      showPageLinks={false}
      cta={{
        text: `Ready to join our ${data.title} programs?`,
        link: `/apply/${params.school}`,
        label: "Apply Now",
      }}
    />
  );
}

export async function generateStaticParams() {
  return Object.keys(validSchools).map((school) => ({
    school,
  }));
}
