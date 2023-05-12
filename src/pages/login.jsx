import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import Button from "@/components/common/Button";
import CheckBox from "@/components/Input/CheckBox";
import Input from "@/components/Input";

const schema = Yup.object({
  username: Yup.string().label("Username").required("Enter username"),
  password: Yup.string().label("Password").required("Enter password"),
});

export default function Login() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async ({ username, password }) => {
    // establish connection with the backend and try to login to the system
    setLoading(true);

    try {
      const res = await signIn("credentials", {
        redirect: false,
        username,
        password,
        callbackUrl: `${window.location.origin}`,
      });

      if (res?.error) setError("password", { message: res.error });

      if (res.url) router.push(res.url);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="login-section">
        <div className="d-flex justify-content-center align-items-center h-50">
          <div className="login-card">
            {/* <Logo /> */}

            <h2 className="fw-bold">Login Here !</h2>
            <p className="mb-4">Hey ! Enter your details to get sign in to your account.</p>

            <Input type="text" label="Username" register={register} name="username" error={errors?.username?.message} />

            <Input
              type="password"
              label="Password"
              register={register}
              name="password"
              error={errors?.password?.message}
            />

            <CheckBox label="Remember me when last logged in." />

            <div className="mt-4">
              <Button onClick={handleSubmit(onSubmit)} loading={loading}>
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
