import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../reducers/reducer";
import FormInputs from "./FormInputs";

const init = {
  name: "",
  email: "",
  activity: "",
  datefrom: "",
  dateto: "",
  address: "",
  description: "",
};

const Form = () => {
  const [data, setData] = useState(init);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(add(data));
    setData(init);
  };

  const handleReset = (e) => {
    setData(init);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <FormInputs data={data} handleChange={handleChange} />
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>
    </div>
  );
};
export default Form;
