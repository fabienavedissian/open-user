import { Injectable, ErrorHandler } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorsHandler implements ErrorHandler {
    constructor(private toastr: ToastrService) {}
    handleError(error: any) {
        console.error(error);
        this.toastr.error(error);
    }
}