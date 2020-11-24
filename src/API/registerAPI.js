import { USERS } from '../constants';
import { v4 as uuidv4 } from 'uuid';
export function postRegister(postData, onSuccessCallBack, onFailureCallBack) {
    let userArrayJSON = localStorage.getItem(USERS);

    if (userArrayJSON === null || userArrayJSON === "[]"){
        localStorage.setItem(USERS,JSON.stringify([]));
    }

    const userArray = JSON.parse(userArrayJSON);
    if(postData !== null || postData !== undefined) {
        const user_id = uuidv4();
        postData.uuid = user_id;

        // For debugging purpose only
        console.log(postData)

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