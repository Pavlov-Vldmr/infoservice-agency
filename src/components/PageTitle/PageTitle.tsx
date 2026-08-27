
import { useState } from 'react';
import { Icons } from '../Icons'
import Grainient from '../ReactBits/Grainient/Grainient'
import ShinyText from '../ReactBits/ShinyText/ShinyText'
import './PageTitle.scss'
import AnimatedContent from '../ReactBits/AnimatedContent/AnimatedContent';

function PageTitle(props: { title: string, subTitle: string, plate: string, bgImg?: string }) {

    const [isMobile, setIsMobile] = useState(false);


    const animDelay: number = .1
    const animDistance: number = 50
    const animDelayDesctop: number = .2
    const animDuration = isMobile ? .4 : .8;

    return (
        <>
            <div className="title-component"
            >
                <div className="title-component__bg">
                    <img src={props.bgImg} alt="" />
                </div>
                <Grainient
                    className=' m_px-0 title-componenet__grainient'
                    color1="#1e3a8a"
                    color2="#2563eb"
                    color3="#3B82F6"
                    timeSpeed={0.2}
                    colorBalance={0.31}
                    warpStrength={1.15}
                    warpFrequency={5.7}
                    warpSpeed={2}
                    warpAmplitude={5}
                    blendAngle={0}
                    blendSoftness={0.55}
                    rotationAmount={750}
                    noiseScale={2}
                    grainAmount={0}
                    grainScale={0.2}
                    grainAnimated={false}
                    contrast={1}
                    gamma={1}
                    saturation={1}
                    centerX={0}
                    centerY={0}
                    zoom={0.9}
                />




                <div className="container title-component__container pt-30 pb-14 m_pt-14 m_pb-10 m_px-6">
                    <div className="title-component__plate mt-10 m_mt-14 m_mb-6">
                        <AnimatedContent direction="horizontal"
                            reverse
                            distance={animDistance}
                            duration={animDuration}
                            ease="power3.out"
                            initialOpacity={0}
                            animateOpacity
                            scale={1}
                            threshold={0.1}
                            delay={isMobile ? animDelay * 1 : animDelayDesctop * 1}>
                            <Icons.Reputation className="icon_gold" height={20} width={20} />
                            <span>{props.plate}</span>
                        </AnimatedContent>

                    </div>
                    <AnimatedContent direction="horizontal"
                        reverse
                        distance={animDistance}
                        duration={animDuration}
                        ease="power3.out"
                        initialOpacity={0}
                        animateOpacity
                        scale={1}
                        threshold={0.1}
                        delay={isMobile ? animDelay * 2 : animDelayDesctop * 2}>
                        <ShinyText
                            className='m_mb-4 m_mt-4 m_pt-0'
                            text={props.title}
                            speed={5}
                            delay={0}
                            color="#fff"
                            shineColor="#879cd3"
                            spread={120}
                            direction="left"
                        />
                    </AnimatedContent>
                    <AnimatedContent direction="horizontal"
                        reverse
                        distance={animDistance}
                        duration={animDuration}
                        ease="power3.out"
                        initialOpacity={0}
                        animateOpacity
                        scale={1}
                        threshold={0.1}
                        delay={isMobile ? animDelay * 3 : animDelayDesctop * 3}>
                        <p className='text_white-8'>{props.subTitle}</p>
                    </AnimatedContent>

                </div>
            </div>

        </>
    )
}

export default PageTitle