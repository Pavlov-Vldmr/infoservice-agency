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

function PhoneCallbackComponent(props: { className?: string }) {
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

    const phoneRegex = /^(?:\+7|7|8)?\s?\(?\d{3}\)?\s?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/;
    const VALIDATION_RULES = {

        phone: {
            required: "Номер обязателен",
            pattern: {
                value: phoneRegex,
                message: "Неверный формат"
            }
        },

    };

    const [phone, setPhone] = useState<string>('');
    const [isValid, setIsValid] = useState<boolean | null>(null);

    const validatePhone = (value: string): boolean => {
        const cleanNumber = value.replace(/\D/g, '');
        if (cleanNumber.length === 11) {
            return cleanNumber.startsWith('7') || cleanNumber.startsWith('8');
        }
        return cleanNumber.length === 10;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        const filteredValue = inputValue.replace(/[^0-9\s\-()+]/g, '');

        setPhone(filteredValue);

        if (filteredValue === '') {
            setIsValid(null);
            return;
        }

        setIsValid(validatePhone(filteredValue));
    };

    return (

        <div className={`${props.className} callback`}>
            <div className="container callback__container p-10 m_p-4 mt-4 m_px-4">
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
                            onChange={handleChange}
                            value={phone}
                            maxLength={20}
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
