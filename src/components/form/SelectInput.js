import {SelectStyled} from "../../styles/formStyles";

export const SelectInput = ({ value, setValue, options, valueLabel }) => {

  const onChange = e => setValue(e.target.value);

  return (
    <SelectStyled onChange={onChange} value={value}>
      {options.map(el => (
        <option key={ el[valueLabel[0]] } value={ el[valueLabel[0]] }>{ el[valueLabel[1]] }</option>
      ))}
    </SelectStyled>
  )
};
