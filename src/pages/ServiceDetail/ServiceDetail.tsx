import { data, useParams } from 'react-router-dom';

import './ServiceDetail.scss'
import { Icons } from '@/components/Icons';
import PageTitle from '@/components/PageTitle/PageTitle';
import ProposalComonent from '@/components/ProposalComponent/ProposalComonent';
import PhoneComponent from '@/features/model/PhoneComponent';

import { useFetch } from '@/hooks/useFetch';
import { fetchCompanyServices } from '@/services/services';

function ServiceDetail() {

    const { data: services, loading, error } = useFetch(fetchCompanyServices);

    if (loading) return <div>Загрузка сервисов...</div>;
    if (error) return <div>Ошибка: {error}</div>;
    if (services.length === 0) return <div>Сервисы не найдены</div>;

    const { link } = useParams();
    const filteredData = services.filter(service => service.link === link);

    return (
        <>
            <PageTitle title={filteredData[0].title} subTitle={'Подзаголовок'} />
            <section className='service-detail ' >

                <div className="container service-detail__container p-20 m_p-4">
                    <div className='service-detail__img'>

                    </div>
                    <div className='service-detail__info'>
                        <h2 className='mb-8 m_mb-4'>{filteredData[0].title}</h2>
                        <p className='service-detail__info_text mb-4 m_mb-8'>{filteredData[0].text} Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur vel voluptatem recusandae dignissimos eveniet! Quod, officia nobis ex excepturi quidem mollitia dicta ullam aliquam nemo corrupti, cupiditate quam accusamus dolorum? lore</p>
                        <div className="consultation-component p-4">
                            <h3 className='text_white mb-4 '>Нужна консультация?</h3>
                            <p className='text_white mb-4'>Свяжитесь с нами для получения подробной информации</p>
                            {/* <PhoneComponent phone={dataCompanyInfo[0].phone.add} className='text_white' /> */}
                        </div>
                    </div>
                    <div className='service-detail__options'>
                        <div className="list-component p-8 m_p-4">
                            <h2 className='text_primary mb-8'>Some Title</h2>
                            <ul>
                                <li>
                                    <Icons.Shield className='list-component__img' />
                                    <span className='list-component__text'>Some text</span>
                                </li>
                                <li>
                                    <Icons.Shield className='list-component__img' />
                                    <span className='list-component__text'>Some text</span>
                                </li>
                                <li>
                                    <Icons.Shield className='list-component__img' />
                                    <span className='list-component__text'>Some text</span>
                                </li>
                                <li>
                                    <Icons.Shield className='list-component__img' />
                                    <span className='list-component__text'>Some text</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='service-detail__advantages'>
                        <div className="list-component p-8 m_p-4">
                            <h2 className='text_primary mb-8'>Some Title</h2>
                            <ul>
                                <li>
                                    <Icons.Shield className='list-component__img' />
                                    <span className='list-component__text'>Some text</span>
                                </li>
                                <li>
                                    <Icons.Shield className='list-component__img' />
                                    <span className='list-component__text'>Some text</span>
                                </li>
                                <li>
                                    <Icons.Shield className='list-component__img' />
                                    <span className='list-component__text'>Some text</span>
                                </li>
                                <li>
                                    <Icons.Shield className='list-component__img' />
                                    <span className='list-component__text'>Some text</span>
                                </li>
                                <li>
                                    <Icons.Shield className='list-component__img' />
                                    <span className='list-component__text'>Some text</span>
                                </li>
                                <li>
                                    <Icons.Shield className='list-component__img' />
                                    <span className='list-component__text'>Some text</span>
                                </li>
                                <li>
                                    <Icons.Shield className='list-component__img' />
                                    <span className='list-component__text'>Some text</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


            </section>

            <section className='service-detail-proposal pb-8 px-8 m_px-4'>
                <ProposalComonent />
            </section>
        </>
    )
}

export default ServiceDetail
