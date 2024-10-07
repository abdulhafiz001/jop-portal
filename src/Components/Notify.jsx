import Swal from "sweetalert2";

const Notify = (title, text, icon, confirmButtonText) => {
  return Swal.fire({
    title,
    text,
    icon,
    confirmButtonText,
    confirmButtonColor: "#00a651",
  });
};

export default Notify;
