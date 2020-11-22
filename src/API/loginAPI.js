const USER_TOKEN = "e8efdd1c-4ebc-480e-ad11-7e1d2eb94cf7";
const LOGIN_KEY = "Login-data"

export function postLogin(postData, onSuccessCallBack, onFailureCallBack) {
    let userArrayJSON = localStorage.getItem(LOGIN_KEY);

    if (userArrayJSON === null && userArrayJSON === "[]"){
        localStorage.setItem(LOGIN_KEY,JSON.stringify([{username:"aaa",password:"123"},{username:"juby",password:"1234"},{username:"bart",password:"321"}]));
    }

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
    const responseData = {
        message : "No user was found",
    }
    onFailureCallBack(responseData);
}