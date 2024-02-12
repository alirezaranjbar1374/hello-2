import { StyledEngineProvider } from "@mui/material";
import { Provider } from "react-redux";
// import Theachers from './components/GRID-mui/Theachers';
import store from './redux/store';
import { useRoutes } from "react-router-dom";

// import Date1 from './components/Date1';
// import 'react-calendar-datetime-picker/dist/index.css'
// import Jalal from "./components/Jalall";
// import routes from './Routes/routes';
// import { ToastContainer } from "react-toastify";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Beforloded from './components/beforloded/Beforloded';
import FooterNew from "./components/footer/FooterNew";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';





import Routers from "./Routes/routes";
import TestFooter from "./components/TESTfooter/TestFooter";
import Landing from "./components/Landing/Landing";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import Lotifii from "./components/ShowLotfi/Lotifii";
const App = () => {
  // let router=useRoutes(routes)
  

  
  
  
  //NOTE Create Custom Theme
  const theme = createTheme({
    direction: "rtl",
    mode:"light"
  });
  
  //NOTE Create RTL Cache
  const cacheRTL = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });
  
  
  // let router = useRoutes(routes)
    return (
      <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={theme}>
      <Provider store={store}>
      {/* <ToastContainer       rtl={true}/> */}

           {/* <ToastContainer  rtl={true}/> */}

      <StyledEngineProvider injectFirst>
          {/* <Jalal/>
          <Date1/> */}
                  {/* <Theachers/> */}
<Beforloded/>
<Navbar/>

 
{/* <Landing/> */}
<Routers/>
{/* <Footer/> */}
<TestFooter/>
{/* <FooterNew/> */}

      </StyledEngineProvider>
      </Provider>
      </ThemeProvider>
    </CacheProvider>
      );
}
 
export default App;
