import { ErrorHandler } from "@angular/core"

export  class AppErrorHandler implements ErrorHandler {

    handleError(error: any): void {
        alert('An unexpected error occured');
        //error should be logged on the server just for presentaion perpuses I just show it on the console
        console.log();
    }
}