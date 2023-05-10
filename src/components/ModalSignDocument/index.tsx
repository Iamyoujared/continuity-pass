import Stack from "@mui/material/Stack";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import PdfViewerComponent from "@/components/PdfViewerComponent";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  borderRadius: "6px",
  boxShadow: 24,
  padding: 4,
  paddingBottom: 2,
  maxHeight: "630px",
  overflowY: "scroll",
};

interface modalNewProject {
  open: boolean;
  handleClose: any;
  companyName: string;
  setValue?: any;
  urlDocument?: string;
}

const Index = ({
  open,
  handleClose,
  companyName,
  setValue,
  urlDocument,
}: modalNewProject) => {
  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack
            direction="row"
            spacing={1}
            mt={0}
            mb={2}
            alignItems="center"
            justifyContent="flex-end"
          >
            <Button onClick={handleClose}>Cancel</Button>
          </Stack>
          <PdfViewerComponent
            companyName={companyName}
            setValue={setValue}
            handleClosePdf={handleClose}
            urlDocument={urlDocument}
          />
        </Box>
      </Modal>
    </Box>
  );
};

export default Index;
