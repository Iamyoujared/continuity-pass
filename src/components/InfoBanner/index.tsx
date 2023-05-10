import { useState } from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Image from "next/image";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import GithubIcon from "@/assets/icons/github-purple.svg";
import ModalInfoToken from "@/components/ModalInfoToken";

const Banner = styled(Box)`
  position: relative;
  margin: 20px 0 30px;
  background-color: #1d1d1d;
  z-index: 1;
  padding: 30px 50px;
  border-radius: 6px;
`;

const Icon = styled(Image)`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  vertical-align: middle;
`;

const Copy = styled.p`
  display: inline-block;
  color: #fff;
`;

const Index = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Banner>
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Icon priority src={GithubIcon} alt="github-icon" />
          <Copy>
            Find out how to give thanksfreelance access to private repositories
          </Copy>
        </Box>
        <Box>
          <Button size="small" variant="contained" onClick={handleOpen}>
            See
          </Button>
        </Box>
      </Stack>
      <ModalInfoToken open={open} handleClose={handleClose} />
    </Banner>
  );
};

export default Index;
