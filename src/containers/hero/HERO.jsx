import { Cta, Infocard } from "../../components/Export";
import "./HERO.css";
import Figure from "../../assets/img/Vector1.png";
import { IoIosCall } from "react-icons/io";

export default function HERO() {
  return (
    <div className="hero">
      <div className="hero__copy">
        <p className="copy__head">Hi,There</p>
        <h1 className="copy__title">
          I am
          <br /> Franc Martin
        </h1>
        <h3 className="copy__subtitle">I am designer during daytime</h3>
        <h5 className="copy__subtitle--light"> & work with batman during the night.</h5>
        <Cta
          description={"task me"}
          url={
            "https://www.youtube.com/watch?v=LmldFbeSTFc&list=PL3aEngjGbYhkg3AR-cytsvQIIGp1JgrY_&index=9&ab_channel=Desarrollo%C3%9Atil"
          }
          icon={<IoIosCall className="icon" />}
        />
      </div>
      <img src={Figure} alt="figure-head" className="hero__figure" />
      <div className="infocard__container">
        <Infocard
          info={"@fran.martin11"}
          title={"Social Media"}
          url={"https://www.instagram.com/fran.martin11/"}
        />
        <Infocard
          url={"https://react-icons.github.io/react-icons/search?q=call"}
          info={"main.francomartin@gmail.com"}
          title={"Email"}
        />
        <Infocard info={"Buenos Aires, AR"} title={"Location"} />
      </div>
    </div>
  );
}
