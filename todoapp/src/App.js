import ToDoApp from "./ToDoApp";
import ToDoState from "./datahandle/todoState";

function App() {
  return (
    <>
      <ToDoState>
        <ToDoApp />
      </ToDoState>
    </>
  );
}

export default App;
