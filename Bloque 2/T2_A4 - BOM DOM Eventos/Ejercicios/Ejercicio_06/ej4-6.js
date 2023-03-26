"use strict";

function comprueba() {
    const elecciones = document.getElementsByName('test');
    let mensaje = '';
    let resultados = 0;
    let totales = elecciones.length;
    for (let i = 0; i < elecciones.length; i++) {
        if (elecciones[i].checked) {
            resultados++;
        }
    }
    if (Number(resultados) > 8) {
        mensaje = `Usted ha seleccionado ${Number(resultados)} ítems: \n` +
                '·   Resultado: Tus síntomas de dependencia son muy preocupantes.\n' +
                '·   Consejo: Además de todas las técnicas de los apartados anteriores deberías plantearte un plan de desintoxicación del móvil que consista en estar una o dos semanas sin utilizarlo. Si ves que no puedes hacerlo por ti mismo, pide ayuda a un profesional';
    } else if (Number(resultados) > 6) {
        mensaje = `Usted ha seleccionado ${Number(resultados)} ítems: \n` +
                '·   Resultado: Tienes una gran dependencia del móvil.\n' +
                '·   Consejo: Deberías seguir un plan de desintoxicación del móvil como por ejemplo dejar el móvil en casa cuando vas a comprar, apagarlo durante la noche, apagarlo durante horas de clase o trabajo, etc.';

    } else if (Number(resultados) > 4) {
        mensaje = `Usted ha seleccionado ${Number(resultados)} ítems: \n` +
                '·   Resultado: Empiezas a tener signos de dependencia del móvil.\n' +
                '·   Consejo: Puedes utilizar técnicas como apagar el móvil cuando no lo necesitas, cuando duermes, etc.';

    } else if (Number(resultados) < 5 && Number(resultados) > 0) {
        mensaje = `Usted ha seleccionado ${Number(resultados)} ítems: \n` +
                '·   Resultado: En principio no tienes nada de que preocuparte.\n' +
                '·   Consejo: No tienes nada de que preocuparte.';
    } else if (Number(resultados) == 0) {
        mensaje = 'No ha seleccionado ninguna respuesta, por favor, seleccione aquellas que considere que se adecuan a usted de la forma más sincera posible.';
    } else {
        mensaje = 'Usted y sus resultados han roto toda expectativa.';
    }
    alert(mensaje);
}