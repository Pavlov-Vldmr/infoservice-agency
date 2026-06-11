import './MainActButton.scss'


// interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
//     //   children: ReactNode; // Содержимое внутри тега кнопки
//     variant?: 'primary' | 'secondary'; // Кастомный проп для стилей
// }


function MainActButton(props: { title: string, variant?: string, bordered?: boolean }) {


    return (
        <>
            <button onClick={() => alert('a')}
                className={`btn btn-${props.variant} ${props.bordered ? 'btn-bordered' : ''}`} >{props.title}
            </button>
        </>
    )
}

export default MainActButton
