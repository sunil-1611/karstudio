const carsListStyle = {
  Carslist: {
    backgroundColor: "var(--white)",
    position: "relative",
    "&::before": {
      content: '""',
      backgroundColor: "var(--primary)",
      opacity: "10%",
      position: "absolute",
      top: "0",
      right: "0",
      left: "0",
      height: "20.1875rem",
    },
    ".slick-slider": {
      ".slick-list": {
        ".slick-track": {
          display: "flex",
          gap: "1.4375rem",
          ".slick-slide": {
            ".CarsListing": {
              backgroundColor: "var(--primary)",
              borderRadius: ".9375rem",
              padding: "1rem 1.75rem 1.3125rem 1.75rem",
              color: "var(--white)",
              ".title": {
                color: "var(--white)",
                fontSize: "1.5rem",
                fontWeight: "700",
                lineHeight: "2rem",
                marginTop:".375rem",
              },
              ".listing": {
                marginTop:"3rem",
                li: {
                  fontSize: "1.5rem",
                  fontWeight: "400",
                  lineHeight: "2rem",
                  listStyle:"none",
                  "@media(max-Width: 1680px)": {
                    fontSize: "1rem",
                    lineHeight: "1.6363rem",
                  },
                },
              },
            },
          },
        },
      },
    },
    ".carslist-para":{
        marginTop:"6.25rem",
        textAlign: "center",
        ".heading":{
            fontSize: "3rem",
            fontWeight: "700",
            lineHeight: "3.7rem",
            // "@media(max-Width: 1680px)": {
            //   fontSize: "2rem",
            //   lineHeight: "3.7rem",
            // }
        },
        ".para":{
            marginTop:"1.875rem",
            fontSize: "1.25rem",
            fontWeight: "400",
            lineHeight: "2rem",
        },
    }
  },
};

export default carsListStyle;
