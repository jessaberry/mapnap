import FormDateTimePicker from './FormDateTimePicker';
import FormSelect from './FormSelect';
import TextField from '@mui/material/TextField';

const FormInputs = ({ data, handleChange }) => {
  return (
    <><div>
      <TextField
        name="name"
        label="Name"
        placeholder="Firstname Lastname"
        value={data.name}
        onChange={handleChange}
      /></div><div>
      <TextField
        name="email"
        label="Email"
        placeholder="yourhandle@email.com"
        value={data.email}
        onChange={handleChange}
      /></div><div>
      <FormSelect
        name="activity"
        value={data.activity}
        onChange={handleChange}
        label="Activity"
      /></div><div>
      <FormDateTimePicker
        label="dateFrom"
        value={data.dateFrom}
        onChange={handleChange}
      /></div><div>
      <FormDateTimePicker
        label="dateTo"
        value={data.dateTo}
        onChange={handleChange}
      /></div><div>
      <TextField
        name="address"
        label="Address"
        placeholder="1234 Burger St."
        value={data.address}
        onChange={handleChange}
      /></div><div>
      <TextField
        name="description"
        label="Description"
        placeholder="enter description"
        multiline
        rows={2}
        maxRows={10}
        value={data.description}
        onChange={handleChange}
      />
      </div>
    </>
  );
};

export default FormInputs;
