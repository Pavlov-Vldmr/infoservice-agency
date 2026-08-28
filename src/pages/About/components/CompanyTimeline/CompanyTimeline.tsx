import React, { useState } from 'react';
import { timelineData } from './data';
import './CompanyTimeline.scss';
import AnimatedContent from '@/components/ReactBits/AnimatedContent/AnimatedContent';

export const CompanyTimeline: React.FC = () => {


  const [isMobile, setIsMobile] = useState(false);


  const animDelay: number = .3
  const animDistance: number = 60
  const animDelayDesctop: number = .2
  const animDuration = isMobile ? .4 : .8;
  return (



    <section className="timeline-container">

      <div className="timeline">
        {timelineData.map((item, index) => (

          <AnimatedContent direction="vertical"
            distance={animDistance / 2}
            duration={animDuration}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={.2}
            delay={isMobile ? animDelay * index : animDelayDesctop * index}>

            <div
              key={item.year}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="timeline-dot" />

              <div className="timeline-content">
                <span className="timeline-year">{item.year}</span>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-description">{item.description}</p>
              </div>
            </div>

          </AnimatedContent>

        ))}
      </div>
    </section>
  );
};

export default CompanyTimeline;
