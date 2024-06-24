import HeaderLogo from "./HeaderLogo";
import HeaderSearchbar from "./HeaderSearchbar";
import HeaderDonateArea from "./HeaderDonateArea";

export default function Header() {
  return (
    <header>
      <HeaderLogo />
      <HeaderSearchbar />
      <HeaderDonateArea />
    </header>
  );
}
