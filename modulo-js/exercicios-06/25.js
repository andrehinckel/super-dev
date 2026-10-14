
for (let linha = 1; linha <= 7; linha++) {
    let desenho = "";

    for (let coluna = 1; coluna <= 7; coluna++) {
        if (linha <= 3) {
            if (coluna === 5 - linha || coluna === 3 + linha) {
                desenho += "*"
            }
            else {
                desenho += " "
            }
        }
        else if (linha === 4) {
            desenho += "*"
        }
        else if (linha >= 5 && (coluna === 1 || coluna === 7)) {
            desenho += "*"
        }
        else {
            desenho += " "
        }
    }

    console.log(desenho)
}