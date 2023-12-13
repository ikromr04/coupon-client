import { useState } from 'react'

export const useFormValidation = () => {
  const [validationError, setValidationError] = useState({ message: '' })

  const formChangeHandler = (evt) => 
    setValidationError((prevValidationError) => {
      prevValidationError.message = ''
      if (prevValidationError?.errors?.[evt.target.name]) {
        delete prevValidationError.errors[evt.target.name]
      }
      return prevValidationError
    })

  return { validationError, setValidationError, formChangeHandler }
}
