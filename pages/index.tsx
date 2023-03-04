import React from "react";
import { signIn } from "next-auth/react";

export default function Index() {
  return (
    <div>
      <h1>Hello world</h1>

      <button onClick={() => signIn()}>Sign in with Google</button>
    </div>
  );
}
