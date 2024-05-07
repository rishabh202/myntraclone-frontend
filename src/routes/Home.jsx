import HomeItems from "../components/HomeItems";
import { useSelector } from "react-redux";

const Home = () => {
  const items = useSelector((store) => store.items);

  return (
    <>
      <div className="items-container">
        {items.map((item) => (
          <HomeItems key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default Home;
