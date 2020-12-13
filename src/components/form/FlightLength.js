import {SelectStyled} from "../../styles/formStyles";


const options = [ 30, 60, 90, 120, 150, 180 ];

export const SelectInput = ({ value, setValue }) => {

  const onChange = e => setValue(e.target.value);

  return (
    <SelectStyled onChange={onChange} value={value}>
      {options.map(el=>(<option value={el}>{el} мин</option>))}
    </SelectStyled>
  )
};
