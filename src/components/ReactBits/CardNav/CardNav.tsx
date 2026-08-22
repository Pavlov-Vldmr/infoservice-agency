import React, { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
// use your own icon import if react-icons is not available
import { GoArrowUpRight } from 'react-icons/go';
import './CardNav.css';

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
    const navRef = useRef<HTMLDivElement | null>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);
    const tlRef = useRef<gsap.core.Timeline | null>(null);

    // const calculateHeight = () => {
    //     const navEl = navRef.current;
    //     if (!navEl) return 460;

    //     const isMobile = window.matchMedia('(max-width: 768px)').matches;
    //     if (isMobile) {
    //         const contentEl = navEl.querySelector('.card-nav-content') as HTMLElement;
    //         if (contentEl) {
    //             const wasVisible = contentEl.style.visibility;
    //             const wasPointerEvents = contentEl.style.pointerEvents;
    //             const wasPosition = contentEl.style.position;
    //             const wasHeight = contentEl.style.height;

    //             contentEl.style.visibility = 'visible';
    //             contentEl.style.pointerEvents = 'auto';
    //             contentEl.style.position = 'static';
    //             contentEl.style.height = 'auto';

    //             contentEl.offsetHeight;

    //             const topBar = 60;
    //             const padding = 16;
    //             const contentHeight = contentEl.scrollHeight;

    //             contentEl.style.visibility = wasVisible;
    //             contentEl.style.pointerEvents = wasPointerEvents;
    //             contentEl.style.position = wasPosition;
    //             contentEl.style.height = wasHeight;

    //             return topBar + contentHeight + padding;
    //         }
    //     }
    //     return 560;
    // };

    // const calculateHeight = () => {
    //     const navEl = navRef.current;
    //     if (!navEl) return 460;

    //     const contentEl = navEl.querySelector('.card-nav-content') as HTMLElement;
    //     if (!contentEl) return 560;

    //     // 1. Создаем невидимый клон контента
    //     const clone = contentEl.cloneNode(true) as HTMLElement;

    //     // 2. Сбрасываем ограничения высоты и видимости для клона
    //     clone.style.position = 'absolute';
    //     clone.style.visibility = 'hidden';
    //     clone.style.height = 'auto';
    //     clone.style.maxHeight = 'none';
    //     clone.style.opacity = '0';
    //     clone.style.display = 'block'; // Если в CSS стоит display: none

    //     // 3. Добавляем клон в DOM для расчета
    //     document.body.appendChild(clone);
    //     const contentHeight = clone.scrollHeight;
    //     document.body.removeChild(clone); // Сразу удаляем

    //     const isMobile = window.matchMedia('(max-width: 768px)').matches;
    //     const topBarHeight = 70; // Высота вашей шапки в закрытом состоянии
    //     const padding = isMobile ? 16 : 32; // Отступы

    //     return topBarHeight + contentHeight + padding;
    // };

    const calculateHeight = () => {
        const navEl = navRef.current;
        if (!navEl) return 460;

        const contentEl = navEl.querySelector('.card-nav-content') as HTMLElement;
        if (!contentEl) return 560;

        // Снимаем ограничения видимости для точного замера
        const originalVisibility = contentEl.style.visibility;
        const originalDisplay = contentEl.style.display;

        contentEl.style.visibility = 'hidden';
        contentEl.style.display = window.matchMedia('(max-width: 768px)').matches ? 'flex' : 'grid';

        // Считаем чистую высоту контента
        const contentHeight = contentEl.scrollHeight;

        // Возвращаем исходные стили
        contentEl.style.visibility = originalVisibility;
        contentEl.style.display = originalDisplay;

        const isMobile = window.matchMedia('(max-width: 768px)').matches;
        const topBarHeight = 70; // Высота шапки в закрытом состоянии
        const padding = isMobile ? 16 : 32;

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
                <div className="card-nav-top">
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
                        <div
                            key={`${item.label}-${idx}`}
                            className="nav-card"
                            ref={setCardRef(idx)}
                            style={{ backgroundColor: item.bgColor, color: item.textColor }}
                        >
                            <div className="nav-card-label">{item.label}</div>
                            <div className="nav-card-img">
                                <img src={item.imageUrl} alt="" />
                            </div>
                            <div className="nav-card-links">
                                {item.links?.map((lnk, i) => (
                                    <a key={`${lnk.label}-${i}`} className="nav-card-link" href={lnk.href} download={'1.png'} aria-label={lnk.ariaLabel}>
                                        <GoArrowUpRight className="nav-card-link-icon" aria-hidden="true" />
                                        {lnk.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}

                </div>
            </nav>
        </div>
    );
};

export default CardNav;
