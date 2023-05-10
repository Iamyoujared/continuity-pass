import styled from "styled-components";
import Box from "@mui/material/Box";
import Image from "next/image";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ImageStep1 from "@/assets/images/step1.png";
import ImageStep2 from "@/assets/images/step2.png";
import ImageStep3 from "@/assets/images/step3.png";

const Step = styled(Box)`
  margin: 10px 0;
  border-bottom: 1px solid #f3f3f3;
`;

const StepTitle = styled.h3`
  margin-bottom: 5px;
  font-weight: 500;
`;
const StepDescription = styled.p`
  font-size: 13px !important;
`;

const StepImageVertical = styled(Image)`
  display: block;
  margin: 15px 0;
  width: auto;
  height: 300px;
  object-fit: contain;
`;

const StepImageHorizontal = styled(Image)`
  display: block;
  margin: 15px 0;
  width: 100%;
  height: 150;
  object-fit: contain;
`;

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  borderRadius: "6px",
  boxShadow: 24,
  padding: 4,
  maxHeight: "600px",
  overflowY: "scroll",
};

interface ModalInfoToken {
  open: boolean;
  handleClose: any;
}

const Index = ({ open, handleClose }: ModalInfoToken) => {
  const steps = [
    {
      step: "1",
      description:
        "Go to github.com, click on your profile picture and select the 'Settings' option.",
      image: ImageStep1,
    },
    {
      step: "2",
      description:
        "In the lower left part of the browser look for and select the option 'Developer settings'.",
      image: ImageStep2,
    },
    {
      step: "3",
      description:
        "First select the 'Fine-grained tokens' option and then click on the 'Generate new token' button.",
      image: ImageStep3,
    },
  ];

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Button>Generate Token</Button>
          <Button>Repository configurations</Button>
        </Stack>
        {/* <Title>NIceone</Title> */}
        {steps.map((step) => (
          <Step>
            <StepTitle>Step {step.step}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
            <StepImageVertical priority src={step.image} alt="step-image" />
          </Step>
        ))}
      </Box>
    </Modal>
  );
};

export default Index;
