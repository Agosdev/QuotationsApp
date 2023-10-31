import {useState} from 'react';

const useContactMe = () => {
  const [values, setValues] = useState({
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues(prevState => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });
  };

  return {values, handleChange};
};

export default useContactMe;