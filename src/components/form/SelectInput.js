import {SelectStyled} from "../../styles/formStyles";

export const SelectInput = ({ value, setValue, options }) => {

  const onChange = e => setValue(e.target.value);

  return (
    <SelectStyled onChange={onChange} value={value}>
      {options.map(el=>(<option key={el._id} value={el._id}>{el.name}</option>))}
    </SelectStyled>
  )
};
