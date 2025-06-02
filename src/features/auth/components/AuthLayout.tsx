import { Box, Typography } from "@mui/material";
import type { ReactNode } from "react";

type AuthLayoutProps = {
  children: ReactNode;
  title: string;
  subtitle: string;
};

const AuthLayout = ({ children, title, subtitle }: AuthLayoutProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      {/* Left side */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: "primary.main",
          color: "secondary.main",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          p: 4,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            letterSpacing: "1px",
            color: "white",
            textAlign: "center",
          }}
        >
          KNOWITALL <br />
          OPTIONS <br />
          TRACKER
        </Typography>
      </Box>

      {/* Right side */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 4,
          flexDirection: "column",
        }}
      >
        <Box sx={{ width: "100%", maxWidth: 400, textAlign: "center" }}>
          <Typography variant="h1" gutterBottom>
            {title}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {subtitle}
          </Typography>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default AuthLayout;
