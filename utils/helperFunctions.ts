export function deepCopy<T>(input: T):T {
  if(typeof input == 'object' && input != null) {
    const temp = input.constructor();
    for(const el in input) {
      temp[el] = deepCopy(input[el]);
    }
    return temp;
  } else {
    return input;
  }
}