const servicescartStyle = {
  carts: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "4.3125rem",
    gap: "1.3125rem",
    "@media(max-Width: 991px)": {
      marginTop: "2.5rem",
    },
    "@media(max-Width: 767px)": {
      flexWrap:"wrap",
    },
    "@media(max-Width: 599px)": {
      marginTop:"1.75rem",
    },
    ".cartCover": {
      background: "transparent",
      width: "11.0625rem",
      height: "10.5625rem",
      border: "1px solid var(--greyA0A6)",
      borderRadius: ".8125rem",
      alignContent: "center",
      position: "relative",
      overflow: "hidden",
      "@media(max-Width: 991px)": {
        width: "9.3625rem",
        height: "9.3625rem",
      },
      "@media(max-Width: 767px)": {
        width: "calc(50% - 0.7rem)",
        height: "auto",
        padding:".75rem",
      },
      "@media(max-Width: 599px)": {
        width: "calc(50% - 0.7rem)",
        height: "auto",
        padding:"1.5rem",
      },
      "&::before": {
        content: '""',
        backgroundColor: "var(--grey6A69)",
        opacity: "0.85",
        position: "absolute",
        top: "0",
        right: "0",
        left: "0",
        height: "100%",
        // filter: "blur(4px)",
      },
      ".cartImg": {
        position: "relative",
        "@media(max-Width: 767px)": {
        width: "3.5rem",
        height: "3.5rem",
      },
      "@media(max-Width: 599px)": {
        width: "4.125rem",
        height: "4.125rem",
      },
      },
      ".MuiTypography-root": {
        fontSize: "1.125rem",
        lineHeight: "1.2925rem",
        fontWeight: "700",
        color: "var(--white)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: ".5rem",
        letterSpacing: "0",
        marginTop: "1rem",
        position: "relative",
        "@media(max-Width: 599px)": {
          fontSize: "1rem",
          lineHeight: "1.2925rem",
        }
      },
    },
  },
};

export default servicescartStyle;
