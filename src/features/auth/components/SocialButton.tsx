
import { Button, Stack, Typography } from "@mui/material";
import type { ReactNode } from "react";

type SocialButtonProps = {
  icon: ReactNode;
  text: string;
  onClick?: () => void;
};

const SocialButton = ({ icon, text, onClick }: SocialButtonProps) => {
  return (
    <Button
      onClick={onClick}
      fullWidth
      sx={{
        backgroundColor: "#FAFAFA",
        borderRadius: "8px",
        padding: "12px",
        textTransform: "none",
        fontWeight: 500,
        fontSize: "1rem",
        border: "1px solid #E0E0E0",
        boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center", // center everything
        gap: 1,
        color: "#000000", // ensure text is black
        "&:hover": {
          backgroundColor: "#f0f0f0",
        },
      }}
    >
      <Stack direction="row" spacing={1} alignItems="center">
        {icon}
        <Typography variant="body1" component="span" sx={{ color: "#000000" }}>
          {text}
        </Typography>
      </Stack>
    </Button>
  );
};

export default SocialButton;
