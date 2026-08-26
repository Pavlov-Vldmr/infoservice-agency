
import { Icons } from '../Icons'
import Grainient from '../ReactBits/Grainient/Grainient'
import ShinyText from '../ReactBits/ShinyText/ShinyText'
import './PageTitle.scss'

// const bgImages = import.meta.glob('../../assets/images/bg/*.{jpg,jpeg,png,webp}', {
//     eager: true,
//     import: 'default',
// }) as Record<string, string>;
function PageTitle(props: { title: string, subTitle: string, plate: string, bgImg?: string }) {
    // console.log('bgImg= ' + props.bgImg); // bg= /infoservice-agency/src/assets/images/bg/about.jpg

    // const filename = props.bgImg?.split('/').pop();
    // const matchedPath = Object.keys(bgImages).find(path => path.endsWith(`/${filename}`));
    // const dynamicImageUrl = matchedPath ? bgImages[matchedPath] : undefined;


    return (
        <>
            {/* <div className="title-component pt-20 pb-12 px-8 mt-14 m_px-0"> */}
            <div className="title-component"
            // style={{ '--dynamic-bg': dynamicImageUrl ? `url(${dynamicImageUrl})` : 'none' } as React.CSSProperties}
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
                        <Icons.Reputation className="icon_gold" height={20} width={20} />
                        <span>{props.plate}</span>
                    </div>
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
                    <p className='text_white-8'>{props.subTitle}</p>
                </div>
            </div>

        </>
    )
}

export default PageTitle