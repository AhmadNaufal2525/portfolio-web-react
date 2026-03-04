import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const links = [
  {
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=ahmadnaufal588@gmail.com&su=Job%20Opportunity%20and%20Discussion",
    icon: <HiOutlineMail size={16} />,
  },
  {
    href: "https://www.linkedin.com/in/ahmadnaufal25/",
    icon: <FaLinkedin size={16} />,
  },
  { href: "https://github.com/AhmadNaufal2525", icon: <FaGithub size={16} /> },
];

const ConnectCard = () => (
  <div
    data-aos="fade-right"
    data-aos-delay="150"
    className="rounded-2xl p-5"
    style={{
      background: "linear-gradient(135deg, #3b52e0 0%, #5067FF 100%)",
      border: "1px solid rgba(255,255,255,0.15)",
    }}
  >
    <h3 className="text-white font-bold text-base mb-1">Let's Connect</h3>
    <p className="text-blue-200 text-sm mb-4">
      Open to freelance opportunities and coffee chats.
    </p>
    <div className="flex gap-3">
      {links.map((s, i) => (
        <a
          key={i}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-full flex items-center justify-center text-white transition-all duration-200"
          style={{ background: "rgba(255,255,255,0.2)" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.35)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.2)";
          }}
        >
          {s.icon}
        </a>
      ))}
    </div>
  </div>
);

export default ConnectCard;
