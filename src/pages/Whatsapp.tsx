import React from "react";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const countries = [{ id: 51, label: 'Peru', value: '51' }, { id: 57, label: 'Colombia', value: '57' }]

const Whatsapp = () => {
  const [tel, setTel] = React.useState("");
  const [country, setCountry] = React.useState('51')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTel(event.target?.value);
  };

  const handleCountry = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target?.value);
  };

  return (
    <Box display="flex" justifyContent="center">
      <div>
        <div className="form">
          <FormControl className="formCountry">
            <Select
              value={country}
              label="Country"
              onChange={handleCountry}
            >
              {countries.map(opt => (
                <MenuItem value={opt.value} key={opt.id}>{opt.value}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className="formPhone">
            <TextField
              label="Phone"
              type="tel"
              onChange={handleChange}
              value={tel}
              inputProps={{ maxLength: 9, minLength: 9 }}
            /></FormControl>
        </div>
        <Box mt={2}>
          <Button
            component="a"
            href={`https://wa.me/${country}${tel}`}
            variant="outlined"
            disabled={tel.length !== 9}
            target="_blank"
          >
            Open whatsapp
          </Button>
        </Box>
      </div>
    </Box>
  );
};

export default Whatsapp;
