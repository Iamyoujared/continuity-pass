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

export const Step = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 13px;
  height: 13px;
  background-color: #e4e4e4;
  padding: 10px;
  border-radius: 50px;
  & p {
    font-size: 13px;
  }
`;
