const comandos = [10, 1, 5, 2, 8, -5, 20, -1];

let posX = 0;
let posY = 0;
let direcao = 0;
let energia = 100;
let distanciaTotal = 0;
let movCount = 0;

for (const C of comandos) {

    if (C === -1) {
        break;

    } else if (C === -5) {
        energia = Math.min(energia + 15, 100);

    } else if (C === 1) {
        direcao = (direcao + 1) % 4;
        energia -= 1;

    } else if (C === 2) {
        direcao = (direcao - 1 + 4) % 4;
        energia -= 1;

    } else if (C > 2) {
        const unidades = Math.min(C, Math.floor(energia / 2));

        if (direcao === 0) posY += unidades;  
        if (direcao === 1) posX += unidades;  
        if (direcao === 2) posY -= unidades;  
        if (direcao === 3) posX -= unidades;  

        energia -= unidades * 2;
        distanciaTotal += unidades;

        const soma = Math.abs(posX) + Math.abs(posY);
        if (soma > 0 && soma % 10 === 0) {
            distanciaTotal += Math.sqrt(posX ** 2 + posY ** 2);
            energia -= 5;
            posX = 0;
            posY = 0;
        }

        movCount++;
        if (movCount % 3 === 0) {
            direcao = (direcao + 2) % 4;
        }
    }
}

console.log("Posição final: (" + posX + ", " + posY + ")");
console.log("Distância total: " + distanciaTotal.toFixed(2));
console.log("Energia restante: " + energia);