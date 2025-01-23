"use client";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";

const Header = () => {
  const { user } = useUser();
  return (
    <div className="px-10 lg:px-32 xl:px-48 2xl:px-56 p-4 flex justify-between items-center shadow-md">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={100} height={50} />
      </Link>
      <div className="flex gap-3 items-center">
        {user ? <Button>Dashboard</Button> : <Button>Get Started</Button>}
        <UserButton />
      </div>
    </div>
  );
};

export default Header;
