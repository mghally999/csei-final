import React from "react";
import Link from "next/link";
export default function MobileFooter() {
  return (
    <>
      <div className="mobile-footer px-20 py-20 border-top-light js-mobile-footer">
        <div className="mobile-footer__number">
          <div className="text-17 fw-500 text-dark-1">Call us</div>
          <div className="text-17 fw-500 text-purple-1">+(971)543185454</div>
        </div>

        <div className="lh-2 mt-10">
          <div>
            <strong> Corporate Office: </strong> <br /> Al Manama St - Academic
            City - Dubai Outsource City - Dubai Building 4 - Campus No. 205
            <br /> Dubai, United Arab Emirates.
          </div>
          <div>admission@cseiacademy.ae</div>
        </div>
      </div>
    </>
  );
}
