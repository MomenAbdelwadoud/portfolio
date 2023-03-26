'use client'
import React from 'react'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Image from 'next/image';

const theme = createTheme({
    palette: {
      primary: {
        main: "#B5F4FF",
      },
      secondary: {
        main: "#ffffff",
      },
    },
    typography: {
        fontFamily: '__Inter_9c9965' 
    },
  });



interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props; 
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box className="py-6 px-4">
            <div>{children}</div>
          </Box>
        )}
      </div>
    );
  }

const Experience = () => {
    const isVertical = useMediaQuery(theme.breakpoints.up('md'));
    const isTablet = useMediaQuery(theme.breakpoints.up('sm'));
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
  return (
    <ThemeProvider theme={theme}>
    <div className=''>
        <h6 className='text-[22px] text-secondary uppercase mb-6 font-medium'>Job Experience</h6>
        <div className='lg:flex '>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor='secondary'
              aria-label="Job experience tabs"
              variant='fullWidth'
              orientation={isVertical ? 'vertical' : 'horizontal'}
              >
                  <Tab label="Bloom (YC W22)"  className='lg:text-left'/>
                  <Tab label="...Your company?" disabled className='lg:text-left'/>
              </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
              <div className='flex justify-between pr-4 items-center'>
                  <div>
                      <h4 className='font-semibold text-lg md:text-2xl text-white tracking-wider'>Bloom (YC W22)</h4>
                      <p className='text-gray-300 text-xs md:text-base tracking-wider'>Intern</p>
                  </div>
                  <Image
                  src={"/Bloom.jpg"}
                  height={isTablet ? "60" : "40"}
                  width={isTablet ? "60" : "40"}
                  alt={`Bloom (YC W22`}
                  className="rounded-lg opacity-90"
                  ></Image>
              </div>
              <ul className='text-xs md:text-base space-y-2 md:space-y-6 py-8 px-4 md:max-w-[80%]'>
                  <li className='tracking-wider list-disc leading-5'>Developed in-house admin dashboards/tools that uses different APIs.</li>
                  <li className='tracking-wider list-disc leading-5'>Designed and built the company's Help Center.</li>
                  <li className='tracking-wider list-disc leading-5'>Worked customer support self-help strategies.</li>
              </ul>
          </TabPanel>
        </div>
    </div>
    </ThemeProvider>
  )
}

export default Experience