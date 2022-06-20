import React from 'react';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroImage, HeroWrapContent } from './HeroElements';
import Video from '../../assets/videos/video.mp4';
import avatar from '../../assets/images/avatar.jpg';

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>

            <HeroContent>
                <HeroWrapContent>
                    <HeroImage src={avatar} />

                    <div>
                        <HeroH1>
                            My name is Phan Van Phu
                        </HeroH1>

                        <HeroP>
                            ok
                        </HeroP>
                    </div>
                </HeroWrapContent>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;