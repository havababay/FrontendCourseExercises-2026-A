import { AppBar, FormControl, InputLabel, MenuItem, Select, Toolbar, Typography, useColorScheme } from '@mui/material'
import React from 'react'

export default function Header() {
  const { mode, setMode } = useColorScheme();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div">
          Students Management
        </Typography>
        <FormControl variant="standard" sx={{ ml: 2, minWidth: 120 }}>
          <InputLabel id="theme-select-label">Theme</InputLabel>
          <Select
            labelId="theme-select-label"
            id="theme-select"
            name="theme-toggle"
            value={mode}
            label="Theme"
            onChange={(event) =>
              setMode(event.target.value as "system" | "light" | "dark")
            }
          >
            <MenuItem value="system">System</MenuItem>
            <MenuItem value="light">Light</MenuItem>
            <MenuItem value="dark">Dark</MenuItem>
          </Select>
        </FormControl>
      </Toolbar>
    </AppBar>
  )
}
