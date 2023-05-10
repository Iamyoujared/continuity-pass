import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { savePDF } from "@/utils/savePDF";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const Title = styled.h3`
  font-size: 23px !important;
  font-weight: 500 !important;
  margin-bottom: 10px !important;
`;

const Copy = styled(Typography)`
  font-size: 13px !important;
`;

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  borderRadius: "6px",
  boxShadow: 24,
  padding: 4,
  maxHeight: "500px",
  overflowY: "scroll",
};

interface pdfViewerComponent {
  companyName: string;
  setValue?: any;
  handleClosePdf: any;
  urlDocument?: string;
}

export default function App({
  companyName,
  setValue,
  handleClosePdf,
  urlDocument,
}: pdfViewerComponent) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const containerRef = useRef(null);

  const [instance, setInstance] = useState<any>();

  const [loading, setLoading] = useState<boolean>(false);
  const savePDFHandler = () => {
    setLoading(true);
    // // @ts-ignore
    savePDF(instance, companyName).then((res) => {
      setValue && setValue("signed_document", true);
      setValue && setValue("url_document", res);
      setLoading(false);
      handleClosePdf();
    });
  };

  useEffect(() => {
    const container = containerRef.current;
    let PSPDFKit: any;

    (async function () {
      PSPDFKit = await import("pspdfkit");

      if (PSPDFKit) {
        PSPDFKit.unload(container);
      }

      const initialViewState = new PSPDFKit.ViewState({
        readOnly: true,
      });

      PSPDFKit.load({
        // initialViewState,
        // hideSignatures,
        container,
        document: urlDocument !== undefined ? urlDocument : "/document.pdf",
        baseUrl: `${window.location.protocol}//${window.location.host}/`,
      }).then(async (_instance: any) => {
        // Remove actions
        _instance.setToolbarItems([
          { type: "pager" },
          { type: "zoom-out" },
          { type: "zoom-in" },
          { type: "spacer" },
          { type: "signature" },
          { type: "text" },
        ]);

        _instance.setToolbarItems((items: any) => {
          items.push({
            type: "custom",
            id: "save-button",
            title: "Save",
            onPress: () => {
              handleOpen();
            },
          });
          return items;
        });

        // Create a new text form field.
        const widget = new PSPDFKit.Annotations.WidgetAnnotation({
          id: PSPDFKit.generateInstantId(),
          pageIndex: 0,
          boundingBox: new PSPDFKit.Geometry.Rect({
            left: 74,
            top: 668,
            width: 110,
            height: 20,
          }),
          formFieldName: "my signature form field",
        });
        const formField = new PSPDFKit.FormFields.SignatureFormField({
          name: "my signature form field",
          annotationIds: new PSPDFKit.Immutable.List([widget.id]),
        });

        await _instance.create([widget, formField]);

        const annotation = new PSPDFKit.Annotations.TextAnnotation({
          pageIndex: 1,
          text: { format: "plain", value: `${companyName}` },
          font: "Poppins",
          isBold: false,
          horizontalAlign: "left",
          boundingBox: new PSPDFKit.Geometry.Rect({
            left: 74,
            top: 89,
            width: 110,
            height: 20,
          }),
          fontColor: PSPDFKit.Color.BLACK,
          fontSize: 11,
        });

        // // Add the annotations to the document.
        await _instance.create(annotation);

        setInstance(_instance);
      });
    })();

    return () => PSPDFKit && PSPDFKit.unload(container);
  }, []);

  return (
    <Box ref={containerRef} style={{ height: "100vh" }}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Title>Wait just one thing</Title>
          <Copy>
            By accepting, you will be aware to send a copy signed by you to the
            sender so that he/she can sign the document and have the rights to
            the base code of the project {companyName}
          </Copy>
          <Box mt={2}>
            <LoadingButton
              onClick={savePDFHandler}
              sx={{
                color: "#fff",
              }}
              size="medium"
              color="primary"
              loading={loading}
              variant="contained"
            >
              <span>let's do it 💪🏻</span>
            </LoadingButton>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
