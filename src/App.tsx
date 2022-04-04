import "./App.css";
import Navbar from "./sections/navbar";
import Landing from "./sections/landing";
import Reason from "./sections/reason";
import Bulletin from "./sections/bulletin";
import Slides from "./sections/slides";
import Profile from "./sections/profile";
import Info from "./sections/info";
import Footer from "./sections/footer";
import { useState } from "react";

function App() {
  const [menu, setmenu] = useState("home");
  const onChangeMenu = (menu: string) => {
    setmenu(menu);
    window.history.replaceState(null, "", `#${menu}`);
  };

  return (
    <div className="appContainer">
      <Navbar menu={menu} onChangeMenu={onChangeMenu} />
      <Landing />
      <Reason />
      <Bulletin />
      <Slides />
      <Profile />
      <Info />
      <Footer menu={menu} onChangeMenu={onChangeMenu} />
    </div>
  );
}

export default App;
