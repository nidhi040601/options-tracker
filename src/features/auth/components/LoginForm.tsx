// src/features/auth/components/LoginForm.tsx
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../validation/loginSchema";
import { z } from "zod";
import {
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import SocialButton from "./SocialButton";

type LoginFormData = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({ resolver: zodResolver(loginSchema) });

  const onSubmitHandler = (data: LoginFormData) => {
    console.log("Login data:", data);
    alert("Login attempt submitted!");
  };

  return (
    <Box>
      <Stack spacing={2} sx={{ my: 2 }}>
        <SocialButton
          icon={<FcGoogle size={24} />}
          text="Continue with Google"
          onClick={() => console.log("Google login")}
        />
        <SocialButton
          icon={<FaApple size={24} />}
          text="Continue with Apple"
          onClick={() => console.log("Apple login")}
        />
      </Stack>

      <Divider sx={{ my: 2 }}>OR</Divider>

      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={isSubmitting}
          sx={{ mt: 2 }}
        >
          {isSubmitting ? "Logging in..." : "Log In"}
        </Button>
      </form>

      <Typography variant="body2" align="center" sx={{ mt: 2 }}>
        Don’t have an account?{" "}
        <Link to="/signup" style={{ color: "#E57373", textDecoration: "none" }}>
          Sign up now
        </Link>
      </Typography>
    </Box>
  );
};

export default LoginForm;
