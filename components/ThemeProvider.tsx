"use client"

import React from "react"

import { ThemeProvider as NextThemesProvider, ThemeProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types"

const Providers = ({children}: ThemeProviderProps) => {
    return (
  
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
  
        
          {children}
        
  
      </ThemeProvider>
     
      
    )
  }
  
  export default Providers