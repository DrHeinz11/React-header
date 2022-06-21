import "./Cta.css";
export default function Cta({ description, icon, url }) {
  return (
    <a href={url} className="container" target={"_blank"}>
      {description}
      {icon}
    </a>
  );
}
