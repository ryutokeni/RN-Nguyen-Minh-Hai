import {REQUEST} from './actionType';

export const request = (data) => {
    return {
        type: REQUEST,
        data: data
    }
}