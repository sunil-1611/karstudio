import LocalImages from "../../assets/images";

const bannerStyle = {
  banner: {
    width: "100%",
    position: "relative",
    //height:"51.625rem",
    padding:"10.875rem 0 12.5rem 0",
    backgroundImage: `url(${LocalImages.BANNERIMG})`,
    backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize:"cover",
    "@media(max-Width: 991px)": {
      height:"auto",
      padding:"5rem 0",
      //padding:"12.5rem 6.25rem",
    },
    "@media(max-Width: 599px)": {
      height:"auto",
      padding:"3.125rem 0",
      marginTop:"0",
      //padding:"12.5rem 6.25rem",
    },
    ".bannerImg": {
      width: "100%",
      objectFit: "cover",
      height: "100%",
      objectPosition: "center",
    },
    ".bannerTextcontainer": {
      // position: "absolute",
      // top: "0",
      // bottom: "0",
      // right: "0",
      // left: "0",
      // zIndex: "1",
      ".container": {
        height: "100%",
        ".InnnerBannerTextContainer": {
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ".cover": {
            textAlign: "center",
            ".title": {
              fontSize: "3rem",
              lineHeight: "3.625rem",
              fontWeight: "700",
              color: "var(--white)",
              letterSpacing: "0",
              "@media(max-Width: 991px)": {
                fontSize: "1.7rem",
                lineHeight: "1.525rem",
              },
              "@media(max-Width: 767px)": {
                fontSize: "1rem",
                lineHeight: "1.1875rem",
              },
            },
            ".subtitle": {
              fontSize: "1.5rem",
              lineHeight: "3.625rem",
              fontWeight: "500",
              color: "var(--white)",
              letterSpacing: "0",
              "@media(max-Width: 991px)": {
                fontSize: "1.1rem",
                lineHeight: "1.525rem",
                marginTop:".9375rem",
              },
              "@media(max-Width: 767px)": {
                fontSize: ".625rem",
                lineHeight: ".8125rem",
                marginTop:".375rem",
              },
            },
            ".BannerInput": {
              backgroundColor: "var(--white)",
              backgroundImage: `url(${LocalImages.SEARCHICON})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "1.125rem center",
              width: "100%",
              maxWidth: "43.125rem",
              height: "4.375rem",
              borderRadius: "1.25rem",
              padding: "1.25rem 1.5rem 1.25rem 3.25rem",
              color: "var(--grey8484)",
              letterSpacing: "0",
              marginTop:"2rem",
              "@media(max-Width: 991px)": {
                height: "3.5rem",
              },
              "@media(max-Width: 676px)": {
                maxWidth: "100%",
              },
              "@media(max-Width: 599px)": {
                maxWidth: "100%",
                height:"3rem",
                borderRadius:".5619rem",
                marginTop:"1rem",
              },
              ".MuiInput-input":{
                color: "var(--grey8484)",
                opacity: "1",
                "&::-webkit-input-placeholder": {
                color: "var(--grey8484)",
                opacity: "1",
              },
              },
              
              "&:before": {
                display: "none",
              },
              "&:after": {
                display: "none",
              },
            },
          },
        },
      },
    },
  },
};

export default bannerStyle;
