/**
 * @param {any} arg
 * @returns any
 */
function undefinedToNull(arg: any): any {
  // if the argument is undefined, return null
  if (arg === undefined) {
    return null;
  }
  // if the argument is an object, iterate through the object and set any undefined values to null
  else if (typeof arg === "object") {
    for (const key in arg) {
      arg[key] = undefinedToNull(arg[key]);
    }
  }
  // if the argument is an array, iterate through the array and set any undefined values to null
  else if (Array.isArray(arg)) {
    arg = arg.map((item) => undefinedToNull(item));
  }
  return arg;
}
