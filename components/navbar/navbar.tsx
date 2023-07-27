"use client";

import {
  Box,
  Container,
  Stack,
  AppBar,
  IconButton,
  Badge,
} from "@mui/material";
import Image from "next/image";
import Navlinks from "./components/navlinks";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useState } from "react";
import HideOnScroll from "@/reusables/hideOnScroll";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useRecoilValue } from "recoil";
import { cartItemState } from "@/state/atom/cart";
import LoginNoticeModal from "@/reusables/loginNoticeModal";
import CtaButton from "./components/cta";
import ProfileAvatar from "./components/profileAvatar";
import DropDownMenu from "./components/dropDownMenu";
import SearchField from "./components/searchField";
import { Role } from "@prisma/client";
import AuthorLinks from "@/authorComponents/authorLinks";
import { userDataState } from "@/state/atom/user";
import { useQuery } from "react-query";
import axios from "axios";
import { FetchedCart } from "@/types";

export default function Navbar() {
  const user = useRecoilValue(userDataState);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const currentPath = usePathname();
  const navigate = useRouter();

  const { data: cartItems } = useQuery(["cartItems", user.id], () => {
    return axios.get(`/api/cart/get/${user.id}`).then((res) => {
      console.log(res);
      return res.data.items as FetchedCart[];
    });
  });

  const handleCartClick = () => {
    if (!user.id) {
      setOpenModal(true);
      return;
    }
    navigate.push("cart");
  };
  return currentPath === "/login" || currentPath === "/register" ? null : (
    <HideOnScroll>
      <AppBar
        position="fixed"
        color="transparent"
        sx={{
          boxShadow: "none",
          paddingBlock: ".8rem",
        }}
      >
        <LoginNoticeModal openModal={openModal} setOpenModal={setOpenModal} />
        <Container maxWidth="lg">
          <Stack direction="row" justifyContent="space-between">
            <Box
              display="flex"
              alignItems="center"
              flexDirection="row"
              gap="5rem"
            >
              <Link
                href="/"
                style={{ textDecoration: "inherit", color: "inherit" }}
              >
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={500}
                  height={50}
                  style={{ width: "8rem", height: "100%" }}
                />
              </Link>
              <Navlinks links={["Home", "About", "Books", "Authors"]} />
            </Box>
            <Stack direction="row" spacing={2} alignItems="center">
              {user?.role === Role.AUTHOR ? <AuthorLinks /> : null}
              <IconButton onClick={handleCartClick}>
                <Badge badgeContent={cartItems?.length} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
              {user.id ? (
                <IconButton>
                  <NotificationsIcon />
                </IconButton>
              ) : null}
              {user.id ? (
                <ProfileAvatar setAnchorEl={setAnchorEl} username={user.name} />
              ) : (
                <CtaButton />
              )}
              <DropDownMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
            </Stack>
          </Stack>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
}
