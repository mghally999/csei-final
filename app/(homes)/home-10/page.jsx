import ModeChanger from "@/components/homes/ModeChanger";
import HomeNine from "@/components/homes/homepageWrappers/HomeNine";
import React from "react";
export const metadata = {
  title:
    "Home-10 || CSEI - Professional LMS Online Education Course NextJS Template",
  description:
    "Elevate your e-learning content with CSEI, the most impressive LMS template for online courses, education and LMS platforms.",
};
export default function page() {
  return (
    <div>
      <ModeChanger />
      <HomeNine />
    </div>
  );
}
