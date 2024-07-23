import "./Navbar.css";
import navLogo from "../../assets/nav-logo.svg";
import navProfileIcon from "../../assets/nav-profile.svg";

export default function Navbar() {
  return (
    <div className="nav-bar">
      <img className="nav-logo" alt="logo" src={navLogo} />
      <img className="nav-profile" alt="logo" src={navProfileIcon} />
    </div>
  );
}
