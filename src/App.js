import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import EmployeeForm from "./components/form";
import OnBoarding from "./onboard/Onboarding";
import { RecoilRoot } from "recoil";
import heroJoinee from "./recoil/atom/HeroJoinee";
import newJoiners from "./recoil/atom/NewJoiners";
import { useEffect } from "react";
import { fetchNewJoinees } from "./api/api";
import { useRecoilState, useSetRecoilState } from "recoil";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Template from "./onboard/Template1";
import Home from "./components/Homepage";
import Welcome from "./components/Welcome/Welcome";
function App() {
  const [selectedJoinee, setSelectedJoinee] = useRecoilState(heroJoinee);
  const setJoinees = useSetRecoilState(newJoiners);

  useEffect(() => {
    async function initJoinees() {
      fetchNewJoinees().then((data) => {
        setJoinees(data);
        if (data.length > 0) {
          setSelectedJoinee(data[0]);
        }
      });
    }

    initJoinees();
  }, []);

  return (
    <BrowserRouter>

    <Routes>
      <Route path="/EmployeeForm" element={<EmployeeForm/>} />
      <Route path="/Home" element={<Home/>} />
      <Route path="/" element={<Welcome/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
