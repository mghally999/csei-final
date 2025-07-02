"use client";

import { usePathname } from "next/navigation";
import { prices } from "@/data/courses";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useContextElement } from "@/context/Context";
import PaginationTwo from "../../components/common/PaginationTwo";
import { programs } from "@/data/programs";

export default function CourseListOne() {
  const pathname = usePathname();
  const isProfessionalRoute = pathname.includes("/professional-courses");

  // Enhance programs data with professional flag based on href
  const enhancedPrograms = programs.map((program) => ({
    ...program,
    professional: program.href.includes("/professional-courses/"),
  }));

  const [coursesData, setCoursesData] = useState(() => {
    return enhancedPrograms.map((program) => ({
      id: program.id,
      title: program.title,
      href: program.href,
      category: program.category || program.school,
      authorName: program.authorName,
      rating: program.rating,
      paid: program.paid,
      level: program.level,
      duration: program.duration,
      imageSrc: program.imageSrc,
      discountedPrice: program.discountedPrice,
      lessonCount: program.lessonCount,
      popular: program.popular,
      school: program.school,
      professional: program.professional,
    }));
  });

  const [categoryOpen, setCategoryOpen] = useState(true);
  const [professionalOpen, setProfessionalOpen] = useState(true);
  const [filterOpen, setFilterOpen] = useState(false);
  const { isAddedToCartCourses, addCourseToCart } = useContextElement();

  const [filterCategories, setFilterCategories] = useState([]);
  const [filterPrice, setFilterPrice] = useState("All");
  const [filterLevels, setFilterLevels] = useState([]);
  const [filterProfessional, setFilterProfessional] =
    useState(isProfessionalRoute);

  const [currentSortingOption, setCurrentSortingOption] = useState("Default");
  const [filteredData, setFilteredData] = useState([]);
  const [sortedFilteredData, setSortedFilteredData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  // Calculate professional count
  const professionalCount = enhancedPrograms.filter(
    (p) => p.professional
  ).length;

  useEffect(() => {
    const refItems = coursesData
      .filter((elm) => {
        if (filterPrice == "All") {
          return true;
        } else if (filterPrice == "Free") {
          return !elm.paid;
        } else if (filterPrice == "Paid") {
          return elm.paid;
        }
      })
      .filter((elm) => {
        if (isProfessionalRoute || filterProfessional) {
          return elm.professional === true;
        }
        return true;
      });

    let filteredArrays = [];

    if (filterCategories.length > 0) {
      const filtered = refItems.filter(
        (elm) =>
          filterCategories.includes(elm.category) ||
          filterCategories.includes(elm.school)
      );
      filteredArrays = [...filteredArrays, filtered];
    }
    if (filterLevels.length > 0) {
      const filtered = refItems.filter((elm) =>
        filterLevels.some((level) => elm.level.includes(level))
      );
      filteredArrays = [...filteredArrays, filtered];
    }

    const commonItems =
      filteredArrays.length > 0
        ? refItems.filter((item) =>
            filteredArrays.every((array) => array.includes(item))
          )
        : refItems;

    setFilteredData(commonItems);
    setPageNumber(1);
  }, [
    filterCategories,
    filterPrice,
    filterLevels,
    filterProfessional,
    coursesData,
    isProfessionalRoute,
  ]);

  useEffect(() => {
    if (currentSortingOption == "Default") {
      setSortedFilteredData(filteredData);
    } else if (currentSortingOption == "Rating (asc)") {
      setSortedFilteredData(
        [...filteredData].sort((a, b) => a.rating - b.rating)
      );
    } else if (currentSortingOption == "Rating (dsc)") {
      setSortedFilteredData(
        [...filteredData].sort((a, b) => b.rating - a.rating)
      );
    } else if (currentSortingOption == "Price (asc)") {
      setSortedFilteredData(
        [...filteredData].sort((a, b) => a.discountedPrice - b.discountedPrice)
      );
    } else if (currentSortingOption == "Price (dsc)") {
      setSortedFilteredData(
        [...filteredData].sort((a, b) => b.discountedPrice - a.discountedPrice)
      );
    } else if (currentSortingOption == "Duration (asc)") {
      setSortedFilteredData(
        [...filteredData].sort((a, b) => a.duration - b.duration)
      );
    } else if (currentSortingOption == "Duration (dsc)") {
      setSortedFilteredData(
        [...filteredData].sort((a, b) => b.duration - a.duration)
      );
    }
  }, [currentSortingOption, filteredData]);

  const handleFilterCategories = (item) => {
    if (filterCategories.includes(item)) {
      const filtered = filterCategories.filter((elm) => elm != item);
      setFilterCategories([...filtered]);
    } else {
      setFilterCategories((pre) => [...pre, item]);
    }
  };

  const handleFilterPrice = (item) => {
    setFilterPrice(item);
  };

  const handleFilterLevels = (item) => {
    if (filterLevels.includes(item)) {
      const filtered = filterLevels.filter((elm) => elm != item);
      setFilterLevels([...filtered]);
    } else {
      setFilterLevels((pre) => [...pre, item]);
    }
  };

  const handleFilterProfessional = () => {
    if (isProfessionalRoute) {
      setFilterProfessional(true);
    } else {
      setFilterProfessional(!filterProfessional);
    }
  };

  const programLevels = [
    ...new Set(
      enhancedPrograms.map((p) =>
        p.level.includes("Level")
          ? p.level.split(" ")[0] + " " + p.level.split(" ")[1]
          : p.level
      )
    ),
  ].map((level) => ({
    title: level,
    count: enhancedPrograms.filter((p) => p.level.includes(level)).length,
  }));

  return (
    <>
      <section className="page-header -type-1">
        <div className="container">
          <div className="page-header__content">
            <div className="row">
              <div className="col-auto">
                <div>
                  <h1 className="page-header__title">CSEI ACADEMY</h1>
                </div>
                <div className="d-flex flex-wrap x-gap-20 y-gap-10 pt-15 custom-flex-margin">
                  {[
                    "All",
                    ...new Set(enhancedPrograms.map((p) => p.school)),
                  ].map((item) => (
                    <button
                      key={item}
                      className={`button px-15 py-5 rounded-200 ${
                        filterCategories.includes(item) ||
                        (item === "All" && filterCategories.length === 0)
                          ? "bg-dark-1 text-white"
                          : "bg-light-3"
                      }`}
                      onClick={() =>
                        item === "All"
                          ? setFilterCategories([])
                          : handleFilterCategories(item)
                      }
                    >
                      {item}
                    </button>
                  ))}
                  <button
                    className={`button px-15 py-5 rounded-200 ${
                      filterProfessional || isProfessionalRoute
                        ? "bg-dark-1 text-white"
                        : "bg-light-3"
                    }`}
                    onClick={handleFilterProfessional}
                  >
                    Professional Courses ({professionalCount})
                  </button>
                  {isProfessionalRoute && (
                    <Link
                      href="/courses"
                      className="button px-15 py-5 rounded-200 bg-light-3"
                    >
                      View All Courses
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="custom-layout-padding">
        <div className="container">
          <div className="row y-gap-50">
            <div className="col-xl-3 col-lg-4 lg:d-none">
              <div className="pr-30 lg:pr-0">
                <div className="sidebar -courses">
                  <div className="sidebar__item">
                    <div className="accordion js-accordion">
                      <div
                        className={`accordion__item ${
                          categoryOpen ? "is-active" : ""
                        }`}
                      >
                        <div
                          className="accordion__button items-center"
                          onClick={() => setCategoryOpen(!categoryOpen)}
                        >
                          <h5 className="sidebar__title">Schools</h5>
                          <div className="accordion__icon">
                            <div className="icon icon-chevron-down"></div>
                            <div className="icon icon-chevron-up"></div>
                          </div>
                        </div>
                        <div
                          className="accordion__content"
                          style={categoryOpen ? { maxHeight: "350px" } : {}}
                        >
                          <div className="accordion__content__inner">
                            <div className="sidebar-checkbox">
                              <div
                                className="sidebar-checkbox__item"
                                onClick={() => setFilterCategories([])}
                              >
                                <div className="form-checkbox">
                                  <input
                                    type="checkbox"
                                    readOnly
                                    checked={filterCategories.length === 0}
                                  />
                                  <div className="form-checkbox__mark">
                                    <div className="form-checkbox__icon icon-check"></div>
                                  </div>
                                </div>
                                <div className="sidebar-checkbox__title">
                                  All Schools
                                </div>
                                <div className="sidebar-checkbox__count">
                                  (
                                  {isProfessionalRoute || filterProfessional
                                    ? professionalCount
                                    : enhancedPrograms.length}
                                  )
                                </div>
                              </div>
                              {[
                                ...new Set(
                                  enhancedPrograms
                                    .filter(
                                      (p) =>
                                        !isProfessionalRoute || p.professional
                                    )
                                    .map((p) => p.school)
                                ),
                              ].map((school, i) => {
                                const count = enhancedPrograms.filter(
                                  (p) =>
                                    p.school === school &&
                                    (!isProfessionalRoute || p.professional)
                                ).length;

                                return (
                                  <div
                                    key={i}
                                    className="sidebar-checkbox__item cursor"
                                    onClick={() =>
                                      handleFilterCategories(school)
                                    }
                                  >
                                    <div className="form-checkbox">
                                      <input
                                        type="checkbox"
                                        readOnly
                                        checked={filterCategories.includes(
                                          school
                                        )}
                                      />
                                      <div className="form-checkbox__mark">
                                        <div className="form-checkbox__icon icon-check"></div>
                                      </div>
                                    </div>
                                    <div className="sidebar-checkbox__title">
                                      {school}
                                    </div>
                                    <div className="sidebar-checkbox__count">
                                      ({count})
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="sidebar__item">
                    <div className="accordion js-accordion">
                      <div
                        className={`accordion__item ${
                          professionalOpen ? "is-active" : ""
                        }`}
                      >
                        <div
                          className="accordion__button items-center"
                          onClick={() => setProfessionalOpen(!professionalOpen)}
                        >
                          <h5 className="sidebar__title">Course Type</h5>
                          <div className="accordion__icon">
                            <div className="icon icon-chevron-down"></div>
                            <div className="icon icon-chevron-up"></div>
                          </div>
                        </div>
                        <div
                          className="accordion__content"
                          style={professionalOpen ? { maxHeight: "200px" } : {}}
                        >
                          <div className="accordion__content__inner">
                            <div className="sidebar-checkbox">
                              <div
                                className="sidebar-checkbox__item cursor"
                                onClick={() =>
                                  !isProfessionalRoute &&
                                  handleFilterProfessional()
                                }
                              >
                                <div className="form-checkbox">
                                  <input
                                    type="checkbox"
                                    readOnly
                                    checked={
                                      filterProfessional || isProfessionalRoute
                                    }
                                    disabled={isProfessionalRoute}
                                  />
                                  <div className="form-checkbox__mark">
                                    <div className="form-checkbox__icon icon-check"></div>
                                  </div>
                                </div>
                                <div className="sidebar-checkbox__title">
                                  Professional Courses
                                </div>
                                <div className="sidebar-checkbox__count">
                                  ({professionalCount})
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-9 col-lg-8">
              <div className="accordion js-accordion">
                <div
                  className={`accordion__item ${filterOpen ? "is-active" : ""}`}
                >
                  <div className="row y-gap-20 items-center justify-between pb-30">
                    <div className="col-auto">
                      <div className="text-14 lh-12">
                        Showing{" "}
                        <span className="text-dark-1 fw-500">
                          {filteredData.length}
                        </span>{" "}
                        total results
                      </div>
                    </div>
                  </div>

                  <div
                    className="accordion__content d-none lg:d-block"
                    style={filterOpen ? { maxHeight: "1800px" } : {}}
                  >
                    <div className="sidebar -courses px-30 py-30 rounded-8 bg-light-3 mb-50">
                      <div className="row x-gap-60 y-gap-40">
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                          <div className="sidebar__item">
                            <h5 className="sidebar__title">Schools</h5>
                            <div className="sidebar-checkbox">
                              <div
                                className="sidebar-checkbox__item"
                                onClick={() => setFilterCategories([])}
                              >
                                <div className="form-checkbox">
                                  <input
                                    type="checkbox"
                                    readOnly
                                    checked={filterCategories.length === 0}
                                  />
                                  <div className="form-checkbox__mark">
                                    <div className="form-checkbox__icon icon-check"></div>
                                  </div>
                                </div>
                                <div className="sidebar-checkbox__title">
                                  All Schools
                                </div>
                                <div className="sidebar-checkbox__count">
                                  (
                                  {isProfessionalRoute || filterProfessional
                                    ? professionalCount
                                    : enhancedPrograms.length}
                                  )
                                </div>
                              </div>
                              {[
                                ...new Set(
                                  enhancedPrograms
                                    .filter(
                                      (p) =>
                                        !isProfessionalRoute || p.professional
                                    )
                                    .map((p) => p.school)
                                ),
                              ].map((school, i) => {
                                const count = enhancedPrograms.filter(
                                  (p) =>
                                    p.school === school &&
                                    (!isProfessionalRoute || p.professional)
                                ).length;

                                return (
                                  <div
                                    key={i}
                                    className="sidebar-checkbox__item cursor"
                                    onClick={() =>
                                      handleFilterCategories(school)
                                    }
                                  >
                                    <div className="form-checkbox">
                                      <input
                                        type="checkbox"
                                        readOnly
                                        checked={filterCategories.includes(
                                          school
                                        )}
                                      />
                                      <div className="form-checkbox__mark">
                                        <div className="form-checkbox__icon icon-check"></div>
                                      </div>
                                    </div>
                                    <div className="sidebar-checkbox__title">
                                      {school}
                                    </div>
                                    <div className="sidebar-checkbox__count">
                                      ({count})
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-sm-6">
                          <div className="sidebar__item">
                            <h5 className="sidebar__title">Course Type</h5>
                            <div className="sidebar-checkbox">
                              <div
                                className="sidebar-checkbox__item cursor"
                                onClick={handleFilterProfessional}
                              >
                                <div className="form-checkbox">
                                  <input
                                    type="checkbox"
                                    readOnly
                                    checked={
                                      filterProfessional || isProfessionalRoute
                                    }
                                    disabled={isProfessionalRoute}
                                  />
                                  <div className="form-checkbox__mark">
                                    <div className="form-checkbox__icon icon-check"></div>
                                  </div>
                                </div>
                                <div className="sidebar-checkbox__title">
                                  Professional Courses
                                </div>
                                <div className="sidebar-checkbox__count">
                                  ({professionalCount})
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-sm-6">
                          <div className="sidebar__item">
                            <h5 className="sidebar__title">Levels</h5>
                            <div className="sidebar-checkbox">
                              <div
                                className="sidebar-checkbox__item"
                                onClick={() => setFilterLevels([])}
                              >
                                <div className="form-checkbox">
                                  <input
                                    type="checkbox"
                                    readOnly
                                    checked={filterLevels.length === 0}
                                  />
                                  <div className="form-checkbox__mark">
                                    <div className="form-checkbox__icon icon-check"></div>
                                  </div>
                                </div>
                                <div className="sidebar-checkbox__title">
                                  All Levels
                                </div>
                                <div className="sidebar-checkbox__count">
                                  (
                                  {isProfessionalRoute || filterProfessional
                                    ? professionalCount
                                    : enhancedPrograms.length}
                                  )
                                </div>
                              </div>
                              {programLevels.map((level, i) => {
                                const count = enhancedPrograms.filter(
                                  (p) =>
                                    p.level.includes(level.title) &&
                                    (!isProfessionalRoute || p.professional)
                                ).length;

                                if (count === 0) return null;

                                return (
                                  <div
                                    key={i}
                                    className="sidebar-checkbox__item cursor"
                                    onClick={() =>
                                      handleFilterLevels(level.title)
                                    }
                                  >
                                    <div className="form-checkbox">
                                      <input
                                        type="checkbox"
                                        readOnly
                                        checked={filterLevels.includes(
                                          level.title
                                        )}
                                      />
                                      <div className="form-checkbox__mark">
                                        <div className="form-checkbox__icon icon-check"></div>
                                      </div>
                                    </div>
                                    <div className="sidebar-checkbox__title">
                                      {level.title}
                                    </div>
                                    <div className="sidebar-checkbox__count">
                                      ({count})
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-sm-6">
                          <div className="sidebar__item">
                            <h5 className="sidebar__title">Price</h5>
                            <div className="sidebar-checkbox">
                              {prices.map((item, index) => {
                                const count = enhancedPrograms.filter((p) => {
                                  if (
                                    (isProfessionalRoute ||
                                      filterProfessional) &&
                                    !p.professional
                                  )
                                    return false;
                                  if (item.title === "All") return true;
                                  if (item.title === "Free") return !p.paid;
                                  if (item.title === "Paid") return p.paid;
                                  return true;
                                }).length;

                                return (
                                  <div
                                    key={index}
                                    className="sidebar-checkbox__item cursor"
                                    onClick={() =>
                                      handleFilterPrice(item.title)
                                    }
                                  >
                                    <div className="form-radio mr-10">
                                      <div className="radio">
                                        <input
                                          type="radio"
                                          readOnly
                                          checked={filterPrice === item.title}
                                        />
                                        <div className="radio__mark">
                                          <div className="radio__icon"></div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="sidebar-checkbox__title">
                                      {item.title}
                                    </div>
                                    <div className="sidebar-checkbox__count">
                                      ({count})
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row y-gap-30 side-content__wrap">
                {sortedFilteredData
                  .slice((pageNumber - 1) * 12, pageNumber * 12)
                  .map((elm, i) => (
                    <div
                      key={i}
                      className="side-content col-xl-4 col-lg-6 col-md-4 col-sm-6"
                    >
                      <div className="coursesCard -type-1">
                        <div className="relative">
                          <div className="coursesCard__image overflow-hidden rounded-8">
                            <Image
                              width={530}
                              height={370}
                              className="w-1/1"
                              src={elm.imageSrc}
                              alt={elm.title}
                            />
                            <div className="coursesCard__image_overlay rounded-8"></div>
                          </div>
                          <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3">
                            {elm.popular && <div></div>}
                            {(i % 4 === 0 || elm.popular) && <div></div>}
                            {elm.professional && (
                              <div>
                                <div className="px-15 rounded-200 bg-custom-navyblue">
                                  <span className="text-11 lh-1 uppercase fw-900 text-white">
                                    PROFESSIONAL
                                  </span>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="h-100 pt-15">
                          <div className="text-14 lh-1 text-dark-1 fw-500 mb-10">
                            {elm.school}
                          </div>
                          <div className="text-17 lh-15 fw-500 text-dark-1">
                            <Link className="linkCustom" href={elm.href}>
                              {elm.title}
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="side-content__item">
                        <div className="px-30 pt-20 pb-30 bg-white rounded-8 border-light shadow-2">
                          <div className="text-18 lh-16 text-dark-1">
                            <Link href={elm.href}>{elm.title}</Link>
                            <div className="text-14 text-gray-1 mt-5">
                              {elm.school} • {elm.category}
                              {elm.professional && (
                                <span className="ml-10 px-10 py-2 rounded-200 bg-blue-1 text-white text-11">
                                  Professional
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="row x-gap-10 y-gap-10 items-center pt-15">
                            <div className="col-auto">
                              <div className="d-flex items-center">
                                <Image
                                  width={16}
                                  height={17}
                                  className="mr-8"
                                  src="/assets/img/coursesCards/icons/1.svg"
                                  alt="icon"
                                />
                                <div className="text-14 lh-1">
                                  {elm.lessonCount} lesson
                                </div>
                              </div>
                            </div>

                            <div className="col-auto">
                              <div className="d-flex items-center">
                                <Image
                                  width={16}
                                  height={17}
                                  className="mr-8"
                                  src="/assets/img/coursesCards/icons/2.svg"
                                  alt="icon"
                                />
                                <div className="text-14 lh-1">
                                  {`${Math.floor(
                                    elm.duration / 60
                                  )}h ${Math.floor(elm.duration % 60)}m`}
                                </div>
                              </div>
                            </div>

                            <div className="col-auto">
                              <div className="d-flex items-center">
                                <Image
                                  width={16}
                                  height={17}
                                  className="mr-8"
                                  src="/assets/img/coursesCards/icons/3.svg"
                                  alt="icon"
                                />
                                <div className="text-14 lh-1">{elm.level}</div>
                              </div>
                            </div>
                          </div>

                          <p className="text-dark-1 mt-15">
                            {elm.school}'s {elm.title} program provides
                            comprehensive training in this field.
                          </p>

                          <div className="row y-gap-15 pt-15">
                            <div className="col-12">
                              <div className="d-flex items-center">
                                <div className="size-20 d-flex items-center justify-center rounded-full border-light">
                                  <div className="icon-check text-6"></div>
                                </div>
                                <div className="ml-10">
                                  Comprehensive curriculum covering all key
                                  aspects
                                </div>
                              </div>
                            </div>

                            <div className="col-12">
                              <div className="d-flex items-center">
                                <div className="size-20 d-flex items-center justify-center rounded-full border-light">
                                  <div className="icon-check text-6"></div>
                                </div>
                                <div className="ml-10">
                                  Comprehensive curriculum covering all key
                                  aspects
                                </div>
                              </div>
                            </div>

                            <div className="col-12">
                              <div className="d-flex items-center">
                                <div className="size-20 d-flex items-center justify-center rounded-full border-light">
                                  <div className="icon-check text-6"></div>
                                </div>
                                <div className="ml-10">
                                  Hands-on practical training and exercises
                                </div>
                              </div>
                            </div>

                            <div className="col-12">
                              <div className="d-flex items-center">
                                <div className="size-20 d-flex items-center justify-center rounded-full border-light">
                                  <div className="icon-check text-6"></div>
                                </div>
                                <div className="ml-10">
                                  Industry-recognized certification upon
                                  completion
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              <div className="row justify-center pt-90 lg:pt-50">
                <div className="col-auto">
                  <PaginationTwo
                    pageNumber={pageNumber}
                    setPageNumber={setPageNumber}
                    data={sortedFilteredData}
                    pageCapacity={12}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
