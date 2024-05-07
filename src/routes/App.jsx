import Header from "../components/Header";
import Footer from "../components/Footer";
import FetchItems from "../components/FetchItems";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
      <Header></Header>
      <FetchItems />
      <Outlet />
      <Footer></Footer>
    </>
  );
}

export default App;
