// import { memo, type MouseEventHandler } from 'react';
// import { Link } from 'react-router-dom';

// import './MainActButton.scss';

// interface MainActButtonProps {
//     to?: string;
//     title: string;
//     variant?: string;
//     type?: string;

//     bordered?: boolean;
//     onClick?: MouseEventHandler<HTMLAnchorElement>; // для внешней функции
// }

// const MainActButton = memo(({
//     to = "",
//     title,
//     type = '',
//     variant = 'default',
//     bordered = false,
//     onClick,

// }: MainActButtonProps) => {

//     const className = [
//         'btn',
//         `btn_${variant}`,
//         `btn_${type}`,

//         bordered ? 'btn_bordered' : ''
//     ].filter(Boolean).join(' ');



//     return (
//         <Link to={`${to}`} onClick={onClick} className={className}>
//             {title}
//         </Link>
//     );
// });

// export default MainActButton;

import { memo, type MouseEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';
import './MainActButton.scss';

interface MainActButtonProps {
    to?: string;        // Путь ссылки ИЛИ id элемента (например, '#contacts')
    title: string;
    variant?: string;
    type?: string;
    bordered?: boolean;
    className?: string;

    onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

const MainActButton = memo(({
    to = "",
    title,
    type = '',
    variant = 'default',
    bordered = false,
    onClick,
}: MainActButtonProps) => {
    const navigate = useNavigate();

    const className = [
        'btn',
        `btn_${variant}`,
        `btn_${type}`,
        bordered ? 'btn_bordered' : ''
    ].filter(Boolean).join(' ');

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        // Если передан внешний onClick, выполняем его
        if (onClick) {
            onClick(e as any);
        }

        // Проверяем, является ли путь хэш-ссылкой (начинается с #)
        if (to.startsWith('#')) {
            e.preventDefault();
            const targetId = to.replace('#', '');
            const element = document.getElementById(targetId);

            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        } else if (to) {
            // Если это обычная ссылка, переходим на другую страницу
            navigate(to);
        }
    };

    // Если это якорная ссылка, рендерим семантичную кнопку, иначе — ссылку
    if (to.startsWith('#')) {
        return (
            <button onClick={handleClick} className={className} type="button">
                {title}
            </button>
        );
    }

    return (
        <a href={to} onClick={handleClick as any} className={className}>
            {title}
        </a>
    );
});

export default MainActButton;

