import { Box, Stack, Typography } from "@mui/material";
import React, {memo} from "react";
import { Link } from "../styles/StyledComponents";
import AvatarCard from "./AvatarCard";
import {motion} from 'framer-motion';

const ChatItem = ({
  avatar = [],
  _id,
  name,
  groupChat = false,
  sameSender,
  isOnline,
  newMessageAlert,
  index = 0,
  handleDeleteChat,
}) => {
  return <Link 
    to={`/chat/${_id}`}
    onContextMenu={(e) => (handleDeleteChat(e, _id, groupChat))}
    >
    <motion.div
        initial={{opacity: 0, y: "-100%"}}
        whileInView={{opacity: 1, y: 0}}
        transition={{delay: index*0.1}}
        style={{
            display: "flex",
            alignItems: "center",
            padding: "1rem",
            backgroundColor: sameSender ? "black" : "unset",
            color: sameSender ? "white" : "unset",
            gap : "1rem",
            position: "relative",
            textDecoration: "none"
        }}  
    >
        <AvatarCard avatar={avatar}/>
        <Stack>
            <Typography sx={{ fontSize: "1.1rem" }}>{name}</Typography>
            {
                newMessageAlert && 
                (<Typography sx={{ fontSize: "0.85rem", color: "gray" }}>{newMessageAlert.count} New Messages</Typography>)
            }
        </Stack>
        {
            isOnline && <Box sx={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                bgcolor: "green",
                position: "absolute",
                top: "50%",
                right: "1rem",
                transform: "translateY(-50%)"
            }}/>
        }


    </motion.div>
  </Link>;
};

export default memo(ChatItem);
// render only when something in chatItem changes
