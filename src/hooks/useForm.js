import { useState } from 'react';

function useForm(initialValue) {
  const [values, setValues] = useState(initialValue);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(event) {
    setValue(
      event.target.getAttribute('name'),
      event.target.value,
    );
  }
  function cleanForm() {
    setValues(initialValue);
  }
  return {
    values,
    handleChange,
    cleanForm,
  };
}

export default useForm;
