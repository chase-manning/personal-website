import styled from "styled-components";

export interface ProjectType {
  name: string;
  description: string;
  image: string;
  link: string;
}

const StyledProject = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  cursor: pointer;
  background: #d7dee855;

  transition: all 0.3s;
  box-shadow: 1px 1px 87px rgba(219, 222, 225, 0.2);
  :hover {
    box-shadow: 1px 1px 87px rgba(219, 222, 225, 1);

    div {
      transform: scale(1);
    }
  }

  border-radius: 24px;
  @media only screen and (max-width: 1400px) {
    border-radius: 17px;
  }

  @media only screen and (max-width: 639px) {
    border-radius: 0;
    width: calc(100% + 60px);
    left: -30px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
  @media only screen and (max-width: 1400px) {
    border-top-right-radius: 17px;
    border-top-left-radius: 17px;
  }

  padding: 30px;
  @media only screen and (max-width: 639px) {
    padding: 15px;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }
`;

const Image = styled.img`
  position: relative;
  width: 100%;
  box-shadow: 1px 1px 30px rgba(0, 0, 0, 0.25);

  border-radius: 18px;
  @media only screen and (max-width: 1400px) {
    border-radius: 16px;
  }
  @media only screen and (max-width: 639px) {
    border-radius: 14px;
  }
`;

const BlurredImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: blur(40px);
  transform: scale(1.2) rotate(180deg);
  opacity: 0.5;
`;

const TextArea = styled.div`
  width: 100%;
  flex: 1;
  padding: 40px 48px;
  display: flex;
  flex-direction: column;
  background: var(--bg);

  padding-bottom: 60px;
  border-bottom-right-radius: 24px;
  border-bottom-left-radius: 24px;
  @media only screen and (max-width: 1400px) {
    padding-bottom: 48px;
    border-bottom-right-radius: 17px;
    border-bottom-left-radius: 17px;
  }
  @media only screen and (max-width: 639px) {
    padding: 32px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

const Name = styled.h4`
  font-weight: 600;
  width: 100%;
  margin-bottom: 10px;
  line-height: 1;

  font-size: 32px;
  @media only screen and (max-width: 1400px) {
    font-size: 24px;
  }
`;

const Description = styled.p`
  width: 100%;
  font-weight: 400;
  color: #6b6b6b;

  font-size: 18px;
  @media only screen and (max-width: 1400px) {
    font-size: 16px;
    line-height: 1.4;
  }
`;

const ViewSiteContainer = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ViewSite = styled.div`
  height: 150px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--dark-bg);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 30px;
  font-size: 18px;
  color: var(--bg);
  transform: scale(0);
  transition: all 0.3s;
`;

interface Props {
  project: ProjectType;
}

const Project = ({ project }: Props) => {
  return (
    <StyledProject
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <ImageContainer>
        <BlurredImage src={project.image} />
        <Image src={project.image} />
        <ViewSiteContainer>
          <ViewSite>View Site</ViewSite>
        </ViewSiteContainer>
      </ImageContainer>
      <TextArea>
        <Name>{project.name}</Name>
        <Description>{project.description}</Description>
      </TextArea>
    </StyledProject>
  );
};

export default Project;
