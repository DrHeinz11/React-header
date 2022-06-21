import Style from "./SIDENAV.module.css";
import { Sidenavlink } from "../../components/Export";
import { BsVimeo } from "react-icons/bs";
import logo  from "./logo.svg";
import {
  FaLinkedin,
  FaBehanceSquare,
  FaDribbble,
  FaTwitter,
} from "react-icons/fa";
export default function SIDENAV() {
  return (
    <div className={Style.sidebar}>
      <a href={"#index"}>
        <img src={logo} alt="Logo" className={Style.logo} />
      </a>
      <div className={Style.link__container}>
        <Sidenavlink
          url={"https://www.instagram.com/p/B4lSXJqHrHG/"}
          srcIcon={<FaTwitter className={Style.icon__call} />}
        />
        <Sidenavlink
          url={"https://www.instagram.com/p/B4lSXJqHrHG/"}
          srcIcon={<FaDribbble className={Style.icon__call} />}
        />
        <Sidenavlink
          url={"https://www.instagram.com/p/B4lSXJqHrHG/"}
          srcIcon={<FaBehanceSquare className={Style.icon__call} />}
        />
        <Sidenavlink
          url={"https://www.instagram.com/p/B4lSXJqHrHG/"}
          srcIcon={<BsVimeo className={Style.icon__call} />}
        />
        <Sidenavlink
          url={"https://www.instagram.com/p/B4lSXJqHrHG/"}
          srcIcon={<FaLinkedin className={Style.icon__call} />}
        />
      </div>
    </div>
  );
}
