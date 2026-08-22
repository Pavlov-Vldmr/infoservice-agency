
import ShinyText from '../ReactBits/ShinyText/ShinyText'
import './PageTitle.scss'


function PageTitle(props: { title: string, subTitle: string }) {


    return (
        <>
            <div className="title-component pt-20 pb-12 px-8 mt-14 m_mt-4 m_px-0">
                <div className="container title-component__container m_p-4">
                    <ShinyText
                        className='m_mb-4'
                        text={props.title}
                        speed={5}
                        delay={0}
                        color="#fff"
                        shineColor="#879cd3"
                        spread={120}
                        direction="left"
                    />
                    <p>{props.subTitle}</p>
                </div>
            </div>

        </>
    )
}

export default PageTitle