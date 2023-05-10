import styled from "styled-components";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import FolderIcon from "@/assets/icons/folder.svg";

interface cardProps {
  selected: boolean;
}

const Card = styled(Box)<cardProps>`
  background: ${({ selected }) =>
    selected ? "rgb(148, 66, 226)" : "transparent"};
  background: ${({ selected }) =>
    selected
      ? `
  linear-gradient(
    90deg,
    rgba(148, 66, 226, 0.2) 0%,
    rgba(255, 255, 255, 1) 100%
  );`
      : "none"};
  border-bottom: ${({ selected }) =>
    selected ? "none" : "1px solid #8080802e"};
  border-radius: 3px;
  cursor: pointer;
`;

const Content = styled(Stack)`
  padding: 12px;
`;

const Icon = styled(Image)`
  width: 14px;
  height: 14px;
  color: transparent;
  display: block;
  background: #000;
  padding: 7px;
  border-radius: 3px;
`;

const Private = styled.small`
  font-size: 10px;
  border: 1px solid #ececec;
  padding: 2px 10px;
  border-radius: 20px;
  margin-left: 10px;
`;

const Name = styled(Typography)``;

interface repoCardProps {
  id: number;
  html_url: string;
  name: string;
  private: boolean;
  setValue: any;
  watch: any;
}

const Index = ({
  id,
  html_url,
  name,
  private: isPrivate,
  setValue,
  watch,
}: repoCardProps) => {
  return (
    <Card
      selected={watch("repo")?.id === id ? true : false}
      onClick={() =>
        setValue("repo", { id: id, html_url: html_url, name: name })
      }
    >
      <Content direction="row" spacing={1.6} mt={1.5} alignItems="center">
        <Box>
          <Icon priority src={FolderIcon} alt="folder-icon" />
        </Box>
        <Box>
          <Name>
            {name}
            {isPrivate && <Private>Private</Private>}
          </Name>
        </Box>
      </Content>
    </Card>
  );
};

export default Index;
