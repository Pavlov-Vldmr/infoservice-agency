import type { ComponentType, ReactNode } from 'react';
import ReactCountUp from "react-countup";
import { ErrorBoundary } from "react-error-boundary";
import { TailSpin } from 'react-loader-spinner';
import { Link } from "react-router-dom";

import extraCompData from "@/assets/ServicesData/companyInfo.json"
import servicesExtra from "@/assets/ServicesData/servicesExtra.json";
import AboutComponent from "@/components/AboutComonent/AboutComonent";
import MainActButton from "@/components/Buttons/MainActButton/MainActButton";
import ContactsInfo from "@/components/ContactsInfo/ContactsInfo";
import { Icons } from "@/components/Icons";
import PhoneCallbackComponent from '@/components/PhoneCallbackComponent/PhoneCallbackComponent';
import FadeContent from '@/components/ReactBits/FadeContent/FadeContent';
import ShinyText from '@/components/ReactBits/ShinyText/ShinyText';
import { useCompany } from '@/contexts/CompanyInfoContext';
import { useFetch } from "@/hooks/useFetch";
import { fetchCompanyObjects } from "@/services/objects"
import { fetchCompanyServices } from "@/services/services";
import YandexMap from "@/services/yandexMap";

import MarqueeLogo from './components/MarqueeLogo/MarqueeLogo';
import ObjectsSlider from "./components/ObjectsSlider/ObjectsSlider";
import ReviewsSlider from "./components/ReviewsSlider/ReviewsSlider";
import ServiceCard from "./components/ServiceCard/ServiceCard";

import "./Home.scss";
import Grainient from '@/components/ReactBits/Grainient/Grainient';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import { getStrapiMediaUrl } from '@/services/strapiClient';


import objectsExtra from "@/assets/ServicesData/objectsExtra.json";
import ObjectCard from '../Objects/components/ObjectCard/ObjectCard';

