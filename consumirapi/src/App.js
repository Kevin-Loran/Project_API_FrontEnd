import { Router } from "react-router-dom/cjs/react-router-dom.min";
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";

import store, { persistor } from './store';
import history from "./services/history";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import Routes from "./Routes";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history} >
          <GlobalStyles />
          <ToastContainer autoClose={3000} className="toast-container"/>
          <Header />
          <Routes />
        </Router >
      </PersistGate>
    </Provider>
  );
}

export default App;