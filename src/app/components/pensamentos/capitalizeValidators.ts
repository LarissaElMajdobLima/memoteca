import { AbstractControl } from '@angular/forms';

export function capitalizeValidator(control: AbstractControl) {
  var str = control.value.toString();
  var arrStr = str.split(" ");
  var err;

  for (str of arrStr) {
    if ((str.charAt(0) !== str.charAt(0).toUpperCase()) || (str.slice(1) !== str.slice(1).toLowerCase())) {
      err = { capitalized: true};
      break;
    }
  }
  return err || null

}
