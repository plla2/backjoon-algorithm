function solution(cipher, code) {
    const sol = [];
  
  for (let i = code - 1; i < cipher.length; i += code) {
    sol.push(cipher.charAt(i));
  }
  
  return sol.join('');
}
