import Topnavlink from "../../components/topnavlink/Topnavlink";
import "./TOPNAV.css";
export default function TOPNAV() {
  return (
    <div className="topnav">
      <div className="link__container">
        <Topnavlink id={"link__anchor"} text={"portafolio"} />
        <Topnavlink id={"link__anchor"} text={"about me"} />
        <Topnavlink text={"my blog"} id={"link__anchor"} />
        <Topnavlink text={"review"} id={"link__anchor"} />
        <Topnavlink text={"contact me"} id={"link__anchor"} />
      </div>
      <Topnavlink className='prueba' text={"schedudle a"} />
    </div>
  );
}
