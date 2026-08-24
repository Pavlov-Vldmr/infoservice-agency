

import './SectionTitle.scss'


function SectionTitle(props: { title: string, text: string, plate: string, className?: string, hColor?: string, pColor?: string, plateColor?: string }) {


    return (
        <>
            <div className={`${props.className} container section-title`}>
                <div className=" section-title pt-20 p-10 m_p-4 m_pt-10">
                    <span className={`${props.plateColor} section-title__plate`}>{props.plate}</span>
                    <h2 className={`${props.hColor} text_center mb-4`}>{props.title}</h2>
                    <p className={`${props.pColor} text_center text_muted py-4`}>
                        {props.text}
                    </p>
                </div>
            </div>
        </>
    )
}

export default SectionTitle