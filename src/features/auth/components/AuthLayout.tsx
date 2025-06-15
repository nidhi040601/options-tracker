import { Box, Typography, useTheme } from "@mui/material";
import type { ReactNode } from "react";
import glowLogo from "../../../assets/logo.png";
import headingImage from "../../../assets/knowitall.png";

export type AuthLayoutProps = {
  children: ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* Left Panel */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: theme.palette.primary.light,
          position: "relative",
        }}
      >
        <Box
          component="img"
          src={headingImage}
          alt="Know It All Logo"
          sx={{
            position: "absolute",
            top: "12%",
            left: "23%",
            width: "400px",
            height: "auto",
            zIndex: 2,
          }}
        />

        <Box
          component="img"
          src={glowLogo}
          alt="Chart Image"
          sx={{
            position: "absolute",
            bottom: "23%",
            left: "20%",
            width: "580px",
            height: "auto",
            zIndex: 1,
          }}
        />
      </Box>

      {/* Right Panel */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 4,
        }}
      >
        <Box sx={{ width: "100%", maxWidth: 400 }}>{children}</Box>
      </Box>
    </Box>
  );
};

export default AuthLayout;