import React from "react";
import { signIn } from "next-auth/react";
import Head from "next/head";

export default function Index() {
  return (
    <>
      <Head>
        <title>Imazon</title>
        <meta
          name="description"
          content="An ecommerce website where you can buy and sell products"
        />
      </Head>

      <div>
        <h1>Hello world</h1>

        <button onClick={() => signIn()}>Sign in with Google</button>
      </div>
    </>
  );
}
