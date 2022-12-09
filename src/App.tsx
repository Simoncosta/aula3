import Alunos from "./Alunos"
import UserProvider from "./contexts/user"
import Nome from "./Nome"

function App() {

  return (
    <div>
      <UserProvider>
        <Nome />
        <Alunos />
      </UserProvider>
    </div>
  )
}

export default App
