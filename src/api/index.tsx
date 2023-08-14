import { API } from '@/lib/constants';
import { User } from '@/lib/domain/user';
import axios from 'axios';

export const getUser = async () => {
    try {
        const response = await axios.get(API);
        const users = response.data;
        return users;
    } catch (error) {
        console.error(error);
    }
};

export const postUser = async (data: User) => {
    try {
        const response = await axios.post(`${API}`, data);
        const users = response.data;
        return users;
    } catch (error) {
        console.error(error);
    }
};
