import { Icons } from '@/components/Icons';
import AnimatedContent from '@/components/ReactBits/AnimatedContent/AnimatedContent';
import { useState, useEffect, type ReactNode } from 'react';
// import CountUp from 'react-countup';
import { default as CountUp } from 'react-countup';

interface IAchievementItem {
    id: string;
    icon: ReactNode;
    text: string;
    countUp: () => ReactNode;
}




const ACHIEVEMENTS_ITEMS: IAchievementItem[] = [
    {
        id: 'objects',
        icon: <Icons.Chart className="home-achievements__icons icon_accent" />,
        text: 'Охраняемых объектов',
        countUp: () => <CountUp end={1000} duration={4} suffix="+" enableScrollSpy scrollSpyOnce />
    },
    {
        id: 'schedule',
        icon: <Icons.Clock className="home-achievements__icons icon_accent" />,
        text: 'Круглосуточная охрана',
        countUp: () => (
            <>
                <CountUp end={24} duration={4} suffix="/" enableScrollSpy scrollSpyOnce />
                <CountUp end={7} duration={4} enableScrollSpy scrollSpyOnce />
            </>
        )
    },
    {
        id: 'guards',
        icon: <Icons.Person className="home-achievements__icons icon_accent" />,
        text: 'Охранников',
        countUp: () => <CountUp end={184} duration={4} enableScrollSpy scrollSpyOnce />
    },
    {
        id: 'reliability',
        icon: <Icons.Shield className="home-achievements__icons icon_accent" />,
        text: 'Надёжность',
        countUp: () => <CountUp end={99.9} duration={4} decimals={1} suffix="%" enableScrollSpy scrollSpyOnce />
    }
];




console.log(Icons)
console.log(ACHIEVEMENTS_ITEMS)


function AchievmentsItems() {


    const [isMobile, setIsMobile] = useState(false);
    const animDelay = isMobile ? 0.1 : 0.2;
    const animDuration = isMobile ? 0.4 : 0.8;
    const animDistance = 50;
    return (
        <>
            {ACHIEVEMENTS_ITEMS.map((item, index) => (
                <AnimatedContent
                    key={index}
                    direction="vertical"
                    reverse
                    distance={animDistance}
                    duration={animDuration}
                    ease="power3.out"
                    initialOpacity={0}
                    animateOpacity
                    scale={1}
                    threshold={0.1}
                    delay={animDelay + index * 0.1}
                >

                    <div className="home-achievements__item">
                        {item.icon}
                        {/* <span className="value">{item.countUp()}</span> */}
                        <span className="text">{item.text}</span>
                    </div>
                </AnimatedContent>
            ))}
        </>
    )
}

export default AchievmentsItems
