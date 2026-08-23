// 1. Импортируем компонент спиннера
import { TailSpin } from "react-loader-spinner";

import servicesExtra from "@/assets/ServicesData/servicesExtra.json";
import { useFetch } from "@/hooks/useFetch";
import { fetchFiles } from "@/services/files";
import { fetchCompanyServices } from "@/services/services";
import { getStrapiMediaUrl } from "@/services/strapiClient";

import PageTitle from "../../components/PageTitle/PageTitle";
import ServiceCard from "./components/ServiceCard/ServiceCard";

import "./Services.scss";
import CallbackComponent from "@/components/CallbackComponent/CallbackComponent";
import FeedbackForm from "@/features/FeedbackForm/FeedbackForm";
import MainActButton from "@/components/Buttons/MainActButton/MainActButton";
import AboutComponent from "@/components/AboutComonent/AboutComonent";
import ContactsInfo from "@/components/ContactsInfo/ContactsInfo";

function Services() {

  interface IServiceItem {
    id: number;
    title: string;
    text: string;
    price: number;
    imageUrl: string;
  }

  const servicesEx: IServiceItem[] = servicesExtra

  const {
    data: services = [],
    loading: servicesLoading,
    error: servicesError,
  } = useFetch(fetchCompanyServices);

  const {
    data: files = [],
    loading: filesLoading,
    error: filesError,
  } = useFetch(fetchFiles);


  if (servicesLoading || filesLoading) {
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

  if (servicesError || filesError)
    return <div style={{ textAlign: 'center', padding: '40px', color: 'red' }}>Ошибка: {servicesError || filesError}</div>;

  return (
    <>
      <PageTitle
        title="Наши услуги"
        subTitle="Комплексные решения по обеспечению безопасности вашей недвижимости"
      />

      <section className="services">
        <div className="container services__container price-download p-10 m_p-4">
          <div className="">
            <span>{files[0]?.title}</span>
            <a
              href={getStrapiMediaUrl(files[0]?.file?.url)}
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


      <section className="services">
        <div className="container services__container  pb-10 m_p-4">
          {services && services.length > 0 ? (
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
          )}
        </div>
      </section>



      <section id="servicesFeedback" className="services services-feedback bg_white">
        <div className="container">
          <div className="services__title mb-20 pt-20">
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
