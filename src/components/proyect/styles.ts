import Box from "@mui/material/Box";
import styled from "styled-components";

export const Title = styled.h2`
  font-weight: 500;
`;

export const Field = styled(Box)`
  margin: 15px 0;
  & label {
    display: block;
    margin-bottom: 5px;
    font-size: 12.5px;
    font-weight: 500;
    font-family: "Poppins";
  }
`;
