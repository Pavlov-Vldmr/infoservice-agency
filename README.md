# React + TypeScript + Vite

- [x] Завершенная задача
- [ ] Иконки скачать
- [x] Иконки в теге img перевести в svg (для перекраски)
- [x] Поправить лого в секции hero в home.tsx
- [x] Добавить круги на фон секции advantages в home.tsx
- [ ] Пагинация к слайдерам
- [x] hover у кнопок исправить
- [ ] Валидация feedbackform
- [ ] Вынести навигацию в компонент
- [ ] Error Boundary
- [ ] Дизайн PageTitile comonent
- [ ] Адаптив для планшетов
- [x] Страница О компании
- [ ] Страница Услуги
- [ ] Страница Объекты
- [x] Страница Контакты
- [ ] Админка
- [ ] Хранение данных

## App structure

```bash
src/
├───assets    # Статические файлы (изображения, шрифты)
│   └───ServicesData
├───components    # Глобальные повторяемые компоненты (Button, Header, Footer)
│   └───Header
├───features     # Логика конкретной функциональности
│   └───FeedbackForm    # Главный компонент формы обратной связи
├───layouts      # Обертки для страниц (Header, Footer, Sidebar)
└───pages   # Страницы приложения
    ├───About
    │   └───components
    ├───Home
    │   └───components
    ├───NotFound
    ├───Objects
    │   └───components
    ├───ServiceDetail
    └───Services
        └───components
```
