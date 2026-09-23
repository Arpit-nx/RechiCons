import React from "react";

export default function PrivacyPolicy() {
  const lastUpdated = "September 2026";

  return (
    <div className="w-full bg-[#fff8ef] text-[#3a2012] min-h-screen py-12 md:py-16 px-6 lg:px-12 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section (Matching Website Section Style) */}
        <div className="text-center mb-12 space-y-3">
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-12 bg-[#e5a652]/60" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#e5a652]">
              Legal Terms
            </span>
            <div className="h-[1px] w-12 bg-[#e5a652]/60" />
          </div>
          
          <h1
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#2a170d] uppercase"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Privacy Policy
          </h1>
          
          <p className="text-xs sm:text-sm text-[#8c6d58]">
            Last Updated: {lastUpdated} |{" "}
            <span className="font-semibold text-[#2a170d]">
              Rechi Construction Pvt. Ltd.
            </span>
          </p>
        </div>

        {/* Content Section (Directly on Cream Background) */}
        <div className="space-y-8 text-sm sm:text-base text-[#4a3528] leading-relaxed">
          
          {/* Section 1 */}
          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-[#2a170d]">
              1. Introduction
            </h2>
            <p>
              Welcome to <strong>Rechi Construction Pvt. Ltd.</strong> (“we,” “our,” or “us”). We respect your privacy and are committed to protecting any personal information you share with us through our website. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our site or submit enquiries regarding our residential or commercial projects.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-[#2a170d]">
              2. Information We Collect
            </h2>
            <p>
              We collect information that you voluntarily provide to us when expressing interest in our projects, submitting an enquiry form, or contacting us directly.
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#4a3528]">
              <li>
                <strong>Personal Data:</strong> Name, phone number, email address, and mailing address.
              </li>
              <li>
                <strong>Property Enquiries:</strong> Preferred location, budget, project category (ongoing/upcoming), or custom requests.
              </li>
              <li>
                <strong>Automated Data:</strong> Basic browser information, IP address, and device metadata via standard cookies for site analytics.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-[#2a170d]">
              3. How We Use Your Information
            </h2>
            <p>
              We use the collected information solely for business communication and customer support, including:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#4a3528]">
              <li>Responding to your project enquiries and floor plan requests.</li>
              <li>Providing updates regarding site visits, project milestones, or upcoming developments.</li>
              <li>Improving our website functionality and user experience.</li>
              <li>Complying with applicable legal and statutory requirements.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-[#2a170d]">
              4. Data Sharing & Confidentiality
            </h2>
            <p>
              We value your privacy. <strong>We do not sell, trade, or rent your personal information to third parties.</strong>
            </p>
            <p>
              Your data is accessed only by authorized representatives of Rechi Construction Pvt. Ltd. for the purpose of fulfilling your service requests. We may disclose personal information if required by law or to respond to valid court orders/subpoenas.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-[#2a170d]">
              5. Cookies & Tracking Technologies
            </h2>
            <p>
              Our website may use standard cookies to analyze web traffic and optimize site performance. You can choose to disable cookies through your browser settings, though some website features may operate at reduced functionality.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-[#2a170d]">
              6. Data Security
            </h2>
            <p>
              We implement reasonable administrative, technical, and physical security measures to safeguard your personal details against unauthorized access, loss, or alteration.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3 pt-4 border-t border-[#e8dcd0]">
            <h2 className="text-lg sm:text-xl font-bold text-[#2a170d]">
              7. Contact Us
            </h2>
            <p>
              If you have any questions or concerns regarding this Privacy Policy or how your data is handled, please contact us:
            </p>

            <div className="pt-2 text-sm space-y-1 text-[#3a2012]">
              <p className="font-bold text-[#2a170d]">Rechi Construction Pvt. Ltd.</p>
              <p>220, Dum Dum Park, Near Boys High School, Kolkata 700055.</p>
              <p>
                <strong>Contact Person:</strong> Mr. Sajjan Kr. Mandal
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:+919051800151"
                  className="text-[#e5a652] font-semibold hover:underline"
                >
                  +91 9051800151
                </a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:rechiconstruction@yahoo.in"
                  className="text-[#e5a652] font-semibold hover:underline"
                >
                  rechiconstruction@yahoo.in
                </a>
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}