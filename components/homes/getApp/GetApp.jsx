import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function GetApp() {
  return (
    <section className="layout-pt-lg layout-pb-lg bg-light-3">
      <div className="container">
        <div className="row y-gap-20 items-center">
          <div className="col-xl-7 col-lg-7">
            <div
              className="app-image"
              data-aos="fade-up"
              data-aos-duration={400}
            >
              <Image
                width={600}
                height={400}
                // style={{ height: "100%", width: "100%" }}
                src="/assets/img/app/website-mobile-app.png"
                alt="image"
              />
            </div>
          </div>

          <div className="col-lg-5">
            <div className="app-content">
              <h2
                className="app-content__title"
                data-aos="fade-up"
                data-aos-duration={500}
              >
                <span>Engage </span>
                <span>Create </span>
                <span>Transform</span>
              </h2>
              <div className="app-content__buttons">
                <Link href="#">
                  <Image
                    width={210}
                    height={60}
                    style={{ height: "100%", width: "100%" }}
                    src="/assets/img/app/buttons/1.svg"
                    alt="button"
                    data-aos="fade-up"
                    data-aos-duration={600}
                  />
                </Link>
                <Link href="#">
                  <Image
                    width={190}
                    height={60}
                    style={{ height: "100%", width: "100%" }}
                    src="/assets/img/app/buttons/2.svg"
                    alt="button"
                    data-aos="fade-up"
                    data-aos-duration={600}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
