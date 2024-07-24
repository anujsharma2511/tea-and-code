import UserContextProvider from "./context/UserContextProvider"
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  return (
    <>
      <UserContextProvider>
        <Login></Login>
        <Profile></Profile>
      </UserContextProvider>    
    </>
  )
}

export default App
