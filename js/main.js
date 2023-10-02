let Jugamos = prompt("Si quieres jugar coloca si");

while (Jugamos != "no") {
    let pregunta = 0;
    let score = 0;
    let errores = 0;

    function acertaste() {
        score = score + 1;
        alert("✔ Respuesta correcta. Llevas respuestas " + score + " preguntas correctas.👍");
    }

    function erraste() {
        errores = errores + 1;
        alert("❌ Respuesta incorrecta. Llevas " + errores + " errores. 👎");
    }


    while (pregunta < 20 && errores < 3) {
        switch (pregunta) {
            case 0:
                alert ("¿Cuál es la capital de Francia?🥈");
                let respuesta1 = prompt("Ingrese su respuesta 🤔");
                if (respuesta1.toLowerCase() === "paris") {
                    acertaste();
                }
                else {
                    erraste();
                }
                pregunta = pregunta + 1;
                break;

            case 1:
                alert("🌊¿Cuál es el océano más grande?🌊");
                let respuesta2 = prompt("Ingrese su respuesta 🤔");
                if (respuesta2.toLowerCase() === "pacifico") {
                    acertaste();
                }
                else {
                    erraste();
                }
                pregunta = pregunta + 1;
                break;

            case 2:
                alert("¿Quién escribió 'Romeo y Julieta'💑? (apellido)");
                let respuesta3 = prompt("Ingrese su respuesta 🤔");
                if (respuesta3.toLowerCase() === "shakespeare") {
                    acertaste();
                }
                else {
                    erraste();
                }
                pregunta = pregunta + 1;
                break;

            case 3:
                alert("¿Cuál es el planeta más grande del sistema solar?⭐🪐🌍");
                let respuesta4 = prompt("Ingrese su respuesta 🤔");
                if (respuesta4.toLowerCase() === "jupiter") {
                    acertaste();
                }
                else {
                    erraste();
                }
                pregunta = pregunta + 1;
                break;

            case 4:
                alert("¿Cuál es el río más largo del mundo?💧");
                let respuesta5 = prompt("Ingrese su respuesta 🤔");
                if (respuesta5.toLowerCase() === "amazonas") {
                    acertaste();
                }
                else {
                    erraste();
                }
                pregunta = pregunta + 1;
                break;

            case 5:
                alert("¿Cuál es el animal terrestre más rápido?🐆");
                let respuesta6 = prompt("Ingrese su respuesta 🤔");
                if (respuesta6.toLowerCase() === "guepardo") {
                    acertaste();
                }
                else {
                    erraste();
                }
                pregunta = pregunta + 1;
                break;

            case 6:
                alert("¿Quién pintó la Mona Lisa? (nombre y apellido)🐒");
                let respuesta7 = prompt("Ingrese su respuesta 🤔");
                if (respuesta7.toLowerCase() === "leonardo da vinci") {
                    acertaste();
                }
                else {
                    erraste();
                }
                pregunta = pregunta + 1;
                break;

            case 7:
                alert("¿Cuál es el país más grande del mundo por área?🤓");
                let respuesta8 = prompt("Ingrese su respuesta 🤔");
                if (respuesta8.toLowerCase() === "rusia") {
                    acertaste();
                }
                else {
                    erraste();
                }
                pregunta = pregunta + 1;
                break;

            case 8:
                alert("🏔¿Cuál es la montaña más alta del mundo?🏔");
                let respuesta9 = prompt("Ingrese su respuesta 🤔");
                if (respuesta9.toLowerCase() === "everest") {
                    acertaste();
                }
                else {
                    erraste();
                }
                pregunta = pregunta + 1;
                break;

            case 9:
                alert("¿Quién fue el primer presidente de los Estados Unidos (nombre y apellido)?🦅");
                let respuesta10 = prompt("Ingrese su respuesta 🤔");
                if (respuesta10.toLowerCase() === "george washington") {
                    acertaste();
                }
                else {
                    erraste();
                }
                pregunta = pregunta + 1;
                break;

            case 10:
                alert("¿Cuál es el símbolo químico del oro?📀");
                let respuesta11 = prompt("Ingrese su respuesta 🤔");
                if (respuesta11.toLowerCase() === "au") {
                    acertaste();
                }
                else {
                    erraste();
                }
                pregunta = pregunta + 1;
                break;

            case 11:
                alert(" ¿Cuál es el instrumento musical más grande de la orquesta?🎻");
                let respuesta12 = prompt("Ingrese su respuesta 🤔");
                if (respuesta12.toLowerCase() === "contrabajo") {
                    acertaste();
                }
                else {
                    erraste();
                }
                pregunta = pregunta + 1;
                break;

            case 12:
                alert("¿En qué año se produjo la Revolución Francesa?⚔");
                let respuesta13 = prompt("Ingrese su respuesta 🤔");
                if (respuesta13.toLowerCase() === "1789") {
                    acertaste();
                }
                else {
                    erraste();
                }
                pregunta = pregunta + 1;
                break;

            case 13:
                alert("¿Cuál es el proceso por el cual las plantas fabrican su propio alimento?🌼🌷🥀");
                let respuesta14 = prompt("Ingrese su respuesta 🤔");
                if (respuesta14.toLowerCase() === "fotosintesis") {
                    acertaste();
                }
                else {
                    erraste();
                }
                pregunta = pregunta + 1;
                break;

            case 14:
                alert("¿Cuál es el país más poblado del mundo?👨‍👨‍👧‍👧👨‍👨‍👧‍👦👨‍👨‍👧‍👧");
                let respuesta15 = prompt("Ingrese su respuesta 🤔");
                if (respuesta15.toLowerCase() === "china") {
                    acertaste();
                }
                else {
                    erraste();
                }
                pregunta = pregunta + 1;
                break;

            case 15:
                alert("¿A que velocidad viaja la luz en el vacio?🎇");
                let respuesta16 = prompt("Ingrese su respuesta 🤔");
                if (respuesta16.toLowerCase() === "300000") {
                    acertaste();
                }
                else {
                    erraste();
                }
                pregunta = pregunta + 1;
                break;

            case 16:
                alert("¿Qué gas representa aproximadamente el 78% de la atmósfera de la Tierra?");
                let respuesta17 = prompt("Ingrese su respuesta 🤔");
                if (respuesta17.toLowerCase() === "nitrogeno") {
                    acertaste();
                }
                else {
                    erraste();
                }
                pregunta = pregunta + 1;
                break;

            case 17:
                alert("¿Cuál es la lengua materna más hablada en el mundo?");
                let respuesta18 = prompt("Ingrese su respuesta 🤔");
                if (respuesta18.toLowerCase() === "chino") {
                    acertaste();
                }
                else {
                    erraste();
                }
                pregunta = pregunta + 1;
                break;

            case 18:
                alert("¿Quién escribió Cien años de soledad?");
                let respuesta19 = prompt("Ingrese su respuesta 🤔");
                if (respuesta19.toLowerCase() === "gabriel garcia marquez") {
                    acertaste();
                }
                else {
                    erraste();
                }
                pregunta = pregunta + 1;
                break;

            case 19:
                alert("¿Que edad tiene Mirtha Legrand?");
                let respuesta20 = prompt("Ingrese su respuesta 🤔");
                if (respuesta20.toLowerCase() === "96") {
                    acertaste();
                }
                else {
                    erraste();
                }
                pregunta = pregunta + 1;
                break;

            default:
                break;
        }
    }

    if (errores === 3) {
        alert("Lo siento ya has obtenido 3 errores ❌. Puntuación final: " + score);
    }
    else {
        alert("Felicitaciones, has respuesto " + score + " preguntas correctamente y has tenido " + errores + " errores");
    }

    Jugamos = prompt("Si quieres jugar nuevamente coloca si, de lo contrario coloca no");
}