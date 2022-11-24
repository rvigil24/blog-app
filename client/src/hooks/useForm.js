import { useState, useEffect } from 'react';

export const useForm = (fields, onSubmit) => {
  const [form, setForm] = useState({ ...fields });

  useEffect(() => {}, [form]);

  const handleInputChange = (event) => {
    const { value, name } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit?.(form);
  };

  return {
    form,
    handleInputChange,
    handleSubmit,
  };
};
