"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { PiSignOutBold } from "react-icons/pi";

const SignOutBtn = () => {
  const router = useRouter();
  const handleSignOut = async () => {
    const result = await authClient.signOut();

    if (result?.data?.success) {
      router.refresh("/");
    }
  };

  return (
    <Button
      size="sm"
      variant="danger"
      className={"rounded-xl"}
      onPress={handleSignOut}
    >
      <PiSignOutBold /> Sing Out
    </Button>
  );
};

export default SignOutBtn;
