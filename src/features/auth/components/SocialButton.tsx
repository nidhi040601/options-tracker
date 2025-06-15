import { Button, Box, Typography, useTheme } from "@mui/material";
import type { ReactNode } from "react";
import socialButtonStyles from "../../../theme/socialButtonStyles";

interface SocialButtonProps {
  icon: ReactNode;
  text: string;
  onClick?: () => void;
  background?: string;
  color?: string;
}

const SocialButton = ({ icon, text, onClick, background, color }: SocialButtonProps) => {
  const theme = useTheme();

  return (
    <Button
      onClick={onClick}
      variant="outlined"
      fullWidth
      sx={{
        socialButtonStyles,
        backgroundColor: background ?? theme.palette.background.paper,
        color: color ?? theme.palette.text.primary,
       // textTransform: "none",
        borderRadius: theme.shape.borderRadius * 3,
        paddingY: theme.spacing(1.5),
        paddingX: theme.spacing(3),
       // display: "flex",
       // alignItems: "center",
       // justifyContent: "center",
        gap: theme.spacing(1.5),
       // border: "none",
       // boxShadow: "socialButtonStyles.boxShadow",
        fontSize: theme.typography.body1.fontSize,
        fontWeight: theme.typography.fontWeightRegular,
        "&:hover": {
          backgroundColor: theme.palette.grey[100],
        },
      }}
    >
      <Box component="span" sx={{ display: "flex", alignItems: "center" }}>
        {icon}
      </Box>
      <Typography variant="body1" fontWeight={theme.typography.fontWeightRegular}>
        {text}
      </Typography>
    </Button>
  );
};

export default SocialButton;
