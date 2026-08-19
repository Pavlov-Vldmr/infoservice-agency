import type { ComponentType } from 'react';
import ReactCountUp from "react-countup";
import { ErrorBoundary } from "react-error-boundary";
import { Link } from "react-router-dom";

import AboutComponent from "@/components/AboutComonent/AboutComonent";
import MainActButton from "@/components/Buttons/MainActButton/MainActButton";
import ContactsInfo from "@/components/ContactsInfo/ContactsInfo";
import { Icons } from "@/components/Icons";
import { useFetch } from "@/hooks/useFetch";
import { fetchCompanyServices } from "@/services/services";
import YandexMap from "@/services/yandexMap";

import ObjectsSlider from "./components/ObjectsSlider/ObjectsSlider";
import ReviewsSlider from "./components/ReviewsSlider/ReviewsSlider";
import ServiceCard from "./components/ServiceCard/ServiceCard";

import "./Home.scss";


function Home() {

  const CountUp = (ReactCountUp as { default?: ComponentType<unknown> }).default || ReactCountUp;

  const {
    data: services = [],
    loading: servicesLoading,
    error: servicesError,
  } = useFetch(fetchCompanyServices);

  if (servicesLoading) return <div>Загрузка...</div>;
  if (servicesError) return <div>Ошибка: {servicesError}</div>;
  if (services.length === 0) return <div>Сервисы не найдены</div>;

  return (
    <>
      <section className="home-hero ">
        <div className="container home-hero__container m_px-4 p-10">
          <div className="home-hero__main">
            <span className="license">
              Лицензия № Л056-00106/00029316 от 19.08.2014г.
            </span>
            <h1>Охрана недвижимости под надежной защитой</h1>
            <p>
              Профессиональная охрана коммерческой и жилой недвижимости.
              Круглосуточный мониторинг, современное оборудование и опытные
              специалисты.
            </p>
            <div className="home-hero__main__btns mt-4">
              {/* // калькулятор */}
              {/* <MainActButton to="/infoservice-agency/calculator" variant='white' title="Заказать онлайн"></MainActButton> */}
              {/* // на страницу услуги */}
              <MainActButton
                to="/infoservice-agency/services"
                variant="primary"
                title="Наши услуги"
                bordered
              ></MainActButton>
            </div>
          </div>
        </div>
      </section>

      <section className="home-achievements py-4">
        <div className="container home-achievements__container p-2">
          <div>
            <Icons.Chart className="home-achievements__icons icon_accent" />
            <span className="value"><CountUp end={1000} duration={4} suffix="+" enableScrollSpy={true}
              scrollSpyOnce={true} /></span>
            <span className="text">Охраняемых объектов</span>
          </div>
          <div>
            <Icons.Clock className="home-achievements__icons icon_accent" />
            <span className="value"><CountUp end={24} duration={4} suffix="\" enableScrollSpy={true} scrollSpyOnce={true} />
              <CountUp end={7} duration={4} enableScrollSpy={true} scrollSpyOnce={true} />

            </span>
            <span className="text">Круглосуточная охрана</span>
          </div>
          <div>
            <Icons.Person className="home-achievements__icons icon_accent" />

            <span className="value"><CountUp end={184} duration={4} enableScrollSpy={true}
              scrollSpyOnce={true} /></span>
            <span className="text">Охранника</span>
          </div>
          <div>
            <Icons.Shield className="home-achievements__icons icon_accent" />

            <span className="value"><CountUp end={99.9} duration={4} decimals={1} suffix="%" enableScrollSpy={true}
              scrollSpyOnce={true} /></span>
            <span className="text">Надёжность</span>
          </div>
        </div>
      </section>

      <section className="home-services px-8 m_px-4 py-20">
        <div className="container home-services__container">
          <div className="home-services__title mb-20">
            <h2 className="text_center mb-4">Наши услуги по охране</h2>
            <p className="text_center text_muted py-4">
              Комплексные решения по безопасности для защиты вашей недвижимости
            </p>
          </div>
          <div className="home-services__items mb-8">
            {services.slice(0, 3).map((item) => (
              <>
                <ServiceCard
                  key={item.documentId || item.id}
                  title={item.title}
                  text={item.text}
                />
              </>
            ))}
          </div>
          <div className="home-services__btn flex-center">
            <Link
              className="btn btn_primary btn_bordered"
              to="/infoservice-agency/services"
            >
              Все услуги
            </Link>
          </div>
        </div>
      </section>

      {/* slider here */}
      <section className="home-objects px-8 m_px-4 py-20">
        <div className="container">
          <div className="home-objects__title mb-20">
            <h2 className="text_center mb-4">Охраняемые объекты</h2>
            <p className="text_center text_muted py-4">
              Мы обеспечиваем безопасность разных типов недвижимости
            </p>
          </div>
          <div className="home-objects__slider mb-8">
            <ObjectsSlider />
          </div>
          <div className="home-objects__btn flex-center">
            <Link
              className="btn btn_primary btn_bordered"
              to="/infoservice-agency/objects"
            >
              Все объекты
            </Link>
          </div>
        </div>
      </section>

      <section className="home-advantages py-20">
        <div className="container">
          <div className="home-advantages__title mb-20">
            <h2 className="text_center mb-4">Почему выбирают нас</h2>
            <p className="text_center px-4">
              Наши преимущества делают нас лучшим выбором в сфере охраны
              недвижимости
            </p>
          </div>
          <div className="home-advantages__plates">
            <div className="home-advantages__plates__item">
              <Icons.Reputation className="home-advantages__icons icon_white" />
              <h3>Коммерческая репутация</h3>
              <p>
                Нашему предприятию 28 лет доверяют охранять свое имущество более
                1000 клиентов на территории Сахалинской области.
              </p>
            </div>
            <div className="home-advantages__plates__item">
              <Icons.ApplySvg className="home-advantages__icons icon_white" />
              <h3>Финансовая проверка</h3>
              <p>
                Отсутствие задолженностей в местные, региональные, федеральные
                бюджеты, фонды обязательных платежей в течение всего срока
                существования предприятия. Отсутствие неисполненных обязательств
                перед заказчиками, клиентами.
              </p>
            </div>
            <div className="home-advantages__plates__item">
              <Icons.Person className="home-advantages__icons icon_white" />
              <h3>Профессиональный состав</h3>
              <p>
                184 сотрудника охраны, лицензированных в соответствии с
                действующим законодательством России.
              </p>
            </div>
            <div className="home-advantages__plates__item">
              <Icons.Lock className="home-advantages__icons icon_white" />
              <h3>Проверка работы в прошлом</h3>
              <p>
                Проверки деятельности контролирующими государственными органами
                (ЦЛРР Росгвардии, налоговые органы, Пенсионный фонд, Инспекция
                по труду, военкомат), нарушений не выявлено.
              </p>
            </div>
            <div className="home-advantages__plates__item">
              <Icons.Headphones className="home-advantages__icons icon_white" />
              <h3>Всегда рядом</h3>
              <p>
                Услуги оказываются 24 часа в сутки. Имеется круглосуточные
                службы мониторинга, охраны, операторов и дежурного технического
                персонала в городах Южно-Сахалинск, Корсаков, Холмск.
              </p>
            </div>
            <div className="home-advantages__plates__item">
              <Icons.Cube className="home-advantages__icons icon_white" />
              <h3>Проверка рекомендаций</h3>
              <p>
                Охрана более 1000 объектов: физическая охрана и с помощью
                различных технических средств охраны в городах: Южно-Сахалинск,
                Корсаков, Холмск, Оха, Невельск, Ноглики, Макаров, Поронайск,
                Смирных, Тымовское, Озерское, Долинск.
              </p>
            </div>
            <div className="home-advantages__plates__item">
              <Icons.Cube className="home-advantages__icons icon_white" />
              <h3>Прозрачность в работе</h3>
              <p>
                Отчет по работе по договору предоставляется по запросу Клиента
                или с частотой, указанной в договоре (отчет включает в себя
                графики несения службы, количество отработанных часов,
                количество задействованных сотрудников, инциденты, принятые
                меры, нанесенный и возмещенный ущерб и т.д.).
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="home-about py-20 m_py-0">
        <AboutComponent />
      </section>

      {/* slider here */}
      <section className="home-reviews py-20 ">
        <div className="container">
          <div className="home-reviews__title mb-10">
            <h2 className="text_center mb-4">Отзывы наших клиентов</h2>
            <p className="text_center text_muted py-4">
              Что говорят о нас руководители компаний и владельцы недвижимости
            </p>
          </div>
          <div className="home-reviews__slider">
            <ReviewsSlider />
          </div>
        </div>
      </section>

      <section id="scrollTest" className="home-contacts py-20">
        <div className="container home-contacts__container  p-10 m_p-4">
          <div className="home-contacts__title mb-20">
            <h2 className="text_center mb-4">Контакты</h2>
            <p className="text_center text_muted py-4">
              Свяжитесь с нашими специалистами по безопасности для обсуждения
              защиты вашей недвижимости
            </p>
          </div>
          <div className="home-contacts__content">
            <ContactsInfo />
            <div className="contacts__map pb-8">
              <div className="container contacts__map__container ">
                <h2 className="text_primary px-8 pt-8">Карта проезда</h2>
                <div className="map__element p-8 m_p-4">
                  <ErrorBoundary fallback={<div>Ошибка при загрузке карты или компонента!</div>}>
                    <YandexMap />
                  </ErrorBoundary>
                </div>
              </div>
            </div>
            {/* <FeedbackForm /> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
