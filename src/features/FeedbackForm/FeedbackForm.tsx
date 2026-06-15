
import { useForm, type SubmitHandler } from 'react-hook-form'
import './FeedbackForm.scss'
type Inputs = {
    name: string
    email: string
    phone: string
    service: string
    comment: string
}

// name
// email
// phone
// service
// comment


function FeedbackForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({
        mode: "onBlur"
    })
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h4 className="text_primary">Заказать расчёт стоимости</h4>

                <label htmlFor="name">Ваше имя</label>
                <input placeholder="Имя" {...register("name"), {
                    required: true,

                }} />

                <label htmlFor="email">Email</label>
                <input placeholder="Email" {...register("email", { required: true })} />
                {errors?.email && <span className='error_msg'>Поле обязательно к заполнению</span>}

                <label htmlFor="phone">Телефон</label>
                <input placeholder="Телефон" {...register("phone", {
                    required: "error", maxLength: 13

                })} />

                <label htmlFor="service">Услуга</label>

                <select {...register("service")}>
                    <option value="service1">Услуга 1</option>
                    <option value="service2">Услуга 2</option>
                    <option value="service3">Услуга 3</option>
                </select>
                {errors.service && <span>This field is required</span>}


                <label htmlFor="comment">Сообщение</label>
                <textarea className='comment' placeholder="Дополнительная информация" {...register("comment")} />
                {errors.comment && <span>This field is required</span>}

                <input type="submit" />
            </form>
        </>
    )
}

export default FeedbackForm