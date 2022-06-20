import React from 'react';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP } from './HeroElements';
import Video from '../../assets/videos/golden.mp4';

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoplay loop muted src={Video} type='video/mp4' />
            </HeroBg>

            <HeroContent>
                <HeroH1>
                    123
                </HeroH1>

                <HeroP>
                    ok
                </HeroP>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;