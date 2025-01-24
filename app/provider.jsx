"use client";
import Header from "@/components/Header";
import { UserDetailsContext } from "@/context/UserDetailsContext";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import React, { use, useEffect, useState } from "react";

const Provider = ({ children }) => {
  const { user } = useUser();
  const [userDetail, setUserDetail] = useState();

  useEffect(() => {
    user && CheckUserAuth();
  }, [user]);

  const CheckUserAuth = async () => {
    const result = await axios.post("/api/users", {
      userName: user?.fullName,
      userEmail: user?.primaryEmailAddress?.emailAddress,
    });
    setUserDetail(result.data);
    console.log(userDetail);
  };

  return (
    <div>
      <UserDetailsContext.Provider value={{ userDetail, setUserDetail }}>
        <Header />
        <div className="px-10 lg:px-32 xl:px-48 2xl:px-56"> {children}</div>
      </UserDetailsContext.Provider>
    </div>
  );
};

export default Provider;
