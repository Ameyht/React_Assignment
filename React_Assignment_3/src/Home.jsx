import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

function Home() {
  const myStyles = {
    fontFamily: "'Oswald', sans-serif", // Replace 'Roboto' with your preferred font
  };
  return (
    <div className="md:min-h-16 min-h-16 h-auto md:h-auto" style={myStyles}>
      <div className="flex flex-wrap max-w-[100%] h-[100vh] border border-black-700 bg-gray-300 md:">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default Home;
