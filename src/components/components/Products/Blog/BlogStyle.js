
const blogStyle = {
  blogs: {
    //padding: "5.25rem 0",
    backgroundColor: "var(--white)",
    position: "relative",
    // "&::before": {
    //   content: '""',
    //   backgroundColor: "var(--primary)",
    //   opacity: "10%",
    //   position: "absolute",
    //   top: "0",
    //   right: "0",
    //   left: "0",
    //   height:"20.1875rem",
    // },
    ".slick-slider": {
      marginTop: "2.0625rem",
      ".slick-list": {
        ".slick-track": {
          display: "flex",
          gap: "1.75rem",
          padding:".4375rem 0",
          ".slick-slide": {
            border: "border: 1.76px solid var(--white)",
            boxShadow: "0px 0px 4px 1px #00000040",
            borderRadius: "1.7056rem",
            ".innerblog": {
            
              ".blogImg": {
                position:"relative",
                //minHeight:"19.3125rem",
                img: {
                  width: "100%",
                  height:"100%",
                  borderRadius: "1.7056rem",
                },
                ".date": {
                  position:"absolute",
                  right:"1.0625rem",
                  bottom:"1.0625rem",
                  fontSize: "1.5rem",
                  fontWeight: "400",
                  lineHeight: "2rem",
                  width: "100%",
                  maxWidth: "12.5625rem",
                  color: "var(--white)",
                  height: "3.25rem",
                  borderRadius: ".3125rem",
                  backgroundColor: "var(--primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap:".625rem",
                  padding:"0 1.25rem",
                  whiteSpace: "pre",
                  svg:{
                    width:"1.2188rem",
                    height:"1.3438rem",
                  }
                },
              },
             
            },
            ".text-cover": {
              padding: "1.5625rem 2.5rem 3.0625rem 1.3125rem",
              ".title": {
                fontSize: "1.5rem",
                fontWeight: "500",
                lineHeight: "2rem",
                marginTop: "1.5rem",
                marginBottom: "1.75rem",
                "@media(max-Width: 1680px)": {
                  fontSize: "1.25rem",
                  lineHeight: "1.7363rem",
                },
              },
            },
          },
        },
      },
    },
  },
};

export default blogStyle;
