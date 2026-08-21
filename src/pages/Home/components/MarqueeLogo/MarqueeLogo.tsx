
import MarqueeModule from 'react-fast-marquee';

import gp from '@/assets/companyLogo/gp.webp'
import gv from '@/assets/companyLogo/gv.png'
import kris from '@/assets/companyLogo/kris.png'
import nnk from '@/assets/companyLogo/nnk.svg'
import se from '@/assets/companyLogo/se.png'

import './MarqueeLogo.scss'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Marquee = (MarqueeModule as any).default || MarqueeModule;

function MarqueeLogo() {


    return (


        <div className="marquee-logo">
            <Marquee speed={20} autofill={true}>
                <img className='marquee-logo__img' height={80} width={'100%'} src={gp} alt="" />
                <img className='marquee-logo__img' height={80} width={'100%'} src={gv} alt="" />
                <img className='marquee-logo__img' height={80} width={'100%'} src={kris} alt="" />
                <img className='marquee-logo__img' height={80} width={'100%'} src={nnk} alt="" />
                <img className='marquee-logo__img' height={80} width={'100%'} src={se} alt="" />

                <img className='marquee-logo__img' height={80} width={'100%'} src={gp} alt="" />
                <img className='marquee-logo__img' height={80} width={'100%'} src={gv} alt="" />
                <img className='marquee-logo__img' height={80} width={'100%'} src={kris} alt="" />
                <img className='marquee-logo__img' height={80} width={'100%'} src={nnk} alt="" />
                <img className='marquee-logo__img' height={80} width={'100%'} src={se} alt="" />
            </Marquee>

        </div>

    )
}

export default MarqueeLogo