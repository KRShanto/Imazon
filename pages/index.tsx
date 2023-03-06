import React from "react";
import Head from "next/head";
import Home from "@/components/Home";

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

      <Home />
    </>
  );
}
