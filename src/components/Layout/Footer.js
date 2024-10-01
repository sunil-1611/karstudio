import React from "react";
import stylesFooter from "../../pages/styles/FooterStyle";
import { Box, Link, MenuItem, MenuList, Typography } from "@mui/material";
import LocalImages from "../../assets/images";

const Footer = () => {
  return (
    <>
      <Box sx={stylesFooter.footer}>
        <Box className="topfooter">
          <Box className="container">
            <Box className="innerfooter">
              <Box className="footeritem">
                <img alt="test" src={LocalImages.FOOTERLOGO} />
                <Typography>
                  Kar Studio is the best place to find your favorite car, truck
                  or SUV and get insurance quotes at the same time. We have a
                  wide selection of vehicles to choose from and we our
                  technology can provide you with insurance recommendations
                  before your make the purchase.
                </Typography>
              </Box>
              <Box className="footeritem">
                <Typography className="title" variant="h2">
                  Quick Links
                </Typography>
                <MenuList className="menuFooter">
                  <MenuItem>
                    <Link>Car Finder</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link>Sell Privately</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link>Car Insurance</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link>Sell Your Car</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link>Sitemap</Link>
                  </MenuItem>
                </MenuList>
              </Box>
              <Box className="footeritem">
                <Typography className="title" variant="h2">
                  Help Center
                </Typography>
                <MenuList className="menuFooter">
                  <MenuItem>
                    <Link>Privacy Policy</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link>Terms & Conditions</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link>Contact</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link>Do Not Sell My Data</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link>Blog</Link>
                  </MenuItem>
                </MenuList>
              </Box>
              <Box className="footeritem addres">
                <Box>
                <svg
                  width="59"
                  height="46"
                  viewBox="0 0 59 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="59"
                    height="46"
                    rx="7"
                    fill="#D9D9D9"
                    fill-opacity="0.4"
                  />
                  <path
                    d="M33.0067 26.8571C35.5606 22.8496 35.2395 23.3496 35.3131 23.2451C36.2429 21.9336 36.7344 20.3901 36.7344 18.7812C36.7344 14.5147 33.2721 11 29 11C24.7418 11 21.2656 14.5078 21.2656 18.7812C21.2656 20.3891 21.7674 21.973 22.7277 23.3022L24.9932 26.8572C22.571 27.2294 18.4531 28.3387 18.4531 30.7812C18.4531 31.6716 19.0343 32.9405 21.8029 33.9293C23.7361 34.6197 26.2921 35 29 35C34.0637 35 39.5469 33.5716 39.5469 30.7812C39.5469 28.3383 35.4339 27.2301 33.0067 26.8571ZM23.9023 22.5287C23.8946 22.5166 23.8865 22.5047 23.8781 22.4931C23.079 21.3938 22.6719 20.091 22.6719 18.7812C22.6719 15.2648 25.5034 12.4062 29 12.4062C32.4893 12.4062 35.3281 15.266 35.3281 18.7812C35.3281 20.0931 34.9287 21.3517 34.1728 22.4221C34.1051 22.5114 34.4585 21.9624 29 30.5276L23.9023 22.5287ZM29 33.5938C23.469 33.5938 19.8594 31.968 19.8594 30.7812C19.8594 29.9836 21.7141 28.6721 25.8241 28.1609L28.407 32.2138C28.4705 32.3135 28.5582 32.3956 28.6618 32.4525C28.7654 32.5093 28.8817 32.5391 29 32.5391C29.1182 32.5391 29.2345 32.5093 29.3381 32.4525C29.4417 32.3956 29.5294 32.3135 29.5929 32.2138L32.1757 28.1609C36.2858 28.6721 38.1406 29.9836 38.1406 30.7812C38.1406 31.9579 34.5635 33.5938 29 33.5938Z"
                    fill="white"
                  />
                  <path
                    d="M29 15.2656C27.0615 15.2656 25.4844 16.8427 25.4844 18.7812C25.4844 20.7198 27.0615 22.2969 29 22.2969C30.9385 22.2969 32.5156 20.7198 32.5156 18.7812C32.5156 16.8427 30.9385 15.2656 29 15.2656ZM29 20.8906C27.8369 20.8906 26.8906 19.9444 26.8906 18.7812C26.8906 17.6181 27.8369 16.6719 29 16.6719C30.1631 16.6719 31.1094 17.6181 31.1094 18.7812C31.1094 19.9444 30.1631 20.8906 29 20.8906Z"
                    fill="white"
                  />
                </svg>
                </Box>
                OFFICE 8 <br/>The Grn Ste A Dover, DE 19901-3618
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="bottomfooter">
          <Box className="container">
            <Box className="Innerbottomfooter">
              <Typography>@ 2024 Kar Studio All rights reserved.</Typography>
              <Box className="social_icon">
                <Link>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.1086 11.6553H15.9016C13.5641 11.6553 11.6562 13.5545 11.6562 15.9006V24.1076C11.6562 26.4451 13.5555 28.3529 15.9016 28.3529H24.1086C26.4461 28.3529 28.3539 26.4537 28.3539 24.1076V15.9006C28.3453 13.5545 26.4461 11.6553 24.1086 11.6553ZM20.0008 25.4912C16.9758 25.4912 14.5094 23.0248 14.5094 19.9998C14.5094 16.9748 16.9758 14.5084 20.0008 14.5084C23.0258 14.5084 25.4922 16.9748 25.4922 19.9998C25.4922 23.0248 23.0258 25.4912 20.0008 25.4912ZM25.7672 15.1186C25.2516 15.1186 24.8391 14.7061 24.8391 14.1904C24.8391 13.6748 25.2516 13.2623 25.7672 13.2623C26.2828 13.2623 26.6953 13.6748 26.6953 14.1904C26.6953 14.7061 26.2828 15.1186 25.7672 15.1186Z"
                      fill="white"
                    />
                    <path
                      d="M23.3338 20.0406C23.3559 18.199 21.8809 16.6883 20.0394 16.6662C18.1979 16.6441 16.6871 18.119 16.665 19.9605C16.6429 21.8021 18.1179 23.3128 19.9594 23.3349C21.8009 23.357 23.3117 21.8821 23.3338 20.0406Z"
                      fill="white"
                    />
                    <path
                      d="M20 0.664062C9.31797 0.664062 0.664062 9.31797 0.664062 20C0.664062 30.682 9.31797 39.3359 20 39.3359C30.682 39.3359 39.3359 30.682 39.3359 20C39.3359 9.31797 30.682 0.664062 20 0.664062ZM30.7422 24.1078C30.7422 27.7687 27.7687 30.7422 24.1078 30.7422H15.9008C12.2398 30.7422 9.26641 27.7687 9.26641 24.1078V15.9008C9.26641 12.2398 12.2398 9.26641 15.9008 9.26641H24.1078C27.7687 9.26641 30.7422 12.2398 30.7422 15.9008V24.1078Z"
                      fill="white"
                    />
                  </svg>
                </Link>
                <Link>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1_1823)">
                      <path
                        d="M20 0C16.0444 0 12.1776 1.17298 8.8886 3.37061C5.59962 5.56824 3.03617 8.69181 1.52242 12.3463C0.00866564 16.0009 -0.387401 20.0222 0.384303 23.9018C1.15601 27.7814 3.06082 31.3451 5.85787 34.1421C8.65492 36.9392 12.2186 38.844 16.0982 39.6157C19.9778 40.3874 23.9992 39.9913 27.6537 38.4776C31.3082 36.9638 34.4318 34.4004 36.6294 31.1114C38.827 27.8224 40 23.9556 40 20C40 14.6957 37.8929 9.60859 34.1421 5.85786C30.3914 2.10714 25.3043 0 20 0ZM25.6895 13.0158C25.6895 13.3921 25.5316 13.5421 25.1632 13.5421C24.4553 13.5421 23.7474 13.5421 23.0421 13.5711C22.3369 13.6 21.9526 13.9211 21.9526 14.6579C21.9368 15.4474 21.9526 16.2211 21.9526 17.0263H24.9816C25.4132 17.0263 25.5605 17.1737 25.5605 17.6079C25.5605 18.6605 25.5605 19.7184 25.5605 20.7816C25.5605 21.2105 25.4237 21.3447 24.9895 21.3474H21.9263V29.9105C21.9263 30.3684 21.7842 30.5132 21.3316 30.5132H18.0369C17.6395 30.5132 17.4842 30.3579 17.4842 29.9605V21.3605H14.8684C14.4579 21.3605 14.3105 21.2105 14.3105 20.7974C14.3105 19.7325 14.3105 18.6684 14.3105 17.6053C14.3105 17.1947 14.4658 17.0395 14.8711 17.0395H17.4842V14.7368C17.4532 13.7025 17.7014 12.679 18.2026 11.7737C18.7237 10.8598 19.5587 10.1659 20.5526 9.82105C21.1977 9.58636 21.8794 9.46872 22.5658 9.47368H25.1526C25.5237 9.47368 25.679 9.63684 25.679 10C25.6921 11.0132 25.6921 12.0158 25.6895 13.0158Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_1823">
                        <rect width="40" height="40" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
