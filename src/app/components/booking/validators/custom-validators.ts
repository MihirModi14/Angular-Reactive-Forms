import { AbstractControl, FormGroup } from "@angular/forms";

export class CustomValidator {
    static vaildateNumber(control: AbstractControl) {
        if(control.value.includes('123')) {
            return {
                invalidNumber: true,
            };
        }
        return null;
    }

    static validateSpecialChar(char: string) {
        return (control: AbstractControl) => {
            if(control.value.includes(char)) {
                return {
                    invalidChar: true,
                };
            }
            return null;
        }
    } 

    static validateDate(control: FormGroup) {
        console.log(control.get("mobileNumber").value);
        console.log(control.get("roomId").value);
        return {
            invalid: false,
        }
    }
}