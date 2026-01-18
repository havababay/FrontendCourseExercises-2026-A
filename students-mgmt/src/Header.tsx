import {
  AppBar,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Toolbar,
  Typography,
  useColorScheme,
} from "@mui/material";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuthUser } from "./auth/hooks/useAuthUser";
import { auth } from "../firebase/config";

export default function Header() {
  const { mode, setMode } = useColorScheme();
  const { user } = useAuthUser();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((err) => {
        console.error("Sign out error:", err);
      });
  };

  const handleSignIn = () => {
    navigate("/login");
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" component="div">
          Students Management
        </Typography>

        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <FormControl variant="standard" sx={{ minWidth: 120 }}>
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

          {user ? (
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <Typography variant="body2">{user.email}</Typography>
              <Button
                color="inherit"
                onClick={handleSignOut}
                variant="outlined"
                size="small"
              >
                Sign Out
              </Button>
            </div>
          ) : (
            <Button
              color="inherit"
              onClick={handleSignIn}
              variant="outlined"
              size="small"
            >
              Sign In
            </Button>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
}
