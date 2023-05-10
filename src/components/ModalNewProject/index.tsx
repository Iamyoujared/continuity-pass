import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Stack from "@mui/material/Stack";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CreateProyect from "@/components/proyect/create-proyect";
import RepositoryList from "@/components/proyect/repository-list";
import AssignRights from "@/components/proyect/assign-rights";
import { getRandomArbitrary } from "@/utils/generateUuid";
import { CREATE_PROYECT } from "@/constants/proyect";
import { createProject } from "@/api/project";
import { USER } from "@/constants/user";

const FooterButtons = styled(Stack)`
  position: sticky;
  bottom: -16px;
  padding: 10px 0;
  border-radius: 6px;
  background: #fff;
`;

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 550,
  bgcolor: "background.paper",
  borderRadius: "6px",
  boxShadow: 24,
  padding: 4,
  paddingBottom: 2,
  maxHeight: "500px",
  overflowY: "scroll",
};

interface modalNewProject {
  open: boolean;
  handleClose: any;
  projects: any;
  setProjects: any;
}

const Index = ({
  open,
  handleClose,
  projects,
  setProjects,
}: modalNewProject) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const [tab, setTab] = useState<number | null>(CREATE_PROYECT.PROYECT);
  const [loading, setLoading] = useState<boolean | null>(false);

  console.log("USER.ID", USER.ID);

  const onSubmit = (dataForm: any) => {
    let project_id = getRandomArbitrary(2, 3000000);
    setLoading(true);
    const data = {
      ...dataForm,
      signed_customer: false,
      project_id: project_id,
      owner_id: USER.ID,
    };
    createProject(data, projects)
      .then((res) => {
        setProjects(res);
        setLoading(false);
        handleClose();
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {tab === CREATE_PROYECT.PROYECT && (
              <CreateProyect register={register} errors={errors} />
            )}
            {tab === CREATE_PROYECT.REPOSITORY && (
              <RepositoryList setValue={setValue} watch={watch} />
            )}
            {tab === CREATE_PROYECT.TRANSFER_RIGHTS && (
              <AssignRights
                watch={watch}
                register={register}
                errors={errors}
                setValue={setValue}
              />
            )}
            <FooterButtons direction="row" spacing={1} mt={2}>
              <Button onClick={() => setTab(tab && tab - 1)} size="small">
                Back
              </Button>
              {tab === CREATE_PROYECT.TRANSFER_RIGHTS ? (
                <Button
                  type={watch("signed_document") ? "submit" : "button"}
                  size="small"
                >
                  {loading ? "Loading..." : "Create project"}
                </Button>
              ) : (
                <Button
                  type="button"
                  onClick={() =>
                    tab !== CREATE_PROYECT.TRANSFER_RIGHTS &&
                    setTab(tab && tab + 1)
                  }
                  size="small"
                >
                  Continue
                </Button>
              )}
            </FooterButtons>
          </form>
        </Box>
      </Modal>
    </Box>
  );
};

export default Index;
