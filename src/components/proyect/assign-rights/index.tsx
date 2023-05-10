import { useState } from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Input from "@/components/Input";
import Image from "next/image";
import ModalSignDocument from "@/components/ModalSignDocument";
import FileIcon from "@/assets/icons/note.svg";
import { Title, Field, Step } from "../styles";

const Icon = styled(Image)`
  width: 22px;
  height: 22px;
  color: transparent;
  display: block;
  padding: 7px;
  border-radius: 3px;
`;

const Legend = styled(Box)`
  background-color: #eeeeee;
  padding: 15px;
  border-radius: 5px;
  cursor: pointer;
`;

const Copy = styled(Typography)`
  font-size: 13px !important;
`;

const Label = styled(Typography)`
  margin-top: 5px !important;
  font-size: 11px !important;
  color: grey;
`;

const CopySigned = styled(Typography)`
  font-size: 11px !important;
  color: #03c988;
`;

interface createProyectProps {
  watch: any;
  register: any;
  errors: any;
  setValue: any;
}

const Index = ({ watch, register, errors, setValue }: createProyectProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Stack direction="row" spacing={1} alignItems="center">
        <Step>
          <p>3</p>
        </Step>
        <Title>Assign Rights</Title>
      </Stack>
      <Box>
        <Field>
          <label>Company name</label>
          <Input
            type="text"
            register={register}
            errors={errors}
            keyName="company_name"
            placeholder="Name"
          />
        </Field>
        <Field>
          <label>Email</label>
          <Input
            type="email"
            register={register}
            errors={errors}
            keyName="company_email"
            placeholder="Email"
          />
        </Field>
        <Legend onClick={handleOpen}>
          <Stack direction="row" spacing={1} mt={0} alignItems="center">
            <Box>
              <Icon priority src={FileIcon} alt="file-icon" />
            </Box>
            <Box>
              <Copy>Document assigning code rights</Copy>
              {watch("signed_document") ? (
                <CopySigned>Signeed</CopySigned>
              ) : (
                <Button size="small" sx={{ fontSize: "11px" }}>
                  Sign document
                </Button>
              )}
            </Box>
          </Stack>
        </Legend>
        <Label>
          A copy of the document will be sent to the sender for signature.
        </Label>
      </Box>
      <ModalSignDocument
        open={open}
        handleClose={handleClose}
        companyName={watch("company_name")}
        setValue={setValue}
      />
    </Box>
  );
};

export default Index;
