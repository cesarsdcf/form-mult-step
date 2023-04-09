import { Router } from './router';
import { FormProvider } from './contexts/FormContext/FormContext'
import './index.css';

const App = () => {
  return (
    <FormProvider>
      <Router />
    </FormProvider>
  );
}

export default App;