import { USERS, USER_TOKEN } from '../constants';
export function postLogin(postData, onSuccessCallBack, onFailureCallBack) {
    let userArrayJSON = localStorage.getItem(USERS);

    if (userArrayJSON !== null || userArrayJSON !== undefined){
        const userArray = JSON.parse(userArrayJSON);

    for (let userObj of userArray){
        if(userObj.username === postData.username){
            if(userObj.password === postData.password){
                const responseData = {
                    message : "Successfully logged-in",
                    token : USER_TOKEN,
                }
                onSuccessCallBack(responseData);
                return;
            } else {
                const responseData = {
                    message : "Incorrect Password",
                }
                onFailureCallBack(responseData);
                return;
            }
        }
    }
    }
    const responseData = {
        message : "No user was found",
    }
    onFailureCallBack(responseData);
}