import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import LandingPage from './pages/LandingPage';
import Step1InputPage from './pages/Step1InputPage';
import Step2InputPage from './pages/Step2InputPage';
import Step3InputPage from './pages/Step3InputPage';
import GaugePage from './pages/GaugePage';
import LoadingPage from './pages/LoadingPage';
import UserTypeSelectPage from "./pages/UserTypeSelectPage";

function App() {
 return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/step1" element={<Step1InputPage />} />
        <Route path="/step2" element={<Step2InputPage />} />
        <Route path="/step3" element={<Step3InputPage />} />
        <Route path="/gauge" element={<GaugePage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/load" element={<LoadingPage />} />
        <Route path="/user" element={<UserTypeSelectPage />} />
      </Routes>
    </>
  )
}

export default App
