import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";

//Pages
import Home from "./pages/Home";
import Foi from "./pages/Foi";
import Gtf from "./pages/Gtf";
import Unin from "./pages/Unin";
import Ttf from "./pages/Ttf";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={Home()} />
          <Route path="/foi" element={Foi()} />
          <Route path="/gtf" element={Gtf()} />
          <Route path="/unin" element={Unin()} />
          <Route path="/ttf" element={Ttf()} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
