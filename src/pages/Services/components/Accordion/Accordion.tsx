// import React, { useState, type SyntheticEvent } from 'react';
// import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import { motion } from 'framer-motion';

// const MotionAccordion = motion(Accordion);

// import './Accordion.scss'
// import AnimatedContent from '@/components/ReactBits/AnimatedContent/AnimatedContent';

// export default function SecurityAccordion() {
//     const [expanded, setExpanded] = useState<string | false>(false);

//     const handleChange = (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
//         setExpanded(isExpanded ? panel : false);
//     };


//       const [isMobile, setIsMobile] = useState(false);


//       const animDelay: number = .3
//       const animDistance: number = 60
//       const animDelayDesctop: number = .2
//       const animDuration = isMobile ? .4 : .8;

//     return (
//         <div className='accordion'>
//             {/* Панель 1 */}

//            <AnimatedContent direction="vertical"
//             distance={animDistance / 2}
//             duration={animDuration}
//             ease="power3.out"
//             initialOpacity={0}
//             animateOpacity
//             scale={1}
//             threshold={.2}
//             delay={isMobile ? animDelay * index : animDelayDesctop * index}>



//           </AnimatedContent>


//             <MotionAccordion
//                 className='accordion__item'
//                 expanded={expanded === 'panel1'}
//                 onChange={handleChange('panel1')}
//                 transition={{ type: 'spring', stiffness: 120, damping: 20 }}
//                 variants={{
//                     expanded: { opacity: 1, scale: 1 },
//                     collapsed: { opacity: 1, scale: 1 }
//                 }}
//             >
//                 <AccordionSummary
//                     className='accordion__item-title'
//                     expandIcon={<AddIcon />}
//                     aria-controls="panel1bh-content"
//                     id="panel1bh-header"
//                 >
//                     <Typography component="span" className="accordion__item-title-text font-semibold">
//                         Как быстро выезжает группа реагирования?
//                     </Typography>
//                 </AccordionSummary>
//                 <AccordionDetails className='accordion__item-text'>
//                     <Typography className="text-sm leading-relaxed text-gray-500">
//                         Группа быстрого реагирования прибывает на объект в течение 5–7 минут в черте города.
//                         Для удалённых объектов время реагирования согласовывается индивидуально.
//                     </Typography>
//                 </AccordionDetails>
//             </MotionAccordion>

//             {/* Панель 2 */}
//             <MotionAccordion
//                 className='accordion__item'
//                 expanded={expanded === 'panel2'}
//                 onChange={handleChange('panel2')}
//                 transition={{ type: 'spring', stiffness: 120, damping: 20 }}
//                 variants={{
//                     expanded: { opacity: 1, scale: 1 },
//                     collapsed: { opacity: 1, scale: 1 }
//                 }}
//             >
//                 <AccordionSummary
//                     className='accordion__item-title'
//                     expandIcon={<AddIcon />}
//                     aria-controls="panel2bh-content"
//                     id="panel2bh-header"
//                 >
//                     <Typography component="span" className="accordion__item-title-text font-semibold">
//                         Какие объекты вы охраняете?
//                     </Typography>
//                 </AccordionSummary>
//                 <AccordionDetails className='accordion__item-text'>
//                     <Typography className="text-sm leading-relaxed text-gray-500">
//                         Мы охраняем жилые дома, квартиры, коммерческую недвижимость, склады,
//                         офисы, а также промышленные и социальные объекты любого масштаба.
//                     </Typography>
//                 </AccordionDetails>
//             </MotionAccordion>

//             {/* Панель 3 */}
//             <MotionAccordion
//                 className='accordion__item'
//                 expanded={expanded === 'panel3'}
//                 onChange={handleChange('panel3')}
//                 transition={{ type: 'spring', stiffness: 120, damping: 20 }}
//                 variants={{
//                     expanded: { opacity: 1, scale: 1 },
//                     collapsed: { opacity: 1, scale: 1 }
//                 }}
//             >
//                 <AccordionSummary
//                     className='accordion__item-title'
//                     expandIcon={<AddIcon />}
//                     aria-controls="panel3bh-content"
//                     id="panel3bh-header"
//                 >
//                     <Typography component="span" className="accordion__item-title-text font-semibold">
//                         Есть ли у вас лицензия?
//                     </Typography>
//                 </AccordionSummary>
//                 <AccordionDetails className='accordion__item-text'>
//                     <Typography className="text-sm leading-relaxed text-gray-500">
//                         Да, наша деятельность полностью лицензирована. Все необходимые сертификаты,
//                         лицензии МВД и разрешения предоставляются при заключении договора.
//                     </Typography>
//                 </AccordionDetails>
//             </MotionAccordion>

