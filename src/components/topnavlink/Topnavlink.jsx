import "./Topnavlink.css";
export default function Topnavlink({ url, text, id }) {
  return (
    <a href={url} className={id} target={"_blank"}>
      {text}
    </a>
  );
}
