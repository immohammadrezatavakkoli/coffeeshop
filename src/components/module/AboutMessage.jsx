import Swal from 'sweetalert2';
import "../../styles/aboutmessage.css"

const AboutMessage = () => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-start',
    iconColor: '#fb923c',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  Toast.fire({
      icon: 'error',
      title: 'This page is being launched',
      customClass: {
        popup: 'colored-toast',
        title: 'font-Urbanist uppercase text-orange-400',
      },
  })
  }

export default AboutMessage;