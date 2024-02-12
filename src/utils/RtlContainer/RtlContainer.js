import { ThemeProvider, createTheme } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";


const RtlContainer=({children})=>{
    

//NOTE Create Custom Theme
const theme = createTheme({
  direction: "rtl",
});

//NOTE Create RTL Cache
const cacheRTL = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

return(
    <CacheProvider value={cacheRTL}>
    <ThemeProvider theme={theme}>

   {children}
    </ThemeProvider>
  </CacheProvider>
)
}


export default RtlContainer;