import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Input from "@/components/Input";
import { Title, Field, Step } from "../styles";

interface createProyectProps {
  register: any;
  errors: any;
}

const Index = ({ register, errors }: createProyectProps) => {
  return (
    <Box>
      <Stack direction="row" spacing={1} alignItems="center">
        <Step>
          <p>1</p>
        </Step>
        <Title>Project</Title>
      </Stack>
      <Box>
        <Field>
          <label>Name</label>
          <Input
            type="text"
            register={register}
            errors={errors}
            keyName="project_name"
            placeholder="Name"
          />
        </Field>
        <Field>
          <label>Description</label>
          <Input
            type="text"
            register={register}
            errors={errors}
            keyName="project_description"
            placeholder="Description"
          />
        </Field>
      </Box>
    </Box>
  );
};

export default Index;
