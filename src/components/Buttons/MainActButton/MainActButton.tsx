import { memo, type MouseEventHandler } from 'react';
import './MainActButton.scss';

interface MainActButtonProps {
    title: string;
    variant?: string;
    bordered?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>; // для внешней функции
    href?: string;
    target?: string; // ex , '_blank')
}

const MainActButton = memo(({
    title,
    variant = 'default',
    bordered = false,
    onClick,
    href,
    target
}: MainActButtonProps) => {

    const className = [
        'btn',
        `btn_${variant}`,
        bordered ? 'btn_bordered' : ''
    ].filter(Boolean).join(' ');



    return (
        <button onClick={onClick as MouseEventHandler<HTMLButtonElement>} className={className}>
            {title}
        </button>
    );
});

export default MainActButton;
