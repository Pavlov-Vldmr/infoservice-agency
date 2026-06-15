
import './PageTitle.scss'


function PageTitle(props: { title: string, subTitle: string }) {


    return (
        <>
            <div className="title">
                <div className="container title__container">
                    <h1>{props.title}</h1>
                    <p>{props.subTitle}</p>
                </div>
            </div>

        </>
    )
}

export default PageTitle