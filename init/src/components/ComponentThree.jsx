import { useContext } from "react";
import { Data } from "../App";
import { UserContext } from "../Contexts/UserContext";

const UserProfile = () => {
    const [user, setUser] = useContext(UserContext); 
    return (
        <div>
            <div>{user.name}</div>
            <div>{user.age}</div>
        </div>
    )
}

const ComponentThree = () => {
    const name = useContext(Data); 
    
    return (
        <div>
            {name}
            <UserProfile/>
        </div>
    )
}

export default ComponentThree