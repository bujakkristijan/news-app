import Swal from "sweetalert2";

export const alertSuccess = (message: string) => {
  return Swal.fire({
    position: "top",
    icon: "success",
    title: message,
    showConfirmButton: false,
    timer: 1500,
  });
};
