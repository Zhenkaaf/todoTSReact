import { useRef } from "react";

interface NewItemProps {
  /* value: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>, /-useRef */
  //onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handleClick: (text: string) => void;
  placeholder: string;
}

const NewItem = ({
  /* value, onChange, /-useRef*/ handleClick,
  placeholder,
}: NewItemProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const onClick = () => {
    if (inputRef.current) {
      handleClick(inputRef.current.value);
      inputRef.current.value = "";
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        /* value={value} */ /* onChange={event => event.target} */ /* onChange={onChange} */ ref={
          inputRef
        }
      />
      <button /* onClick={handleClick} */ onClick={onClick}>Add todo</button>
    </>
  );
};

export default NewItem;
