import React from "react";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

const Whatsapp = () => {
  const [tel, setTel] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTel(event.target?.value);
  };

  return (
    <Box display="flex" justifyContent="center">
      <div>
        <div>
          <TextField
            label="Phone"
            type="tel"
            onChange={handleChange}
            value={tel}
            inputProps={{ maxLength: 9, minLength: 9 }}
          />
        </div>
        <Box mt={2}>
          <Button
            component="a"
            href={`https://wa.me/51${tel}`}
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
