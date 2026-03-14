import ReduxProvider from "./ReduxProvider"

export default function AppProvider({children}: any){
  return(
    <ReduxProvider>
      {children}
    </ReduxProvider>
  )
}