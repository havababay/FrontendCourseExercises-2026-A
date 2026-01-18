import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";
import { useAuthUser } from "../auth/hooks/useAuthUser";

interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user, initialized } = useAuthUser();

  if (!initialized) {
    return <div>Loading...</div>;
  }

  return <>{user ? children : <Navigate to="/login" />}</>;
}

