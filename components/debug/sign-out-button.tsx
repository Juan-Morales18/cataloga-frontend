"use client";

import { useActionState } from "react";
import { signOutAction } from "@/actions/auth";
import { Button } from "@/components/ui/button";

export function SignOutButton() {
  const [state, formAction] = useActionState(signOutAction, undefined);

  return (
    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
      <h3 className="text-lg font-bold mb-2 text-red-800">Debug: Sign Out</h3>
      <p className="text-sm text-red-600 mb-4">
        Use this button to sign out and clear the session for testing.
      </p>

      <form action={formAction}>
        <Button type="submit" variant="destructive" className="w-full">
          {state === "SUCCESS" ? "Signed Out Successfully" : "Sign Out"}
        </Button>
      </form>

      {state && (
        <div className="mt-2 text-sm">
          <strong>Status:</strong> {state}
        </div>
      )}
    </div>
  );
}

