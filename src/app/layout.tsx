<<<<<<< HEAD
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./globals.css"
  
export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1000,
    });
  });

  return (
    <>
 
 <html lang="en">
      <head>
        <title>Swasthi</title>
        <link rel="icon" type="image/png" href="/Logo.png" sizes="16x16" />
       </head>
      <body>
        {children}
      </body>
    </html>

     </>
  );
=======
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./globals.css"
  
export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1000,
    });
  });

  return (
    <>
 
 <html lang="en">
      <head>
        <title>Swasthi</title>
        <link rel="icon" type="image/png" href="/Logo.png" sizes="16x16" />
       </head>
      <body>
        {children}
      </body>
    </html>

     </>
  );
>>>>>>> 2b8ec70e367b15bdf5d40f299968819c031792d9
}