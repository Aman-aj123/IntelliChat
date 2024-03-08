import Header from "./Header";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";

const Main = () => {
     return (
          <div className="main-wrapper w-full flex justify-center">
               <Sidebar/>
               <MainContent />
          </div>
     );
};


export default Main;