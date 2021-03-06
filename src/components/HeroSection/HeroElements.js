import styled from "styled-components";
import avatar from '../../assets/images/avatar.jpg';

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
    margin: -8px
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
`;

export const HeroWrapContent = styled.div`
    display: flex;

    @media screen and (max-width: 768px){
        display: block
    }

    @media screen and (max-width: 480px){
        display: block
    }
`;

export const HeroImage = styled.img`
    height: 480px;
    width: 360px;
    margin-right: 120px;

    @media screen and (max-width: 768px){
        height: 480px;
        width: 100%;
    }

    @media screen and (max-width: 480px){
        height: 480px;
        width: 100%;
    }
`;

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px){
        font-size: 40px
    }

    @media screen and (max-width: 480px){
        font-size: 32px
    }
`;

export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px){
        font-size: 24px
    }

    @media screen and (max-width: 480px){
        font-size: 18px
    }
`;