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
      <h3 className="text-xl md:text-2xl font-bold text-[#fff7eb]">
        {children}
      </h3>
      <div className="mt-3 w-14 h-1 bg-[#c9862d] rounded-full"></div>
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
            className="group flex items-center gap-2.5 text-[#ebd7b8] transition hover:text-[#ffd28b]"
          >
            <ChevronRight
              size={15}
              className="text-[#c9862d] group-hover:translate-x-1 transition"
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
      <div className="w-10 h-10 rounded-full bg-[#7a3d10]/80 flex items-center justify-center flex-shrink-0">
        <Icon size={16} className="text-[#ffd28b]" />
      </div>
      <div>
        <p className="uppercase text-[11px] tracking-widest text-[#d9b98a] mb-1">
          {title}
        </p>
        <div className="text-[#f4e1c5] text-[15px] leading-6">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden text-[#fff8ef]">
      {/* Background Decorative Layer */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_left,_rgba(201,134,45,0.18),_transparent_45%)]" />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#3f220f]/90 z-0" />

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

            <div className="w-16 h-1 bg-[#c9862d] rounded-full mt-4 mb-5"></div>

            <p className="text-[#f2dfc0] leading-7 text-[15px] max-w-[340px]">
              Rechi Construction (P) Ltd. delivers premium residential,
              commercial, industrial and infrastructure projects with quality
              workmanship, innovation, integrity and timely completion.
            </p>

            <div className="mt-7 space-y-2.5">
              {features.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <ChevronRight size={15} className="text-[#c9862d] shrink-0" />
                  <span className="text-[#f2dfc0] text-[15px]">{item}</span>
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
          <div className="lg:col-span-4 lg:pl-8 xl:pl-12">
            <FooterTitle>Locate Us</FooterTitle>

            <div className="space-y-5">
              <ContactItem icon={MapPin} title="Office">
                <p className="font-semibold text-[#fff7eb]">
                  Rechi Construction (P) Ltd.
                </p>
                <p className="text-[#f2dfc0]">
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
                  className="hover:text-[#ffd28b] transition"
                >
                  +91 90518 00151
                </a>
              </ContactItem>

              <ContactItem icon={Mail} title="Email">
                <a
                  href="mailto:rechiconstruction@yahoo.in"
                  className="block hover:text-[#ffd28b] transition"
                >
                  rechiconstruction@yahoo.in
                </a>
                <a
                  href="mailto:info@rechiconstruction.in"
                  className="block hover:text-[#ffd28b] transition"
                >
                  info@rechiconstruction.in
                </a>
              </ContactItem>

              <ContactItem icon={Globe} title="Website">
                <a
                  href="https://www.rechiconstruction.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ffd28b] transition"
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
                  className="w-10 h-10 rounded-full bg-[#7a3d10]/80 border border-[#a76624] hover:bg-[#c9862d] hover:text-[#2b1406] transition duration-300 flex items-center justify-center"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ==================== Bottom Bar ==================== */}
        <div className="border-t border-[#8f5a2c]/70 mt-12 pt-6">
          <p className="text-sm text-[#d6b07d] text-center leading-relaxed">
            Copyright © {new Date().getFullYear()} and All Right Reserved by Rechi Construction. Website developed by TEAM LOGIC.
          </p>
        </div>
      </div>
    </footer>
  );
}