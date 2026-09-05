import { type SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import './FeedbackForm.scss';

const FORBIDDEN_SQL_WORDS = [
    'SELECT', 'INSERT', 'UPDATE', 'DELETE', 'DROP',
    'UNION', 'ALTER', 'GRANT', 'REVOKE', 'TRUNCATE'
];

// Проверка на наличие запрещенных SQL-слов (целых слов, без учета регистра)
const containsSqlWord = (value: string): boolean => {
    if (!value) return false;
    const upperValue = value.toUpperCase();
    return FORBIDDEN_SQL_WORDS.some((word) => {
        const regex = new RegExp(`\\b${word}\\b`, 'i');
        return regex.test(upperValue);
    });
};

const NAME_PATTERN = /^[A-Za-zА-Яа-яЁё\s\-]+$/;
const EMAIL_PATTERN = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const PHONE_PATTERN = /^\+?[1-9]\d{1,14}$/;
const SAFE_TEXT_PATTERN = /^[^'"`\\;<>]*$/;

const feedbackSchema = z.object({
    name: z
        .string()
        .min(1, "Имя обязательно для заполнения")
        .min(2, "Минимум 2 символа")
        .max(30, "Максимум 30 символов")
        .regex(NAME_PATTERN, "Имя может содержать только буквы, пробелы и дефис"),

    // Необязательное поле — пустая строка допустима, иначе должен совпасть формат email
    email: z
        .string()
        .optional()
        .refine((value) => !value || EMAIL_PATTERN.test(value), {
            message: "Некорректный адрес электронной почты",
        }),

    phone: z
        .string()
        .min(1, "Номер телефона обязателен")
        .regex(PHONE_PATTERN, "Неверный формат"),

    service: z.string().optional(),

    comment: z
        .string()
        .optional()
        .refine((value) => !value || value.length <= 500, {
            message: "Максимум 500 символов",
        })
        .refine((value) => !value || SAFE_TEXT_PATTERN.test(value), {
            message: "Текст содержит недопустимые символы (кавычки, точки с запятой, знаки < >)",
        })
        .refine((value) => !value || !containsSqlWord(value), {
            message: "Недействительные данные",
        }),
});

type Inputs = z.infer<typeof feedbackSchema>;

function FeedbackForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({
        resolver: zodResolver(feedbackSchema),
        mode: "onBlur"
    });

    const onSubmit: SubmitHandler<Inputs> = (data) => alert(data.name + " " + data.phone)

    return (
        <form className='feedbackform m_py-10' id='callBackForm' onSubmit={handleSubmit(onSubmit)} noValidate>
            <h4 className="text_primary">Свяжитесь со мной</h4>

            {/* Поле: Имя */}
            <label htmlFor="name">Ваше имя *</label>
            <input
                id="name"
                type="text"
                placeholder="Имя"
                {...register("name")}
            />
            {errors.name && (
                <p className="pb-4 pt-1 px-2" style={{ color: "red" }}>
                    {errors.name.message}
                </p>
            )}

            {/* Поле: Email */}
            <label htmlFor="email">Email</label>
            <input
                id="email"
                type="email"
                placeholder="Email"
                {...register("email")}
            />
            {errors.email && (
                <p style={{ color: "red" }}>{errors.email.message}</p>
            )}

            {/* Поле: Телефон */}
            <label htmlFor="phone">Телефон *</label>
            <input
                id="phone"
                type="tel"
                className="text_primary mb-4"
                placeholder="Телефон"
                {...register("phone")}
            />
            {errors.phone && (
                <p className="pb-4 pt-1 px-2" style={{ color: "red" }}>
                    {errors.phone.message}
                </p>
            )}

            {/* Поле: Услуга */}
            {/* <label htmlFor="service">Услуга</label>
            <select id="service" {...register("service")}>
                <option value="" className='text-muted'>-- Не выбрано --</option>
                <option value="service1">Услуга 1</option>
                <option value="service2">Услуга 2</option>
                <option value="service3">Услуга 3</option>
            </select> */}

            {/* Поле: Сообщение */}
            <label htmlFor="comment">Сообщение</label>
            <textarea
                id="comment"
                className="comment"
                placeholder="Дополнительная информация"
                {...register("comment")}
            />
            {errors.comment && (
                <p style={{ color: "red" }}>{errors.comment.message}</p>
            )}

            <button type="submit" onClick={handleSubmit(onSubmit)} className="btn btn_primary">Отправить</button>

        </form>
    );
}

export default FeedbackForm;