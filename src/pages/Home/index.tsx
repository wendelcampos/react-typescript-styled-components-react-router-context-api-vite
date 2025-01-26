import { HandPalm, Play } from "phosphor-react";
import * as zod  from 'zod'

import { 
  HomeContainer, 
  StartCountDownButton, 
  StopCountDownButton, 
} from "./styles";
import { NewCycleForm } from "./components/NewCycleForm";
import { Countdown } from "./components/Countdown";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { useContext } from "react";
import { CyclesContext } from "../../contexts/CyclesContext";

//controlled / uncontrolled

/**
 * 
 * function register(name: string) {
 *  return {
 *   onChange: () => void,
 *   omBlur: () => void,
 *   onFocus: () => void,
 *  }
 * 
 * }
 * 
 */

  /**
   * Prop Drilling -> quando a gente tem MUITAS propriedades APENAS para comunicação entre componentes
   * Context API -> Permite compartilharmos informações entre VARIOS componentes ao mesmo tempo
   * */

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod.number()
    .min(5, 'o ciclo precisa ser de no mínimo 5 minutos')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos')
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {

  const { CreateNewCycle, InterruptCurrentCycle, activeCycle } = useContext(CyclesContext)
    
  const newCycleForm = useForm<NewCycleFormData>({
      resolver: zodResolver(newCycleFormValidationSchema),
      defaultValues: {
          task: '',
          minutesAmount: 0
      }
  })

  const { handleSubmit, watch, reset } = newCycleForm

  function handleCreateNewCycle(data: NewCycleFormData) {
    CreateNewCycle(data)

    reset()
  }

  const task = watch('task')
  const isSubmitButtonDisabled = !task
  
  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

       {activeCycle ? ( 

          <StopCountDownButton onClick={InterruptCurrentCycle} type="button">
            <HandPalm size={24}></HandPalm>
            Interromper
          </StopCountDownButton>

        ) : (

          <StartCountDownButton 
            type="submit" 
            disabled={isSubmitButtonDisabled}
          >
            <Play size={24}></Play>
            Começar
          </StartCountDownButton>

        ) }
      </form>
    </HomeContainer>
  );
}