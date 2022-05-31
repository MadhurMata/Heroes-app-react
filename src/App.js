import { BrowserRouter as Router } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

import 'assets/styles/sass/styles.sass';

import AppRoutes from 'routes/AppRoutes';
import NotFound from 'pages/notFound/NotFound';

function App() {
  return (
    <ErrorBoundary FallbackComponent={NotFound}>
      <Router>
        <AppRoutes />
      </Router>
    </ErrorBoundary>
  );
}

export default App;
