import {extractValue} from "../utilities";
import {useState} from 'react';
import React from 'react';
import {
  LabelStyled, BlockStyled, SelectedListStyled, SelectedItemStyled, SelectedItemTextStyled, InputSearchStyled,
  ListStyled, WrapperStyled, DropDownStyled, InputSearchContainerStyled
} from './AutoCompleteControlStyled';
import {RemoveIcon} from "../../icons/RemoveIcon";

export const AutoCompleteControl = ({items, formState, propertyPath, updateFunction, valueKey, valueTitle}) => {
  const selected = extractValue(formState, propertyPath);
  const [filter, setFilter] = useState('');
  const [show, setShow] = useState(false);

  function onSelectedClick(el) {
    updateFunction(propertyPath, [...selected.filter((item) => item[valueKey] !== el[valueKey])], formState);
  }

  function onItemClick(el) {
    updateFunction(propertyPath, [...selected, el], formState);
  }

  function filterItems(el) {
    return !selected.find((sel) => sel[valueKey] === el[valueKey]) && new RegExp(filter, 'i').test(el[valueTitle]);
  }

  return (
    <>
      <WrapperStyled show={show} onClick={() => setShow(false)}/>
      <LabelStyled onMouseUp={() => setShow(true)}>
        <BlockStyled>
          <SelectedListStyled>
            {selected.map((el) => (
              <SelectedItemStyled key={el[valueKey]} onClick={() => onSelectedClick(el)}>
                <SelectedItemTextStyled>{el[valueTitle]} <RemoveIcon size={20} /></SelectedItemTextStyled>
              </SelectedItemStyled>
            ))}
            <InputSearchContainerStyled>
              <InputSearchStyled
                placeholder={'Начните вводить название'}
                type={'text'}
                onChange={(e) => setFilter(e.target.value)}
              />
            </InputSearchContainerStyled>
          </SelectedListStyled>
        </BlockStyled>
        <DropDownStyled show={show}>
          <ListStyled>
            {items
              .filter((el) => filterItems(el))
              .map((el) => <li onClick={() => onItemClick(el)} key={el[valueKey]}>{el[valueTitle]}</li>)}
          </ListStyled>
        </DropDownStyled>
      </LabelStyled>
    </>
  );
};
