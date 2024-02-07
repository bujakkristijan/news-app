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

export const alertError = (message: string) => {
  return Swal.fire({
    icon: "error",
    title: "Oops...",
    text: message,
  });
};
