import Style from "./Infocard.module.css";

const Infocard = ({ title, info, url }) => {
  return (
    <div className={Style.container}>
      <h2 className={Style.title}>{title}</h2>
      <a href={url} target={'_blank'} className={Style.info}>{info}</a>
    </div>
  );
};

export default Infocard;
