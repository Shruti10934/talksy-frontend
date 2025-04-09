import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
import {
    Face as FaceIcon,
    AlternateEmail as UsernameIcon,
    CalendarMonth as CalendarIcon
} from "@mui/icons-material"
import moment from 'moment';
import { transformImage } from "../../lib/features";

const Profile = ({user}) => {
  return (
    <Stack direction={"column"} spacing={"2rem"} alignItems={"center"}>
      <Avatar
      src={transformImage(user?.avatar?.url)}
        sx={{
          width: 200,
          height: 200,
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white",
        }}
      />
      <ProfileCard heading={"Bio"} text={user?.bio} />
      <ProfileCard heading={"Username"} text={user?.username} Icon={<UsernameIcon/>} />
      <ProfileCard heading={"Name"} text={user?.name} Icon={<FaceIcon/>}/>
      <ProfileCard heading={"Joined"} text={moment(user?.createdAt).fromNow()} Icon={<CalendarIcon/>}/>
    </Stack>
  );
};

const ProfileCard = ({ text, Icon, heading }) => (
  <Stack
    direction={"row"}
    spacing={"1rem"}
    alignItems={"center"}
    color={"white"}
    textAlign={"center"}
  >
    {Icon && Icon}
    <Stack>
        <Typography variant="body1">{text}</Typography>
        <Typography variant="caption" color="gray">{heading}</Typography>
    </Stack>
  </Stack>
);

export default Profile;
