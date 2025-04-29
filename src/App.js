import "./App.css";
import User from "./User";

function App() {
  return (
    <div>
      <h1>App Component</h1>
      <User data={{ name: "sakshi", age: "30" }} />
    </div>
  );
}

export default App;
