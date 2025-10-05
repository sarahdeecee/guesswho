import './App.css';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';

export function TopNav() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Guess Who
        </Typography>
        <Button color="inherit">Settings</Button>
      </Toolbar>
    </AppBar>
  );
}
