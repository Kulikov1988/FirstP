import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
   headers: {
   "API-KEY": "c0154f54-22f4-4dd1-b48e-96f2c2fb8770"
}})


export const usersAPI = {
  getUsers  (currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`) 
        .then(response => {
          return response.data;
        })
  },
  follow(userId) {
   return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)            
  },
  unfollow(userId) {
    return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
  },  
}



// export const unFollowUser = (userId) => {
//   return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`) 
//   .then((response) => {
//     if (response.data.resultCode === 0) {
//     unFollow(userId);
//      }}); 
// }

