import Swal from 'sweetalert2';
import "../../styles/aboutmessage.css";

const AboutMessage = (message) => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    iconColor: '#fb923c',
    showConfirmButton: false,
    timer: 4000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: 'error',
    title: message,
    customClass: {
      popup: 'colored-toast',
      title: 'font-Urbanist uppercase text-orange-400',
    },
  });
};

export default AboutMessage;
