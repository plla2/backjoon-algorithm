function solution(numer1, denom1, numer2, denom2) {
    // 두 분수를 더합니다.
    const newNumer = numer1 * denom2 + numer2 * denom1;
    const newDenom = denom1 * denom2;
    // 더한 분수를 기약 분수로 만듭니다.
    const gcd = getGcd(newNumer, newDenom);
    return [newNumer / gcd, newDenom / gcd];
}

function getGcd(a, b) {
    return b === 0 ? a : getGcd(b, a % b);
}