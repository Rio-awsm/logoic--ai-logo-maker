"use client";

import Prompt from "@/constants/Prompt";
import { UserDetailsContext } from "@/context/UserDetailsContext";
import axios from "axios";
import React, { useEffect } from "react";

const GenerateLogo = () => {
  const { userDetail, setUserDetail } = React.useContext(UserDetailsContext);
  const [formData, setFormData] = React.useState();

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
    const PROMPT = Prompt.LOGO_PROMPT.replace("{logoTitle}", formData?.title)
    .replace("{logoDesc}", formData?.desc)
    .replace('{logoColor}', formData?.palette)
    .replace('{logoDesign}', formData?.design?.title)
    .replace('{logoPrompt}', formData?.design?.prompt)
    .replace('{logoIdea}', formData?.idea);

    console.log(PROMPT);

    const result = await axios.post('/api/ai-logo-model', {prompt: PROMPT})
    console.log(result?.data);
    
  }

  return <div></div>;
};

export default GenerateLogo;
