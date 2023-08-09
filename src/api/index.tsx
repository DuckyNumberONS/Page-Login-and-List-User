import { API } from '@/lib/constants';
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
