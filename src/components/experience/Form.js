import { useState } from 'react';
import FormInputs from './FormInputs';

const Form = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    activity: '',
    datefrom: '',
    dateto: '',
    address: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <form>
      <FormInputs data={data} handleChange={handleChange} />
      <button type='submit'>Submit</button>
      <button type='reset'>Reset</button>
    </form>
  );
};

export default Form;
