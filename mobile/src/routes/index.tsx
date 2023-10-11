import { ActivityIndicator } from "react-native";
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";
import { Container } from "./styles";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

function Routes() {
  const { isAuthenticated, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <Container>
        <ActivityIndicator size={60} color="#FFF" />
      </Container>
    );
  }

  return isAuthenticated ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;
