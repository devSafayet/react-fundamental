import React from 'react';
import Particles from 'react-tsparticles';
import particleConfig from './particle.config';
import './style.css';

const ParticleComponent = () => {

    return (
        <div>
            <Particles style={{position: "absolute", zIndex: "-1 !important"}} canvasClassName="test" params={particleConfig}></Particles>
        </div>
    );
};

export default ParticleComponent;