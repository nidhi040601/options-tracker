// src/features/auth/pages/signUp.tsx
import AuthLayout from "../features/auth/components/AuthLayout";
import SignUpForm from "../features/auth/components/SignUpForm";

const SignUpPage = () => {
  return (
    <AuthLayout
      title="Join the Club!"
      subtitle="Create your account in a flash"
    >
      <SignUpForm />
    </AuthLayout>
  );
};

export default SignUpPage;
