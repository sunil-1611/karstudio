const FeaturedStyle = {
  featured: {
    marginTop: "2.375rem",
    overflow: "hidden",
    "@media(max-Width: 599px)": {
      marginTop:"1rem",
    },
    ".tabCustom": {
      ".InnerTabCustom": {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: ".9369rem",
        ".item": {
          backgroundColor: "var(--greyF3F5)",
          width: "14.4619rem",
          minWidth: "14.4619rem",
          minHeight: "6.4988rem",
          borderRadius: ".5856rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.5rem",
          fontWeight: "700",
          lineHeight: "3.3956rem",
          textAlign: "center",
          color: "var(--white)",
          padding: "1rem",
          textTransform: "capitalize",
          "&.featured": {
            backgroundColor: "var(--primary)",
            "@media(max-Width: 599px)": {
              borderRadius: ".5856rem!important",
            },
          },
          "&:first-child": {
            borderTopLeftRadius: "0",
            borderBottomLeftRadius: "0",
          },
          "&:last-child": {
            borderTopRightRadius: "0",
            borderBottomRightRadius: "0",
          },
          "@media(max-Width: 599px)": {
            width: "8.235rem",
            minWidth: "8.235rem",
            height: "auto",
            minHeight: "auto",
            fontSize: ".8544rem",
            lineHeight: "1.9338rem",
          },
        },
        ".MuiTabs-root": {
          width: "calc(100% - 15.4619rem)",
          overflow: "hidden",
          "@media(max-Width: 599px)": {
            width: "calc(100% - 8.235rem)",
          },
          ".MuiTabs-scroller": {
            overflow: "hidden !important",

            ".MuiTabs-flexContainer": {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: ".9369rem",
              overflow: "auto",
              width: "100%",
              borderRadius: ".5856rem",
              "&::-webkit-scrollbar": {
                width: "0",
                height: "0",
              },

              "&::-webkit-scrollbar-track": {
                background: "var(--maroon521A)",
              },

              "&::-webkit-scrollbar-thumb": {
                width: "0",
                height: "0",
                background: "var(--primary)",
                borderRadius: "0",
              },
              ".item": {
                backgroundColor: "var(--greyF3F5)",
                width: "14.4619rem",
                minWidth: "14.4619rem",
                minHeight: "6.4988rem",
                borderRadius: ".5856rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.5rem",
                fontWeight: "700",
                lineHeight: "3.3956rem",
                textAlign: "center",
                color: "var(--white)",
                padding: "1rem",
                textTransform: "capitalize",
                opacity: "1",
                "&.featured": {
                  backgroundColor: "var(--primary)",
                  "@media(max-Width: 599px)": {
                    borderRadius: ".5856rem !important",
                  },
                },
                "&:first-child": {
                  borderTopLeftRadius: "0",
                  borderBottomLeftRadius: "0",
                },
                "&:last-child": {
                  borderTopRightRadius: "0",
                  borderBottomRightRadius: "0",
                },
                "@media(max-Width: 599px)": {
                  width: "8.235rem",
                  minWidth: "8.235rem",
                  height: "auto",
                  minHeight: "auto",
                  fontSize: ".8544rem",
                  lineHeight: "1.9338rem",
                  ".cartImg": {
                    width: "5.2088rem",
                  },
                  
                },
              },
            
            },
            ".MuiTabs-indicator":{
              display:"none",
            },
          },
        },
      },
      ".content": {
        ">div": {
          padding: "0",
        },
      },
    },
  },
  featuredPopular: {
    marginTop: "2.375rem",
    overflow: "hidden",
    "@media(max-Width: 599px)": {
      marginTop:"1rem",
    },
    ".tabCustom": {
      ".InnerTabCustom": {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: ".9369rem",
        ".item": {
          backgroundColor: "var(--greyF3F5)",
          width: "14.375rem",
          minWidth: "4.375rem",
          minHeight: "11.1875rem",
          borderRadius: ".5856rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.5rem",
          fontWeight: "700",
          lineHeight: "3.3956rem",
          textAlign: "center",
          color: "var(--white)",
          padding: "1rem",
          textTransform: "capitalize",
          "&.featured": {
            backgroundColor: "var(--primary)",
            "@media(max-Width: 599px)": {
              borderRadius: ".5856rem!important",
            },
          },
          "&:first-child": {
            borderTopLeftRadius: "0",
            borderBottomLeftRadius: "0",
          },
          "&:last-child": {
            borderTopRightRadius: "0",
            borderBottomRightRadius: "0",
          },
          "@media(max-Width: 599px)": {
            width: "8.4688rem",
            minWidth: "8.4688rem",
            height: "6.5625rem",
                  minHeight: "6.5625rem",
            fontSize: ".8544rem",
            lineHeight: "1.9338rem",
          },
        },
        ".MuiTabs-root": {
          width: "calc(100% - 15.4619rem)",
          overflow: "hidden",
          "@media(max-Width: 599px)": {
            width: "calc(100% - 8.235rem)",
          },
          ".MuiTabs-scroller": {
            overflow: "hidden !important",

            ".MuiTabs-flexContainer": {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: ".9369rem",
              overflow: "auto",
              width: "100%",
              borderRadius: ".5856rem",
              "&::-webkit-scrollbar": {
                width: "0",
                height: "0",
              },

              "&::-webkit-scrollbar-track": {
                background: "var(--maroon521A)",
              },

              "&::-webkit-scrollbar-thumb": {
                width: "0",
                height: "0",
                background: "var(--primary)",
                borderRadius: "0",
              },
              ".item": {
                backgroundColor: "var(--greyF3F5)",
                width: "14.375rem",
                minWidth: "4.375rem",
                minHeight: "11.1875rem",
                borderRadius: ".5856rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.5rem",
                fontWeight: "400",
                lineHeight: "3.3956rem",
                textAlign: "center",
                color: "var(--black)",
                padding: "1rem",
                textTransform: "capitalize",
                opacity: "1",
                "&.featured": {
                  backgroundColor: "var(--primary)",
                  "@media(max-Width: 599px)": {
                    borderRadius: ".5856rem !important",
                  },
                },
                "&:first-child": {
                  borderTopLeftRadius: "0",
                  borderBottomLeftRadius: "0",
                },
                "&:last-child": {
                  borderTopRightRadius: "0",
                  borderBottomRightRadius: "0",
                },
                "@media(max-Width: 599px)": {
                  width: "8.4688rem",
                  minWidth: "8.4688rem",
                  height: "6.5625rem",
                  minHeight: "6.5625rem",
                  fontSize: ".8544rem",
                  lineHeight: "1.9338rem",
                  ".cartImg": {
                    width: "5.2088rem",
                  },
                  
                },
              },
            
            },
            ".MuiTabs-indicator":{
              display:"none",
            },
          },
        },
      },
      ".content": {
        ">div": {
          padding: "0",
        },
      },
    },
  },
};

export default FeaturedStyle;
