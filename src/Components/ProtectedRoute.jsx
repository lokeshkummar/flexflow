import { useAuth } from "@clerk/clerk-react";
import { Navigate } from "react-router";
import BheemAI from './BheemAI';

export default function ProtectedRoute() {
  const { isSignedIn } = useAuth();

  return isSignedIn ? <BheemAI /> : <Navigate to="/sign-up" replace />;
}