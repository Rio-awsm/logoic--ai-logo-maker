"use state";
import Lookup from "@/constants/Lookup";
import React from "react";
import HeadingDesc from "./HeadingDesc";
import Colors from "@/constants/Colors";

const LogoColorPallet = ({onHandleInputChange, formData}) => {
  const [selectedOption, setSelectedOption] = React.useState(formData?.palette);
  return (
    <div className="my-10">
      <HeadingDesc
        title={Lookup.LogoColorPaletteTitle}
        description={Lookup.LogoColorPaletteDesc}
      />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-5">
        {Colors.map((palette, index) => (
          <div
            key={index}
            className={`flex cursor-pointer ${
              selectedOption == palette.name
                ? "border-2 border-primary p-1"
                : ""
            } rounded-lg`}
          >
            {palette.colors.map((color, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelectedOption(palette.name);
                  onHandleInputChange(palette.name);
                }}
                className="h-24 w-full"
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoColorPallet;
