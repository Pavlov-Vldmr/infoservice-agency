import React from 'react';
import styles from './ScrollDown.module.scss';

interface ScrollDownProps {
  /** Текст подписи */
  label?: string;
  /** Обработчик клика (например, плавный скролл к следующей секции) */
  onClick?: () => void;
  /** Дополнительный класс */
  className?: string;
}

const ScrollDown: React.FC<ScrollDownProps> = ({
  label = 'Листай вниз',
  onClick,
  className = '',
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
      return;
    }
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      className={`${styles.scrollDown} ${className}`}
      onClick={handleClick}
      aria-label={label}
    >
      <span className={styles.label}>{label}</span>
      <span className={styles.mouse}>
        <span className={styles.wheel} />
      </span>
      {/* <span className={styles.arrows}>
        <span className={styles.arrow} />
        <span className={styles.arrow} />
        <span className={styles.arrow} />
      </span> */}
    </button>
  );
};

export default ScrollDown;
