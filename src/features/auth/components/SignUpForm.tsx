import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signUpSchema } from "../validation/signUpSchema";
import { z } from "zod";
import { Box, Typography, useTheme } from "@mui/material";

type SignUpFormData = z.infer<typeof signUpSchema>;

const SignUpForm = () => {
  const theme = useTheme();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({ resolver: zodResolver(signUpSchema) });

  const onSubmitHandler = (userData: SignUpFormData) => {
    console.log("User data", userData);

    //TODO: Call register API from authService

    alert("Registered successfully!");
  };

  return (
    <div
      style={{
        maxWidth: 400,
        padding: "2rem",
      }}
    >
      {/* Different ways to use theme properties using 'theme' variable and directly */}
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "text.muted",
          fontSize: theme.typography.body1.fontSize, //18px from theme
          fontWeight: theme.typography.fontWeightMedium, // 500 from theme
          padding: 2, // in theme defined as 8, hence 8*2 = 16px
          borderRadius: 1, // in theme defined as 8, means 8px
        }}
      >
        Hello
      </Box>
      {/* Typography using h1 styles defined in your theme */}
      <Typography variant="h1">Heading</Typography>
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div>
          <label>Email</label>
          <input
            type="email"
            {...register("email")}
            placeholder="Enter email"
            style={{ width: "100%" }}
          />
          {errors.email && (
            <p style={{ color: "red" }}>{errors.email.message}</p>
          )}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            {...register("password")}
            placeholder="Enter password"
            style={{ width: "100%" }}
          />
          {errors.password && (
            <p style={{ color: "red" }}>{errors.password.message}</p>
          )}
        </div>

        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            {...register("confirmPassword")}
            placeholder="Confirm password"
            style={{ width: "100%" }}
          />
          {errors.confirmPassword && (
            <p style={{ color: "red" }}>{errors.confirmPassword.message}</p>
          )}
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
