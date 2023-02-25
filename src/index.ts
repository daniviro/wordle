import * as readline from 'node:readline';
import { exit, stdin as input, stdout as output } from 'node:process';
import { Wordle } from './wordle';

function main() {
    const wordle = new Wordle();
    const rt = readline.createInterface({ input, output });
    rt.write("Adivina la palabra crack xD\n");
    readLine(rt, wordle);
}

// Esta función se recursiva porque no he sabido hacerlo de otra manera
function readLine(rt: readline.Interface, wordle: Wordle) {
    rt.question("> ", (answer: string) => {
        rt.write(`Has escrito: ${answer}\n`);
        if (!(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/.test(answer) && answer.length == 5)) {
            rt.write("LA PALABRA NO TIENE UN FORMATO CORRECTO\n");
            readLine(rt, wordle);
            return;
        }
        if (answer == "exit") {
            exit();
        }
        rt.write(`El resultado es: ${wordle.checkWord(answer)}\n`);
        readLine(rt, wordle);
    })
}

main();