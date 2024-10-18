export const handlePhoneNumberValidation=(phoneNumber)=>{
    const regex = /^[1-9][0-9]{9}$/
if(!regex.test(phoneNumber)){
    return "Enter the 10 digits Phone Number"
}else{
    return ""
}
}