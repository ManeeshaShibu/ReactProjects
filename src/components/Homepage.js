import Navbar from "./Navbar";
import { useRecoilState } from "recoil";
import Layout from "../recoil/atom/Layout";
import Onboarding from "../onboard/Onboarding";
import Template1 from '../onboard/Template1';
import Template2 from '../onboard/Template2';

function Home() {
  const [selectedLayout, setSelectedLayout] = useRecoilState(Layout);

  if (selectedLayout == "1") {
    return (
      <>
        <Navbar />
        <Onboarding />
      </>
    );
  } else if (selectedLayout === "2") {
    return (
      <>
        <Navbar />
        <Template1 />
      </>
    );
  } else
    return (
      <>
        <Navbar />
        <Template2 />
      </>
    );
}

export default Home;
