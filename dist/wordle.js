"use strict";
exports.__esModule = true;
exports.Wordle = void 0;
var words = ["nieve", "hueso", "titan", "flujo", "disco", "razon", "mural", "abril", "vejez", "falso", "cañon", "obeso", "metal", "avena", "rubia", "pieza", "cuero", "noche", "bingo", "corto", "multa", "nieto", "dieta", "mosca", "nadal", "lider", "cerco", "rocio", "apoyo", "secta", "ganar", "besar", "novio", "albur", "litio", "llaga", "rueda", "corta", "miope", "atras", "braza", "altar", "mojar", "quema", "error", "cesta", "soplo", "nueve", "radio", "sexto", "sucio", "papel", "huevo", "doler", "polar", "motel", "rotar", "fuego", "lucir", "macho", "durar", "congo", "serio", "libra", "valla", "enano", "salsa", "ciego", "china", "anime", "droga", "ideal", "busca", "gatas", "gripe", "torre", "viaje", "pinza", "boton", "pleno", "tallo", "fusil", "latex", "rural", "misil", "padre", "extra", "burra", "cobre", "zebra", "regla", "culto", "sexta", "pongo", "danza", "bravo", "estar", "calla", "pecar", "poder", "pecho", "lejos", "lleno", "pizza", "ostia", "rapto", "rayar", "armar", "oveja", "sismo", "simio", "crack", "sanar", "amiga", "callo", "drama", "sabor", "aereo", "espia", "dogma", "coche", "siglo", "lindo", "zombi", "limar", "catar", "anual", "koala", "laser", "cerca", "magia", "caido", "corte", "nariz", "gente", "preso", "renta", "atroz", "zurdo", "gamba", "coger", "llena", "audaz", "aguja", "oasis", "boxer", "raspa", "helio", "ruina", "serie", "jamon", "labio", "brava", "diosa", "arpon", "duelo", "marea", "erizo", "ruego", "abrir", "carne", "gemir", "gusto", "media", "cobro", "nicho", "bajar", "zorro", "lapiz", "bufon", "tarea", "orina", "frita", "libre", "otoño", "oruga", "donar", "robar", "coito", "grave", "ozono", "santa", "pasta", "rumba", "busco", "llave", "burla", "litro", "muera", "podar", "calvo", "rasgo", "mimar", "mareo", "acabe", "siete", "pausa", "licra", "pisar", "tibio", "tinto", "dueto", "tarta", "ruido", "cerro", "caldo", "forro", "agrio", "menta", "casco", "doble", "misio", "guiso", "tango", "celda", "falsa", "movil", "jurar", "magno", "meter", "clavo", "jamas", "dolor", "casar", "bolsa", "subir", "monja", "abeja", "vodka", "ayuda", "metro", "tesis", "pollo", "broma", "amigo", "dobla", "lugar", "calor", "muela", "asado", "tramo", "hongo", "finta", "chino", "calma", "poner", "ileso", "justo", "mayor", "bollo", "jarro", "arete", "femur", "miedo", "faena", "gordo", "leñar", "tribu", "cobra", "dulce", "arepa", "acaso", "bueno", "rublo", "legal", "plomo", "abajo", "tauro", "fresa", "acera", "bahia", "banco", "fruta", "labor", "domar", "ocaso", "lento", "señal", "judas", "tabla", "medir", "aroma", "parar", "listo", "rimar", "oreja", "coral", "cisne", "lamer", "picar", "sarza", "sigma", "antro", "posar", "farol", "torta", "tirar", "silva", "tarro", "girar", "burro", "cacho", "lucha", "junta", "marca", "nuevo", "video", "tomar", "himno", "tonto", "limbo", "fobia", "tocar", "alpes", "viejo", "tutor", "atril", "pesca", "reloj", "cuida", "secar", "playa", "mania", "nadie", "dicha", "pugna", "cielo", "mudar", "colar", "kurdo", "obvio", "lituo", "leche", "pinta", "kopek", "negar", "forma", "chile", "flora", "karma", "conde", "feroz", "salmo", "manso", "santo", "fecha", "corro", "cabra", "cueva", "canto", "fisco", "beber", "ayuno", "buceo", "gorro", "creer", "fumar", "lloro", "fruto", "orden", "señor", "junto", "grasa", "fenix", "pluma", "minal", "lecho", "cocer", "andar", "tumor", "selva", "tieso", "favor", "acero", "vapor", "bañar", "malla", "flote", "ruedo", "veloz", "telar", "tecla", "aries", "latir", "usado", "abuso", "tarot", "samba", "solar", "sarro", "flota", "tarde", "saldo", "crema", "libro", "fluir", "flama", "volar", "arpia", "aldea", "ladra", "rugby", "adios", "abano", "silla", "sudar", "titar", "araña", "negro", "hueco", "saber", "jurco", "laico", "liana", "brazo", "rasta", "botar", "piojo", "tapar", "cenar", "feliz", "fuera", "sueño", "labia", "fauna", "virus", "cante", "legua", "rosal", "tinte", "arena", "kefir", "cerdo", "marco", "signo", "chico", "gorda", "medio", "norte", "cagar", "banda", "finca", "salir", "apoyo", "juego", "vacio", "circo", "mente", "vieja", "bajon", "suelo", "entre", "poema", "crear", "flaco", "primo", "abono", "vagon", "pulpa", "junio", "socio", "cursi", "cajon", "costo", "falto", "plano", "jaque", "jaula", "mundo", "foton", "sauco", "olivo", "baile", "atajo", "patio", "salon", "brujo", "patas", "pulpo", "enero", "comer", "hielo", "marzo", "polvo", "digno", "sabio", "reino", "palma", "hogar", "cerda", "conga", "prisa", "manco", "icono", "coste", "clave", "arroz", "copia", "chica", "falta", "ducha", "koine", "rezar", "bucle", "melon", "hacer", "jugar", "licor", "gallo", "ataud", "acida", "mueca", "canta", "dejar", "japon", "lemur", "errar", "cague", "vaina", "fallo", "lucro", "pulga", "reina", "agudo", "linea", "limon", "pauta", "barca", "manta", "tinta", "envio", "poeta", "golpe", "dueña", "trama", "boxeo", "ganso", "prima", "cotar", "palco", "pared", "calle", "llama", "deuda", "vivir", "cargo", "rumbo", "tigre", "grano", "igual", "sushi", "firme", "ellos", "cagon", "plaza", "peaje", "donde", "villa", "bolso", "cutre", "guapo", "baila", "lista", "bomba", "fauno", "jaleo", "ligar", "paseo", "trago", "rumor", "cable", "humor", "bruja", "anden", "botin", "trece", "suave", "lunar", "menos", "rodeo", "calva", "dicho", "frito", "acabo", "firma", "campo", "actor", "doblo", "farsa", "fuero", "trono", "mirar", "nueva", "morir", "carga", "polen", "rubio", "traje", "matiz", "deseo", "mecha", "menor", "bonus", "madre", "goteo", "dueño", "jueza", "barco", "vital", "sorda", "matar", "cacao", "clima", "rollo", "tesla", "sudor", "mejor"];
var Wordle = /** @class */ (function () {
    function Wordle() {
        this.word = "";
        this.word = words[Math.floor(Math.random() * words.length)];
    }
    Wordle.prototype.getWord = function () {
        return this.word;
    };
    Wordle.prototype.checkWord = function (wordIn) {
        var _this = this;
        var matches = "XXXXX".split("");
        var wordArray = this.word.split("");
        var wordInArray = wordIn.split("");
        wordInArray.forEach(function (element, index) {
            // PRIMERO BUSCAMOS COINCIDENCIAS EXACTAS
            if (element == wordArray[index]) {
                matches[index] = "O";
                wordArray[index] = "_";
            }
        });
        wordInArray.forEach(function (element, index) {
            // DESPUES BUSCAMOS COINCIDENCIAS NO EXACTAS
            if (wordArray.indexOf(element) > -1 && matches[index] != "O") {
                matches[index] = "W";
                wordArray[_this.word.indexOf(element)] = "_";
            }
        });
        return matches.join("");
    };
    return Wordle;
}());
exports.Wordle = Wordle;
