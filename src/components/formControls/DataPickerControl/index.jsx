import React, {useState} from 'react';
import {extractValue} from "../utilities";
import {createCalendarGenerator, getEmptyCalendar} from './getCalendarInfo';
import {
  ContainerStyled, WrapperStyled, InputStyled, DropDownStyled, SelectStyled, ListStyled, LabelStyled,
  SelectsWrapperStyled, SelectWrapperStyled
} from './DataPickerControlStyled';
import {monthNames, weekDayNames} from "../../../const";
import {formatDateToString} from "../../../utilities";

export const DataPickerControl = ({ formState, updateFunction, propertyPath, validator, yearOptions, limitDateBefore, limitDateAfter }) => {
  const getCalendarInfo = createCalendarGenerator({ weekDayNames, monthNames, limitDateBefore, limitDateAfter });
  const defaultValue = extractValue(formState, propertyPath);
  const [showDataPicker, setShowDataPicker] = useState(false);
  const [year, setYear] = useState(defaultValue.getFullYear());
  const [month, setMonth] = useState(defaultValue.getMonth());
  const [calendar, setCalendar] = useState(getEmptyCalendar());
  const [value, setValue] = useState(formatDateToValue(defaultValue.getDate()));

  function onSelectDay(day) {
    const selectedDate = formatDateToValue(day);

    if (validator && !validator(selectedDate, formState)) {
      return;
    }

    setValue(selectedDate);
    changeShowDataPicker(false);
    updateFunction(propertyPath, new Date(year, month, day), formState);
  }

  function formatDateToValue (day) {
    return formatDateToString (day, month+1, year, '.');
  }

  function updateYear(newYear) {
    const parsedYear = parseInt(newYear, 10);
    setYear(parsedYear);
    setCalendar(getCalendarInfo({ month, year: parsedYear }));
  }

  function updateMonth(newMonth) {
    const parsedMonth = parseInt(newMonth, 10);
    setMonth(parsedMonth);
    setCalendar(getCalendarInfo({ month: parsedMonth, year }));
  }

  function changeShowDataPicker(status) {
    if (status) {
      setCalendar(getCalendarInfo({ month, year }));
    }
    setShowDataPicker(status);
  }

  return (
    <ContainerStyled>
      <WrapperStyled show={showDataPicker} onClick={() => changeShowDataPicker(false)}/>
      <LabelStyled>
        <InputStyled
          readOnly={true}
          onChange={setValue}
          value={value}
          onFocus={() => changeShowDataPicker(true)}
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
          {calendar.weekDayNames.map((name) => <li className="item item--small" key={name}>{name}</li>)}
          {calendar.preDays.map(({day}, index) => <li className={'item item--over'} key={'pre' + index}>{day}</li>)}
          {calendar.monthDays.map(({day, isActive}, index) =>
            <li
              key={'day' + index}
              {
                ...(isActive ?
                  { onClick: () => onSelectDay(day), className: 'item item--active' } :
                  { className: 'item item--disabled' })
              }
            >{day}</li>
          )}
          {calendar.postDays.map(({day}, index) =>
            <li className="item item--over" key={'post' + index}>{day}</li>
          )}
        </ListStyled>
      </DropDownStyled>
    </ContainerStyled>
  );
};
