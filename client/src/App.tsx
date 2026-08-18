/* Ink Console design: editorial avatar studio, asymmetric rail/stage/settings layout, coral selection cue. */
import { Route, Switch } from "wouter";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/settings" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </ThemeProvider>
  );
}
