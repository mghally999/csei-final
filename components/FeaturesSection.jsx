"use client";

import Image from "next/image";

export default function FeaturesSection() {
  return (
    <div className="features" id="features">
      <h2 className="main-title">Features</h2>
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
          <h2>Quality</h2>
          <p>
            Next Learn CSEI Academy offers UK Ofqual-recognized and
            KHDA-approved courses, ensuring the highest standards in education
            and certification.
          </p>
          <a href="#">More</a>
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
          <h2>Time</h2>
          <p>
            Our blended and in-person classes in Dubai allow you to balance your
            studies with your placement, optimizing your time effectively.
          </p>
          <a href="#">More</a>
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
          <h2>Passion</h2>
          <p>
            We provide personalized support to build confidence and real-world
            skills, delivered by passionate educators committed to your success.
          </p>
          <a href="#">More</a>
        </div>
      </div>

      <style jsx>{`
        /* Features Section Styles */
        .features {
          padding-top: var(--main-padding-top);
          padding-bottom: var(--main-padding-bottom);
          position: relative;
          background-color: white;
          overflow: hidden;
        }

        .features .container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 40px;
        }

        .features .box {
          text-align: center;
          border: 1px solid #ccc;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
          background: white;
          transform: translateY(0);
        }

        .features .box:hover {
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
        }

        .features .box .img-holder {
          position: relative;
          overflow: hidden;
          height: 200px;
        }

        .features .box .img-holder::before {
          content: "";
          position: absolute;
          left: 0;
          top: -1px;
          width: 100%;
          height: 100%;
          transition: all 0.5s ease;
        }

        .features .box .img-holder::after {
          content: "";
          position: absolute;
          bottom: 0;
          right: 0;
          border-style: solid;
          border-width: 0px 0px 170px 500px;
          border-color: transparent transparent white transparent;
          transition: var(--main-transition);
        }

        .features .box .img-holder img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        .features .box:hover .img-holder img {
          transform: scale(1.05);
        }

        .features .box:hover .img-holder::before {
          opacity: 0.7;
        }

        .features .box:hover .img-holder::after {
          border-width: 170px 500px 170px 0;
        }

        .features .box h2 {
          position: relative;
          font-size: 40px;
          margin: 30px auto 20px;
          width: fit-content;
          transition: all 0.3s ease;
        }

        .features .box:hover h2 {
          transform: scale(1.03);
        }

        .features .box h2::after {
          content: "";
          position: absolute;
          bottom: -20px;
          left: 15px;
          height: 5px;
          width: calc(100% - 30px);
          transition: all 0.3s ease;
        }

        .features .box p {
          line-height: 2;
          font-size: 20px;
          margin: 30px 0;
          padding: 0 25px;
          color: #777;
          transition: all 0.3s ease;
        }

        .features .box:hover p {
          color: #555;
        }

        .features .box a {
          display: block;
          border: 3px solid transparent;
          width: fit-content;
          margin: 0 auto 30px;
          font-weight: bold;
          font-size: 22px;
          padding: 10px 30px;
          border-radius: 6px;
          transition: var(--main-transition);
          position: relative;
          overflow: hidden;
        }

        /* Quality Box Specific Styles */
        .features .quality .img-holder::before {
          background-color: rgb(244 64 54 / 60%);
        }

        .features .quality h2::after {
          background-color: #f44036;
        }

        .features .quality a {
          color: #f44036;
          border-color: #f44036;
          background: linear-gradient(to right, #f44036 50%, white 50%);
          background-size: 200% 100%;
          background-position: right bottom;
        }

        /* Time Box Specific Styles */
        .features .time .img-holder::before {
          background-color: rgb(0 150 136 / 60%);
        }

        .features .time h2::after {
          background-color: #009688;
        }

        .features .time a {
          color: #009688;
          border-color: #009688;
          background: linear-gradient(to right, #009688 50%, white 50%);
          background-size: 200% 100%;
          background-position: right bottom;
        }

        /* Passion Box Specific Styles */
        .features .passion .img-holder::before {
          background-color: rgb(3 169 244 / 60%);
        }

        .features .passion h2::after {
          background-color: #03a9f4;
        }

        .features .passion a {
          color: #03a9f4;
          border-color: #03a9f4;
          background: linear-gradient(to right, #03a9f4 50%, white 50%);
          background-size: 200% 100%;
          background-position: right bottom;
        }

        /* Hover Effects */
        .features .box:hover a {
          background-position: left bottom;
          color: white;
        }

        /* Main Title Styles */
        .main-title {
          text-transform: uppercase;
          margin: 0 auto 80px;
          border: 2px solid black;
          padding: 10px 20px;
          font-size: 30px;
          width: fit-content;
          position: relative;
          z-index: 1;
          transition: var(--main-transition);
          transform-origin: center;
        }

        .main-title::before,
        .main-title::after {
          content: "";
          width: 12px;
          height: 12px;
          background-color: var(--main-color);
          position: absolute;
          border-radius: 50%;
          top: 50%;
          transform: translateY(-50%);
          transition: all 0.3s ease;
        }

        .main-title::before {
          left: -30px;
        }

        .main-title::after {
          right: -30px;
        }

        .main-title:hover::before {
          z-index: -1;
          animation: left-move 0.5s linear forwards;
        }

        .main-title:hover::after {
          z-index: -1;
          animation: right-move 0.5s linear forwards;
        }

        .main-title:hover {
          color: white;
          border: 2px solid white;
          transition-delay: 0.5s;
        }

        /* Animation Keyframes */
        @keyframes left-move {
          50% {
            left: 0;
            width: 12px;
            height: 12px;
          }
          100% {
            left: 0;
            border-radius: 0;
            width: 50%;
            height: 100%;
          }
        }

        @keyframes right-move {
          50% {
            right: 0;
            width: 12px;
            height: 12px;
          }
          100% {
            right: 0;
            border-radius: 0;
            width: 50%;
            height: 100%;
          }
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
