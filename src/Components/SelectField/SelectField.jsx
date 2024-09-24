import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectField({optionSelect, title, onchange, value}) {
//   const [select, setSelect] = React.useState([]);
//   const [selectArray, setSelectArray] = React.useState([]);

//   const handleChange = (event) => {
//     const newValue = event.target.value;
//     setSelect(newValue);

//     // Add the new value to the selectArray
//     setSelectArray((prevArray) => [{...prevArray, newValue}]);
//     };

  return (
    <FormControl size="medium">
      <InputLabel id="demo-select-small-label">{title}</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={value}
        label="Select Country"
        onChange={onchange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {optionSelect?.map((element, index) => {
            return(
                <MenuItem key={index} value={element}>
                {element}
              </MenuItem>
            )
        })}
      </Select>
    </FormControl>
  );
}
