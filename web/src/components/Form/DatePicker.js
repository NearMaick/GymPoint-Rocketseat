import React, { useRef, useState, useEffect } from 'react';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';

import { useField } from '@unform/core';
import 'react-datepicker/dist/react-datepicker.css';
import pt from 'date-fns/locale/pt';

export default function DatePicker({ name, ...rest }) {
  const datepickerRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  const [date, setDate] = useState(defaultValue || null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: datepickerRef.current,
      path: 'props.selected',
      clearValue: ref => {
        ref.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <ReactDatePicker
      ref={datepickerRef}
      selected={date}
      locale={pt}
      onChange={setDate}
      {...rest}
    />
  );
}
