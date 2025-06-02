// src/features/auth/pages/login.tsx
import AuthLayout from "../features/auth/components/AuthLayout";
import LoginForm from "../features/auth/components/LoginForm";

const LoginPage = () => {
  return (
    <AuthLayout
      title="Welcome Back!"
      subtitle="Login to your account"
    >
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
