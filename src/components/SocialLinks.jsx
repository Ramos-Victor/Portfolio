import { Github, Linkedin, Mail } from "lucide-react";

const ICONS = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
};

const SocialLinks = ({ links }) => (
  <div className="flex items-center gap-3">
    {links.map((item) => {
      const Icon = ICONS[item.label];
      return (
        <a
          key={item.label}
          href={item.url}
          target="_blank"
          rel="noreferrer"
          className="glass inline-flex rounded-full p-2 text-slate-700 transition hover:text-brand-400 dark:text-slate-300 dark:hover:text-brand-300"
          aria-label={item.label}
        >
          <Icon className="h-4 w-4" />
        </a>
      );
    })}
  </div>
);

export default SocialLinks;
