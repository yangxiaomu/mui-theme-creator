import { Box } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import React from "react";

export default function CheckboxesExample() {
  const [state1, setState1] = React.useState({
    unchecked: false,
    hover: false,
    checked: true,
    indeterminate: false,
  })
  const [state2, setState2] = React.useState({
    uncheckedDisabled: false,
    checkedDisabled: true,
  })

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState1({ ...state1, [event.target.name]: event.target.checked })
  }

  
  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState2({ ...state2, [event.target.name]: event.target.checked })
  }

  const { unchecked: unchecked, hover: hover, checked: checked, indeterminate: indeterminate } = state1
  const { uncheckedDisabled: uncheckedDisabled, checkedDisabled: checkedDisabled} = state2
  const error = [unchecked, hover, checked].filter(v => v).length !== 2

  return (
    <>
    <Box sx={{ display: "flex" }}>
    <FormControl component="fieldset" sx={{ m: 3 }}>
        <FormLabel component="legend">Common</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={unchecked} onChange={handleChange1} name="unchecked" />
            }
            label="Unchecked"
          />
          <FormControlLabel
            control={
              <Checkbox checked={hover} onChange={handleChange1} name="hover"/>
            }
            label="Hover"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={handleChange1}
                name="checked"
              />
            }
            label="Checked"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={indeterminate}
                onChange={handleChange1}
                name="Indeterminate"
                indeterminate
              />
            }
            label="Indeterminate"
          />
        </FormGroup>
        {/* <FormHelperText>Be careful</FormHelperText> */}
      </FormControl>
      <FormControl component="fieldset" sx={{ m: 3 }}>
        <FormLabel component="legend">Disabled</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={uncheckedDisabled} onChange={handleChange2} name="uncheckedDisabled" disabled />
            }
            label="Disable"
          />
          <FormControlLabel
            control={
              <Checkbox checked={checkedDisabled} onChange={handleChange2} name="checkedDisabled" disabled/>
            }
            label="Disable"
          />
        </FormGroup>
        {/* <FormHelperText>Be careful</FormHelperText> */}
      </FormControl>
      </Box>
    {/* <Box sx={{ display: "flex" }}>
      <FormControl component="fieldset" sx={{ m: 3 }}>
        <FormLabel component="legend">Assign responsibility</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={unchecked} onChange={handleChange1} name="gilad" />
            }
            label="Gilad Gray"
          />
          <FormControlLabel
            control={
              <Checkbox checked={hover} onChange={handleChange1} name="jason" />
            }
            label="Jason Killian"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={handleChange1}
                name="antoine"
              />
            }
            label="Antoine Llorca"
          />
        </FormGroup>
        <FormHelperText>Be careful</FormHelperText>
      </FormControl>
      <FormControl
        required
        error={error}
        component="fieldset"
        sx={{ m: 3 }}
      >
        <FormLabel component="legend">Pick two</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={unchecked} onChange={handleChange1} name="gilad" />
            }
            label="Gilad Gray"
          />
          <FormControlLabel
            control={
              <Checkbox checked={hover} onChange={handleChange1} name="jason" />
            }
            label="Jason Killian"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={handleChange1}
                name="antoine"
              />
            }
            label="Antoine Llorca"
          />
        </FormGroup>
        <FormHelperText>You can display an error</FormHelperText>
      </FormControl>
    </Box> */}
    </>
  )
}
