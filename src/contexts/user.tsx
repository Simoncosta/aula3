import { createContext, useState } from "react";

export const UserContext = createContext({});

function UserProvider({children}: any) {

    const [user, setUser] = useState("Simon");

    return(
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );

}

export default UserProvider;