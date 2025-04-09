import {
  AdminPanelSettings as AdminPanelSettingsIcon,
  Group as GroupIcon,
  Message as MessageIcon,
  Notifications as NotificationsIcon,
  Person as PersonIcon,
} from "@mui/icons-material";
import { Box, Container, Paper, Skeleton, Stack, Typography } from "@mui/material";
import moment from "moment";
import React from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import { LayoutLoader } from "../../components/layout/Loaders";
import { DoughChart, LineChart } from "../../components/specific/Charts";
import {
  CurveButton,
  SearchField,
} from "../../components/styles/StyledComponents";
import { matBlack } from "../../constants/color";
import { useErrors } from "../../hooks/Hook";
import { useGetStatsQuery } from "../../redux/api/api";

const Dashboard = () => {
  const { data, isLoading, isError, error } = useGetStatsQuery();

  useErrors([{ isError, error }]);

  const { stats } = data || {};

  const Appbar = (
    <Paper
      elevation={3}
      sx={{
        padding: { xs: "0.5rem", sm: "2rem", md: "1rem", lg: "2rem" },
        margin: "2rem 0",
        borderRadius: "1rem",
      }}
    >
      <Stack
        direction={"row"}
        spacing={{ xs: "0.5rem", sm: "2rem", md: "0.7rem", lg: "2rem" }}
        alignItems={"center"}
      >
        <AdminPanelSettingsIcon sx={{ fontSize: "3rem" }} />
        <SearchField placeholder="search..." />
        <CurveButton>Search</CurveButton>
        <Box flexGrow={"1"} />
        <Typography
          textAlign={"center"}
          color="rgba(0,0,0,0.5)"
          sx={{ display: { xs: "none", lg: "block" } }}
        >
          {moment().format("dddd, D MMMM YYYY")}
        </Typography>
        <NotificationsIcon />
      </Stack>
    </Paper>
  );

  const Widgets = (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      justifyContent={"space-between"}
      margin={"2rem 0"}
      alignItems={"center"}
      spacing={"2rem"}
    >
      <Widget title={"Users"} value={stats?.usersCount} icon={<PersonIcon />} />
      <Widget
        title={"Chats"}
        value={stats?.totalChatsCount}
        icon={<GroupIcon />}
      />
      <Widget
        title={"Messages"}
        value={stats?.messagesCount}
        icon={<MessageIcon />}
      />
    </Stack>
  );

  return isLoading ? (
    <LayoutLoader />
  ) : (
    <AdminLayout>
      {
        isLoading? <Skeleton height={"100vh"}/> : <Container component={"main"} sx={{ padding: { xs: "3rem" } }}>
        {Appbar}
        <Stack
          direction={{ xs: "column", lg: "row" }}
          spacing={"2rem"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          alignItems={{
            xs: "center",
            lg: "stretch",
          }}
          gap={"2rem"}
        >
          <Paper
            elevation={3}
            sx={{
              padding: "2rem 3.5rem",
              borderRadius: "1rem",
              width: "100%",
              maxWidth: "45rem",
            }}
          >
            <Typography margin={"2rem 0"} variant="h4">
              Last Messages
            </Typography>
            <LineChart value={stats?.messagesChart || []} />
          </Paper>
          <Paper
            elevation={3}
            sx={{
              padding: "1rem",
              borderRadius: "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              width: { xs: "100%", sm: "50%" },
              width: "100%",
              maxWidth: "25rem",
              height: "25rem",
            }}
          >
            <DoughChart
              labels={["single chat", "group chat"]}
              value={[
                stats?.totalChatsCount - stats?.groupsCount || 0,
                stats?.groupsCount || 0,
              ]}
            />
            <Stack
              spacing={"1rem"}
              direction={"row"}
              position={"absolute"}
              height={"100%"}
              width={"100%"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <GroupIcon />
              <Typography>Vs</Typography>
              <PersonIcon />
            </Stack>
          </Paper>
        </Stack>
        {Widgets}
      </Container>
      }
    </AdminLayout>
  );
};

const Widget = ({ title, value, icon }) => (
  <Paper
    elevation={3}
    sx={{
      padding: "2rem",
      margin: "2rem 0",
      borderRadius: "1.5rem",
      width: "20rem",
    }}
  >
    <Stack alignItems={"center"} spacing={"1rem"}>
      <Typography
        sx={{
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "5rem",
          height: "5rem",
          borderWidth: "5px",
          borderColor: matBlack,
          borderStyle: "solid",
          color: "rgba(0,0,0,0.7)",
        }}
      >
        {value}
      </Typography>
      <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
        {icon}
        <Typography>{title}</Typography>
      </Stack>
    </Stack>
  </Paper>
);

export default Dashboard;
