// export const userNameValidator =userName =>{
//     const userNameRegex = /^[0-9A-Za-z]{6,16}$/;
//     return userNameRegex.test(userName)
// }

export const passwordValidator =password =>{
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$^&*-]).{8,}$/;
    return passwordRegex.test(password)
}


    export const isValidPhoneNumber =(phoneNumber)=>{
        const phoneRegex =/^\d{10}$/;
        return phoneRegex.test(phoneNumber);
    };