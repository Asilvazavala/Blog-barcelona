import { useDispatch } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const useFunction = () => {
  const dispatch = useDispatch()
  const { id } = useParams()

  const goTop = () => {
    window.scrollTo({
      top: 0
    })
  }

  const notificationSuccess = (notification) => {
    toast.success(notification, {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }

  const notificationError = (notification) => {
    toast.error(notification, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }

  const notificationWarning = (notification) => {
    toast.warning(notification, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }

  return { 
    dispatch, 
    id, 
    goTop, 
    NavLink,
    notificationSuccess, 
    notificationError, 
    notificationWarning, 
    ToastContainer 
  } 
}
