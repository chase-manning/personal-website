import styled from "styled-components";
import { Route, Routes } from "react-router-dom";

import LandingPage from "../pages/landing-page/LandingPage";
import BuildingDecentralisedApplications from "../pages/presentations/BuildingDecentralisedApplications";

const StyledApp = styled.div`
  width: 100%;
`;

const App = () => {
  return (
    <StyledApp>
      <Routes>
        <Route path="/">
          <Route index element={<LandingPage />} />

          <Route
            path="building-decentralised-applications"
            element={<BuildingDecentralisedApplications />}
          />

          <Route path="*" element={<LandingPage />} />
        </Route>
      </Routes>
    </StyledApp>
  );
};

export default App;
