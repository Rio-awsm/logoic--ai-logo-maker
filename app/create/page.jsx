"use client";
import LogoColorPallet from "@/components/LogoColorPallet";
import LogoDesc from "@/components/LogoDesc";
import LogoDesign from "@/components/LogoDesign";
import LogoIdea from "@/components/LogoIdea";
import LogoTitle from "@/components/LogoTitle";
import PricingModel from "@/components/PricingModel";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";

const CreateLogo = () => {
  const [step, setStep] = React.useState(1);
  const [formData, setFormData] = React.useState();

  const onHandleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    console.log(formData);
    
  };

  return (
    <div className="mt-28 p-10 border rounded-xl">
      {step == 1 ? (
        <LogoTitle
          onHandleInputChange={(v) => onHandleInputChange("title", v)}
         formData={formData}/>
      ) : step == 2 ? (
        <LogoDesc onHandleInputChange={(v) => onHandleInputChange("desc", v)}  formData={formData}/>
      ) : step == 3 ? (
        <LogoColorPallet
          onHandleInputChange={(v) => onHandleInputChange("palette", v)}
         formData={formData}/>
      ) : step == 4 ? (
        <LogoDesign
          onHandleInputChange={(v) => onHandleInputChange("design", v)}
         formData={formData}/>
      ) : step == 5 ? (
        <LogoIdea onHandleInputChange={(v) => onHandleInputChange("idea", v)}  formData={formData}/>
      ) : step == 6 ? <PricingModel formData={formData} onHandleInputChange={(v) => onHandleInputChange("pricing", v)} /> : null}
      <div className="flex item-center justify-between mt-10">
        {step != 1 && (
          <Button onClick={() => setStep(step - 1)} variant="outline">
            <ArrowLeft />
            Previous
          </Button>
        )}
        <Button onClick={() => setStep(step + 1)}>
          <ArrowRight />
          Continue
        </Button>
      </div>
    </div>
  );
};

export default CreateLogo;
