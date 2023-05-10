import styled from "styled-components";
import router from "next/router";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LogoIcon from "@/assets/images/logo-continuity-assign.svg";
import { UseUsers } from "@/core/api";

const Wrapper = styled(Box)`
  background-color: transparent;
  padding: 25px 50px;
  border-bottom: 1px solid #d0d0d0;
`;

const Logo = styled(Typography)`
  color: #000;
  font-weight: 500 !important;
  font-size: 20px !important;
`;

const DisplayName = styled(Typography)`
  color: #000;
  font-weight: 400 !important;
  font-size: 12px !important;
`;

const Badge = styled(Box)`
  cursor: pointer;
`;

const Index = () => {
  const { users, isLoading } = UseUsers();

  return (
    <Wrapper>
      <Stack
        direction="row"
        spacing={1}
        mt={0}
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Image width={220} priority src={LogoIcon} alt="Continuity" />
        </Box>
        <Badge onClick={() => router.push(`/profile/${users.id}`)}>
          <Stack
            direction="row"
            spacing={1}
            mt={0}
            alignItems="center"
            justifyContent="space-between"
          >
            <DisplayName>{users?.name}</DisplayName>
            <Avatar
              alt="ncieone"
              src={users?.avatar_url}
              sx={{ width: 37, height: 37, bgcolor: "#AA77FF", color: "#fff" }}
            />
          </Stack>
        </Badge>
      </Stack>
    </Wrapper>
  );
};

export default Index;