function Home() {

  interface IServiceItem {
    id: number;
    title: string;
    text: string;
    price: number;
    imageUrl: string;
  }

  const servicesEx: IServiceItem[] = servicesExtra

  const { companyInfo } = useCompany();

  const CountUp = (ReactCountUp as { default?: ComponentType<unknown> }).default || ReactCountUp;

  const {
    data: services = [],
    loading: servicesLoading,
    error: servicesError,
  } = useFetch(fetchCompanyServices);

  interface IObjectsItem {
    id: number;
    title: string;
    text: string;
    values: {
      square: string;
      guardians: string;
      since: string;
    } | null;
    img_text: string;
    imageUrl: string;

  }
  const objectsEx: IObjectsItem[] = objectsExtra

  // Важно: хук должен вызываться безусловно, ДО любых ранних return.
  // Раньше он был объявлен после `if (servicesLoading) return ...`,
  // из-за чего нарушался порядок хуков между рендерами (Rules of Hooks)
  // и объекты переставали догружаться.
  const { data: objects = [], loading, error } = useFetch(fetchCompanyObjects);

  const iconArr: ReactNode[] = [
    <Icons.ShieldAlt key="shield" className="item__icons icon_accent" />,
    <Icons.Phone key="user" className="item__icons icon_accent" />,
    <Icons.Shield key="settings" className="item__icons icon_accent" />
  ];

  // ---- Все хуки вызваны выше. Дальше — можно делать условные return. ----

  if (servicesError) return <div>Ошибка: {servicesError}</div>;
  if (error) return <div>Ошибка: {error}</div>;

  if (servicesLoading || loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '800px',
        width: '100%',
        top: '40%'
      }}>
        <TailSpin
          visible={true}
          height="80"
          width="80"
          color="#2563eb"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  const FadeAdvDuration: number = 500



  return (
    <>
      <section className="home-hero ">
        <Grainient
          className='m-0 p-0 m_px-0 home-hero__grainient'
          color1="#1e3a8a"
          color2="#2563eb"
          color3="#3B82F6"
          timeSpeed={0.2}
          colorBalance={0.31}
          warpStrength={1.15}
          warpFrequency={5.7}
          warpSpeed={2}
          warpAmplitude={5}
          blendAngle={0}
          blendSoftness={0.55}
          rotationAmount={750}
          noiseScale={2}
          grainAmount={0}
          grainScale={0.2}
          grainAnimated={false}
          contrast={1}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={0.9}
        />
        <div className="container home-hero__container m_px-4 pt-34 p-10">

          {/* <div style={{ width: '100%', height: '100%', position: 'absolute' }}> */}

          {/* </div> */}


          <div className="home-hero__main">
            <span className="license ">
              {companyInfo?.licenseShort || extraCompData.licenseShort}
            </span>
            <ShinyText
              text="Охрана недвижимости под надежной защитой"
              speed={5}
              delay={0}
              color="#fff"
              shineColor="#879cd3"
              spread={120}
              direction="left"
            />
            <p>
              Профессиональная охрана коммерческой и жилой недвижимости.
              Круглосуточный мониторинг, современное оборудование и опытные
              специалисты.
            </p>
            <div className="home-hero__main__btns mt-4">
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

      <section className="home-services px-8 m_px-4 pb-10">
        <div className="container home-services__container">
          <SectionTitle
            plate={"Услуги"}
            title={"Наши услуги по охране"}
            text={"Комплексные решения по обеспечению безопасности объектов любой сложности"}
          />

          <div className="home-services__items mb-8 pt-10">
            {services && services.length > 0 ? (
              services.slice(0, 3).map((item, index) => (
                <FadeContent className="home-services__items__item" blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                  <ServiceCard
                    key={item.documentId || item.id}
                    title={item.title}
                    text={item.text}
                    icon={iconArr[index] || ""}
                  />
                </FadeContent>


              ))
            ) : (
              servicesEx.slice(0, 3).map((item, index) => (

                <FadeContent className="home-services__items__item" blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                  <ServiceCard
                    key={item.id}
                    title={item.title}
                    text={item.text}
                    icon={iconArr[index] || ""}
                  />
                </FadeContent>

              ))
            )}
          </div>
          <div className="home-services__btn flex-center">
            <Link
              className="btn btn_primary btn_bordered m_w100"
              to="/infoservice-agency/services"
            >
              Все услуги
            </Link>
          </div>
        </div>
      </section>

      {/* slider OBJECTS */}
      <section className="home-objects pb-10 ">
        <div className="container">
          <SectionTitle
            plate={"Объекты"}
            title={"Охраняемые объекты"}
            text={"Мы обеспечиваем безопасность разных типов недвижимости"}
          />

          {/* !!!!!  */}
          {/* <div className="home-objects__slider mb-8">
            <ObjectsSlider />
          </div> */}

          <div className="container objects__container px-10 pb-10 m_p-4">
            {Array.isArray(objects) && objects.length > 0 ? (
              objects.slice(0, 3).map((obj) => (
                <ObjectCard
                  key={obj.documentId || obj.id}
                  title={obj.title}
                  text={obj.text}
                  imgURL={getStrapiMediaUrl(obj.img?.url)}
                  imgTitle={obj.img_text}
                  square={obj.values?.square}
                  guardians={obj.values?.guardians}
                  since={obj.values?.since} />
              ))
            ) : (
              Array.isArray(objectsEx) ? (
                objectsEx.slice(0, 3).map((obj) => (
                  <ObjectCard
                    key={obj.id}
                    title={obj.title}
                    text={obj.text}
                    imgTitle={obj.img_text}
                    square={obj.values?.square}
                    guardians={obj.values?.guardians}
                    since={obj.values?.since}
                    imgURL={obj.imageUrl}

                  />
                ))
              ) : null)}
          </div>

          <div className="home-objects__btn flex-center m_px-4 m_py-4">
            <Link
              className="btn btn_primary btn_bordered m_w100"
              to="/infoservice-agency/objects"
            >
              Все объекты
            </Link>
          </div>
        </div>
      </section>

      <section className="home-advantages pb-10  ">
        <div className="container">
          <SectionTitle
            className={"text_white"}
            plate={"Преимущества"}
            plateColor='border-w text_gold'
            pColor='text_white-7'
            title={"Почему выбирают нас"}
            hColor='text_white'
            text={"Наши преимущества делают нас лучшим выбором в сфере охраны недвижимости"}
          />


          <div className="home-advantages__plates">

            <FadeContent className="home-advantages__plates__item" blur={true} duration={FadeAdvDuration} easing="ease-out" initialOpacity={0}>
              <div >
                <Icons.Reputation className="home-advantages__icons icon_white" />
                <h3>Коммерческая репутация</h3>
                <p>
                  Нашему предприятию 28 лет доверяют охранять свое имущество более
                  1000 клиентов на территории Сахалинской области.
                </p>
              </div>
            </FadeContent>

            <FadeContent className="home-advantages__plates__item" blur={true} duration={FadeAdvDuration} easing="ease-out" initialOpacity={0}>
              <div >
                <Icons.Reputation className="home-advantages__icons icon_white" />
                <h3>Коммерческая репутация</h3>
                <p>
                  Нашему предприятию 28 лет доверяют охранять свое имущество более
                  1000 клиентов на территории Сахалинской области.
                </p>
              </div>
            </FadeContent>

            <FadeContent className="home-advantages__plates__item" blur={true} duration={FadeAdvDuration} easing="ease-out" initialOpacity={0}>
              <div >
                <Icons.ShieldAlt className="home-advantages__icons icon_white" />
                <h3>Финансовая проверка</h3>
                <p>
                  Отсутствие задолженностей в местные, региональные, федеральные
                  бюджеты, фонды обязательных платежей в течение всего срока
                  существования предприятия. Отсутствие неисполненных обязательств
                  перед заказчиками, клиентами.
                </p>
              </div>
            </FadeContent>

            <FadeContent className="home-advantages__plates__item" blur={true} duration={FadeAdvDuration} easing="ease-out" initialOpacity={0}>
              <div >
                <Icons.Person className="home-advantages__icons icon_white" />
                <h3>Профессиональный состав</h3>
                <p>
                  184 сотрудника охраны, лицензированных в соответствии с
                  действующим законодательством России.
                </p>
              </div>
            </FadeContent>

            <FadeContent className="home-advantages__plates__item" blur={true} duration={FadeAdvDuration} easing="ease-out" initialOpacity={0}>
              <div >
                <Icons.Lock className="home-advantages__icons icon_white" />
                <h3>Проверка работы в прошлом</h3>
                <p>
                  Проверки деятельности контролирующими государственными органами
                  (ЦЛРР Росгвардии, налоговые органы, Пенсионный фонд, Инспекция
                  по труду, военкомат), нарушений не выявлено.
                </p>
              </div>
            </FadeContent>

            <FadeContent className="home-advantages__plates__item" blur={true} duration={FadeAdvDuration} easing="ease-out" initialOpacity={0}>
              <div >
                <Icons.Headphones className="home-advantages__icons icon_white" />
                <h3>Всегда рядом</h3>
                <p>
                  Услуги оказываются 24 часа в сутки. Имеется круглосуточные
                  службы мониторинга, охраны, операторов и дежурного технического
                  персонала в городах Южно-Сахалинск, Корсаков, Холмск.
                </p>
              </div>
            </FadeContent>

            <FadeContent className="home-advantages__plates__item" blur={true} duration={FadeAdvDuration} easing="ease-out" initialOpacity={0}>
              <div >
                <Icons.Recomendation className="home-advantages__icons icon_white" />
                <h3>Проверка рекомендаций</h3>
                <p>
                  Охрана более 1000 объектов: физическая охрана и с помощью
                  различных технических средств охраны в городах: Южно-Сахалинск,
                  Корсаков, Холмск, Оха, Невельск, Ноглики, Макаров, Поронайск,
                  Смирных, Тымовское, Озерское, Долинск.
                </p>
              </div>
            </FadeContent>
            <FadeContent className="home-advantages__plates__item" blur={true} duration={FadeAdvDuration} easing="ease-out" initialOpacity={0}>
              <div >
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
            </FadeContent>



          </div>
        </div>
      </section>

      <section className='home-marquee bg_white'>
        <MarqueeLogo />
      </section>

      <section className="home-about py-20 m_py-0 ">
        <AboutComponent />
      </section>


      <section className='home-phoneCallback m_px-4 m_pt-8 bg_white'>
        <PhoneCallbackComponent />
      </section>


      {/* slider REVIEWS */}
      <section className="home-reviews pb-10 m_px-4">
        <div className="container">

          <SectionTitle
            plate={"Отзывы"}
            title={"Что о нас говорят"}
            text={"Что говорят о нас руководители компаний и владельцы недвижимости"}
          />
          <div className="home-reviews__slider">
            <ReviewsSlider />
          </div>
        </div>
      </section>



      <section id="scrollTest" className="home-contacts pb-10">
        <div className="container home-contacts__container  px-10 m_p-4">


          <SectionTitle
            plate={"Контакты"}
            title={"Свяжитесь с нами"}
            text={"Готовы ответить на ваши вопросы и помочь с выбором охранных услуг для вашего объекта."}
          />

          <div className="home-contacts__content">
            <ContactsInfo />
            <div className="contacts__map">
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
