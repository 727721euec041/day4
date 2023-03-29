import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';

function Form() {
    const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value)
  };
  return (
    <div style={{borderStyle:"Solid", borderColor:"blue", margin:"2%"}}>
        <h1>Enter your name and favourite Fruit</h1>
        <TextField id="outlined-basic" label="Name" variant="outlined" />
        <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Fruit</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Apple</MenuItem>
          <MenuItem value={20}>Orange</MenuItem>
          <MenuItem value={30}>Grapes</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <Button variant="contained">Submit</Button>
    </div>
  )
}

export default Form