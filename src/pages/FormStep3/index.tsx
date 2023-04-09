import { useFetcher, useNavigate, Link } from 'react-router-dom';
import * as C from './styles';
import { Theme } from '../../components/Theme';
import { useForm, FormActions } from '../../contexts/FormContext/FormContext'
import { ChangeEvent, useEffect } from 'react';

const FormStep3 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(()=> {
    if(state.name === ''){
      navigate('/')
    }
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 3
    })
  }, []);

  const handleNextStep = () => {
    if(state.email !== '' && state.github !== ''){
      console.log(state)
    } else  {
      alert('Preenchar todos os dados!')
    }
  }

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value
    });
  }
  const handleGitHubChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value
    });
  }

  return (
    <Theme>
        <C.Container>
          <p>Passo 3/3 {state.name}</p>
          <h1>Legal {state.name}.</h1>
          <p>Preencha com seus dados</p>

          <hr/>

          <label>Qual seu e-mail
          <input
            type="text"
            autoFocus
            value={state.email}
            onChange={handleEmailChange}
            />
          </label>

          <label>Qual seu Github?
          <input
            type="url"
            autoFocus
            value={state.github}
            onChange={handleGitHubChange}
            />
          </label>


        <Link className="backButton" to="/step2">Voltar</Link>
        <button onClick={handleNextStep}>Console.log</button>
        </C.Container>
    </Theme>
  );
}

export default FormStep3;
