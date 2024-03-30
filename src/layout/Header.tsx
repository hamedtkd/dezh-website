import Link from "components/ui/Link";
import { links } from "./links";

export function Header() {
  return (
    <header className="container mx-auto px-10  border-b border-secondary py-6">
      <nav className="flex justify-between items-center">
        <a href="/">
          <img src="/logo.svg" alt="Logo" />
        </a>
        <ul className="list-disc  gap-9 md:flex hidden">
          {links.map((link, key) => (
            <li key={key}>
              <Link href={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <Link variant="primary" href="#contact">
          Contact us
        </Link>
      </nav>
    </header>
  );
}