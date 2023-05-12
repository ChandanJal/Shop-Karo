import React from "react";

import Button from "./Button";

export default function TextButton({ Icon, size = "md", className = "", children, ...rest }) {
  return (
    <Button Icon={Icon} className={`btn-text ${size} ${className}`} {...rest}>
      {children}
    </Button>
  );
}
