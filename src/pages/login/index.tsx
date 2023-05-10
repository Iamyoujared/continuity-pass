import router from "next/router";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Image from "next/image";
import GithubIcon from "@/assets/icons/github.svg";
import Button from "@mui/material/Button";
import { login } from "@/api/actions";
import { USER } from "@/constants/user";
import { useEffect } from "react";
import { useUserStore } from "@/store";

const Wrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(
    circle,
    rgba(148, 66, 226, 0.25) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  height: calc(100vh - 0px);
`;

const Icon = styled(Image)`
  color: transparent;
  margin: 0 auto 20px;
  display: block;
  background: #000;
  padding: 10px;
  border-radius: 5px;
`;

const Form = styled(Box)`
  width: 500px;
  margin: 50px auto 0;
  padding: 40px 20px;
  margin-top: 50px;
  border-radius: 6px;
  backdrop-filter: blur(135px);
  background-color: rgba(247, 247, 242, 0.24);
  box-shadow: 0 16px 32px -2px rgba(0, 0, 0, 0.1),
    0 8px 16px -2px rgba(0, 0, 0, 0);
  & p {
    text-align: center;
  }
  & small {
    display: block;
    width: 80%;
    margin: 10px auto 30px;
    text-align: center;
  }
`;

const Index = () => {
  useEffect(() => {
    USER.ID !== "null" && router.push("/home");
  }, []);

  // @ts-ignore
  const setUserInfo = useUserStore((state) => state.setUserInfo);

  const loginHandler = () => {
    login()
      .then((res) => {
        setUserInfo(res);
        router.push("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Wrapper>
      <Box>
        <Box>
          <h1>Welcome to Continuity Signature</h1>
        </Box>
        <Form>
          <Icon priority src={GithubIcon} alt="github-icon" />
          <p>Create your account with Github</p>
          <small>
            I agree that Continuity Signature can have read-only access to my
            public and private repositories.
          </small>
          <Box mt={1} sx={{ textAlign: "center" }}>
            <Button onClick={loginHandler}>Go!</Button>
          </Box>
        </Form>
      </Box>
    </Wrapper>
  );
};

export default Index;
