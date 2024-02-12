import { Box } from "@material-ui/core";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { links } from "./particles";

const Particel =()=>{
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);
    return (
        <Box
            sx={{
                backgroundImage:"red",
                backgroundPosition: "center",
                backgroundRepeat: "repeat",
                backgroundSize: "cover",
                height: "0.5vh",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              marginTop:"60px",
              color:'red',
              position: "absolute",
              backgroundColr:"red",
              top:10
            }}
        >
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={links}
            />
      
        </Box>
    );

}

export default Particel;