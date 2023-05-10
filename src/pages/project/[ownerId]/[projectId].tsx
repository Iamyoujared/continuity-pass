import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Input from "@/components/Input";
import LoadingButton from "@mui/lab/LoadingButton";
import ModalInfoToken from "@/components/ModalInfoToken";
import { UseUsers } from "@/core/api";
import { updateToken } from "@/api/actions";
import { type Project } from "@/types";
import { getProjectById } from "@/api/project";

import ModalSignDocument from "@/components/ModalSignDocument";

const Wrapper = styled(Box)`
  background: radial-gradient(
    circle,
    rgba(148, 66, 226, 0.15) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  height: calc(100vh - 0px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled(Box)`
  width: 500px;
`;

const Header = styled(Box)`
  text-align: center;
  & h1 {
    margin-bottom: 20px;
    font-size: 35px !important;
  }
  & p {
    margin-bottom: 30px;
    line-height: 25px;
  }
`;

const ContentAvatar = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const Field = styled(Box)`
  margin: 15px 0;
  & label {
    display: block;
    margin-bottom: 5px;
    font-size: 12.5px;
    font-weight: 500;
    font-family: "Poppins";
  }
  & small {
    display: block;
    margin-top: 5px;
    font-size: 10.5px;
    color: #1d1d1d;
    cursor: pointer;
  }
`;

const Main = styled(Box)`
  margin-top: 20px;
  padding: 20px;
  border-radius: 4px;
  backdrop-filter: blur(135px);
  background-color: rgba(247, 247, 242, 0.24);
  box-shadow: 0 0px 32px -2px rgba(0, 0, 0, 0.1),
    0 8px 0px -2px rgba(0, 0, 0, 0);
`;

const Index = () => {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [project, setProjec] = useState<Project>();

  const owner_id = router.query.ownerId;
  const project_id = router.query.projectId;

  useEffect(() => {
    getProjectById(owner_id, project_id).then((res: any) => {
      console.log("res", res);
      setProjec(res);
    });
  }, [router]);

  return (
    <Box>
      <Wrapper>
        <Content>
          <Header>
            <h1>Hey {project?.company_name} ✋</h1>
            <p>
              We know that you and Jared have been developing an amazing
              project! So Jared has provided you with a document to assign the
              rights to the code to Fitmix.
            </p>
            <p>
              Once the document is signed, you will be able to download the base
              code.
            </p>
            <Button size="medium" variant="contained" onClick={handleOpen}>
              Sign document
            </Button>
          </Header>
        </Content>
        <ModalSignDocument
          open={open}
          handleClose={handleClose}
          companyName="Fitmix"
          urlDocument={project?.url_document}
        />
      </Wrapper>
    </Box>
  );
};

export default Index;
