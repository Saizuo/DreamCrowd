// lib/fonts.ts
import localFont from "next/font/local";
import { Manrope } from "next/font/google";

export const manrope = Manrope({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-inter",
});

export const ppNeueMachina = localFont({
  src: [
    {
      path: "../app/fonts/PPNeueMachina-PlainLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../app/fonts/PPNeueMachina-PlainRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../app/fonts/PPNeueMachina-PlainUltrabold.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-ppneue",
  display: "swap",
});
