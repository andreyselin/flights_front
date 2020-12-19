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


export const InputCheckbox = ({ value, setValue, label, isInValid, invalidComment }) => {
  const toggle = event => setValue(!value);
  return (
    <div
      onClick={toggle}
      style={{display: 'flex', alignItems:'center'}}
    >
      <div
        style={{ width: '25px', height: '25px', marginRight: '7px', border: '2px solid #151515', borderRadius: '5px' }}
      >
        { value ?
          <CheckIcon style={{ color: '#151515' }} />
          : null
        }
      </div>
      { label }
    </div>
  );
};
