const checkUpperCase = (letter) => {
  let hasUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  for (let i = 0; i < hasUpperCase.length; i++) {
    const currentItem = hasUpperCase[i]

    if (currentItem === letter) return true
  }

  return false
}

const checkLowerCase = (letter) => {
  let hasLowerCase = 'abcdefghijklmnopqrstuvwxyz'

  for (let i = 0; i < hasLowerCase.length; i++) {
    const currentItem = hasLowerCase[i]

    if (currentItem === letter) return true
  }

  return false
}

const checkNumbers = (letter) => {
  let hasNumber = '1234567890'

  for (let i = 0; i < hasNumber.length; i++) {
    const currentItem = hasNumber[i]

    if (currentItem === letter) return true
  }

  return false
}

const checkSpecCharacter = (letter) => {
  let hasSpecial = '1234567890'

  for (let i = 0; i < hasSpecial.length; i++) {
    const currentItem = hasSpecial[i]

    if (currentItem === letter) return true
  }

  return false
}


const validatePassword = (password) => {
  let hasLowerCase = false
  let hasNumber = false
  let hasSpecial = false
  let hasUpperCase = false

  for (let i = 0; i < password.length; i++) {
    if (checkUpperCase(password[i]) === true) {
      hasUpperCase = true
    }

    if (checkLowerCase(password[i]) === true) {
      hasLowerCase = true
    }

    if (checkNumbers(password[i]) === true) {
      hasNumber = true
    }

    if (checkSpecCharacter(password[i]) === true) {
      hasSpecial = true
    }
  }

  return (hasUpperCase && hasLowerCase && hasNumber && hasSpecial && password.length >= 8)
}

module.exports = validatePassword
