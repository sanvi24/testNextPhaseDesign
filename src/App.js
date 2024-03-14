import "./App.css";
import { Outlet } from "react-router-dom";
import { Footer, Header, MobileViewHeader } from "./components";

function App() {
  return (
    <div className="">
      <Header />
      <MobileViewHeader />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
