import { useState } from "react";
import { useDispatch } from "react-redux";
import { addExperience } from "../reducers/reducer";
import FormInputs from "./FormInputs";
import { useNavigate } from "react-router-dom";

const init = {
  name: "",
  image: "",
  activity: "",
  datefrom: "",
  dateto: "",
  address: "",
  description: "",
};

const Form = ({ tripUUID }) => {
  const [data, setData] = useState({ ...init, tripID: tripUUID });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addExperience(data));
    setData(init);
    navigate("/trip");
  };

  const handleReset = () => {
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
