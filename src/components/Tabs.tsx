import styled from "styled-components";

const StyledTabs = styled.div`
  display: flex;
`;

interface ButtonProps {
  active: boolean;
}

const Button = styled.button`
  position: relative;
  height: 40px;
  font-weight: 400;
  cursor: pointer;
  color: ${(props: ButtonProps) =>
    props.active ? "var(--main)" : "var(--sub)"};

  transition: all 0.3s;
  :hover {
    color: var(--main);
  }

  font-size: 16px;
  width: 70px;
  margin-right: 90px;
  @media only screen and (max-width: 1400px) {
    font-size: 14px;
    width: 55px;
    margin-right: 70px;
  }
`;

interface LineProps {
  activeIndex: number;
}

const Line = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: var(--purple);
  transition: transform 0.3s;
  transform: translateX(
    ${(props: LineProps) => `${props.activeIndex * 160}px`}
  );

  @media only screen and (max-width: 1400px) {
    transform: translateX(
      ${(props: LineProps) => `${props.activeIndex * 125}px`}
    );
  }
`;

interface Props {
  activeIndex: number;
  options: string[];
  setActiveIndex: (index: number) => void;
}

const Tabs = ({ activeIndex, options, setActiveIndex }: Props) => {
  return (
    <StyledTabs>
      {options.map((option: string, index: number) => (
        <Button
          key={option}
          active={index === activeIndex}
          onClick={() => setActiveIndex(index)}
        >
          {option}
          {index === 0 && <Line activeIndex={activeIndex} />}
        </Button>
      ))}
    </StyledTabs>
  );
};

export default Tabs;
