import { useState } from 'react'
import { useNotification } from './useNotification'

export const useInputContact = () => {
  const { notificationSuccess, notificationWarning } = useNotification()

  const [input, setInput] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  function handleNotification () {
    !input.name || !input.email || !input.message
      ? notificationWarning('Completa todos los campos por favor')
      : notificationSuccess('¡Mensaje enviado exitosamente!')
  }

  return { input, handleChange, handleNotification }
}
