import ChatContext from "./ChatContext";
import { useState } from "react";

const ChatState = (props) => {
     const [sideBarClass, setSideBarClass] = useState("block");

     return (
          <ChatContext.Provider value={{ sideBarClass, setSideBarClass }}>
               {props.children}
          </ChatContext.Provider>
     );
};

export default ChatState;