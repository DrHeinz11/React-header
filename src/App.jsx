import Styles from "./App.module.css";
import { SIDENAV, HERO, TOPNAV } from "./containers/Export";

function App() {
  return (
    <div className={Styles.App}>
      <HERO />
      <SIDENAV />
      <TOPNAV />
    </div>
  );
}

export default App;
