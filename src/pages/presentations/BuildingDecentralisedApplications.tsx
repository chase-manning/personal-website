import styled from "styled-components";
import React, { useEffect } from "react";

import Remark from "remark-slide";
import RemarkPolyfills from "remark-slide/src/polyfills";
import RemarkStyler from "remark-slide/src/remark/components/styler/styler";
import { solidity } from "highlightjs-solidity";
import md from "./building-decentralised-applications.md";
import "./slide-styles.css";

const remark = new Remark();
remark.highlighter.engine.registerLanguage("solidity", solidity);

const StyledBuildingDecentralisedApplications = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100dvh;
`;

const BuildingDecentralisedApplications = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    RemarkPolyfills.apply();
    RemarkStyler.styleDocument();

    fetch(md)
      .then((response) => {
        return response.text();
      })
      .then((text) => {
        remark.create({
          ratio: "16:9",
          source: text,
          container: containerRef.current,
        });
      });
  }, []);

  return <StyledBuildingDecentralisedApplications ref={containerRef} />;
};

export default BuildingDecentralisedApplications;
