import { axiosInstance } from '@/lib/axios-instance.js';

const url = '/shareboard';
export const getAllBoards = async() => {

    try {
        const {status, data} = await axiosInstance.get(url);
        if(status === 200) {
            return data;
        }
    } catch (err) {
        console.log(err);
        return [];
    }
};

export const getBoardById = async(id) => {
    try {
        const {data} = await axiosInstance.get(url + `/${id}`);
        return data;
    } catch (err) {
        console.log(err);
        return {}
    }

}