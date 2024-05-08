import { useCallback, useEffect, useState } from 'react'
import { loadSlim } from "@tsparticles/slim";
import particleOptions from './particle.config'
import Particles, { initParticlesEngine } from "@tsparticles/react";

export const ParticleBg = () => {
    const[init, setInit] = useState(false);
    
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(setInit(true));
    }, []);

    // const particlesInit = useCallback(async (engine) => {
    //     await loadBasic(engine);
    // }, []);

    const particlesLoaded = useCallback(async (container) => {
        console.log(container);
    }, []);

    if(init){
        return (
            <>
                {/* <div className="h-screen w-screen fixed top-0 left-0"> */}
                    <Particles options={particleOptions} id='tsparticles' loaded={particlesLoaded}/>
                {/* </div> */}
            </>
        );
    }
    return <></>;

}

export default ParticleBg;