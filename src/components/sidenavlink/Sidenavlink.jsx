import Style from "./Sidenavlink.module.css";

export default function Sidenavlink({ srcIcon, url }) {
  return (
    <a href={url} target={"_blank"} className={Style.container}>
      {srcIcon}
    </a>
  );
}
