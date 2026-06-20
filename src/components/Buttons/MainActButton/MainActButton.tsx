import { memo, type MouseEventHandler } from 'react';
import './MainActButton.scss';

interface MainActButtonProps {
    title: string;
    variant?: string;
    bordered?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>; // Добавили проп для внешней функции
}

const MainActButton = memo(({
    title,
    variant = 'default',
    bordered = false,
    onClick // Принимаем его здесь
}: MainActButtonProps) => {

    const className = [
        'btn',
        `btn_${variant}`,
        bordered ? 'btn_bordered' : ''
    ].filter(Boolean).join(' ');

    return (
        // Передаем onClick напрямую в HTML-кнопку
        <button onClick={onClick} className={className}>
            {title}
        </button>
    );
});

export default MainActButton;
