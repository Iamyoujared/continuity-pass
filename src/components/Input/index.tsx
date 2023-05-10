import React from "react";
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

interface InputProps {
  type: string;
  register?: any;
  errors?: any;
  keyName: string;
  placeholder: string;
  value?: any;
  validate?: any;
  minLength?: string;
}

const Input = styled(TextField)(({}) => ({
  "& .MuiInputBase-input": {
    fontSize: "13px",
    padding: "13.5px 14px",
  },
}));

const Index = (props: InputProps) => {
  const {
    register,
    keyName,
    validate,
    minLength,
    value,
    type,
    errors,
    placeholder,
  } = props;
  return (
    <div>
      <Input
        variant="outlined"
        size="small"
        sx={{ fontFamily: "Poppins" }}
        fullWidth={true}
        {...register(keyName, {
          required: true,
          validate: validate,
          minLength: minLength,
        })}
        value={value}
        type={type}
        placeholder={placeholder}
      />
      {errors[keyName] && (
        <Typography variant="caption">* Este campo es requerido</Typography>
      )}
    </div>
  );
};

export default Index;
