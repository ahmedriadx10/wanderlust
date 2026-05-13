"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Spinner,
  TextField,
} from "@heroui/react";
import { redirect } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export function SignUpForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const exactFromData = Object.fromEntries(formData.entries());

    console.log(exactFromData);

    const { error } = await authClient.signUp.email(
      {
        ...exactFromData,
      },
      {
        onSuccess: () => {
          toast.success("Sign Up successfull");
          redirect("/");
        },
      },
    );

    if (error) {
      toast.error(`${error?.message}`);
    }
  };

  return (
    <Form
      className="flex  flex-col gap-5 "
      render={(props) => <form {...props} data-custom="foo" />}
      onSubmit={handleSubmit}
    >
      <TextField isRequired name="name" type="text">
        <Label>Name</Label>
        <Input
          placeholder="Enter your name"
          className={"bg-[#EEEEEE99] shadow-none  rounded-none p-3"}
        />
        <FieldError />
      </TextField>
      <TextField name="image" type="text">
        <Label>Image URL</Label>
        <Input
          placeholder="Enter image url"
          className={"bg-[#EEEEEE99] shadow-none rounded-none p-3"}
        />
        <FieldError />
      </TextField>
      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }

          return null;
        }}
      >
        <Label>Email</Label>
        <Input
          placeholder="Enter your email"
          className={"bg-[#EEEEEE99] shadow-none  rounded-none p-3"}
        />
        <FieldError />
      </TextField>

      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }

          return null;
        }}
      >
        <Label>Password</Label>
        <Input
          placeholder="Enter password"
          className={"bg-[#EEEEEE99] shadow-none  rounded-none p-3"}
        />
        <FieldError />
      </TextField>

      <div className="">
        <Button type="submit" fullWidth className={"rounded-none"}>
          {loading ? <Spinner color="current" /> : "Create Account"}
        </Button>
      </div>
    </Form>
  );
}
