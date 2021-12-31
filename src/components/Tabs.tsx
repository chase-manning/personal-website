import styled from "styled-components";

const StyledTabs = styled.div`
  display: flex;
`;

interface ButtonProps {
  active: boolean;
}

const Button = styled.button`
  position: relative;
  width: 70px;
  height: 40px;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  margin-right: 90px;
  color: ${(props: ButtonProps) =>
    props.active ? "var(--main)" : "var(--sub)"};

  transition: all 0.3s;
  :hover {
    color: var(--main);
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
