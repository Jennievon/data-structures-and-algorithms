function isPalindrome(s: string): boolean {
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    const left = s[i].toLowerCase();
    const right = s[j].toLowerCase();
    if (!isAlphaNumeric(left)) {
      i++;
    } else if (!isAlphaNumeric(right)) {
      j--;
    } else if (left !== right) {
      return false;
    } else {
      i++;
      j--;
    }
  }
  return true;
}

function isAlphaNumeric(char: string): boolean {
  const code = char.charCodeAt(0);
  const isDigit = code >= 48 && code <= 57;
  const isLowercase = code >= 97 && code <= 122;
  return isDigit || isLowercase;
}

// function isPalindrome(s: string): boolean {
//     const formattedString = s.toLowerCase().replace(/[^a-z0-9]/g, '');

//     let left = 0;
//     let right = formattedString.length - 1;

//     while (left < right) {
//       if (formattedString[left] !== formattedString[right]) {
//         return false;
//       }
//       left++;
//       right--;
//     }

//     return true;
//   }
