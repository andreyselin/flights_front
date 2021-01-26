import React, {useState} from 'react';
import {extractValue} from "../utilities";
import {getCalendarInfo} from './getCalendarInfo';
import {
  ContainerStyled,     WrapperStyled,        InputStyled,         DropDownStyled,
  SelectStyled,        ListStyled,           ItemStyled,          OverItemStyled,
  LabelStyled,         SelectsWrapperStyled, SelectWrapperStyled,
} from './DataPickerControlStyled';
import {monthNames, weekDayNames} from "../../../const";
import {formatDateToString} from "../../../utilities";


export const DataPickerControl = ({ formState, updateFunction, propertyPath, yearOptions }) => {
  const defaultValue = extractValue(formState, propertyPath);
  const [showDataPicker, setShowDataPicker] = useState(false);
  const [year, setYear] = useState(defaultValue.getFullYear());
  const [month, setMonth] = useState(defaultValue.getMonth());
  const [calendar, setCalendar] = useState(getCalendarInfo({ month, year, weekDayNames, monthNames }));
  const [value, setValue] = useState(formatDateToValue(calendar.today.date));

  function onSelectDay(day) {
    setValue(formatDateToValue(day));
    setShowDataPicker(false);
    updateFunction(propertyPath, new Date(year, month, day), formState);
  }

  function formatDateToValue (day) {
    return formatDateToString (day, month+1, year, '.');
  }


  function updateYear(newYear) {
    const parsedYear = parseInt(newYear, 10);
    setYear(parsedYear);
    setCalendar(getCalendarInfo({month, year: parsedYear, weekDayNames, monthNames}));
  }

  function updateMonth(newMonth) {
    const parsedMonth = parseInt(newMonth, 10);
    setMonth(parsedMonth);
    setCalendar(getCalendarInfo({month: parsedMonth, year, weekDayNames, monthNames}));
  }

  return (
    <ContainerStyled>
      <WrapperStyled show={showDataPicker} onClick={() => setShowDataPicker(false)}/>
      <LabelStyled>
        <InputStyled
          readOnly={true}
          onChange={setValue}
          value={value}
          onFocus={() => setShowDataPicker(true)}
        />
      </LabelStyled>
      <DropDownStyled show={showDataPicker}>
        <SelectsWrapperStyled>
          <SelectWrapperStyled>
            <SelectStyled value={year} onChange={(e) => updateYear(e.target.value)}>
              {calendar.yearOptions.map((year) => <option key={'year' + year} value={year}>{year}</option>)}
            </SelectStyled>
          </SelectWrapperStyled>
          <SelectWrapperStyled>
            <SelectStyled value={month} onChange={(e) => updateMonth(e.target.value)}>
              {calendar.monthNames.map((month, index) => (
                <option key={'month' + month} value={index}>{month}</option>
              ))}
            </SelectStyled>
          </SelectWrapperStyled>
        </SelectsWrapperStyled>
        <ListStyled>
          {calendar.weekDayNames.map((name) => <ItemStyled variant={'small'} key={name}>{name}</ItemStyled>)}
          {calendar.preDays.map((pre, index) => <OverItemStyled key={'pre' + index}>{pre}</OverItemStyled>)}
          {calendar.monthDays.map((day, index) => (
            <ItemStyled key={'day' + index} onClick={() => onSelectDay(day)}>{day}</ItemStyled>
          ))}
          {calendar.postDays.map((post, index) => <OverItemStyled key={'post' + index}>{post}</OverItemStyled>)}
        </ListStyled>
      </DropDownStyled>
    </ContainerStyled>
  );
};
