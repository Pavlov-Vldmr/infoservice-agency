import PageTitle from "../../components/PageTitle/PageTitle"
import ObjectCard from "./components/ObjectCard/ObjectCard"

import './Objects.scss'
import ProposalComonent from "@/components/ProposalComponent/ProposalComonent"
import { useEffect, useState } from "react"
import { fetchCompanyObjects, type ICompanyObject } from "@/services/objects"


function Objects() {
    const [objects, setObjects] = useState<ICompanyObject[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function loadObjects() {
            try {
                setLoading(true);
                const data = await fetchCompanyObjects();
                setObjects(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Ошибка загрузки объектов');
            } finally {
                setLoading(false);
            }
        }
        loadObjects();
    }, []);

    if (loading) return <div>Загрузка объектов...</div>;
    if (error) return <div>Ошибка: {error}</div>;
    if (objects.length === 0) return <div>Объекты не найдены</div>;

    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:1337';

    return (
        <>
            <PageTitle title="Наши объекты" subTitle="Примеры охраняемых объектов и реализованных проектов" />
            <section className="objects">
                <div className="container objects__container p-10 m_p-4">
                    {objects.map((obj) => (
                        <ObjectCard
                            key={obj.documentId || obj.id}
                            title={obj.title}
                            text={obj.text}
                            imgURL={obj.img?.[0].url ? `${API_URL}${obj.img?.[0].url}` : ''}
                            imgTitle={obj.img_text}
                            square={obj.values?.square}
                            guardians={obj.values?.guardians}
                            since={obj.values?.since} />
                    ))}
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
