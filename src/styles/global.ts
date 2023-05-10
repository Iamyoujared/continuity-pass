import styled from "styled-components";
import Box from "@mui/material/Box";
import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`

    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");

    body,
    h1,
    h2,
    h3 {
        margin: 0;
    }

    h1,
    h2,
    h3,
    h4,
    p,
    a,
    button, li, a, span, small {
    margin: 0;
    font-family: "Poppins";
    }

    a {
    color: #000;
    text-decoration: none;
    }

    button .gm-ui-hover-effect {
    margin: 5px !important;
    }

    textarea::placeholder {
    color: #aab5be;
    padding-bottom: 10px;
    }

    hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #ccc;
    margin: 1em 0;
    padding: 0;
    }
    .css-9gjnh6-MuiPaper-root-MuiAccordion-root {
        box-shadow: none !important;
        border: none !important;
    }
`;

export const Error = styled(Box)`
  background-color: #b0475921;
  padding: 15px;
  border-radius: 7px;
  border: 1px solid #b04759;
  & p {
    font-size: 12px;
  }
`;
