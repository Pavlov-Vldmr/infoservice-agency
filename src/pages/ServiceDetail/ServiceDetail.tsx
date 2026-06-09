import { useParams } from 'react-router-dom';
import data from '../../assets/ServicesData/generatedData.json'

function ServiceDetail() {
    const { link } = useParams();

    const filteredData = data.filter(service => service.link === link);


    return (
        <>
            <p >
                <span>{link}</span>
                <h3>{filteredData[0].title}</h3>
                <p>{filteredData[0].about}</p>
            </p>

        </>
    )
}

export default ServiceDetail
