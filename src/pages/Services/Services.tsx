import { useState, useEffect } from 'react'; // Добавили хуки

import { TailSpin } from "react-loader-spinner";

import servicesExtra from "@/assets/ServicesData/servicesExtra.json";
import { useFetch } from "@/hooks/useFetch";
import { fetchFiles } from "@/services/files";
import { fetchCompanyServices } from "@/services/services";
import { getStrapiMediaUrl } from "@/services/strapiClient";

import PageTitle from "../../components/PageTitle/PageTitle";
import ServiceCard from "./components/ServiceCard/ServiceCard";

import "./Services.scss";
import FeedbackForm from "@/features/FeedbackForm/FeedbackForm";
import MainActButton from "@/components/Buttons/MainActButton/MainActButton";
import ContactsInfo from "@/components/ContactsInfo/ContactsInfo";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { Icons } from "@/components/Icons";
import AnimatedContent from "@/components/ReactBits/AnimatedContent/AnimatedContent";

import bgImg from '@/assets/images/bg/serv.avif'
import AccordionComponent from './components/Accordion/Accordion';


function Services() {

  interface IServiceItem {
    id: number;
    title: string;
    text: string;
    price: number;
    imageUrl: string;
  }

  const servicesEx: IServiceItem[] = servicesExtra

  {/* не удалять */ }

  // const {
  //   data: services = [],
  //   loading: servicesLoading,
  //   error: servicesError,
  // } = useFetch(fetchCompanyServices);

  // const {
  //   data: files = [],
  //   loading: filesLoading,
  //   error: filesError,
  // } = useFetch(fetchFiles);

  // Определение мобильного экрана
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile(); // Первая проверка при монтировании
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  {/* не удалять */ }

  // if (servicesLoading || filesLoading) {
  //   return (
  //     <div style={{
  //       display: 'flex',
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //       minHeight: '800px',
  //       width: '100%',
  //       top: '40%'
  //     }}>
  //       <TailSpin
  //         visible={true}
  //         height="80"
  //         width="80"
  //         color="#2563eb"
  //         ariaLabel="tail-spin-loading"
  //         radius="1"
  //         wrapperStyle={{}}
  //         wrapperClass=""
  //       />
  //     </div>
  //   );
  // }

  // Динамическая длительность: на мобилке 0.6с, на десктопе 1.4с
  const animDuration = isMobile ? 1 : 1.8;

  {/* не удалять */ }

  // if (servicesError || filesError)
  //   return <div style={{ textAlign: 'center', padding: '40px', color: 'red' }}>Ошибка: {servicesError || filesError}</div>;

  return (
    <>
      <PageTitle
        bgImg={bgImg}
        plate="Услуги"
        title="Наши услуги"
        subTitle="Комплексные решения по обеспечению безопасности вашей недвижимости"
      />


      <section className="services-accordion-main bg_white">
        <SectionTitle
          plate={"Вопросы"}
          title={"Частые вопросы"}
          text={"Отвечаем на самые популярные вопросы клиентов"}
        />
        <div className="container services-accordion__container pb-10 m_p-4">
          <AccordionComponent />
        </div>
      </section>
      {/* Остальной контент без изменений */}
      <section className="services">
        <SectionTitle
          plate={"Что мы делаем"}
          title={"Полный спектр услуг"}
          text={"Комплексные решения по обеспечению безопасности объектов любой сложности"}
        />
        <div className="container services__container price-download pb-10 m_p-4">
          <div className="">



            {/* не удалять */}

            {/* <span>{files[0]?.title}</span>
            <a
              href={getStrapiMediaUrl(files[0]?.file?.url)}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="download-button"
            >
              <button className="btn btn_primary btn_bordered m_w100">Скачать прайс лист</button>
            </a> */}



            <a
              href=''
              download
              target="_blank"
              rel="noopener noreferrer"
              className="download-button"
            >
              <button className="btn btn_primary btn_bordered m_w100">Скачать прайс лист</button>
            </a>
          </div>
          <MainActButton
            to="#servicesFeedback"
            variant="white"
            title="Обратный звонок"
            bordered
          ></MainActButton>
        </div>
      </section>

      <section className="services bg_white">
        <div className="container services__container  pb-10 m_p-4">


          {/* не удалять */}

          {/* {services && services.length > 0 ? (
            services.map((item) => (
              <ServiceCard
                key={item.documentId || item.id}
                title={item.title}
                text={item.text}
                link={item.link}
                price={item.price}
                imgURL={getStrapiMediaUrl(item.img?.url)}
              />
            ))
          ) : (
            servicesEx.map((item) => (
              <ServiceCard
                key={item.id}
                title={item.title}
                text={item.text}
                price={item.price}
                imgURL={item.imageUrl}
              />
            ))
          )} */}

          {servicesEx.map((item) => (
            <ServiceCard
              key={item.id}
              title={item.title}
              text={item.text}
              price={item.price}
              imgURL={item.imageUrl}
            />
          ))}
        </div>
      </section>

      <section className="services services-connection">

        <SectionTitle
          plate={"Как мы работаем"}
          title={"Процесс подключения"}
          text={"Четыре простых шага до полной безопасности вашего объекта"}
        />
        <div className="container services-connection__container pb-20 m_p-4 m_pb-10">

          <AnimatedContent direction="horizontal"
            reverse
            distance={100}
            duration={animDuration}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.1}
            delay={isMobile ? 0.3 : 1}> {/* Сократили задержку на мобилке */}
            <div className="services-connection__plate">
              <span className="stage">01</span>
              <div className="plate-info">
                <Icons.Shield className="plate-img icon_accent" />
                <span className="plate-title">Заявка</span>
                <p className="plate-text">Оставляете заявку или звоните нам — обсуждаем задачу и особенности объекта.</p>
              </div>
            </div>
          </AnimatedContent>
          <AnimatedContent direction="horizontal"
            reverse
            distance={100}
            duration={animDuration}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.1}
            delay={isMobile ? 0.6 : 1.5}>
            <div className="services-connection__plate">
              <span className="stage">02</span>

              <div className="plate-info">
                <Icons.Shield className="plate-img icon_accent" />
                <span className="plate-title">Оценка</span>
                <p className="plate-text">Выезжаем на объект, проводим анализ рисков и составляем план охраны.</p>
              </div>
            </div>
          </AnimatedContent>
          <AnimatedContent direction="horizontal"
            reverse
            distance={100}
            duration={animDuration}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.1}
            delay={isMobile ? 0.8 : 2}>

            <div className="services-connection__plate">
              <span className="stage">03</span>

              <div className="plate-info">
                <Icons.Shield className="plate-img icon_accent" />
                <span className="plate-title">Договор</span>
                <p className="plate-text">Согласовываем условия, заключаем договор и формируем смету.</p>
              </div>
            </div>
          </AnimatedContent>
          <AnimatedContent direction="horizontal"
            reverse={true}
            distance={100}
            duration={animDuration}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.1}
            delay={isMobile ? 1 : 2.5}>
            <div className="services-connection__plate">
              <span className="stage">04</span>

              <div className="plate-info">
                <Icons.Shield className="plate-img icon_accent" />
                <span className="plate-title">Запуск</span>
                <p className="plate-text">Выставляем пост, настраиваем системы и приступаем к охране объекта.</p>
              </div>
            </div>
          </AnimatedContent>

        </div>

      </section>

      <section id="servicesFeedback" className="services services-feedback bg_white">
        <div className="container">
          <div className="services__title mb-20 pt-20 m_mb-10 m_pt-20 ">
            <h2 className="text_center">Остались вопросы?</h2>
          </div>
          <div className="services-feedback__container  px-10 pb-10 m_p-4">
            <ContactsInfo className="services-feedback__contacts" />
            <FeedbackForm />
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
