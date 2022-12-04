import Navigation from "./navigation/NavigationScreen.js";
import { AuthProvider } from "./context/AuthContext.js";

export default function App() {
  return (
    <>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </>
  );
}
