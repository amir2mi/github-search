import { Navigation } from "../../components";

const navigationLinks = [
  { title: "Home", to: "/" },
  { title: "About", to: "/about" },
];

export default function Header() {
  return (
    <header className="main-header">
      <Navigation links={navigationLinks} />
    </header>
  );
}
