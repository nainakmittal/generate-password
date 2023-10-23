const passwordBox = document.getElementById("password");
const length=8;
const UpperCase='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LowerCase='abcdefghijklmnopqrstuvwxyz';
const num = '0123456789';
const symbol = '!@#$%^&*()[><]|?+_{}';
const allchars= UpperCase + LowerCase + num + symbol;
function CreatePassword(){
let password = "";
password += UpperCase[Math.floor(Math.random() * UpperCase.length)];
password += LowerCase[Math.floor(Math.random() * LowerCase.length)];
password += symbol[Math.floor(Math.random() * symbol.length)];
password += num[Math.floor(Math.random() * num.length)];
while(length > password.length){
password += allchars[Math.floor(Math.random() * allchars.length)];
}
passwordBox.value = password;
}
function copyPassword(){
passwordBox.select();
document.execCommand("copy");
}