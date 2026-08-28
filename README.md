# React + TypeScript + Vite

### vite start

```
npm i
npm run dev
npm run deploy

```

### strapi

```
npm run develop
```

strapi/.env
check strapi serv URL ex: URL=http://192.168.0.94:1337

### legacy-install

```
npm install pkg-name --legacy-peer-deps
```

## TODO list

- [ ] плашки в хиро лет, городов, клиентов

- [ ] переверстать эбауткомп

- [ ] сверстать наш путь

- [+] сверстать фак

- [ ] маркуе нам довееряют текст и иконка

- [+] добавить белыe круги на фон колбэка

### general

- [ ] Иконки !SVG (ссылка в icons.tsx)
- [ ] Изображения !в правильном формате
- [ ] react-loader-spinner (загрузка главной - один, загрузка содержимого страниц объекты услуги - другой)

  ### style

- [ ] Адаптив

### functional

### strapi \ api \ cms \

- [ ]

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
├───services # типы интерфейсы итп
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
