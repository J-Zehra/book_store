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
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { m } from "framer-motion";
import { useRecoilValue } from "recoil";
import { cartItemState } from "@/state/atom/cart";
import LoginNoticeModal from "@/reusables/loginNoticeModal";
import CtaButton from "./components/cta";
import ProfileAvatar from "./components/profileAvatar";
import DropDownMenu from "./components/dropDownMenu";
import SearchField from "./components/searchField";
import { Role } from "@prisma/client";
import AuthorLinks from "@/authorComponents/authorLinks";
import useSessionData from "@/hooks/useSessionData";

export default function Navbar() {
  const { userData, status } = useSessionData();
  const cartItem = useRecoilValue(cartItemState);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const currentPath = usePathname();
  const navigate = useRouter();

  const handleCartClick = () => {
    if (status === "unauthenticated") {
      setOpenModal(true);
      return;
    }

    navigate.push("cart");
  };

  console.log(userData);

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
                  src="/logo.svg"
                  alt="Logo"
                  width={500}
                  height={50}
                  style={{ width: "6rem", height: "100%" }}
                />
              </Link>
              <Navlinks links={["Home", "About", "Books", "Authors"]} />
            </Box>
            <Stack direction="row" spacing={2} alignItems="center">
              {userData.role === Role.AUTHOR ? (
                <AuthorLinks />
              ) : (
                <SearchField />
              )}
              <IconButton onClick={handleCartClick}>
                <Badge badgeContent={cartItem.length} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
              {status === "authenticated" ? (
                <IconButton>
                  <NotificationsIcon />
                </IconButton>
              ) : null}
              {status === "authenticated" ? (
                <ProfileAvatar
                  setAnchorEl={setAnchorEl}
                  username={userData.name}
                />
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
