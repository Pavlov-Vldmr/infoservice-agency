import React, { useState, useMemo, useRef, useEffect } from 'react';
import servicesExtra from "@/assets/ServicesData/servicesExtra.json";
import ServicesCard from '../ServicesCard/ServicesCard';

import './LoadMore.scss';

const LIMIT = 6; // Сколько элементов показывать за раз

interface IServiceItem {
    id: number;
    title: string;
    text: string;
    price: string;
    imageUrl: string;
}

// Типы для вариантов сортировки
type SortType = 'default' | 'price-asc' | 'price-desc' | 'alphabetical';

function LoadMoreList() {
    // Явно типизируем данные из JSON
    const [items] = useState<IServiceItem[]>(servicesExtra as IServiceItem[]);
    const [visibleCount, setVisibleCount] = useState<number>(LIMIT);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [sortBy, setSortBy] = useState<SortType>('default'); // Состояние сортировки

    // Состояние открытия кастомного дропдауна и ссылка на него
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Массив опций для рендеринга кастомного селекта
    const sortOptions = [
        { value: 'default', label: 'Сортировка: по умолчанию' },
        { value: 'price-asc', label: 'Цена: по возрастанию' },
        { value: 'price-desc', label: 'Цена: по убыванию' },
        { value: 'alphabetical', label: 'По алфавиту (А-Я)' },
    ];

    // Находим текстовую метку текущего выбранного элемента для отображения на кнопке
    const currentLabel = sortOptions.find(opt => opt.value === sortBy)?.label || 'Сортировка: по умолчанию';

    // Закрываем дропдаун при клике вне его области
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Функция парсинга цены для корректного сравнения (обрабатывает строки вида "650" и "3000-4500")
    const parsePrice = (priceStr: string): number => {
        const cleanPrice = priceStr.split('-')[0].replace(/[^0-9]/g, '');
        return cleanPrice ? parseInt(cleanPrice, 10) : 0;
    };

    // Сортируем массив данных перед тем, как делать slice
    const sortedItems = useMemo(() => {
        const itemsCopy = [...items];

        switch (sortBy) {
            case 'price-asc':
                return itemsCopy.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
            case 'price-desc':
                return itemsCopy.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
            case 'alphabetical':
                return itemsCopy.sort((a, b) => a.title.localeCompare(b.title));
            default:
                return itemsCopy; // Без сортировки (как в JSON)
        }
    }, [items, sortBy]);

    // Имитация загрузки
    const handleLoadMore = () => {
        setIsLoading(true);
        setTimeout(() => {
            setVisibleCount((prev) => prev + LIMIT);
            setIsLoading(false);
        }, 600);
    };

    // Вычисляем текущее количество отображаемых элементов (чтобы не превышало длину массива)
    const currentDisplayedCount = Math.min(visibleCount, sortedItems.length);
    const hasMore = visibleCount < sortedItems.length;

    return (
        <>
            {/* Счетчик элементов */}
            <div className="load-more">
                <div className="load-more__nav py-4">
                    <div className="items-counter" style={{ fontWeight: '500' }}>
                        Показано {currentDisplayedCount} из {sortedItems.length}
                    </div>

                    {/* Кастомный селект сортировки */}
                    <div className={`sort-box ${isOpen ? 'is-active' : ''}`} ref={dropdownRef}>
                        {/* Кнопка-триггер выпадающего списка */}
                        <div
                            className="sort-box__select"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {currentLabel}
                        </div>

                        {/* Выпадающее меню с опциями (отрисовывается только если isOpen === true) */}
                        {isOpen && (
                            <div className="sort-box__dropdown">
                                {sortOptions.map((option) => (
                                    <div
                                        key={option.value}
                                        className={`sort-box__option ${sortBy === option.value ? 'selected' : ''}`}
                                        onClick={() => {
                                            setSortBy(option.value as SortType);
                                            setIsOpen(false); // Закрываем список после выбора
                                        }}
                                    >
                                        {option.label}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <div className="load-more__cards">
                    {/* Сетка/список карточек */}
                    {sortedItems.slice(0, visibleCount).map((item) => (
                        <ServicesCard
                            key={item.id}
                            title={item.title}
                            price={item.price}
                            imgURL={item.imageUrl}
                        />
                    ))}
                </div>

            </div>

            {/* Блок подгрузки */}
            <div className="load-more-box py-8" style={{ textAlign: 'center' }}>
                {hasMore ? (
                    <button className="btn btn_primary btn_bordered flex-center m_w100" onClick={handleLoadMore} disabled={isLoading}>
                        {isLoading ? 'Загрузка...' : 'Загрузить ещё'}
                    </button>
                ) : (
                    <p style={{ color: '#888' }}>Больше элементов нет</p>
                )}
            </div>
        </>
    );
}

export default LoadMoreList;
