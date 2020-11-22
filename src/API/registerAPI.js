import { USERS } from '../constants';
export function postRegister(postData, onSuccessCallBack, onFailureCallBack) {
    let userArrayJSON = localStorage.getItem(USERS);

    if (userArrayJSON === null || userArrayJSON === "[]"){
        localStorage.setItem(USERS,JSON.stringify([]));
    }

    const userArray = JSON.parse(userArrayJSON);
    if(postData !== null || postData !== undefined) {
        userArray.push(postData)
        localStorage.setItem(USERS,JSON.stringify(userArray));
        const responseData ={
            message: "You have successfully registered!",
        }
        onSuccessCallBack(responseData);
        return;
    }
    const responseData = {
        message: "Something unexpected happened. Please contact Pillshare"
    }
    onFailureCallBack(responseData);
    
}