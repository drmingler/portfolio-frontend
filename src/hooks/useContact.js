import {useEffect, useState} from "react";
import {getUser} from "../utils/api";

const useContact = () => {
    const [user, setUser] = useState({});
    useEffect(() => {
        getUser(1).then(response => setUser(response));
    }, []);

    return user
};

export default useContact;