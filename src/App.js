
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Link
} from "react-router-dom";
import Main from "./myComponents/Main";

function App() {
  return (
    <>
      <Router>
          <Main />
      </Router>
    </>
  );
}

export default App;
