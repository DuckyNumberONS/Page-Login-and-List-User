import axios from 'axios';

export const getUser = async () => {
    try {
        const response = await axios.get('https://64d20691f8d60b1743614c1a.mockapi.io/user');
        const users = response.data;
        return users;
    } catch (error) {
        console.error(error);
    }
};
