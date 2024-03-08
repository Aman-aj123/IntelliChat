import { useContext } from "react";
import ChatContext from "../../context/ChatContext";

const Header = () => {
     const { sideBarClass, setSideBarClass } = useContext(ChatContext);

     const handleBarClick = () => {
          setSideBarClass(`${sideBarClass === 'displaySideBar' ? "" : "displaySideBar"}`);
     };

     return (
          <div className="w-full  flex justify-between md:px-4 px-2 items-center h-[60px]">
               <div className="logo items-center flex gap-2">
                    <div onClick={handleBarClick} className="hamburger flex justify-center items-center h-[35px] w-[36px] hover:bg-gray-200 transition cursor-pointer rounded-full">
                         <i className="fa-solid fa-bars text-2xl"></i>
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-600">IntelliChat</h2>
               </div>
               <div className="user-profile flex justify-center items-center rounded-full h-[38px] w-[39px] bg-blue-600 hover:opacity-70 transition cursor-pointer text-2xl text-white">
                    <span>A</span>
               </div>
          </div>
     );
};



export default Header;