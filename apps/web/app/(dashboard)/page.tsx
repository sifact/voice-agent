"use client";

import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { useMutation } from "convex/react";

import { Button } from "@workspace/ui/components/button";
import { api } from "../../../../packages/backend/convex/_generated/api";

export default function Page() {
  const addUser = useMutation(api.users.add);

  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <p>apps/web</p>
      <UserButton />
      <OrganizationSwitcher hidePersonal />
      <Button onClick={() => addUser()}>Add</Button>
    </div>
  )
}