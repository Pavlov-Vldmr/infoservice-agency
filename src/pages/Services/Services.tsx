import { Link } from "react-router-dom"
import data from '../../assets/ServicesData/generatedData.json'

function Services() {
    return (
        <>
            <span>Услуги
            </span>

            {data.map(item => (
                <>
                    <div style={
                        {
                            border: '1px solid white',
                            width: '500px',
                            margin: '20px'
                        }
                    }>
                        <Link key={item._id} to={`/Services/${item.link}`}>
                            {item.title}
                        </Link>
                        <p>{item.about}</p>
                    </div>

                </>
            ))}

        </>
    )
}

export default Services
