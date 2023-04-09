import { useFetcher, useNavigate } from 'react-router-dom';
import * as C from './styles';
import { Theme } from '../../components/Theme';
import { useForm, FormActions } from '../../contexts/FormContext/FormContext'
import { ChangeEvent, useEffect } from 'react';
import { SelectOption } from '../../components/SelectOption';
import { Link } from 'react-router-dom';


const FormStep3 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(()=> {
    if(state.name === ''){
      navigate('/');
    } 
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 2
    })
  }, []);

  const handleNextStep = () => {
    if(state.name !== ''){
      navigate('/step3')
    } else {
      alert('Preencha os dados!')
    }
  }

  const setLevel = (level : number) => {
    dispatch({
      type: FormActions.setLevel,
      payload: level
    })
  }


  return (
    <Theme>
        <C.Container>
          <p>Passo 2/3</p>
          <h1>Nivel</h1>
          <p>Qual é seu nivel?</p>

          <hr/>

          <SelectOption 
            title="Sou iniciante"
            description="Comecei a programar agora"
            icon=":)"
            selected={state.level === 0}
            onClick={() => setLevel(0)}
          />
          <SelectOption 
            title="Sou intermediário"
            description="Comecei a programar tem 2 anos"
            icon=";)"
            selected={state.level === 1}
            onClick={()=> setLevel(1)}
          />

          <Link className="backButton" to="/">Voltar</Link>
          <button onClick={handleNextStep}>Próximo</button>
        </C.Container>
    </Theme>
  );
}

export default FormStep3;