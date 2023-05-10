import Box from "@mui/material/Box";
import Input from "@/components/Input";
import { Title, Field } from "../styles";

interface createProyectProps {
  register: any;
  errors: any;
}

const Index = ({ register, errors }: createProyectProps) => {
  return (
    <Box>
      <Title>Project</Title>
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