//             {/* Панель 4 */}
//             <MotionAccordion
//                 className='accordion__item'
//                 expanded={expanded === 'panel4'}
//                 onChange={handleChange('panel4')}
//                 transition={{ type: 'spring', stiffness: 120, damping: 20 }}
//                 variants={{
//                     expanded: { opacity: 1, scale: 1 },
//                     collapsed: { opacity: 1, scale: 1 }
//                 }}
//             >
//                 <AccordionSummary
//                     className='accordion__item-title'
//                     expandIcon={<AddIcon />}
//                     aria-controls="panel4bh-content"
//                     id="panel4bh-header"
//                 >
//                     <Typography component="span" className="accordion__item-title-text font-semibold">
//                         Заключаете ли вы договоры с физическими лицами?
//                     </Typography>
//                 </AccordionSummary>
//                 <AccordionDetails className='accordion__item-text'>
//                     <Typography className="text-sm leading-relaxed text-gray-500">
//                         Да, мы активно работаем с физическими лицами. Заключаем официальный договор
//                         на охрану частных домов, дач, гаражей и квартир с материальной ответственностью.
//                     </Typography>
//                 </AccordionDetails>
//             </MotionAccordion>

//             {/* Панель 5 */}
//             <MotionAccordion
//                 className='accordion__item'
//                 expanded={expanded === 'panel5'}
//                 onChange={handleChange('panel5')}
//                 transition={{ type: 'spring', stiffness: 120, damping: 20 }}
//                 variants={{
//                     expanded: { opacity: 1, scale: 1 },
//                     collapsed: { opacity: 1, scale: 1 }
//                 }}
//             >
//                 <AccordionSummary
//                     className='accordion__item-title'
//                     expandIcon={<AddIcon />}
//                     aria-controls="panel5bh-content"
//                     id="panel5bh-header"
//                 >
//                     <Typography component="span" className="accordion__item-title-text font-semibold">
//                         Сколько стоит охрана объекта?
//                     </Typography>
//                 </AccordionSummary>
//                 <AccordionDetails className='accordion__item-text'>
//                     <Typography className="text-sm leading-relaxed text-gray-500">
//                         Стоимость рассчитывается индивидуально. Она зависит от типа объекта,
//                         количества устанавливаемых датчиков, оборудования и выбранного тарифа реагирования.
//                     </Typography>
//                 </AccordionDetails>
//             </MotionAccordion>
//         </div>
//     );
// }


import React, { useState, type SyntheticEvent } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { motion } from 'framer-motion';

import './Accordion.scss';
import AnimatedContent from '@/components/ReactBits/AnimatedContent/AnimatedContent';

const MotionAccordion = motion(Accordion);

// Выносим данные в отдельный массив конфигурации
const ACCORDION_ITEMS = [
    {
        id: 'panel1',
        title: 'Как быстро выезжает группа реагирования?',
        details: 'Группа быстрого реагирования прибывает на объект в течение 5–7 минут в черте города. Для удалённых объектов время реагирования согласовывается индивидуально.'
    },
    {
        id: 'panel2',
        title: 'Какие объекты вы охраняете?',
        details: 'Мы охраняем жилые дома, квартиры, коммерческую недвижимость, склады, офисы, а также промышленные и социальные объекты любого масштаба.'
    },
    {
        id: 'panel3',
        title: 'Есть ли у вас лицензия?',
        details: 'Да, наша деятельность полностью лицензирована. Все необходимые сертификаты, лицензии МВД и разрешения предоставляются при заключении договора.'
    },
    {
        id: 'panel4',
        title: 'Заключаете ли вы договоры с физическими лицами?',
        details: 'Да, мы активно работаем с физическими лицами. Заключаем официальный договор на охрану частных домов, дач, гаражей и квартир с материальной ответственностью.'
    },
    {
        id: 'panel5',
        title: 'Сколько стоит охрана объекта?',
        details: 'Стоимость рассчитывается индивидуально. Она зависит от типа объекта, количества устанавливаемых датчиков, оборудования и выбранного тарифа реагирования.'
    }
];

export default function SecurityAccordion() {
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange = (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };


    const [isMobile, setIsMobile] = useState(false);


    const animDelay: number = .2
    const animDistance: number = 60
    const animDelayDesctop: number = .2
    const animDuration = isMobile ? .4 : .8;

    return (
        <div className='accordion'>
            {ACCORDION_ITEMS.map((item, index) => (

                <AnimatedContent direction="vertical"
                    distance={animDistance / 2}
                    duration={animDuration}
                    ease="power3.out"
                    initialOpacity={0}
                    animateOpacity
                    scale={1}
                    threshold={.2}
                    delay={isMobile ? animDelay * index : animDelayDesctop * index}>


                    <MotionAccordion
                        key={item.id}
                        className='accordion__item'
                        expanded={expanded === item.id}
                        onChange={handleChange(item.id)}
                        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                        variants={{
                            expanded: { opacity: 1, scale: 1 },
                            collapsed: { opacity: 1, scale: 1 }
                        }}
                    >
                        <AccordionSummary
                            className='accordion__item-title'
                            expandIcon={<AddIcon />}
                            aria-controls={`${item.id}bh-content`}
                            id={`${item.id}bh-header`}
                        >
                            <Typography component="span" className="accordion__item-title-text font-semibold">
                                {item.title}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails className='accordion__item-text'>
                            <Typography className="text-sm leading-relaxed text-gray-500">
                                {item.details}
                            </Typography>
                        </AccordionDetails>
                    </MotionAccordion>

                </AnimatedContent>


            ))}
        </div>
    );
}
