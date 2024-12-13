'use client'

import { usePathname, useRouter } from 'next/navigation'
import React, { useState, useEffect } from 'react';
import ReactFlagsSelect from 'react-flags-select';

export function LangSwitcher({className}:{className:string}) {
  const pathname = usePathname();
  const router = useRouter();
  const [selected, setSelected] = useState<string>(''); // State to track selected flag
  
  // Get the current locale (either en or fr) from the pathname
  const currentLocale = pathname.split('/')[1]; // Assuming the locale is the first part (e.g., /en/about)

  // Update selected locale state based on current path
  useEffect(() => {
    if (currentLocale === 'en') {
      setSelected('NG'); // Nigeria flag for English
    } else if (currentLocale === 'fr') {
      setSelected('SN'); // Senegal flag for French
    }
  }, [currentLocale]);

  function switchLocale(locale: string) {
    // Remove the current locale if it exists
    let newPath = pathname.replace(`/${currentLocale}`, '');

    // Append the new locale to the path
    newPath = `/${locale}${newPath}`;

    // Update the browser URL and trigger a route change
    router.push(newPath); // This triggers a page update with the new locale
  }

  // Handle flag select and switch language
  const handleFlagSelect = (code: string) => {
    if (code === 'NG') {
      switchLocale('en'); // Switch to English (Nigeria flag)
    } else if (code === 'SN') {
      switchLocale('fr'); // Switch to French (Senegal flag)
    }
  }

  return (
    <div className={className}>
      <ReactFlagsSelect
        className="my-4"
        onSelect={handleFlagSelect} 
        selected={selected} 
        countries={["NG", "SN"]} 
        customLabels={{ NG: "english", SN: "french" }}
        placeholder="Select Language"
      />
      </div>
  )
}
