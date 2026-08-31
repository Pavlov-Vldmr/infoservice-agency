// components/ScrollToTopButton.tsx
import { useState, useEffect, useCallback } from 'react';

import './ScrollToTopButton.scss'

interface ScrollToTopButtonProps {
    threshold?: number; // после какого скролла показывать кнопку (px)
}

export default function ScrollToTopButton({ threshold = 300 }: ScrollToTopButtonProps) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > threshold);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [threshold]);

    const scrollToTop = useCallback(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <button
            className='scroll-to-top-btn'
            onClick={scrollToTop}
            aria-label="Наверх"
            style={{
                // position: 'fixed',
                // right: 48,
                // bottom: 48,
                // width: 48,
                // height: 48,
                // borderRadius: '50%',
                // border: 'none',
                // background: '#27459f',
                // color: '#fff',
                // cursor: 'pointer',
                // display: 'flex',
                // alignItems: 'center',
                // justifyContent: 'center',
                // boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                opacity: visible ? .8 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(16px)',
                pointerEvents: visible ? 'auto' : 'none',
                // transition: 'opacity 0.3s ease, transform 0.3s ease',
                // zIndex: 1000,
            }}
        >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                    d="M12 19V5M12 5L5 12M12 5L19 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </button>
    );
}