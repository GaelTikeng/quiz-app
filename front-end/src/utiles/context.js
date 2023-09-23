import { createContext } from "react"


export const TokenContext = createContext()

export const StudQuizIdContext = createContext({
  quizId: "",
  userId: ""
})

export const UserInfo = createContext()