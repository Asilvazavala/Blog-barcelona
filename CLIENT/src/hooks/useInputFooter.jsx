import { useState } from 'react'
import { useNotification } from './useNotification'

export const useInputFooter = () => {
  const { notificationSuccess, notificationWarning } = useNotification()

  const [input, setInput] = useState({
    email: '',
  })

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  function handleNotification () {
    !input.email 
      ? notificationWarning('Escribe un email correcto por favor')
      : notificationSuccess('¡Se ha registrado exitosamente!')
  }

  return { input, handleChange, handleNotification }
}
