import { Avatar, IconButton } from "@mui/material";
import { blue } from "@mui/material/colors";
import React, { Dispatch, SetStateAction } from "react";

export default function ProfileAvatar({
  setAnchorEl,
  username,
}: {
  username: string;
  setAnchorEl: Dispatch<SetStateAction<HTMLElement | null>>;
}) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <IconButton onClick={handleClick}>
      <Avatar sx={{ bgcolor: blue[700] }}>{username.at(0)}</Avatar>
    </IconButton>
  );
}
