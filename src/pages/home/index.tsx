import styled from "styled-components";
import Box from "@mui/material/Box";
import Header from "@/components/Header";
import ProjectList from "@/components/ProjectList";
import InfoBanner from "@/components/InfoBanner";

const Wrapper = styled(Box)`
  background: radial-gradient(
    circle,
    rgba(148, 66, 226, 0.15) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  height: calc(100vh - 0px);
`;

const Content = styled(Box)`
  padding: 0 100px;
`;

const Index = () => {
  return (
    <Wrapper>
      <Content>
        <Header />
        <InfoBanner />
        <ProjectList />
      </Content>
    </Wrapper>
  );
};

export default Index;
