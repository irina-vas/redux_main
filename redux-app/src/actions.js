import { GET_USERS } from './constant';


export const actionGet = (data) => ({
  type: GET_USERS,
  payload: data
})