import * as React from "react";
import { Box, Tab, Tabs } from "@mui/material";
import FeaturedStyle from "./featuredStyle";
import ToyotaIcon from "../components/Products/ToyotaIcon";
import ProductsList from "../components/Products/ProductsList";
// import LocalImages from '../../assets/images'
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
// interface TabPanelProps {
//   children?: React.ReactNode;
//   index: number;
//   value: number;
// }

// function CustomTabPanel(props: TabPanelProps) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
//     </div>
//   );
// }

// function a11yProps(index: number) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }
const Featured = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // const handleChange = (event: React.SyntheticEvent, newValue: number) => {
  //   setValue(newValue);
  // };

  return (
    <>
      <Box sx={FeaturedStyle.featured}>
        <Box className="tabCustom">
          <Box className="InnerTabCustom">
            <Box className="item featured">Featured</Box>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              {/* <Tab className='item featured' label="Featured" /> */}

              <Tab className="item" icon={<ToyotaIcon />} {...a11yProps(1)} />
              <Tab className="item" icon={<ToyotaIcon />} {...a11yProps(2)} />
              <Tab className="item" icon={<ToyotaIcon />} {...a11yProps(3)} />
              <Tab className="item" icon={<ToyotaIcon />} {...a11yProps(4)} />
              <Tab className="item" icon={<ToyotaIcon />} {...a11yProps(5)} />
              <Tab className="item" icon={<ToyotaIcon />} {...a11yProps(6)} />
              <Tab className="item" icon={<ToyotaIcon />} {...a11yProps(7)} />
            </Tabs>
          </Box>
          <CustomTabPanel className="content" value={value} index={0}>
            <ProductsList />
          </CustomTabPanel>
          <CustomTabPanel className="content" value={value} index={1}>
            Item Two
          </CustomTabPanel>
          <CustomTabPanel className="content" value={value} index={2}>
            Item Two
          </CustomTabPanel>
          <CustomTabPanel className="content" value={value} index={3}>
            Item Three
          </CustomTabPanel>
          <CustomTabPanel className="content" value={value} index={4}>
            Item Four
          </CustomTabPanel>
          <CustomTabPanel className="content" value={value} index={5}>
            Item Five
          </CustomTabPanel>
          <CustomTabPanel className="content" value={value} index={6}>
            Item Six
          </CustomTabPanel>
          <CustomTabPanel className="content" value={value} index={7}>
            Item Seven
          </CustomTabPanel>
        </Box>

        {/* <Box className="item featured">
                Featured
            </Box>
            <Box className="item">
            <img alt="test" className="cartImg" src={LocalImages.TOYOTA} />
            </Box>
            <Box className="item">
            <img alt="test" className="cartImg" src={LocalImages.HONDA} />
            </Box>
            <Box className="item">
            <img alt="test" className="cartImg" src={LocalImages.FORD} />
            </Box>
            <Box className="item">
            <img alt="test" className="cartImg" src={LocalImages.CHEVROLET} />
            </Box>
            <Box className="item">
            <img alt="test" className="cartImg" src={LocalImages.KIA} />
            </Box>
            <Box className="item">
            <img alt="test" className="cartImg" src={LocalImages.HYUNDAI} />
            </Box>
            <Box className="item">
            <img alt="test" className="cartImg" src={LocalImages.NISSAN} />
            </Box> */}
      </Box>
    </>
  );
};

export default Featured;
