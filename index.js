const validatePassword= (password) => {
  let hasUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let hasLowerCase = 'abcdefghijklmnopqrstuvwxyz'
  let hasNumber = '0123456789'
  let hasSpecial = '!@#$%^&*()-_=+'


    for(let i = 0; i < password.length; i++){
        if(checkUpperCase(password[i])=== true) {
            hasUpperCase = true
        }

        if(checkLowerCase(password[i])=== true) {
            hasLowerCase = true
        }

        if(checkNumbers(password[i])=== true) {
            hasNumber = true
        }

        if(checkSpecCharacter(password[i])=== true) {
            hasSpecial = true
        }

    }
    
    return (hasUpperCase && hasLowerCase && hasNumber && hasSpecial && password.length >= 8)

}

module.exports = validatePassword