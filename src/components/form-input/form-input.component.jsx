import React from 'react';

import './form-input.styles.scss';

export const FormInput = ({
  value,
  label,
  handleChange,
  ...otherInputProps
}) => (
  <div className='group'>
    <input
      className='form-input'
      {...otherInputProps}
      onChange={handleChange}
    />
    {label ? (
      <label className={`${value?.length ? 'shrink' : ''} form-input-label`}>
        {label}
      </label>
    ) : null}
  </div>
);
