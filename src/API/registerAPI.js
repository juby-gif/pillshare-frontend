import { LOGIN_KEY, USER_TOKEN } from '../constants';
export function postRegister(postData, onSuccessCallBack, onFailureCallBack) {
    let userArrayJSON = localStorage.getItem(LOGIN_KEY);

    if (userArrayJSON === null || userArrayJSON === "[]"){
        localStorage.setItem(LOGIN_KEY,JSON.stringify([{username:"aaa",password:"123"},{username:"juby",password:"1234"},{username:"brad",password:"321"}]));
    }

    
    const responseData = {
        message : "No user was found",
    }
    onFailureCallBack(responseData);
}