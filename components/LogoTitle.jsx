"use client";

import React from "react";
import HeadingDesc from "./HeadingDesc";
import Lookup from "@/constants/Lookup";
import { useSearchParams } from "next/navigation";

const LogoTitle = ({onHandleInputChange}) => {
  const searchParams = useSearchParams();
  const [title, setTitle] = React.useState(searchParams?.get("title"));
  return (
    <div className="my-10">
      <HeadingDesc
        title={Lookup.LogoTitle}
        description={Lookup.LogoTitleDesc}
      />

      <input
        type="text"
        placeholder={Lookup.InputTitlePlaceholder}
        className="p-4 border rounded-lg mt-5 w-full"
        defaultValue={title} onChange={(e) => onHandleInputChange(e.target.value)}
      />
    </div>
  );
};

export default LogoTitle;
