import React, { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
// use your own icon import if react-icons is not available
import { GoArrowUpRight } from 'react-icons/go';
import './CardNav.scss';

import logoS from '@/assets/images/logo.png'

type CardNavLink = {
    label: string;
    href: string;
    ariaLabel: string;
};

export type CardNavItem = {
    label: string;
    bgColor?: string;
    textColor?: string;
    imageUrl: string;
    links?: CardNavLink[];
};

export interface CardNavProps {
    logo: string;
    logoAlt?: string;
    items?: CardNavItem[];
    className?: string;
    ease?: string;
    baseColor?: string;
    menuColor?: string;
    buttonBgColor?: string;
    buttonTextColor?: string;
    theme?: string;
}

const CardNav: React.FC<CardNavProps> = ({
    logo,
    logoAlt = 'Logo',
    items,
    className = '',
    ease = 'power3.out',
    baseColor = '#fff',
    menuColor,
    buttonBgColor,
    buttonTextColor
}) => {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const [previewImage, setPreviewImage] = useState<string | null>(null);

    const navRef = useRef<HTMLDivElement | null>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);
    const tlRef = useRef<gsap.core.Timeline | null>(null);

    const overlayRef = useRef<HTMLDivElement | null>(null);
    const modalImgRef = useRef<HTMLImageElement | null>(null);
    const modalTlRef = useRef<gsap.core.Timeline | null>(null);

    // ЭФФЕКТ ДЛЯ АНИМАЦИИ ОТКРЫТИЯ МОДАЛКИ

    React.useEffect(() => {
        if (!previewImage) return;

        // Даем React один фрейм на очистку и рендер DOM
        const ctx = gsap.context(() => {
            if (overlayRef.current && modalImgRef.current) {
                // Устанавливаем начальное состояние
                gsap.set(overlayRef.current, { opacity: 0 });
                gsap.set(modalImgRef.current, { opacity: 0, scale: 0.85 });

                // Анимируем появление
                gsap.timeline({ defaults: { ease: 'power2.out', duration: 0.3 } })
                    .to(overlayRef.current, { opacity: 1 })
                    .to(modalImgRef.current, { scale: 1, opacity: 1 }, '-=0.15');
            }
        });

        return () => ctx.revert(); // Автоматически очистит все анимации при размонтировании
    }, [previewImage]);

    // ОТКРЫТИЕ ПРЕДПРОСМОТРА
    const handleImageClick = (e: React.MouseEvent, imageUrl: string) => {
        e.stopPropagation();
        setPreviewImage(imageUrl);
    };

    // ЗАКРЫТИЕ С АНИМАЦИЕЙ РЕВЕРСА

    const closePreview = (e: React.MouseEvent) => {
        e.stopPropagation();

        if (overlayRef.current && modalImgRef.current) {
            gsap.timeline({
                defaults: { ease: 'power2.in', duration: 0.25 },
                onComplete: () => {
                    // Только после окончания анимации убираем из DOM
                    setPreviewImage(null);
                }
            })
                .to(modalImgRef.current, { scale: 0.85, opacity: 0 })
                .to(overlayRef.current, { opacity: 0 }, '-=0.15');
        } else {
            setPreviewImage(null);
        }
    };

    const calculateHeight = () => {
        const navEl = navRef.current;
        if (!navEl) return 460;

        const contentEl = navEl.querySelector('.card-nav-content') as HTMLElement;
        if (!contentEl) return 560;

        const isMobile = window.matchMedia('(max-width: 768px)').matches;

        // Снимаем ограничения видимости для точного замера
        const originalVisibility = contentEl.style.visibility;
        const originalDisplay = contentEl.style.display;

        contentEl.style.visibility = 'hidden';
        // Принудительно ставим grid в 2 колонки для мобилки во время замера
        contentEl.style.display = 'grid';

        const cards = contentEl.querySelectorAll('.nav-card');
        let contentHeight = 0;

        if (cards.length > 0) {
            // Находим самую верхнюю и самую нижнюю точку среди всех карточек сетки
            let minTop = Infinity;
            let maxBottom = -Infinity;

            cards.forEach((card) => {
                const rect = card.getBoundingClientRect();
                if (rect.top < minTop) minTop = rect.top;
                if (rect.bottom > maxBottom) maxBottom = rect.bottom;
            });

            // Чистая высота всей сетки с учетом текущего расположения колонок и строк
            contentHeight = maxBottom - minTop;
        } else {
            contentHeight = contentEl.scrollHeight;
        }

        // Возвращаем исходные стили
        contentEl.style.visibility = originalVisibility;
        contentEl.style.display = originalDisplay;

        const topBarHeight = 70; // Высота шапки в закрытом состоянии
        const padding = isMobile ? 60 : 300; // Отступы снизу

        return topBarHeight + contentHeight + padding;
    };

    const createTimeline = () => {
        const navEl = navRef.current;
        if (!navEl) return null;

        gsap.set(navEl, { height: 70, overflow: 'hidden' });
        gsap.set(cardsRef.current, { y: 50, opacity: 0 });

        const tl = gsap.timeline({ paused: true });

        tl.to(navEl, {
            height: calculateHeight,
            duration: 0.4,
            ease
        });

        tl.to(cardsRef.current, { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.08 }, '-=0.1');

        return tl;
    };

    useLayoutEffect(() => {
        const tl = createTimeline();
        tlRef.current = tl;

        return () => {
            tl?.kill();
            tlRef.current = null;
        };
    }, [ease, items]);

    useLayoutEffect(() => {
        const handleResize = () => {
            if (!tlRef.current) return;

            if (isExpanded) {
                const newHeight = calculateHeight();
                gsap.set(navRef.current, { height: newHeight });

                tlRef.current.kill();
                const newTl = createTimeline();
                if (newTl) {
                    newTl.progress(1);
                    tlRef.current = newTl;
                }
            } else {
                tlRef.current.kill();
                const newTl = createTimeline();
                if (newTl) {
                    tlRef.current = newTl;
                }
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isExpanded]);

    const toggleMenu = () => {
        const tl = tlRef.current;
        if (!tl) return;
        if (!isExpanded) {
            setIsHamburgerOpen(true);
            setIsExpanded(true);
            tl.play(0);
        } else {
            setIsHamburgerOpen(false);
            tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
            tl.reverse();
        }
    };

    const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
        if (el) cardsRef.current[i] = el;
    };

    return (
        <div className={`card-nav-container ${className}`}>
            <nav ref={navRef} className={`card-nav ${isExpanded ? 'open' : ''}`} style={{ backgroundColor: baseColor }}>
                <div onClick={toggleMenu} className="card-nav-top">
                    <div
                        className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''}`}
                        onClick={toggleMenu}
                        onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                toggleMenu();
                            }
                        }}
                        role="button"
                        aria-label={isExpanded ? 'Close menu' : 'Open menu'}
                        aria-expanded={isExpanded}
                        tabIndex={0}
                        style={{ color: menuColor || '#000' }}
                    >
                        <div className="hamburger-line" />
                        <div className="hamburger-line" />
                    </div>

                    <div className="">
                        {/* <img src={logo} alt={logoAlt} className="logo" /> */}
                        <h4 className='text_white'>{logoAlt}</h4>
                    </div>

                    <div className="logo-container">
                        <img src={logoS} className="logo" width={'100%'} height={50} />
                    </div>

                    {/* <button
                        type="button"
                        className="card-nav-cta-button"
                        style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
                    >
                        Get Started
                    </button> */}
                </div>

                <div className="card-nav-content" aria-hidden={!isExpanded}>
                    {(items || []).slice(0, 5).map((item, idx) => (
                        <div onClick={toggleMenu}
                            key={`${item.label}-${idx}`}
                            className="nav-card"
                            ref={setCardRef(idx)}
                            style={{ backgroundColor: item.bgColor, color: item.textColor }}
                        >
                            {/* <div className="nav-card-label">{item.label}</div> */}
                            <div className="nav-card-img">
                                <img className='nav-card-img__estimate'
                                    src={item.imageUrl} alt=""
                                    onClick={(e) => handleImageClick(e, item.imageUrl)}

                                />
                            </div>
                            {/* <div className="nav-card-links">
                                {item.links?.map((lnk, i) => (
                                    <a key={`${lnk.label}-${i}`} className="nav-card-link" href={lnk.href} download={'1.png'} aria-label={lnk.ariaLabel}>
                                        <GoArrowUpRight className="nav-card-link-icon" aria-hidden="true" />
                                        {lnk.label}
                                    </a>
                                ))}
                            </div> */}
                        </div>
                    ))}

                </div>
            </nav>
            {previewImage && (
                <div ref={overlayRef} className="image-preview-overlay" onClick={closePreview}>
                    <div className="image-preview-content">
                        <img src={previewImage} ref={modalImgRef} alt="Preview" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default CardNav;
