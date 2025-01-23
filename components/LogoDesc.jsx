import React from "react";
import HeadingDesc from "./HeadingDesc";
import Lookup from "@/constants/Lookup";

const LogoDesc = ({onHandleInputChange, formData}) => {
  return (
    <div className="my-10">
      <HeadingDesc
        title={Lookup.LogoDescTitle}
        description={Lookup.LogoDescDesc}
      />

      <input
        type="text"
        value={formData?.desc}
        placeholder={Lookup.InputTitlePlaceholder}
        className="p-4 border rounded-lg mt-5 w-full"
        onChange={(e) => onHandleInputChange(e.target.value)}
      />
    </div>
  );
};

export default LogoDesc;
