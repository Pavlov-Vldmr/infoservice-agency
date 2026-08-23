import { type SubmitHandler, useForm } from 'react-hook-form';

import './FeedbackForm.scss';

type Inputs = {
    name: string;
    email: string;
    phone: string;
    service: string;
    comment: string;
};

const FORBIDDEN_SQL_WORDS = [
    'SELECT', 'INSERT', 'UPDATE', 'DELETE', 'DROP',
    'UNION', 'ALTER', 'GRANT', 'REVOKE', 'TRUNCATE'
];

const VALIDATION_RULES = {
    name: {
        required: "Имя обязательно для заполнения",
        minLength: { value: 2, message: "Минимум 2 символа" },
        maxLength: { value: 30, message: "Максимум 30 символов" },
        pattern: {
            value: /^[A-Za-zА-Яа-яЁё\s\-]+$/,
            message: "Имя может содержать только буквы, пробелы и дефис"
        }
    },
    email: {
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Некорректный адрес электронной почты"
        }
    },
    phone: {
        required: "Номер телефона обязателен",
        pattern: {
            value: /^\+?[1-9]\d{1,14}$/,
            message: "Неверный формат"
        }
    },
    comment: {
        maxLength: { value: 500, message: "Максимум 500 символов" },
        pattern: {
            value: /^[^'"`\\;<>]*$/,
            message: "Текст содержит недопустимые символы (кавычки, точки с запятой, знаки < >)"
        },
        // Кастомная валидация на SQL-слова
        validate: (value: string) => {
            if (!value) return true; // Если поле пустое, пропускаем (оно необязательное)

            const upperValue = value.toUpperCase();

            // Проверяем каждое запрещенное слово
            const hasSqlWord = FORBIDDEN_SQL_WORDS.some(word => {
                // Регулярное выражение ищет слово целиком, чтобы не блокировать, например, "SELECTIVE" или "UPDATED"
                const regex = new RegExp(`\\b${word}\\b`, 'i');
                return regex.test(upperValue);
            });

            return hasSqlWord
                ? "Недействительные данные"
                : true;
        }
    }
};

function FeedbackForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({
        mode: "onBlur"
    });

    // const onSubmit: SubmitHandler<Inputs> = (data) => alert(data);
    const onSubmit: SubmitHandler<Inputs> = (data) => alert(data.name + " " + data.phone)


    return (
        <form className='feedbackform' id='callBackForm' onSubmit={handleSubmit(onSubmit)} noValidate>
            <h4 className="text_primary">Свяжитесь со мной</h4>

            {/* Поле: Имя */}
            <label htmlFor="name">Ваше имя *</label>
            <input
                id="name"
                type="text"
                placeholder="Имя"
                {...register("name", VALIDATION_RULES.name)}
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
                {...register("email", VALIDATION_RULES.email)}
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
                {...register("phone", VALIDATION_RULES.phone)}
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
                {...register("comment", VALIDATION_RULES.comment)}
            />
            {errors.comment && (
                <p style={{ color: "red" }}>{errors.comment.message}</p>
            )}

            {/* <input type="submit" value="Отправить" />
             */}
            <button type="submit" onClick={handleSubmit(onSubmit)} className="btn btn_primary">Отправить</button>

        </form>
    );
}

export default FeedbackForm;
