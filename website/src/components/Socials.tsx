import React from "react";
import styled from "styled-components";
import Social from "./Social";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";

const StyledSocials = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 639px) {
    margin-top: 10px;
  }
`;

const Socials = () => {
  return (
    <StyledSocials>
      <Social
        icon={<GitHubIcon fontSize={"inherit"} />}
        link={"https://github.com/chase-manning"}
        text={"GitHub"}
      />
      <Social
        icon={<LinkedInIcon fontSize={"inherit"} />}
        link={"https://www.linkedin.com/in/chasemanning"}
        text={"Linked In"}
      />
      <Social
        icon={<TwitterIcon fontSize={"inherit"} />}
        link={"https://twitter.com/ChaseManning_NZ"}
        text={"Twitter"}
      />
      <Social
        icon={<InstagramIcon fontSize={"inherit"} />}
        link={"https://www.instagram.com/chase.manning.nz"}
        text={"Instagram"}
      />
    </StyledSocials>
  );
};

export default Socials;
