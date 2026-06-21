import { useEffect, useRef, useState } from "react"
import { useLocation } from "react-router-dom";
import './CallbackComponent.scss'
import MainActButton from "../Buttons/MainActButton/MainActButton";
import { useForm, type SubmitHandler } from "react-hook-form";

function CallbackComponent() {
    const setHeight = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    setHeight();

    const [open, setOpen] = useState(false)
    // const menuRef = useRef(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const location = useLocation();

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    useEffect(() => {
        setOpen(false);
    }, [location]); // Срабатывает каждый раз, когда меняется URL

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (open && menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [open]); // Зависит от состояния open для экономии ресурсов

    type Inputs = {
        name: string
        phone: string
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({
        mode: "onBlur"
    })

    const onSubmit: SubmitHandler<Inputs> = (data) => alert(data.name + " " + data.phone)

    return (
        <>
            <div className="callback-component" ref={menuRef}>
                <MainActButton onClick={() => setOpen(!open)} variant="callback" title="Обратная связь" bordered></MainActButton>

                <div className={`callback-component-form ${open ? '_active' : ''} p-4 pt-20`}>


                    <form className="callback-form m-0">
                        <button onClick={() => setOpen(false)} className="btn-close" aria-label="Close">
                            X
                        </button>
                        <label className="text_primary" htmlFor="name">Имя:</label>
                        <input className="text_primary mb-4" type="text"
                            {...register("name", {
                                required: "Имя обязательно для заполнения",
                                minLength: { value: 2, message: "Минимум 2 символа" },
                                maxLength: { value: 30, message: "Максимум 30 символов" },
                                pattern: {
                                    value: /^[A-Za-zА-Яа-яЁё\s\-]+$/,
                                    message: "Имя может содержать только буквы, пробелы и дефис"
                                }
                            })}
                        />
                        {errors.name && <p className={"pb-4 pt-1 px-2"} style={{ color: "red" }}>{errors.name.message}</p>}
                        <label className="text_primary" htmlFor="phone">Телефон:</label>
                        <input className="text_primary mb-4" type="tel"
                            {...register("phone", {
                                required: "Номер телефона обязателен",
                                pattern: { value: /^\+?[1-9]\d{1,14}$/, message: "Неверный формат" }
                            })} />
                        {errors.phone && <p className={"pb-4 pt-1 px-2"} style={{ color: "red" }}>{errors.phone.message}</p>}
                        <button type="submit" onClick={handleSubmit(onSubmit)} className="btn btn_primary">Отправить</button>

                    </form>
                </div>
            </div>


        </>
    )
}

export default CallbackComponent