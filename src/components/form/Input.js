import {InputStyled} from "../../styles/formStyles";
import {CheckIcon} from "../icons";

export const TextInput = ({value, setValue}) => {

  const onChange = e =>
    setValue(e.target.value);

  return (
    <InputStyled type='text' onChange={onChange} value={value} />
  )
};


export const DateInput = ({value, setValue}) => {

  const onChange = e =>
    setValue(e.target.value);

  return (
    <InputStyled type='text' onChange={onChange} value={value} />
  )
};


export const InputCheckbox = ({ value, setValue, isInValid, invalidComment }) => {
  const toggle = event => setValue(!value);
  return (
    <div
      onClick={toggle}
      style={{ width: '25px', height: '25px', border: '2px solid #41b3f4', borderRadius: '5px' }}
    >
      { value ?
        <CheckIcon style={{ color: '#41b3f4' }} />
        : null
      }
    </div>
  );
};
