import MainActButton from "@/components/Buttons/MainActButton/MainActButton"
import PageTitle from "../../components/PageTitle/PageTitle"
import ObjectCard from "./components/ObjectCard/ObjectCard"

import './Objects.scss'
import ProposalComonent from "@/components/ProposalComponent/ProposalComonent"


function Objects() {


    return (
        <>
            <PageTitle title="Наши объекты" subTitle="Примеры охраняемых объектов и реализованных проектов" />
            <section className="objects">
                <div className="container objects__container p-10 m_p-4">
                    {/* <div className="objects__items"> */}
                    <ObjectCard />
                    <ObjectCard />
                    <ObjectCard />
                    <ObjectCard />
                    <ObjectCard />

                    {/* </div> */}
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
