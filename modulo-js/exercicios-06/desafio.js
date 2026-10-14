for (let linha = 1; linha <= 7; linha++) {
    let desenho = "";

    for (let coluna = 1; coluna <= 9; coluna++) {
        if (linha === 1) {
            if (coluna === 2 || coluna === 3 || coluna === 7 || coluna === 8) {
                desenho += "*"
            }
            else {
                desenho += " "
            }
        }

        else if (linha === 2) {
            if (coluna !== 5) {
                desenho += "*"
            }
            else {
                desenho += " "
            }
        }

        else if (linha === 3) {
            desenho += "*"
        }
        else {
            if (linha === 4 && (coluna >= 2 && coluna <= 8)) {
                desenho += "*"
            }
            else {
                desenho += " "
            }
        }
    }

    console.log(desenho)
}