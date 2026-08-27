

import FadeContent from '../ReactBits/FadeContent/FadeContent'
import './SectionTitle.scss'


function SectionTitle(props: { title?: string, text?: string, plate?: string, className?: string, classNameSe?: string, hColor?: string, pColor?: string, plateColor?: string }) {


    return (
        <>
            <div className={`pt-20 p-10 m_pt-10 ${props.className} container section-title `}>
                <div className={` ${props.classNameSe} section-title m_p-4 m_pt-10  `}>
                    <FadeContent className='mb-6' blur={false} delay={.2} duration={1000} easing="ease-out" initialOpacity={0}>
                        <span className={`${props.plateColor} section-title__plate `}>{props.plate}</span>
                    </FadeContent>
                    <FadeContent blur={false} delay={.4} duration={1000} easing="ease-out" initialOpacity={0}>
                        <h2 className={`${props.hColor} text_center mb-4`}>{props.title}</h2>
                    </FadeContent>
                    <FadeContent blur={false} delay={.6} duration={1000} easing="ease-out" initialOpacity={0}>
                        <p className={`${props.pColor} text_center py-4`}>
                            {props.text}
                        </p>
                    </FadeContent>


                </div>
            </div>
        </>
    )
}

export default SectionTitle