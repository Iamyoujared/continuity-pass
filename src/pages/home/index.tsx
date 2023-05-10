import axios from "axios";
import { useEffect } from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Header from "@/components/Header";
import ProjectList from "@/components/ProjectList";
import InfoBanner from "@/components/InfoBanner";
import { useUserStore } from "@/store";
import { USER } from "@/constants/user";
import { getUserInfo } from "@/api/actions";

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
  // @ts-ignore
  const user = useUserStore((state) => state.user);

  // @ts-ignore
  const setUserInfo = useUserStore((state) => state.setUserInfo);

  useEffect(() => {
    if (!Object.keys(user).length) {
      getUserInfo(USER.ID).then((userInfo) => {
        setUserInfo(userInfo);
      });
    }
  }, []);

  console.log("user home", user);

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
