import React from "react";

export default function Terms() {
  return (
    <>
      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          {/* Moved the header inside the layout container */}
          <div className="container">
            <div className="page-header__content">
              <div className="row justify-center text-center">
                <div className="col-auto">
                  <div>
                    <h1 className="page-header__title">
                      Fee Payment and Policies
                    </h1>
                  </div>

                  <div>
                    <p className="page-header__text mb-50">
                      Transparent and efficient payment procedures for our
                      students
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-center">
            <div className="col-xl-8 col-lg-9 col-md-11">
              <h5>Fee Structure</h5>
              <p className="mt-30">
                Our fee structure is designed to be both comprehensive and
                competitive, reflecting the quality of education and resources
                we provide. Fees are categorized into the following components:
              </p>
              <ul className="mt-20">
                <li>
                  <strong>Tuition Fees:</strong> The core cost for the academic
                  program.
                </li>
                <li>
                  <strong>Registration Fees:</strong> A one-time fee charged at
                  the time of admission.
                </li>
                <li>
                  <strong>Activity Fees:</strong> Charges associated with
                  extracurricular and co-curricular programs.
                </li>
                <li>
                  <strong>Library Fees:</strong> For access to library
                  resources, including books and digital media.
                </li>
                <li>
                  <strong>Other Miscellaneous Fees:</strong> Any additional
                  costs for special programs, events, or resources.
                </li>
              </ul>
              <p className="mt-20">
                A detailed breakdown of all fees can be obtained upon request or
                from the student admission office.
              </p>
            </div>

            <div className="col-xl-8 col-lg-9 col-md-11">
              <div className="mt-60 lg:mt-40">
                <h5>Accepted Payment Methods</h5>
                <p className="mt-30">
                  We accept a variety of payment methods for the convenience of
                  our students and parents:
                </p>
                <ul className="mt-20">
                  <li>
                    <strong>Bank Transfer:</strong> Payment can be made directly
                    to our academy's bank account.
                  </li>
                  <li>
                    <strong>Credit/Debit Card:</strong> Payments can be
                    processed via our secure online payment portal.
                  </li>
                  <li>
                    <strong>Checks:</strong> For certain fees, checks may be
                    accepted, but prior approval is required.
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-8 col-lg-9 col-md-11">
              <div className="mt-60 lg:mt-40">
                <h5>Payment Schedule</h5>
                <p className="mt-30">
                  <strong>Initial Payment:</strong> Upon acceptance of the
                  offer, a deposit (typically 10-20% of the total fee) is
                  required to confirm enrollment. This deposit is non-refundable
                  but will be deducted from the total fee amount.
                </p>
                <p className="mt-20">
                  <strong>Payment Deadlines:</strong> Fees are typically due in
                  full before the start of each term or semester. Specific due
                  dates will be communicated during the admission process. In
                  cases of financial assistance or special payment arrangements,
                  customized deadlines can be discussed.
                </p>
                <p className="mt-20">
                  <strong>Late Payment:</strong> Payments not received by the
                  due date will incur a late fee. If a payment remains
                  outstanding for more than 15 days, the student's enrollment
                  may be subject to suspension until the balance is settled.
                </p>
              </div>
            </div>

            <div className="col-xl-8 col-lg-9 col-md-11">
              <div className="mt-60 lg:mt-40">
                <h5>Refund Policy</h5>
                <p className="mt-30">
                  <strong>Refunds for Withdrawals:</strong> If a student
                  withdraws from the academy before the start of the term, a
                  refund (minus the registration fee and applicable
                  administration charges) will be processed. Refund requests
                  must be made in writing.
                </p>
                <p className="mt-20">
                  <strong>No Refunds:</strong> Fees for activities, books, and
                  other non-tuition charges are non-refundable once paid.
                </p>
              </div>
            </div>

            <div className="col-xl-8 col-lg-9 col-md-11">
              <div className="mt-60 lg:mt-40">
                <h5>Bank Details</h5>
                <p className="mt-30">
                  <strong>Bank Name:</strong> ADCB
                  <br />
                  <strong>Account Name:</strong> Creative Star Education
                  Institutes Academy FZ-LLC
                  <br />
                  <strong>Account Number:</strong> 13502627820001
                  <br />
                  <strong>IBAN:</strong> AE160030013502627820001
                  <br />
                  <strong>Branch:</strong> ADCB Al Riga Branch Dubai UAE
                  <br />
                  <strong>Swift code:</strong> ADCBAEAA
                </p>
              </div>
            </div>

            <div className="col-xl-8 col-lg-9 col-md-11">
              <div className="mt-60 lg:mt-40">
                <h5>Important Notes</h5>
                <p className="mt-30">
                  <strong>Non-Transferability:</strong> Fees are
                  non-transferable and apply solely to the enrolled student.
                </p>
                <p className="mt-20">
                  <strong>Compliance:</strong> Students are expected to settle
                  all fees promptly. Non-payment may affect the ability to
                  participate in academic or extracurricular activities and may
                  result in academic suspension or exclusion.
                </p>
                <p className="mt-20">
                  If you have any questions about the fee structure, payment
                  options, or policies, please feel free to contact our
                  administration team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
