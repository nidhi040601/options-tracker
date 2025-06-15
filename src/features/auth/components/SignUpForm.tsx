import {
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "../validation/signUpSchema";
import { z } from "zod";
import SocialButton from "./SocialButton";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";

type SignUpFormData = z.infer<typeof signUpSchema>;

const SignUpForm = () => {
  const theme = useTheme();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = (data: SignUpFormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h1" align="center" gutterBottom>
        Join the Club!
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        gutterBottom
      >
        Create your account in a flash
      </Typography>

      <Stack spacing={1.5} mt={2}>
        <SocialButton
          icon={<FcGoogle />}
          text="Continue with Google"
          background={theme.palette.background.paper}
          color={theme.palette.text.primary}
        />
        <SocialButton
          icon={<FaApple />}
          text="Continue with Apple"
          background={theme.palette.background.paper}
          color={theme.palette.text.primary}
        />

        <Divider sx={{ my: 1 }}>OR</Divider>

        <Typography variant="body2" fontWeight={500}>
          EMAIL
        </Typography>
        <TextField
          fullWidth
          placeholder="Email"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        <Typography variant="body2" fontWeight={500}>
          PASSWORD
        </Typography>
        <TextField
          fullWidth
          placeholder="Password"
          type="password"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />

        <Typography variant="body2" fontWeight={500}>
          CONFIRM PASSWORD
        </Typography>
        <TextField
          fullWidth
          placeholder="Confirm Password"
          type="password"
          {...register("confirmPassword")}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword?.message}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          disabled={isSubmitting}
          sx={{ mt: 2 }}
        >
          Sign Up
        </Button>

        <Typography align="center" mt={2}>
          Already have an account?{" "}
          <Link
            to="/login"
            style={{
              color: theme.palette.primary.main,
              textDecoration: "none",
            }}
          >
            Login now
          </Link>
        </Typography>
      </Stack>
    </form>
  );
};

export default SignUpForm;
