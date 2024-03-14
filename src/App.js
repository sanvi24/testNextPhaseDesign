import "./App.css";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components";

function App() {
  return (
    <div className="">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
