import JoinToday from "@/components/aboutCourses/become/JoinToday";
import PageHeading from "@/components/aboutCourses/become/PageHeading";
import Tabs from "@/components/aboutCourses/become/Tabs";
import Instructors from "@/components/common/Instructors";
import LearningCommon from "@/components/common/LearningCommon";
import PageLinks from "@/components/common/PageLinks";

export const metadata = {
  title:
    "Instructors - Become || CSEI - Professional LMS Online Education Course NextJS Template",
  description:
    "Elevate your e-learning content with CSEI, the most impressive LMS template for online courses, education and LMS platforms.",
};

export default function Page() {
  return (
    <>
      <PageHeading />
      <section className="layout-pb-lg">
        <div className="container">
          <Tabs />
          <LearningCommon />
        </div>
      </section>
      <JoinToday />
      <Instructors />
    </>
  );
}
