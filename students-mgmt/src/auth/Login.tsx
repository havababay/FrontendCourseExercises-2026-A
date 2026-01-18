import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
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

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        const errorMessage =
          err instanceof Error ? err.message : "Login failed";
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
          Login
        </Typography>

        <Box
          component="form"
          noValidate
          onSubmit={handleLogin}
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
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={loading || !email || !password}
            sx={{ py: 1.5 }}
          >
            {loading ? <CircularProgress size={24} /> : "Login"}
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
