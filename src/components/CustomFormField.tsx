'use client';

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css'
import { CustomProps } from "@/types/type";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import {
	E164Number,
} from 'libphonenumber-js/core';

export  enum FormFieldType {
    INPUT = "input",
    PHONE_INPUT = "phoneInput",
  }
  


const RenderField = ({ props, field }:{field:any, props: CustomProps }) => {
  const { type, placeholder, inputType } = props;
  const [togglePassword, setTogglePassword] = useState(false);
  const handleToggle = () => {
      setTogglePassword(!togglePassword);
  };

  switch (type) {
      case FormFieldType.INPUT:
          return (
              <div className="input-style p-1">
                  <FormControl>
                      <Input  
                          {...field}
                          {... inputType === "password" && {
                              type:togglePassword ? "text" : "password",
                          }}
                          placeholder={placeholder} 
                          className="" 
                      />
                  </FormControl>
                  {inputType === "password" && (
                      <button
                          type="button"
                          onClick={handleToggle}
                          aria-label="Change Password Visibility"
                          className="mr-4 transition-all"
                      >
                          {togglePassword ? (
                              <Eye size={22} className="text-secondary" />
                          ) : (
                              <EyeOff size={22} className="text-secondary" />
                          )}
                      </button>
                  )}
              </div>
          );
      case FormFieldType.PHONE_INPUT:
          return (
              <FormControl>
                  <PhoneInput
                      name="phone"
                      placeholder={placeholder} 
                      international
                      withCountryCallingCode
                      country="NG"
                      defaultCountry="NG"
                      value={field.value as E164Number | undefined}
                      onChange={field.onChange}
                      className="input-style outline-none p-2"
                  />
              </FormControl>
          );
      default:
          return null;
  }
};



export default function CustomFormField(props:CustomProps){
    const {control,  name, label   } = props;
    return (
        <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className='flex-1'>
            {label && 
            <FormLabel className="font-semibold text-base text-[#323233]">{label}</FormLabel>
            }
            <RenderField field={field} props={props} />
            <FormMessage className="text-secondary-600 font-semibold"
            />
          </FormItem>
        )}
      />
    )
}