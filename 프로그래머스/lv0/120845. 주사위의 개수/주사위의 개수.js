function solution(box, n) {
    box.sort((a, b) => a - b); // 상자 크기를 오름차순으로 정렬합니다.
    const a = box[0], b = box[1], c = box[2]; // a <= b <= c
    const nx = Math.floor(a / n); // x 방향으로 채울 수 있는 주사위 개수
    const ny = Math.floor(b / n); // y 방향으로 채울 수 있는 주사위 개수
    const nz = Math.floor(c / n); // z 방향으로 채울 수 있는 주사위 개수
    // 각 방향으로 채울 수 있는 주사위 개수의 곱이 최대 개수입니다.
    return nx * ny * nz;
}