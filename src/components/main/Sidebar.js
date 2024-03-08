import { useContext } from "react";
import ChatContext from "../../context/ChatContext";

const Sidebar = () => {
     const { sideBarClass, setSideBarClass } = useContext(ChatContext);


     const handleBarClick = () => {
          setSideBarClass(`${sideBarClass === 'displaySideBar' ? "" : "displaySideBar"}`);
     };

     return (
          <div style={{ transition: '.2s ease-in-out' }} className={`${sideBarClass} overflow-hidden bg-gray-100 md:w-[30%] w-[260px] h-screen md:relative absolute  left-0 top-0`}>
               <div className="new-chat p-1 m-1 cursor-pointer rounded-sm flex  justify-between  hover:bg-gray-300 transition">
                    <div>
                         <div>
                              <img className="w-[40px] rounded-xl" src="https://media.licdn.com/dms/image/C4E0BAQG-Cpu82qAbwg/company-logo_200_200/0/1678225136897/intellichatai_logo?e=2147483647&v=beta&t=nGJD9WQUFRs8JbCsWTwdZQhLWqjRtDfENcSKXzOvnC8" />
                         </div>
                    </div>
                    <div className="flex items-center gap-2">
                         <div onClick={handleBarClick} className="hamburger flex justify-center items-center h-[35px] w-[36px] hover:bg-gray-200 transition cursor-pointer rounded-full">
                              <i className="fa-solid fa-bars text-2xl"></i>
                         </div>

                         <i className="fa-solid fa-plus text-2xl hover:text-gray-400 transition"></i>

                    </div>
               </div>
               <div className="question-container mt-3 w-full">
                    <h2 className="pl-1 text-gray-500">Recent</h2>
                    <div className="question-wrapper mt-1 w-full">
                         <div className="question-items mx-1 px-1 mb-3 py-2  rounded-sm cursor-pointer bg-gray-300 hover:bg-gray-400 transition flex  items-center">
                              <span>What is React js ??</span>
                         </div>
                    </div>
               </div>
          </div>
     );
};










export default Sidebar;