/** @jsxImportSource @emotion/react */
import React from "react";
import { NavLink } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import styles from "./styles";
import { APP_ROUTES } from "../../constants/appRoutes";

export function Header() {
  return (
    <Box css={styles.header}>
      <NavLink to={APP_ROUTES.MAIN} style={{ textDecoration: "none" }}>
        <Typography
          color="textPrimary"
          variant="h4"
          sx={{ ml: "20px", fontWeight: 800 }}
        >
          Pinger tool
        </Typography>
      </NavLink>

      <Box css={styles.tabs}>
        <NavLink to={APP_ROUTES.PINGER} style={{ textDecoration: "none" }}>
          <Typography
            color="textPrimary"
            variant="h6"
            sx={{ ml: "20px", fontWeight: 400 }}
          >
            PING
          </Typography>
        </NavLink>
      </Box>
    </Box>
  );
}
