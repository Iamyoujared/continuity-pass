import styled from "styled-components";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import RepoCard from "@/components/Repocard";
import { Title } from "../styles";
import { UseRepos } from "@/core/api";

const Description = styled(Typography)`
  margin: 10px 0 30px !important;
  font-size: 13px !important;
`;

interface repositoryListProps {
  setValue: any;
  watch: any;
}

const Index = ({ setValue, watch }: repositoryListProps) => {
  const { repos, isLoading } = UseRepos();

  return (
    <Box>
      <Box>
        <Title>
          Repository list
          {/* {repos && repos.length} */}
        </Title>
        <Description>
          Select the repository containing the code you want to assign the
          rights to
        </Description>
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
