const ProductStyle = {
  featured: {
    ".innercontentholder": {
      marginTop: "3.4375rem",
      display: "flex",
      gap: "1.5rem",
      "@media(max-Width: 991px)": {
        flexWrap: "wrap",
      },
      "@media(max-Width: 599px)": {
        gap: ".2969rem",
        marginTop:"1.25rem",
      },
      ".item": {
        width: "100%",
        maxWidth: "33.33%",
        boxShadow: "0px 0px 4px 1px #00000040",
        borderRadius: "1.7056rem",
        "@media(max-Width: 991px)": {
          maxWidth: "calc(50% - 0.8rem)",
        },
        "@media(max-Width: 599px)": {
          maxWidth: "calc(50% - 0.2rem)",
          borderRadius:".6606rem",
        },
        ".productImgcover": {
          padding: ".625rem .625rem 0 .625rem",
          position: "relative",
          ".heartIcon": {
            position: "absolute",
            right: "1.5rem",
            top: "1.5rem",
            cursor: "pointer",
            "@media(max-Width: 767px)": {
              svg: {
                width: "1.5rem",
              },
            },
          },
          ".cartImg": {
            width: "100%",
            borderRadius: ".8525rem",
            "@media(max-Width: 767px)": {
              borderRadius: "0.4525rem",
            },
          },
        },

        ".textpanle": {
          padding: "1.9106rem 2rem 1.625rem 2rem",
          "@media(max-Width: 1280px)": {
            padding: "1rem",
          },
          "@media(max-Width: 767px)": {
            padding: ".625rem",
          },
          ".title": {
            fontSize: "1.5rem",
            lineHeight: "1.7237rem",
            fontWeight: "700",
            "@media(max-Width: 767px)": {
              fontSize: "1.2rem",
            },
          },
          ".innerText": {
            marginTop: "1.5269rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            rowGap: "1.875rem",
            ".MuiTypography-root": {
              fontSize: "1.25rem",
              lineHeight: "1.4363rem",
              fontWeight: "400",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              width: "50%",
              gap: ".4813rem",
              "@media(max-Width: 1680px)": {
                width: "calc(50% - 0.3rem)",
                fontSize: "1.05rem",
                lineHeight: "1.1875rem",
              },
              "@media(max-Width: 1280px)": {
                width: "calc(50% - 0.3rem)",
                fontSize: "0.9rem",
                lineHeight: "1.1875rem",
              },
              "@media(max-Width: 991px)": {
                width: "calc(50% - 0.3rem)",
                fontSize: "1rem",
                lineHeight: "1.1875rem",
              },
              "@media(max-Width: 767px)": {
                width: "calc(50% - 0.3rem)",
                fontSize: "0.7rem",
                lineHeight: "1.0875rem",
                img: {
                  width: "1rem",
                },
              },
            },
            "@media(max-Width: 1280px)": {
              columnGap: ".5rem",
              rowGap: "0.975rem",
            },
            "@media(max-Width: 991px)": {
              columnGap: ".5rem",
            },
            "@media(max-Width: 767px)": {
              marginTop:".625rem",
            },
          },
        },
        ".fare_detail_btn": {
          padding: "1.5rem 2rem 1.125rem 2rem",
          borderTop: ".1069rem solid #0000001A",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          "@media(max-Width: 1280px)": {
            gap: ".5rem",
            padding: "1rem",
          },
          "@media(max-Width: 991px)": {
            gap: ".5rem",
            padding: "1rem",
          },
          "@media(max-Width: 767px)": {
            padding: "0.9rem",
          },
          ".fare": {
            fontSize: "1.5rem",
            lineHeight: "1.7237rem",
            fontWeight: "700",
            color: "var(--primary)",
            "@media(max-Width: 1280px)": {
              fontSize: "1.3rem",
            },
            "@media(max-Width: 767px)": {
              fontSize: "1rem",
            },
            "@media(max-Width: 599px)": {
              fontSize: "0.8rem",
            },
          },
        },
      },
    },
  },
};

export default ProductStyle;
