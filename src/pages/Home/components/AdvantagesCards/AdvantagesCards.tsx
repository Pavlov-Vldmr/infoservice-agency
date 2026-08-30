

import './AdvantagesCards.scss'
import type { ReactNode } from 'react';
import { Icons } from '@/components/Icons';
import FadeContent from '@/components/ReactBits/FadeContent/FadeContent';


interface IAdvantagesItem {
    title: string;
    text: string;
    icon: ReactNode;
}

const FadeAdvDuration = 1

const ADVANTAGES_ITEMS: IAdvantagesItem[] = [
    {
        title: "Коммерческая репутация",
        text: "Нашему предприятию 28 лет доверяют охранять свое имущество более 1000 клиентов на территории Сахалинской области.",
        icon: <Icons.Reputation className="advantages__card__icons icon_gold-8" />,
    },
    {
        title: "Финансовая проверка",
        text: "Отсутствие задолженностей в местные, региональные, федеральные бюджеты, фонды обязательных платежей в течение всего срока существования предприятия.",
        icon: <Icons.ShieldAlt className="advantages__card__icons icon_gold-8" />,
    },
    {
        title: "Профессиональный состав",
        text: "184 сотрудника охраны, лицензированных в соответствии с действующим законодательством России.",
        icon: <Icons.Person className="advantages__card__icons icon_gold-8" />,
    },
    {
        title: "Проверка работы в прошлом",
        text: "Проверки деятельности контролирующими государственными органами (ЦЛРР Росгвардии, налоговые органы, Пенсионный фонд, Инспекция по труду, военкомат), нарушений не выявлено.",
        icon: <Icons.Lock className="advantages__card__icons icon_gold-8" />,
    },
    {
        title: "Всегда рядом",
        text: "Услуги оказываются 24 часа в сутки. Имеется круглосуточные службы мониторинга, охраны, операторов и дежурного технического персонала в городах Южно-Сахалинск, Корсаков, Холмск.",
        icon: <Icons.Headphones className="advantages__card__icons icon_gold-8" />,
    },
    {
        title: "Проверка рекомендаций",
        text: "Охрана более 1000 объектов: физическая охрана и с помощью различных технических средств охраны в городах области.",
        icon: <Icons.Recomendation className="advantages__card__icons icon_gold-8" />,
    },
    {
        title: "Прозрачность в работе",
        text: "Отчет по работе по договору предоставляется по запросу Клиента или с частотой, указанной в договоре (отчет включает в себя графики несения службы, количество отработанных часов, количество задействованных сотрудников, инциденты, принятые меры, нанесенный и возмещенный ущерб и т.д.).",
        icon: <Icons.Cube className="advantages__card__icons icon_gold-8" />,
    },

];

const delay: number = .2
function AdvantagesCards() {




    return (
        <>
            {ADVANTAGES_ITEMS.slice(0, 3).map((item, index) => (
                <FadeContent
                    key={index}
                    className="advantages__card"
                    blur
                    duration={FadeAdvDuration}
                    easing="ease-out"
                    initialOpacity={0}
                    threshold={.1}
                    delay={delay * index}
                >
                    <div className='advantages__card__item'>
                        <span>0{index + 1}</span>

                        <div >
                            {item.icon}
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </div>

                    </div>

                </FadeContent>
            ))}
        </>




    )
}

export default AdvantagesCards