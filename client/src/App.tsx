/* Ink Console design: editorial avatar studio, asymmetric rail/stage/settings layout, coral selection cue. */
import { Route, Router as WouterRouter, Switch } from "wouter";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function App() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");

  return (
    <ThemeProvider defaultTheme="light">
      <WouterRouter base={base}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/settings" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </WouterRouter>
    </ThemeProvider>
  );
}
