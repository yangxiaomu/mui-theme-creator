import SearchIcon from '@mui/icons-material/Search';
import { Box, FormControl, FormHelperText, IconButton, InputAdornment, OutlinedInput, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import React from "react";

export default function TextFieldExample() {

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  
  return (
    <Box component="form" sx={{
      "& > div > *": {
        m: 1,
        width: "25ch",
      },
    }} noValidate autoComplete="off">
      {/* <div>
        <TextField
          required
          id="standard-required"
          label="Required"
          defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          disabled
          id="standard-disabled"
          label="Disabled"
          defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
        <TextField
          id="standard-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          variant="standard"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="standard-number"
          label="Number"
          type="number"
          variant="standard"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField id="standard-search" label="Search field" type="search" variant="standard" />
        <TextField
          id="standard-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="standard"
        />
        <TextField
          id="standard-helperText-error"
          label="Helper text error"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="standard"
        />
      </div>
      <div>
        <TextField
          required
          id="filled-required"
          label="Required"
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          disabled
          id="filled-disabled"
          label="Disabled"
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
        <TextField
          id="filled-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
        />
        <TextField
          id="filled-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="filled"
        />
        <TextField
          id="filled-helperText-error"
          error
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="filled"
        />
      </div> */}
      <div>
      <Typography variant="h6" id="contained-buttons">
        Standard
      </Typography>
        <TextField
          id="outlined-search"
          placeholder="テキスト"
          helperText="4/64"
        />
        <TextField
          id="outlined-search"
          defaultValue="テキスト"
          helperText="4/64"
        />
        <TextField
          id="outlined-helperText-error"
          error
          defaultValue="テキストテキスト"
          helperText="81/64"
        />
        <TextField
          disabled
          id="outlined-disabled"
          defaultValue="テキスト"
          helperText="4/64"
        />
      </div>
      <div>
      <Typography variant="h6" id="contained-buttons">
        WithIcon
      </Typography>
      <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-password"
            type={"text"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
            // label="Password"
            defaultValue="テキスト"
          />
        </FormControl>
      </div>
    </Box>
  )
}
