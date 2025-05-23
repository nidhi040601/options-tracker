import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { registerSchema } from "../validation/registerSchema";
import { z } from "zod";

type RegisterFormData = z.infer<typeof registerSchema>;

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({ resolver: zodResolver(registerSchema) });

  const onSubmitHandler = (userData: RegisterFormData) => {
    console.log("User data", userData);

    //TODO: Call register API from authService

    alert("Registered successfully!");
  };

  return (
    <div style={{ maxWidth: 400, padding: "2rem" }}>
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

export default RegisterForm;
