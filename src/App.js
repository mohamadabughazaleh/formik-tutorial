import BasicForm from "./components/BasicForm";
import Nav from "./components/Nav";
import AdvancedForm from "./components/AdvancedForm";
import Notfound from "./components/Notfound";
import Deck from "./components/Deck";
import Contant from "./components/Contant";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./App.css";

function App() {
  const { t, i18n } = useTranslation();

  // document.body.dir = i18n.dir();
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<BasicForm />} />

          <Route path="/BasicForm" element={<BasicForm />} />
          <Route path="/Deck" element={<Deck />} />
          <Route path="/AdvancedForm" element={<AdvancedForm />}>
            <Route path="Contant" element={<Contant />} />
          </Route>
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
