import { toast } from "react-toastify";

export class AppAlert {
    constructor(message: string, type: number) {
        this.showAlert(message, type);
    }
    showAlert(message: string, type: number) {
        switch (type) {
            case 1:
                toast.success(message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    //theme: "dark",
                });
                break;
            case 2:
                toast.warn(message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    //theme: "dark",
                });
                break;
            default:
                toast.error(message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    //theme: "dark",
                });
                break;
        }
    }
}