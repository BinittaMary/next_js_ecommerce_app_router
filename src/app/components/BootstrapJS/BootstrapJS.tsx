"use client";
import React, { useEffect } from 'react'

function BootstrapJS() {
  useEffect(()=> {
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);  
  return null;
}

export default BootstrapJS