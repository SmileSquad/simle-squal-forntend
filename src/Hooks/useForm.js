import { useState } from 'react';

const useForm = (callbackSubmit, action, token = null, id = null) => {
  const [item, setItem] = useState({});
  const handleInputChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (token && id) {
      item['token'] = token;
      item['userId'] = id;
    }
    e.target.reset();
    callbackSubmit(action(item));
    const items = {};
    setItem({ items });
  };
  return [item, handleInputChange, handleSubmit];
};

export default useForm;
