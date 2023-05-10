import styled from "styled-components";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import RepoCard from "@/components/Repocard";
import { Title, Step } from "../styles";
import { UseRepos } from "@/core/api";
import { Error } from "@/styles/global";
import { useUserStore } from "@/store";

const Description = styled(Typography)`
  margin: 10px 0 30px !important;
  font-size: 13px !important;
`;

interface repositoryListProps {
  setValue: any;
  watch: any;
}

const Index = ({ setValue, watch }: repositoryListProps) => {
  // @ts-ignore
  const user = useUserStore((state) => state.user);

  const { repos, isLoading, isError } = UseRepos(user.token);

  const renderError = () => {
    if (isError.response.data.message === "Bad credentials") {
      return "You need to generate the Personal access token in order to have access to show the repositories.";
    }
  };

  return (
    <Box>
      <Box>
        <Stack direction="row" spacing={1} alignItems="center">
          <Step>
            <p>2</p>
          </Step>
          <Title>Repository list {repos && repos.length}</Title>
        </Stack>
        <Description>
          Select the repository containing the code you want to assign the
          rights to
        </Description>
        {isError && (
          <Error>
            <p>{renderError()}</p>
          </Error>
        )}
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <Box>
            {repos &&
              repos.map((repo: any) => (
                <RepoCard {...repo} setValue={setValue} watch={watch} />
              ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Index;
