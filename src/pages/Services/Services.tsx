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
        <div className="container services__container  p-10 m_p-4">
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
              />
            ))
          )}
        </div>
      </section>

      <section className="services">
        <div className="container services__container  p-10 m_p-4">
          <h2>Прайс лист</h2>
          <div>
            <span>{files[0]?.title}</span>
            <a
              href={getStrapiMediaUrl(files[0]?.file?.url)}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="download-button"
            >
              <button>Скачать</button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
