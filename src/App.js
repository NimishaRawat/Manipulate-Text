
import "./App.css";
import NavBar from "./components/NavBar";
import About from "./components/About";
// import TextForm1 from "./components/TextForm1";
function App() {
  return (
    <div>
    <NavBar title="Modify Text"/>
    <div className="container">
    {/* <TextForm1 heading="Enter text to ananlyze"/> */}
    <About/>
    </div>
    </div>
  );
}

export default App;
