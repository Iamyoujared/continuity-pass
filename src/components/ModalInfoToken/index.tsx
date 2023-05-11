import styled from "styled-components";
import Box from "@mui/material/Box";
import Image from "next/image";
import Modal from "@mui/material/Modal";
import ImageStep1 from "@/assets/images/step1.png";
import ImageStep2 from "@/assets/images/step2.png";
import ImageStep3 from "@/assets/images/step3.png";
import ImageStep4 from "@/assets/images/step4.png";
import ImageStep5 from "@/assets/images/step5.png";
import ImageStep6 from "@/assets/images/step6.png";

const Step = styled(Box)`
  margin: 10px 0;
  border-bottom: 1px solid #f3f3f3;
`;

const StepTitle = styled.h3`
  margin-bottom: 5px;
  font-weight: 500;
  font-size: 17px;
`;

const StepDescription = styled.p`
  font-size: 13px !important;
`;

const StepImageVertical = styled(Image)`
  display: block;
  margin: 15px 0;
  width: auto;
  max-width: -webkit-fill-available;
  height: auto;
  max-height: 300px;
  object-fit: contain;
`;

const Title = styled.h2`
  margin-bottom: 30px;
  font-weight: 500;
  font-size: 22px;
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
    {
      step: "4",
      description: "Select a name for the token",
      image: ImageStep4,
    },
    {
      step: "5",
      description:
        "Select the 'Only select repositories' option and select the private repositories containing the project code.",
      image: ImageStep5,
    },
    {
      step: "6",
      description: "Clic on 'Generate token' button.",
      image: ImageStep6,
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
        <Title>Generate Personal access token</Title>
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
