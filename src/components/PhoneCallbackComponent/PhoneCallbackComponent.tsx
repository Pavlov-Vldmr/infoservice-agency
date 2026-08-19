/* eslint-disable @typescript-eslint/no-unused-vars */
import "./PhoneCallbackComponent.scss"
interface PhoneFormData {
    phone: string;
}

interface StrapiRequestData {
    data: PhoneFormData;
}

interface StrapiResponse {
    data: {
        id: number;
        attributes?: PhoneFormData;
        phone?: string;
    };
}

import React, { useState } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
    phone: string;
    policy: boolean;
};

function PhoneCallbackComponent() {
    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');

    const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>({
        mode: "onBlur",
        defaultValues: {
            phone: '',
            policy: false
        }
    });

    const onSubmit: SubmitHandler<Inputs> = async (formData) => {
        setLoading(true);
        setMessage('');

        const requestBody: StrapiRequestData = {
            data: { phone: formData.phone }
        };

        try {
            const response = await fetch('http://localhost:1337/api/phones', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });

            if (!response.ok) {
                throw new Error('Ошибка при отправке данных');
            }

            setMessage(`Успешно отправлено!`);
            reset(); // Очищает всю форму, включая чекбокс
        } catch (error) {
            setMessage(error instanceof Error ? error.message : 'Произошла ошибка');
        } finally {
            setLoading(false);
        }
    };


    const VALIDATION_RULES = {

        phone: {
            required: "Номер обязателен",
            pattern: {
                value: /^7\d{10}$/,
                message: "Неверный формат"
            }
        },

    };

    return (

        <div className="callback p-10 m_p-4 mt-8 m_px-4">
            <div className="container callback__container">
                <h2 className="text_white">Обратный звонок</h2>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <span className="text_white">Проведем индивидуальную консультацию и поможем найти подходящее решение</span>

                    <div className="callback__phone">
                        <input
                            className="text_primary "
                            type="tel"
                            {...register("phone", VALIDATION_RULES.phone)}
                            id="phone"
                            placeholder="+7 (999) 000-00-00"
                            disabled={loading}
                        />
                        {errors.phone && <p className="p" style={{ color: "red" }}>{errors.phone.message}</p>}
                    </div>
                    <div className="callback__btn">
                        <button type="submit" disabled={loading} className="btn btn_primary">
                            {loading ? 'Отправка...' : 'Отправить'}
                        </button>
                        {message && <p>{message}</p>}
                    </div>
                </form>

                <div className="callback__policy mt-8">
                    <input
                        type="checkbox"
                        id="policy"
                        disabled={loading}
                        {...register("policy", {
                            required: "Необходимо согласиться с политикой конфиденциальности" // Валидация на true
                        })}
                    />
                    <label htmlFor="policy" className="text_white-8">
                        Я согласен с <a href="/infoservice-agency/privacy-policy" target="_blank" rel="noopener noreferrer" className="text_white-8">
                            политикой конфиденциальности
                        </a>
                    </label>
                    {errors.policy && <p style={{ color: "red", margin: 0 }}>{errors.policy.message}</p>}
                </div>

            </div>



        </div>

    );
};

export default PhoneCallbackComponent;
