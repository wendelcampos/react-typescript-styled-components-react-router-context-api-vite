import { createContext, useState, useReducer, ReactNode, useEffect } from "react";
import { cyclesReducer, Cycle } from "../reducers/cycles/reducer";
import { markCurrentCycleAsFinishedAction, addNewCycleAction, interruptCurrentCycleAction } from "../reducers/cycles/actions";
import { differenceInSeconds } from "date-fns";

interface CreateCycleData { 
    task: string
    minutesAmount: number
}

interface CyclesContextType {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  markCurrentCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
  CreateNewCycle: (data: CreateCycleData) => void
  InterruptCurrentCycle: () => void
}

// eslint-disable-next-line react-refresh/only-export-components
export const CyclesContext = createContext({} as CyclesContextType)

interface CyclesContextProviderProps {
    children: ReactNode
}

export function CyclesContextProvider({ children } : CyclesContextProviderProps) {
    // const [cycles, setCycles] = useState<Cycle[]>([])

    const [cyclesState, dispatch] = useReducer(cyclesReducer, {
        cycles: [],
        activeCycleId: null
    }, (initialState) => {
      const storedStateAsJSON = localStorage.getItem('@timer: cycles-state-1.0.0')

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return initialState
    })

  
    // const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
    const { cycles, activeCycleId } = cyclesState
    const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

    const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
      if(activeCycle) {
        return differenceInSeconds(new Date(), new Date(activeCycle.startDate))
      } 

      return 0
    })

    useEffect(() => {
        const stateJSON = JSON.stringify(cyclesState)

        localStorage.setItem('@timer: cycles-state-1.0.0', stateJSON)
    }, [cyclesState])
    

    
    function setSecondsPassed(seconds: number) {
        setAmountSecondsPassed(seconds)
    }

    function markCurrentCycleAsFinished() {
        dispatch(markCurrentCycleAsFinishedAction())
    }

    function CreateNewCycle(data: CreateCycleData) {

        const id = String(new Date().getTime())
    
        const newCycle: Cycle = {
          id,
          task: data.task,
          minutesAmount: data.minutesAmount,
          startDate: new Date()
        }

        dispatch(addNewCycleAction(newCycle))

        setAmountSecondsPassed(0)
      }
    
      function InterruptCurrentCycle() {
        
        dispatch(interruptCurrentCycleAction())
      }

    return (
         <CyclesContext.Provider 
            value={{ 
                cycles,
                activeCycle, 
                activeCycleId, 
                markCurrentCycleAsFinished, 
                amountSecondsPassed, 
                setSecondsPassed,
                CreateNewCycle,
                InterruptCurrentCycle
            }}>
              { children }
            </CyclesContext.Provider>
    )
}