'use client';

import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";



export default function LangSelect({className}:{className?:string}){
    const [selected, setSelected] = useState("NG");

    return (
        <div className={className}>
            <ReactFlagsSelect
            className={className}
            onSelect={code => setSelected(code)}
            selected={selected}
            countries={["NG",  "SN",  "FR"]}
            customLabels={{ US: "EN-US", GB: "EN-GB", FR: "FR", DE: "DE", IT: "IT" }}
            placeholder="Select Language"
            />
        </div>
    )
}