import { useContext } from "react";
import { UserContext } from "../contexts/user";

function Alunos() {

    const { user, setUser }: any = useContext(UserContext)

    return(
        <div>
            <h1>Alunos {user}</h1>
            <br />
            <button onClick={() => setUser("VOLTAR PRA SIMON")}>Trocar Nome Alunos</button>

        </div>
    );
}

export default Alunos;