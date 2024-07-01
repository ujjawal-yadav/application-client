import { useState, useEffect } from 'react';
import axios from 'axios';

const useAuth = () => {
    const [loggedInUser, setLoggedInUser] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const login = async (name: string) => {
        try {
            const response = await axios.post('https://application-ac-358e236b7f33.herokuapp.com/api/v1/register', { name }, { withCredentials: true });
            setLoggedInUser(response.data.user.name);
            setError(null);
            return true;
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('An unknown error occurred');
            }
            return false;
        }
    };

    const fetchLoggedInUser = async () => {
        try {
            const response = await axios.get('https://application-ac-358e236b7f33.herokuapp.com/api/v1/logged-in-user', { withCredentials: true });
            console.log(response);
            setLoggedInUser(response.data.loggedInUser);
            setError(null);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('An unknown error occurred');
            }
        }
    };

    return { loggedInUser, error, login, fetchLoggedInUser };
};

export default useAuth;
