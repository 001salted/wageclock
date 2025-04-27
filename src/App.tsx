import { Route, Routes } from "react-router-dom";
import { WageProvider } from "./contexts/WageContext";
import GaugePage from "./pages/GaugePage";
import LandingPage from "./pages/LandingPage";
import LoadingPage from "./pages/LoadingPage";
import Step1InputPage from "./pages/Step1InputPage";
import Step2InputPage from "./pages/Step2InputPage";
import Step3InputPage from "./pages/Step3InputPage";
import UserTypeSelectPage from "./pages/UserTypeSelectPage";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <WageProvider>
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
    </WageProvider>
  );
}

export default App;
