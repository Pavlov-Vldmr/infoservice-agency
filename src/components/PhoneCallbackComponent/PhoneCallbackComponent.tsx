/* eslint-disable @typescript-eslint/no-unused-vars */

// Данные формы
interface PhoneFormData {
    phone: string;
}

// Структура запроса, которую ожидает Strapi
interface StrapiRequestData {
    data: PhoneFormData;
}

// Примерная структура ответа от Strapi (для v4 и v5)
interface StrapiResponse {
    data: {
        id: number;
        attributes?: PhoneFormData; // в Strapi v4 свойства внутри attributes
        phone?: string;             // в Strapi v5 свойства лежат на одном уровне с id
    };
}
import React, { type FormEvent, useState } from 'react';
import { useForm } from 'react-hook-form';


function PhoneCallbackComponent() {



    const [phone, setPhone] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        const requestBody: StrapiRequestData = {
            data: { phone }
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
            setPhone('');
        } catch (error) {
            setMessage(error instanceof Error ? error.message : 'Произошла ошибка');
        } finally {
            setLoading(false);
        }
    };

    type Inputs = {
        name: string;
        phone: string;
    };

    const { register, formState: { errors } } = useForm<Inputs>({
        mode: "onBlur"
    });

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
            <label htmlFor="phone">Номер телефона:</label>
            <input
                type="tel"
                {...register("phone", {
                    required: "Номер телефона обязателен",
                    pattern: { value: /^\+?[1-9]\d{1,14}$/, message: "Неверный формат" }
                })}
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+7 (999) 000-00-00"
                required
                disabled={loading}
            />
            {errors.phone && <p className="pb-4 pt-1 px-2" style={{ color: "red" }}>{errors.phone.message}</p>}

            <button type="submit" disabled={loading}>
                {loading ? 'Отправка...' : 'Отправить'}
            </button>
            {message && <p>{message}</p>}
        </form>
    );
};



export default PhoneCallbackComponent;