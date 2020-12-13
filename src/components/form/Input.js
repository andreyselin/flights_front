import {InputStyled} from "../../styles/formStyles";

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
