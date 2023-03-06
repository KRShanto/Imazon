import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import SearchBar from "./SearchBar";
import { useMobileStore } from "@/stores/mobile";

export default function Navbar() {
  const { data: session, status } = useSession();
  const [iconSize, setIconSize] = useState(50);
  const { isMobile } = useMobileStore();

  const cartLength = 3; // TODO

  useEffect(() => {
    if (isMobile) {
      setIconSize(40);
    } else {
      setIconSize(50);
    }
  }, [isMobile]);

  return (
    <nav>
      <div className="upper">
        <div className="logo">
          <h1 className="text">imazon</h1>
        </div>

        {!isMobile && <SearchBar />}

        <div className="more">
          <Link href="/cart" className="cart">
            <FaShoppingCart className="cart-icon" />
            <p className="text">Cart</p>
            <span className="cart-length">{cartLength}</span>
          </Link>

          <div className="profile">
            {status === "authenticated" ? (
              <Image
                className="profile-image"
                src={session.user?.image || ""}
                alt="profile"
                width={iconSize}
                height={iconSize}
              />
            ) : (
              <button
                onClick={() => {
                  signIn();
                }}
                className="btn"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="lower">{isMobile && <SearchBar />}</div>
    </nav>
  );
}
