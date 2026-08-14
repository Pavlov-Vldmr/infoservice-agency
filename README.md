# React + TypeScript + Vite

```
npm i
npm run dev
npm run deploy
```

## TODO list

### general

- [ ] Иконки !SVG (есть в фигме ЧОП)
- [ ] Изображения !в правильном формате

  ### style

- [ ] Адаптив для планшетовx
- [ ] Страница Калькулятор
- [ ] ProposalComonent заменеить кнопку "Наши услуги" на "перезвонить"
- [ ] Поправить все телефоны на

```
<PhoneComponent phone={`${companyInfo?.city[cityC].phone}`} />
```

- [ ] телефоны почты адреса в зависимости от города

```
  import { useCompany } from "@/contexts/CompanyInfoContext"
  import { useCity } from "@/contexts/CityContext"

  const { companyInfo } = useCompany();
  const { city: cityC } = useCity();

  <a href="" className="test text_primary">{companyInfo?.city[cityC].name}</a>
```

### functional

- [ ] ошибка если не ренд ерится страница определенной услуги

- [ ] \*В синем хэдере сверху нужно справа заменить текст на выбор города, в зависимости от города будет меняться почта и телефон там же.
- [ ] \*В контактах нужен список по городам номеров и прочего(несколько блоков которые с иконками). С картой так же несколько по городам. Нужен наверно общий список для перехода по ссылкам или менять карту от выбора города.
- [ ] \*В футере так же контакты меняются от города

### strapi \ api \ cms \

- [ ] Регулярки
- [ ] постфиксы данных ex: m^2, человеки итд

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
