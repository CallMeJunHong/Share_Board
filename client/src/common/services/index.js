import { axiosInstance } from '@/lib/axios-instance.js';

export const getAllBoards = async() => {

    try {
        const {status, data} = await axiosInstance.get('/shareboard');
        if(status === 200) {
            return data;
        }
    } catch (err) {
        console.log(err);
        return [];
    }


}