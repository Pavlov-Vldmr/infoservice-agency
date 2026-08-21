import { memo, type MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';

import './MainActButton.scss';

interface MainActButtonProps {
    to?: string;
    title: string;
    variant?: string;
    type?: string;

    bordered?: boolean;
    onClick?: MouseEventHandler<HTMLAnchorElement>; // для внешней функции
}

const MainActButton = memo(({
    to = "",
    title,
    type = '',
    variant = 'default',
    bordered = false,
    onClick,

}: MainActButtonProps) => {

    const className = [
        'btn',
        `btn_${variant}`,
        `btn_${type}`,

        bordered ? 'btn_bordered' : ''
    ].filter(Boolean).join(' ');



    return (
        <Link to={`${to}`} onClick={onClick} className={className}>
            {title}
        </Link>
    );
});

export default MainActButton;
