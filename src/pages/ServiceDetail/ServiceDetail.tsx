import { useParams } from 'react-router-dom';
import data from '../../assets/ServicesData/generatedData.json'
import './ServiceDetail.scss'
import PageTitle from '@/components/PageTitle/PageTitle';

function ServiceDetail() {
    const { link } = useParams();

    const filteredData = data.filter(service => service.link === link);


    return (
        <>
            <PageTitle title={filteredData[0].title} subTitle={'Подзаголовок'} />
            <div className='service-detail p-20' >
                <div className="container service-detail__container">
                    <span>{link}</span>
                    <h3>{filteredData[0].title}</h3>
                    <p>{filteredData[0].about}</p>
                </div>

            </div>

        </>
    )
}

export default ServiceDetail
