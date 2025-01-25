"use client";

import Prompt from "@/constants/Prompt";
import { UserDetailsContext } from "@/context/UserDetailsContext";
import axios from "axios";
import Image from "next/image";
import React, { useEffect } from "react";

const GenerateLogo = () => {
  const { userDetail, setUserDetail } = React.useContext(UserDetailsContext);
  const [formData, setFormData] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const [logoImage, setLogoImage] = React.useState();

  useEffect(() => {
    if (typeof window !== "undefined" && userDetail?.email) {
      const storage = localStorage.getItem("formData");
      if (storage) {
        setFormData(JSON.parse(storage));
        console.log(JSON.parse(storage));
      }
    }
  }, [userDetail]);

  useEffect(() => {
    if (formData?.title) {
      GenerateAiLogo();
    }
  }, [formData]);

  const GenerateAiLogo = async () => {
    setLoading(true);
    const PROMPT = Prompt.LOGO_PROMPT.replace("{logoTitle}", formData?.title)
      .replace("{logoDesc}", formData?.desc)
      .replace("{logoColor}", formData?.palette)
      .replace("{logoDesign}", formData?.design?.title)
      .replace("{logoPrompt}", formData?.design?.prompt)
      .replace("{logoIdea}", formData?.idea);

    console.log(PROMPT);

    const result = await axios.post("/api/ai-logo-model", {
      prompt: PROMPT,
      email: userDetail.email,
      title: formData.title,
      desc: formData.desc,
    });
    console.log(result?.data);
    setLogoImage(result?.data?.image);
    setLoading(false);
  };

  return (
    <div>
      <h2>{loading && 'Loading.......'}</h2>
      {!loading && <Image src={logoImage} alt="logo image" width={200} height={200} />}
    </div>
  )
};

export default GenerateLogo;
