import Link from "next/link";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import ClockIcon from "@/assets/icons/clock.svg";
import FileIcon from "@/assets/icons/file.svg";
import GithubIcon from "@/assets/icons/github-purple.svg";
import { type Project } from "@/types";

const ProjectCard = styled(Box)`
  backdrop-filter: blur(135px);
  background-color: rgba(247, 247, 242, 0.24);
  box-shadow: 0 16px 32px -2px rgba(0, 0, 0, 0.1),
    0 8px 16px -2px rgba(0, 0, 0, 0);
  padding: 20px;
  border-radius: 6px;
  & small {
    font-size: 12px;
  }
`;

const Icon = styled(Image)`
  width: 13px;
  height: 13px;
  margin-right: 5px;
`;

const Description = styled.p`
  font-size: 13px;
`;

interface projectCardProps {
  project: Project;
}

const Index = ({ project }: projectCardProps) => {
  return (
    <ProjectCard>
      <Stack
        direction="row"
        mt={0}
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <h4>{project.project_name}</h4>
        </Box>
        <Box
          sx={{
            backgroundColor: "#F6C391",
            padding: "5px 10px",
            color: "#fff",
            borderRadius: "20px",
          }}
        >
          <Stack
            direction="row"
            spacing={0}
            mt={0}
            alignItems="center"
            justifyContent="space-between"
          >
            <Icon priority src={ClockIcon} alt="clock-icon" />
            <small>Signature</small>
          </Stack>
        </Box>
      </Stack>
      <small>{project.company_name}</small>
      <Box mt={2}>
        <Description>{project.project_description}</Description>
        <Stack direction="row" spacing={0.4} mt={1} alignItems="center">
          <Link href={project.repo.html_url} target="_blank">
            <Button size="small">
              <Icon priority src={GithubIcon} alt="github-icon" />
              Repo
            </Button>
          </Link>
          <Link href={project.url_document} target="_blank">
            <Button size="small">
              <Icon priority src={FileIcon} alt="file-icon" />
              Document
            </Button>
          </Link>
        </Stack>
      </Box>
    </ProjectCard>
  );
};

export default Index;
