

import FadeContent from '../ReactBits/FadeContent/FadeContent'
import './SectionTitle.scss'


function SectionTitle(props: { title?: string, text?: string, plate?: string, className?: string, classNameSe?: string, hColor?: string, pColor?: string, plateColor?: string }) {


    return (
        <>
            <div className={` ${props.className} pt-20 p-10 m_pt-10 m_pb-6 container section-title `}>
                <div className={` ${props.classNameSe} section-title `}>
                    <FadeContent className='mb-10 m_mb-8' blur={false} delay={.2} duration={1000} easing="ease-out" initialOpacity={0}>
                        <span className={`${props.plateColor} section-title__plate `}>{props.plate}</span>
                    </FadeContent>
                    <FadeContent className='mb-6 m_mb-4' blur={false} delay={.4} duration={1000} easing="ease-out" initialOpacity={0}>
                        <h2 className={`${props.hColor} text_center`}>{props.title}</h2>
                    </FadeContent>
                    <FadeContent blur={false} delay={.6} duration={1000} easing="ease-out" initialOpacity={0}>
                        <p className={`${props.pColor} text_center`}>
                            {props.text}
                        </p>
                    </FadeContent>


                </div>
            </div>
        </>
    )
}

export default SectionTitle