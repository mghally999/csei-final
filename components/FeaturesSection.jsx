"use client";

import Image from "next/image";

export default function FeaturesSection() {
  return (
    <div className="features" id="features">
      {/* Independent header section */}
      <div className="section-header">
        <div className="container mx-auto text-center px-4">
          <h2 className="title">Features</h2>
          <p className="subtitle">Discover What Makes Our Students Different</p>
        </div>
      </div>

      {/* Features grid - completely separate */}
      <div className="features-grid">
        <div className="container">
          {/* Quality Box */}
          <div className="box quality">
            <div className="img-holder">
              <Image
                src="https://plus.unsplash.com/premium_photo-1682787494977-d013bb5a8773?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Quality Education"
                width={500}
                height={300}
                decoding="async"
              />
            </div>
            <h2>Learn</h2>
            <p>
              CSEI Academy offers UK Ofqual-recognized and KHDA-approved courses
              in IT, healthcare, tourism, and more—delivered through blended and
              in-person classes in Dubai. This approach allows you to balance
              your studies with your placement while gaining practical
              experience and personalized support to build confidence and
              real-world skills for a successful future.
            </p>
          </div>

          {/* Time Box */}
          <div className="box time">
            <div className="img-holder">
              <Image
                src="https://plus.unsplash.com/premium_photo-1682787494977-d013bb5a8773?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Flexible Timing"
                width={500}
                height={300}
                decoding="async"
              />
            </div>
            <h2>Be Qualified</h2>
            <p>
              Celebrate your achievements with us! When you graduate from CSEI
              Academy, we are proud to support you every step of the way—from
              your first class to graduation day and beyond. With our pathways
              to globally accepted bachelor's degrees and strong industry
              connections, you'll be ready to take on new challenges and reach
              your goals.
            </p>
          </div>

          {/* Passion Box */}
          <div className="box passion">
            <div className="img-holder">
              <Image
                src="https://plus.unsplash.com/premium_photo-1682787494977-d013bb5a8773?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Passionate Teaching"
                width={500}
                height={300}
                decoding="async"
              />
            </div>
            <h2>Work in Dubai</h2>
            <p>
              Imagine building your career in one of the world's most dynamic
              cities. Dubai is full of opportunities, and we'll help you make
              the most of them by leveraging your strengths and skills.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Features Section */
        .features {
          padding-top: 100px;
          padding-bottom: 100px;
          position: relative;
          background: linear-gradient(
            180deg,
            rgb(255, 255, 255) 0%,
            rgb(240, 248, 255) 25%,
            rgb(219, 234, 254) 50%,
            rgb(180, 210, 255) 75%,
            rgb(134, 179, 247) 100%
          ) !important;
        }

        /* Header Section - completely independent */
        .section-header {
          padding: 80px 0;
          text-align: center;
          width: 100%;
        }

        .section-header .container {
          max-width: 800px;
          margin: 0 auto;
        }

        .title {
          font-size: 42px;
          font-weight: 700;
          color: #000;
          margin-bottom: 15px;
          position: relative;
          display: inline-block;
        }

        // .title::after {
        //   content: "";
        //   position: absolute;
        //   bottom: -10px;
        //   left: 50%;
        //   transform: translateX(-50%);
        //   width: 80px;
        //   height: 4px;
        //   background: #2196f3;
        // }

        .subtitle {
          font-size: 18px;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
        }

        /* Features Grid Section */
        .features-grid {
          // padding: 40px 0;
        }

        .features-grid .container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 40px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Box Styles - with all original animations */
        .box {
          text-align: center;
          border: 1px solid #000000;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          padding: 30px;
        }

        .box:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .img-holder {
          position: relative;
          overflow: hidden;
          border-radius: 8px;
          height: 150px;
          margin-bottom: 20px;
        }

        .img-holder::before {
          content: "";
          position: absolute;
          left: 0;
          top: -1px;
          width: 100%;
          height: 100%;
          transition: all 0.5s ease;
        }

        .img-holder::after {
          content: "";
          position: absolute;
          bottom: 0;
          right: 0;
          border-style: solid;
          border-width: 0px 0px 170px 500px;
          border-color: transparent transparent white transparent;
          transition: var(--main-transition);
        }

        .img-holder img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .box:hover .img-holder img {
          transform: scale(1.05);
        }

        .box:hover .img-holder::before {
          opacity: 0.7;
        }

        .box:hover .img-holder::after {
          border-width: 170px 500px 170px 0;
        }

        .box h2 {
          font-size: 28px;
          font-weight: 600;
          margin-bottom: 20px;
          position: relative;
          transition: all 0.3s ease;
        }

        .box:hover h2 {
          transform: scale(1.03);
        }

        .box h2::after {
          content: "";
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 50px;
          height: 3px;
          transition: all 0.3s ease;
        }

        .box p {
          font-size: 16px;
          line-height: 1.6;
          margin-bottom: 25px;
          color: #000000;
          transition: all 0.3s ease;
          font-weight: 800;
        }

        .box:hover p {
          color: #000000;
        }

        .box a {
          display: inline-block;
          padding: 10px 25px;
          border-radius: 6px;
          font-weight: 600;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        /* Quality Box */
        .quality .img-holder::before {
          background-color: rgb(244 64 54 / 60%);
        }
        .quality h2::after {
          background-color: #f44036;
        }
        .quality a {
          color: #f44036;
          border: 2px solid #f44036;
          background: linear-gradient(to right, #f44036 50%, white 50%);
          background-size: 200% 100%;
          background-position: right bottom;
        }
        .quality a:hover {
          background-position: left bottom;
          color: white;
        }

        /* Time Box */
        .time .img-holder::before {
          background-color: rgb(0 150 136 / 60%);
        }
        .time h2::after {
          background-color: #009688;
        }
        .time a {
          color: #009688;
          border: 2px solid #009688;
          background: linear-gradient(to right, #009688 50%, white 50%);
          background-size: 200% 100%;
          background-position: right bottom;
        }
        .time a:hover {
          background-position: left bottom;
          color: white;
        }

        /* Passion Box */
        .passion .img-holder::before {
          background-color: rgb(3 169 244 / 60%);
        }
        .passion h2::after {
          background-color: #03a9f4;
        }
        .passion a {
          color: #03a9f4;
          border: 2px solid #03a9f4;
          background: linear-gradient(to right, #03a9f4 50%, white 50%);
          background-size: 200% 100%;
          background-position: right bottom;
        }
        .passion a:hover {
          background-position: left bottom;
          color: white;
        }

        /* CSS Variables */
        :root {
          --main-color: #2196f3;
          --main-transition: 0.3s;
          --main-padding-top: 100px;
          --main-padding-bottom: 100px;
        }
      `}</style>
    </div>
  );
}
