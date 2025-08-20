import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";
import "./App.css";


function App() {
  return (
    <Router>
      <>
        <div className="app  bg-yellow-50  font-grotesk text-16 text-gray-900 min-h-screen">
          <Routes />
          {/* <DarkModeToggle /> */}
        </div>
      </>
    </Router>
  );
}

export default App;
