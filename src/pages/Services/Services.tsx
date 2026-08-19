import { useFetch } from "@/hooks/useFetch";
import { fetchFiles } from "@/services/files";
import { fetchCompanyServices } from "@/services/services";
import { getStrapiMediaUrl } from "@/services/strapiClient";

import PageTitle from "../../components/PageTitle/PageTitle";
import ServiceCard from "./components/ServiceCard/ServiceCard";

import "./Services.scss";

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


      </section>
      <section className="services">
        <div className="container services__container  p-10 m_p-4">
          <h2>Документы для скачивания РАБОТАЕТ</h2>
          <div>

            {files.map(file => (
              <>
                <span>{file.title} </span>

                <a
                  href={getStrapiMediaUrl(file.file?.url)}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="download-button"
                >
                  <button>Скачать</button>
                </a>
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;


// //services.tsx

// import { useFetch } from "@/hooks/useFetch";
// import { fetchFiles } from "@/services/files";
// import { fetchCompanyServices } from "@/services/services";
// import { getStrapiMediaUrl } from "@/services/strapiClient";

// import PageTitle from "../../components/PageTitle/PageTitle";
// import ServiceCard from "./components/ServiceCard/ServiceCard";

// import "./Services.scss";

// function Services() {
//   const {
//     data: services = [],
//     loading: servicesLoading,
//     error: servicesError,
//   } = useFetch(fetchCompanyServices);

//   const {
//     data: files = [],
//     loading: filesLoading,
//     error: filesError,
//   } = useFetch(fetchFiles);

//   if (servicesLoading || filesLoading) return <div>Загрузка...</div>;
//   if (servicesError || filesError)
//     return <div>Ошибка: {servicesError || filesError}</div>;
//   if (services.length === 0) return <div>Сервисы не найдены</div>;

//   console.log(files[0]);

//   return (
//     <>
//       <PageTitle
//         title="Наши услуги"
//         subTitle="Комплексные решения по обеспечению безопасности вашей недвижимости"
//       />

//       <section className="services">
//         <div className="container services__container  p-10 m_p-4">
//           {services.map((item) => (
//             <>
//               <ServiceCard
//                 key={item.documentId || item.id}
//                 title={item.title}
//                 text={item.text}
//                 link={item.link}
//                 price={item.price}
//                 imgURL={getStrapiMediaUrl(item.img?.url)}
//               />
//             </>
//           ))}
//         </div>

//         <h2>Документы для скачивания</h2>
//         <div>

//           {files.map(file => (
//             <>
//               <span>{file.title} </span>

//               <a
//                 href={file.file?.url}
//                 download
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="download-button"
//               >
//                 <button>Скачать</button>
//               </a>
//             </>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// }

// export default Services;

// // files.ts

// import type { IStrapiFile } from "./api.types";
// import { type StrapiCollectionResponse,strapiFetch } from "./strapiClient";
// export type { IStrapiFile }

// export async function fetchFiles(): Promise<IStrapiFile[]> {
//     try {
//         const query = new URLSearchParams({ populate: '*' }).toString();
//         const result = await strapiFetch<StrapiCollectionResponse<IStrapiFile>>(`fajlies?${query}`);
//         return result.data || [];
//     } catch (error) {
//         console.error("Ошибка при получении файлов:", error);
//         return [];
//     }
// }


// //  api.types.ts

// export interface IStrapiMedia {
//     id?: number;
//     documentId?: string;
//     url?: string;
//     name?: string;
//     alternativeText?: string;
// }

// export interface IStrapiFile {
//     id: number;
//     documentId?: string;
//     url: string;
//     title: string;
//     file?: IStrapiMedia;
// }

// //  strapiClient.ts

// export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:1337';
// const API_TOKEN = import.meta.env.VITE_API_TOKEN;

// export interface StrapiSingleResponse<T> {
//     data: T;
//     meta: Record<string, unknown>;
// }

// export interface StrapiCollectionResponse<T> {
//     data: T[];
//     meta: Record<string, unknown>;
// }

// // Хелпер для получения полного пути к медиафайлам Strapi
// export const getStrapiMediaUrl = (url?: string) => url ? `${API_URL}${url}` : '';

// export async function strapiFetch<T>(endpoint: string): Promise<T> {
//     if (!API_TOKEN) {
//         console.warn("API_TOKEN не задан. Запрос может завершиться ошибкой авторизации.");
//     }
//     const response = await fetch(`${API_URL}/api/${endpoint}`, {
//         headers: {
//             'Authorization': `Bearer ${API_TOKEN}`,
//             'Content-Type': 'application/json',
//         },
//     });

//     if (!response.ok) {
//         throw new Error(`Strapi error [${response.status}]: ${response.statusText}`);
//     }

//     return response.json();
// }
