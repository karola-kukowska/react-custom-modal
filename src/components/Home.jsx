import { useGlobalContext } from "../context";
import { FaBars } from "react-icons/fa";
const Home = () => {
  const { openModal, openSidebar } = useGlobalContext();

  return (
    <main>
      <button type="button" className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <button type="button" className="btn" onClick={openModal}>
        Open Modal
      </button>
    </main>
  );
};
export default Home;
