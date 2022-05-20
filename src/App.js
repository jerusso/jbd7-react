import { Fragment } from "react";
import Copyright from "./components/Copyright";
import Logo from "./components/Logo";
import SocialMedia from "./components/SocialMedia";
import Subtext from "./components/Subtext";
import Weather from "./components/Weather/Weather";

function App() {

  return (
    <Fragment>
      <main>
        <div className="container">
          <div className="row">
            <div className="col">
              <Logo />
              <Subtext />
              <SocialMedia />
              <Weather/>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col">
              <Copyright/>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

export default App;
