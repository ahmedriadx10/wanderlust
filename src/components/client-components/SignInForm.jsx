"use client";

import {Check} from "@gravity-ui/icons";
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";

export function SignInForm() {

  const handleSubmit=(e)=>{
e.prventDefault()

  }




  return (
    <Form
      className="flex  flex-col gap-5 "
      render={(props) => <form {...props} data-custom="foo" />}
      onSubmit={handleSubmit}
    >


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
        <Input placeholder="Enter your email" className={'bg-[#EEEEEE99] rounded-none shadow-none p-3'} />
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
        <Input placeholder="Enter password" className={'bg-[#EEEEEE99] shadow-none rounded-none p-3'} />
        <FieldError />
      </TextField>

      <div className="">
        <Button type="submit" fullWidth className={'rounded-none'}>

Sign In
        </Button>
      
      </div>
    </Form>
  );
}