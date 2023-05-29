
export const useFunction = () => {
  const goTop = () => {
    window.scrollTo({
      top: 0
    })
  }
  return { goTop } 
}
