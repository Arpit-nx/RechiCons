import {
  Phone,
  Mail,
  MapPin,
  Globe,
  User,
  ChevronRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

// import footerBg from "./footer-bg.png";

const companyLinks = [
  "Home",
  "About Us",
  "Other Services",
  "Enquiry",
  "Contact Us",
];

const projectLinks = [
  "Completed Projects",
  "Ongoing Projects",
  "Upcoming Projects",
];

const features = [
  "Quality Construction",
  "Trusted by Clients",
  "Timely Project Delivery",
  "Experienced Professionals",
];

function FooterTitle({ children }) {
  return (
    <div className="mb-7">
      <h3 className="text-xl md:text-2xl font-bold text-white">
        {children}
      </h3>
      <div className="mt-3 w-14 h-1 bg-yellow-500 rounded-full"></div>
    </div>
  );
}

function FooterLinks({ links }) {
  return (
    <ul className="space-y-3.5">
      {links.map((item) => (
        <li key={item}>
          <a
            href="#"
            className="group flex items-center gap-2.5 text-gray-300 transition hover:text-yellow-400"
          >
            <ChevronRight
              size={15}
              className="text-yellow-500 group-hover:translate-x-1 transition"
            />
            <span className="text-[15px]">{item}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

function ContactItem({ icon: Icon, title, children }) {
  return (
    <div className="flex items-start gap-3.5">
      <div className="w-10 h-10 rounded-full bg-[#1f1f1f] flex items-center justify-center flex-shrink-0">
        <Icon size={16} className="text-yellow-500" />
      </div>
      <div>
        <p className="uppercase text-[11px] tracking-widest text-gray-400 mb-1">
          {title}
        </p>
        <div className="text-gray-300 text-[15px] leading-6">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${footerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12">

          {/* ==================== Company ==================== */}
          <div className="lg:col-span-4">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Rechi
              <br />
              Construction
            </h2>

            <div className="w-16 h-1 bg-yellow-500 rounded-full mt-4 mb-5"></div>

            <p className="text-gray-300 leading-7 text-[15px] max-w-[340px]">
              Rechi Construction (P) Ltd. delivers premium residential,
              commercial, industrial and infrastructure projects with quality
              workmanship, innovation, integrity and timely completion.
            </p>

            <div className="mt-7 space-y-2.5">
              {features.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <ChevronRight size={15} className="text-yellow-500 shrink-0" />
                  <span className="text-gray-200 text-[15px]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ==================== About Company ==================== */}
          <div className="lg:col-span-2">
            <FooterTitle>About Company</FooterTitle>
            <FooterLinks links={companyLinks} />
          </div>

          {/* ==================== Our Projects ==================== */}
          <div className="lg:col-span-2">
            <FooterTitle>Our Projects</FooterTitle>
            <FooterLinks links={projectLinks} />
          </div>

          {/* ==================== Locate Us ==================== */}
          <div className="lg:col-span-4">
            <FooterTitle>Locate Us</FooterTitle>

            <div className="space-y-5">
              <ContactItem icon={MapPin} title="Office">
                <p className="font-semibold text-white">
                  Rechi Construction (P) Ltd.
                </p>
                <p className="text-gray-300">
                  220 (Formerly 213)
                  <br />
                  Dum Dum Park
                  <br />
                  Near Boys High School
                  <br />
                  Kolkata - 700055
                </p>
              </ContactItem>

              <ContactItem icon={User} title="Contact Person">
                <p>Mr. Saijan Kr. Mandal</p>
              </ContactItem>

              <ContactItem icon={Phone} title="Phone">
                <a
                  href="tel:+919051800151"
                  className="hover:text-yellow-400 transition"
                >
                  +91 90518 00151
                </a>
              </ContactItem>

              <ContactItem icon={Mail} title="Email">
                <a
                  href="mailto:rechiconstruction@yahoo.in"
                  className="block hover:text-yellow-400 transition"
                >
                  rechiconstruction@yahoo.in
                </a>
                <a
                  href="mailto:info@rechiconstruction.in"
                  className="block hover:text-yellow-400 transition"
                >
                  info@rechiconstruction.in
                </a>
              </ContactItem>

              <ContactItem icon={Globe} title="Website">
                <a
                  href="https://www.rechiconstruction.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition"
                >
                  www.rechiconstruction.in
                </a>
              </ContactItem>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-8">
              {[
                { Icon: FaFacebookF, href: "#" },
                { Icon: FaTwitter, href: "#" },
                { Icon: FaLinkedinIn, href: "#" },
                { Icon: FaInstagram, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-10 h-10 rounded-full bg-[#1f1f1f] border border-gray-700 hover:bg-yellow-500 hover:text-black transition duration-300 flex items-center justify-center"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ==================== Bottom Bar ==================== */}
        <div className="border-t border-gray-700/80 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} Rechi Construction (P) Ltd. All
              Rights Reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-5 text-sm">
              {["Privacy Policy", "Terms & Conditions", "Sitemap", "Contact Us"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-gray-400 hover:text-yellow-400 transition"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}