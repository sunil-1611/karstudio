import { Button } from "@mui/material";
import React from "react";

const viewllbtn = () => {
  return (
    <>
      <Button
        sx={{
          backgroundColor: "var(--white)",
          padding: "1rem",
          border: ".125rem solid var(--secondary)",
          borderRadius: ".3125rem",
          fontSize: "1.25rem",
          lineHeight: "1.4363rem",
          fontWeight: "700",
          color: "var(--secondary)",
          textTransform: "capitalize",
          "&:hover":{
            backgroundColor:"var(--secondary)",
            color: "var(--white)",
          },
        }}
        variant="standard"
      >
        View All
      </Button>
    </>
  );
};

export default viewllbtn;
