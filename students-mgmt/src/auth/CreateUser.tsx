import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import {
  Container,
  Box,
  TextField,
  Button,
  Alert,
  CircularProgress,
  Typography,
} from "@mui/material";

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isValidPassword = (password: string): boolean => {
  return password.length >= 6;
};

export default function CreateUser() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const isFormValid =
    isValidEmail(email) &&
    isValidPassword(password) &&
    password === confirmPassword &&
    confirmPassword.length > 0;

  const handleCreateUser = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to create user";
        setError(errorMessage);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          gap: 2,
        }}
      >
        <Typography variant="h4" component="h1" sx={{ fontWeight: "bold" }}>
          Create User
        </Typography>

        <Box
          component="form"
          onSubmit={handleCreateUser}
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {error && <Alert severity="error">{error}</Alert>}

          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            disabled={loading}
            variant="outlined"
            required
          />

          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            disabled={loading}
            variant="outlined"
            required
            helperText="Password must be at least 6 characters"
          />

          <TextField
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            fullWidth
            disabled={loading}
            variant="outlined"
            required
            error={confirmPassword.length > 0 && password !== confirmPassword}
            helperText={
              confirmPassword.length > 0 && password !== confirmPassword
                ? "Passwords do not match"
                : ""
            }
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={loading || !isFormValid}
            sx={{ py: 1.5 }}
          >
            {loading ? <CircularProgress size={24} /> : "Create User"}
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
