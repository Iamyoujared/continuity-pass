import { useEffect, useState } from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ModaNewProject from "@/components/ModalNewProject";
import ProjectCard from "./ProjectCard";
import { getProjects } from "@/api/project";
import { type Project } from "@/types";

const Wrapper = styled(Box)`
  margin: 20px 10px 0;
`;

const Title = styled(Typography)`
  color: #000;
  font-weight: 500 !important;
  font-size: 17px !important;
`;

const Index = () => {
  // Create project - Modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [projects, setProjects] = useState<Array<Project>>([]);

  useEffect(() => {
    getProjects().then((projectsList: any) => {
      setProjects(projectsList);
    });
  }, []);

  return (
    <Wrapper>
      <Stack
        direction="row"
        spacing={1}
        mt={0}
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Title>My projects {projects && `(${projects.length})`}</Title>
        </Box>
        <Box>
          <Button onClick={handleOpen} size="small">
            + Create project
          </Button>
          <ModaNewProject
            open={open}
            handleClose={handleClose}
            projects={projects}
            setProjects={setProjects}
          />
        </Box>
      </Stack>
      <Box mt={3}>
        <Box>{!projects && <p>No projects</p>}</Box>
        <Grid container alignItems="center" spacing={2}>
          {projects &&
            projects.map((project) => (
              <Grid item xs={4}>
                {/* @ts-ignore */}
                <ProjectCard project={project} />
              </Grid>
            ))}
        </Grid>
      </Box>
    </Wrapper>
  );
};

export default Index;
