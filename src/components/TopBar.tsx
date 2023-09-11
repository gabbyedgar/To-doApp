import styled from "@emotion/styled";
import { ArrowBackIosNew } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { ColorPalette } from "../styles";

interface TopBarProps {
  title: string;
}

export const TopBar = ({ title }: TopBarProps) => {
  const n = useNavigate();
  const handleBackClick = () => n("/");
  return (
    <Container>
      <BackBtn onClick={handleBackClick}>
        <ArrowBackIosNew /> &nbsp; Back
      </BackBtn>
      <Title>{title}</Title>
    </Container>
  );
};

const Container = styled.div`
  margin: 0;
  width: 100%;
`;

const Title = styled.h2`
  font-size: 28px;
  margin-top: 28px;
  margin-bottom: 64px;
  text-align: center;
`;
const BackBtn = styled.button`
  position: absolute;
  top: 24px;
  left: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  padding: 8px 12px;
  background-color: transparent;
  color: ${ColorPalette.fontLight};
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.2s all;
  &:hover {
    opacity: 0.8;
  }
`;
