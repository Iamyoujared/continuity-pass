import router from "next/router";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Image from "next/image";
import Button from "@mui/material/Button";
import GithubIcon from "@/assets/icons/github.svg";
import { UseUsers, UseRepos, UseContentRepo, UseTrees } from "@/core/api";
import { login } from "@/api/actions";

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
`;

const Index = () => {
  const loginHandler = () => {
    login()
      .then((res) => {
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
          <h1>Welcome to thanksfreelance</h1>
        </Box>
        <Form>
          <Icon priority src={GithubIcon} alt="github-icon" />
          <p>Crea tu cuenta con Github</p>
          <Box mt={1} sx={{ textAlign: "center" }}>
            <Button onClick={loginHandler}>Continuar</Button>
          </Box>
        </Form>
      </Box>
    </Wrapper>
  );
};

export default Index;
