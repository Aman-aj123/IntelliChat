import Main from "./components/main/Main";
import ChatState from "./context/ChatState";


function App() {
  return (
    <ChatState>
      <Main />
    </ChatState>

  );
}

export default App;
