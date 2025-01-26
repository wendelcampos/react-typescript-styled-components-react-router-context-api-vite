import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";
import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { CyclesContext } from "../../../../contexts/CyclesContext";

export function NewCycleForm() {

    const { activeCycle } = useContext(CyclesContext)
    const { register } = useFormContext()

    return (
        <FormContainer>
            <label htmlFor="task">Vou trabalhar em </label>
            <TaskInput 
                id="task"
                // name="task" 
                placeholder="de um nome para o seu projeto" 
                list="task-suggestions"
                // onChange={(e) => setTask(e.target.value)}
                // value={task}
                {...register('task')}
                disabled={!!activeCycle}
            />

            <datalist id="task-suggestions">
                <option value="Projeto 1"/>
                <option value="Projeto 2"/>
                <option value="Projeto 3"/>
                <option value="Banana"/>
            </datalist>

            <label htmlFor="minutesAmount">durante</label>
            <MinutesAmountInput 
                id="minutesAmount" 
                type="number" 
                placeholder="00"
                step={5}
                min={5}
                max={60}
                {...register('minutesAmount', { valueAsNumber: true })}
                disabled={!!activeCycle}
            />

            <span>minutos.</span>
        </FormContainer>
    )
   
}