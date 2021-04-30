import { ValidationError } from "yup"

interface IValidationErrorsProps {
  [key: string]: string
}

export function getYupValidationErrors(error: ValidationError): IValidationErrorsProps {
  const validationErrors: IValidationErrorsProps = {}

  error.inner.forEach((e) => {
    if (e.path) {
      validationErrors[e.path] = e.message
    }
  })

  return validationErrors
}
