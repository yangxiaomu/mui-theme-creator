import React from "react"
import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormControl from "@mui/material/FormControl"
import FormLabel from "@mui/material/FormLabel"

export default function RadioExample() {
  const [value1, setValue1] = React.useState("Checked")
  const [value2, setValue2] = React.useState("disabled checked")
  const [value3, setValue3] = React.useState("Checked")

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue1((event.target as HTMLInputElement).value)
  }

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue2((event.target as HTMLInputElement).value)
  }

  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue3((event.target as HTMLInputElement).value)
  }

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Common</FormLabel>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={value1}
        onChange={handleChange1}
        row
      >
        {/* <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="(Disabled option)"
        /> */}
        <FormControlLabel value="Unchecked" control={<Radio />} label="Unchecked" />
        <FormControlLabel value="Hover" control={<Radio />} label="Hover" />
        <FormControlLabel value="Checked" control={<Radio />} label="Checked" />
        </RadioGroup>
      <FormLabel component="legend">Disabled</FormLabel>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={value2}
        onChange={handleChange2}
        row
      >
        <FormControlLabel
          value="disabled checked"
          disabled
          control={<Radio />}
          label="Disabled"
        />
        <FormControlLabel
          value="disabled unchecked"
          disabled
          control={<Radio />}
          label="Disabled"
        />
      </RadioGroup>
      <FormLabel component="legend">Vertical</FormLabel>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={value3}
        onChange={handleChange3}
      >
        <FormControlLabel value="Unchecked" control={<Radio />} label="Unchecked" />
        <FormControlLabel value="Hover" control={<Radio />} label="Hover" />
        <FormControlLabel value="Checked" control={<Radio />} label="Checked" />
        <FormControlLabel
          value="disabled unchecked"
          disabled
          control={<Radio />}
          label="Disabled"
        />
      </RadioGroup>
      <FormLabel component="legend">Size(サイズ調整は実現しにくい？)</FormLabel>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={value3}
        onChange={handleChange3}
      >
        <FormControlLabel  control={<Radio size="medium"/>} label="Base" checked/>
      </RadioGroup>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={value3}
        onChange={handleChange3}
      >
        <FormControlLabel  control={<Radio size="small"/>} label="Small" checked/>  
      </RadioGroup>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={value3}
        onChange={handleChange3}
      >
        <FormControlLabel
          control={<Radio sx={{
            '& .MuiSvgIcon-root': {
              fontSize: 16,
            },
          }}/>}
          label="Micro（カスタマイズ必要）"
          checked
        />
      </RadioGroup>
    </FormControl>
  )
}
