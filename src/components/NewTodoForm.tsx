import { useRef } from "react";



interface NewTodoFormProps {
    /* value: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>, /-useRef */
    //onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleClick: (text: string) => void,
}





const NewTodoForm = ({/* value, onChange, /-useRef*/ handleClick}: NewTodoFormProps) => {

const inputRef = useRef<HTMLInputElement | null>(null);
const onClick = () => {
    if (inputRef.current) {
        handleClick(inputRef.current.value);
        inputRef.current.value = '';
    }
    
}

    return (
        <>
        <input type="text" placeholder="new todo" /* value={value} */ /* onChange={event => event.target} */ /* onChange={onChange} */ ref={inputRef}/>
        <button /* onClick={handleClick} */ onClick={onClick}>Add todo</button>
        </>
    )
}

export default NewTodoForm;