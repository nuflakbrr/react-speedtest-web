import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import SiteProvider from "./contexts/siteContexts";
import Details from "./pages/Details";

function App() {
  return (
    <SiteProvider>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:url" component={Details} />
        </Switch>
      </Router>
    </SiteProvider>
  );
}

export default App;
