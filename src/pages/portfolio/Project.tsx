import styled from "styled-components";

export interface ProjectType {
  name: string;
  description: string;
  image: string;
}

const StyledProject = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 24px;
  overflow: hidden;
  cursor: pointer;

  transition: all 0.3s;
  box-shadow: 1px 1px 87px rgba(219, 222, 225, 0.2);
  :hover {
    box-shadow: 1px 1px 87px rgba(219, 222, 225, 1);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  overflow: hidden;
`;

const Image = styled.img`
  position: relative;
  width: 100%;
  border-radius: 18px;
  box-shadow: 1px 1px 30px rgba(0, 0, 0, 0.3);
`;

const BlurredImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: blur(40px);
  transform: scale(1.2) rotate(180deg);
  opacity: 0.4;
`;

const TextArea = styled.div`
  width: 100%;
  padding: 40px 48px;
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;
  background: var(--bg);
`;

const Name = styled.h4`
  font-size: 32px;
  font-weight: 600;
  width: 100%;
  margin-bottom: 10px;
  line-height: 1;
`;

const Description = styled.p`
  width: 100%;
  font-size: 18px;
  font-weight: 400;
  color: #6b6b6b;
`;

interface Props {
  project: ProjectType;
}

const Project = ({ project }: Props) => {
  return (
    <StyledProject>
      <ImageContainer>
        <BlurredImage src={project.image} />
        <Image src={project.image} />
      </ImageContainer>
      <TextArea>
        <Name>{project.name}</Name>
        <Description>{project.description}</Description>
      </TextArea>
    </StyledProject>
  );
};

export default Project;
