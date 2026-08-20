import { TailSpin } from "react-loader-spinner";

import objectsExtra from "@/assets/ServicesData/objectsExtra.json";
import ProposalComonent from "@/components/ProposalComponent/ProposalComonent"
import { useFetch } from "@/hooks/useFetch"
import { fetchCompanyObjects } from "@/services/objects"
import { getStrapiMediaUrl } from "@/services/strapiClient";

import PageTitle from "../../components/PageTitle/PageTitle"
import ObjectCard from "./components/ObjectCard/ObjectCard"

import './Objects.scss'

function Objects() {

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

    }
    const objectsEx: IObjectsItem[] = objectsExtra

    const { data: objects, loading, error } = useFetch(fetchCompanyObjects);

    // if (loading) return <div>Загрузка объектов...</div>;
    if (error) return <div>Ошибка: {error}</div>;

    if (loading) {
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


    return (


        <>
            <PageTitle title="Наши объекты" subTitle="Примеры охраняемых объектов и реализованных проектов" />
            <section className="objects">
                <div className="container objects__container p-10 m_p-4">
                    {objects && objects.length > 0 ? (
                        objects.map((obj) => (
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
                        objectsEx.map((obj) => (
                            <ObjectCard
                                key={obj.id}
                                title={obj.title}
                                text={obj.text}
                                imgTitle={obj.img_text}
                                square={obj.values?.square}
                                guardians={obj.values?.guardians}
                                since={obj.values?.since}
                            />
                        ))
                    )}
                </div>
            </section>
            <section className="objects-proposal pb-8 ">
                <div className="container objects-proposal__container p-10 m_p-4">
                    <ProposalComonent />
                </div>
            </section>

        </>
    )
}

export default Objects
