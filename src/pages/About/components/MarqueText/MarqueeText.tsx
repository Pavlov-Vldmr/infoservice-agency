import MarqueeModule from 'react-fast-marquee';
import './MarqueeText.scss';
import { Icons } from '@/components/Icons';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Marquee = (MarqueeModule as any).default || MarqueeModule;

// Массив с 10 российскими компаниями
const COMPANIES = [
    { id: 1, name: 'Яндекс' },
    { id: 2, name: 'Сбер' },
    { id: 3, name: 'Т-Банк' },
    { id: 4, name: 'ВКонтакте' },
    { id: 5, name: 'Озон' },
    { id: 6, name: 'Авито' },
    { id: 7, name: 'Ростелеком' },
    { id: 8, name: 'Магнит' },
    { id: 9, name: 'Касперский' },
    { id: 10, name: 'Северсталь' },
];

function MarqueeText() {
    return (
        <div className="marquee-text bg_white">
            <Marquee speed={20} autofill={true}>
                {COMPANIES.map((company) => (
                    <div className="marquee-item" key={company.id}>
                        <div className="marquee-item__icon">
                            <Icons.Shield className="marquee__icon icon_accent" />
                        </div>
                        <span className="marquee-item__text">{company.name}</span>
                    </div>
                ))}
            </Marquee>
        </div>
    );
}

export default MarqueeText;
