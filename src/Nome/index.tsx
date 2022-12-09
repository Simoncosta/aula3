import { useContext } from "react";
import { UserContext } from "../contexts/user";

function Nome() {

    const { user, setUser }: any = useContext(UserContext);

    return (
        <div>
            <span style={{ color: "red" }}>Bem vindo: {user}</span>
            <br />
            <button onClick={() => setUser("IT ROCKET")}>Troca Nome</button>
        </div>
    );
}

export default Nome;