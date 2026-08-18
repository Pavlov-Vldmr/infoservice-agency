import { useFetch } from "@/hooks/useFetch";
import { fetchCompanyServices } from "@/services/services";
import { getStrapiMediaUrl } from "@/services/strapiClient";
import PageTitle from "../../components/PageTitle/PageTitle";
import ServiceCard from "./components/ServiceCard/ServiceCard";
import "./Services.scss";
import { fetchFiles } from "@/services/files";

function Services() {
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

  if (servicesLoading || filesLoading) return <div>Загрузка...</div>;
  if (servicesError || filesError)
    return <div>Ошибка: {servicesError || filesError}</div>;
  if (services.length === 0) return <div>Сервисы не найдены</div>;

  console.log(files[0]);

  return (
    <>
      <PageTitle
        title="Наши услуги"
        subTitle="Комплексные решения по обеспечению безопасности вашей недвижимости"
      />

      <section className="services">
        <div className="container services__container  p-10 m_p-4">
          {services.map((item) => (
            <>
              <ServiceCard
                key={item.documentId || item.id}
                title={item.title}
                text={item.text}
                link={item.link}
                price={item.price}
                imgURL={getStrapiMediaUrl(item.img?.url)}
              />
            </>
          ))}
        </div>

        {/* <h2>Документы для скачивания</h2>
                <div>

                    {files.map(file => (
                        <>
                            <span>{file.title} </span>

                            <a
                                href={file.file?.url}
                                download
                                target="_blank"
                                rel="noopener noreferrer"
                                className="download-button"
                            >
                                <button>Скачать</button>
                            </a>
                        </>
                    ))}
                </div> */}
      </section>
    </>
  );
}

export default Services;
