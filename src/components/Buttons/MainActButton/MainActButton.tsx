import { memo, type MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import './MainActButton.scss';

interface MainActButtonProps {
    /**
     * Путь ссылки ИЛИ id элемента для скролла (например, `'#contacts'` или `'/about'`).
     * Если начинается с `#` — рендерится `<button>` со скроллом к элементу,
     * иначе — `<a>` с обычной навигацией через react-router.
     */
    to?: string;
    /** Текст, отображаемый внутри кнопки/ссылки. */
    title: string;
    /**
     * `white` `primary` `gold`
     * @default 'default'
     */
    variant?: string;
    /** `mobile` - добавляет width:100%  */
    type?: string;
    /**
     * Добавляет класс `btn_bordered` (кнопка с рамкой).
     */
    bordered?: boolean;
    /** Дополнительный CSS-класс, который добавляется к стандартным классам кнопки. */
    shadow?: boolean;
    /** Дополнительный CSS-класс, который добавляется к стандартным классам кнопки. */
    className?: string;
    /**
     * Текст подсказки: используется в `data-tooltip`, `title` и `aria-label`.
     * @default 'test'
     */
    tooltip?: string;
    /** Обработчик клика, вызывается до внутренней логики навигации/скролла. */
    onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

/**
 * Универсальная кнопка/ссылка действия.
 *
 * Если `to` начинается с `#` — рендерит `<button>`, который плавно
 * скроллит к элементу с соответствующим id. Иначе — рендерит `<a>`,
 * которая переходит по указанному пути через `react-router-dom`.
 *
 * @example
 * <MainActButton to="#contacts" title="Связаться" tooltip="Перейти к разделу контактов" />
 * 
 * 
 */
const MainActButton = memo(({
    to = "",
    title,
    type = '',
    variant = 'default',
    bordered = false,
    shadow = false,
    onClick,
    tooltip = 'test',
    className: externalClassName,
}: MainActButtonProps) => {
    const className = [
        'btn',
        `btn_${variant}`,
        `btn_${type}`,
        bordered ? 'btn_bordered' : '',
        shadow ? 'btn_shadow' : '',
        externalClassName ?? ''
    ].filter(Boolean).join(' ');

    const handleScrollClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        // Если передан внешний onClick, выполняем его
        if (onClick) {
            onClick(e);
        }

        e.preventDefault();
        const targetId = to.replace('#', '');
        const element = document.getElementById(targetId);

        if (element) {
            const headerOffset = 120;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    // Если это якорная ссылка, рендерим семантичную кнопку, иначе — ссылку
    if (to.startsWith('#')) {
        return (
            <button
                onClick={handleScrollClick}
                className={className}
                type="button"
                data-tooltip={tooltip}
                aria-label={tooltip ?? title}
                title={tooltip} // нативный fallback (скринридеры/старые браузеры)
            >
                {title}
            </button>
        );
    }

    return (
        <Link
            to={to}
            onClick={onClick as any}
            className={className}
            data-tooltip={tooltip}
            aria-label={tooltip ?? title}
            title={tooltip}
        >
            {title}
        </Link>
    );
});

export default MainActButton;