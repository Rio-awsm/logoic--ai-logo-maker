"use client";
import Lookup from "@/constants/Lookup";
import React from "react";
import HeadingDesc from "./HeadingDesc";
import LogoDesigndata from "@/constants/LogoDesigndata";
import Image from "next/image";

const LogoDesign = ({onHandleInputChange, formdata}) => {
  const [selectedOption, setSelectedOption] = React.useState(formdata?.design?.title);
  return (
    <div className="my-10">
      <HeadingDesc
        title={Lookup.LogoDesignTitle}
        description={Lookup.LogoDesignDesc}
      />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mt-10">
        {LogoDesigndata.map((design, index) => (
          <div
            key={index}
            onClick={() => {
              setSelectedOption(design.title);
              onHandleInputChange(design);
            }}
            className={`${
              selectedOption === design.title ? "border-2 border-primary" : ""
            } cursor-pointer p-1 rounded-xl hover:border-primary hover:border-2`}
          >
            <Image
              src={design.image}
              alt={design.title}
              width={300}
              height={200}
              className="w-full rounded-xl h-[200px] object-cover"
            />
            <h1 className="mt-3 text-center font-semibold">{design.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoDesign;
