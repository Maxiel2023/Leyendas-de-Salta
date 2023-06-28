const boton = document.getElementById('button');
const contenido = document.getElementById('contenido');
const salir = document.getElementById('botonSalida');


const contenido_2 = document.getElementById('contenido_1');
const boton_2 = document.getElementById('button2');
const salir_2 = document.getElementById('botonSalida2');

const contenido_3 = document.getElementById('contenido_2');
const boton_3 = document.getElementById('button3');
const salir_3 = document.getElementById('botonSalida3');

const contenido_4 = document.getElementById('contenido_4');
const boton_4 = document.getElementById('button4');
const salir_4 = document.getElementById('botonSalida4');

const contenido_5 = document.getElementById('contenido_5');
const boton_5 = document.getElementById('button5');
const salir_5 = document.getElementById('botonSalida5');

const contenido_6 = document.getElementById('contenido_6');
const boton_6 = document.getElementById('button6');
const salir_6 = document.getElementById('botonSalida6');

const contenido_7 = document.getElementById('contenido_7');
const boton_7 = document.getElementById('button7');
const salir_7 = document.getElementById('botonSalida7');

const contenido_8 = document.getElementById('contenido_8');
const boton_8 = document.getElementById('button8');
const salir_8 = document.getElementById('botonSalida8');

const contenido_9 = document.getElementById('contenido_9');
const boton_9 = document.getElementById('button9');
const salir_9 = document.getElementById('botonSalida9');

const contenido_10 = document.getElementById('contenido_10');
const boton_10 = document.getElementById('button10');
const salir_10 = document.getElementById('botonSalida10');

const contenido_11 = document.getElementById('contenido_11');
const boton_11 = document.getElementById('button11');
const salir_11 = document.getElementById('botonSalida11');

const contenido_12 = document.getElementById('contenido_12');
const boton_12 = document.getElementById('button12');
const salir_12 = document.getElementById('botonSalida12');

const contenido_13 = document.getElementById('contenido_13');
const boton_13 = document.getElementById('button13');
const salir_13 = document.getElementById('botonSalida13');

const contenido_14 = document.getElementById('contenido_14');
const boton_14 = document.getElementById('button14');
const salir_14 = document.getElementById('botonSalida14');

const contenido_15 = document.getElementById('contenido_15');
const boton_15 = document.getElementById('button15');
const salir_15 = document.getElementById('botonSalida15');

const contenido_16 = document.getElementById('contenido_16');
const boton_16 = document.getElementById('button16');
const salir_16 = document.getElementById('botonSalida16');

const contenido_17 = document.getElementById('contenido_17');
const boton_17 = document.getElementById('button17');
const salir_17 = document.getElementById('botonSalida17');

const contenido_18 = document.getElementById('contenido_18');
const boton_18 = document.getElementById('button18');
const salir_18 = document.getElementById('botonSalida18');

const contenido_19 = document.getElementById('contenido_19');
const boton_19 = document.getElementById('button19');
const salir_19 = document.getElementById('botonSalida19');

const contenido_20 = document.getElementById('contenido_20');
const boton_20 = document.getElementById('button20');
const salir_20 = document.getElementById('botonSalida20');

const contenido_21 = document.getElementById('contenido_21');
const boton_21 = document.getElementById('button21');
const salir_21 = document.getElementById('botonSalida21');

const contenido_22 = document.getElementById('contenido_22');
const boton_22 = document.getElementById('button22');
const salir_22 = document.getElementById('botonSalida22');

const contenido_23 = document.getElementById('contenido_23');
const boton_23 = document.getElementById('button23');
const salir_23 = document.getElementById('botonSalida23');


function agregarEventListener(elemento, contenido, salir) {
  elemento.addEventListener('click', function() {
    if (contenido.style.display === 'none') {
      contenido.style.display = 'block';
    } else {
      contenido.style.display = 'none';
    }
  });

  salir.addEventListener('click', function() {
    if (contenido.style.display === 'block') {
      contenido.style.display = 'none';
    }
  });
}

agregarEventListener(boton, contenido, salir);
agregarEventListener(boton_2, contenido_2, salir_2);
agregarEventListener(boton_3, contenido_3, salir_3);
agregarEventListener(boton_4, contenido_4, salir_4);
agregarEventListener(boton_5, contenido_5, salir_5);
agregarEventListener(boton_6, contenido_6, salir_6);
agregarEventListener(boton_7, contenido_7, salir_7);
agregarEventListener(boton_8, contenido_8, salir_8);
agregarEventListener(boton_9, contenido_9, salir_9);
agregarEventListener(boton_10, contenido_10, salir_10);
agregarEventListener(boton_11, contenido_11, salir_11);
agregarEventListener(boton_12, contenido_12, salir_12);
agregarEventListener(boton_13, contenido_13, salir_13);
agregarEventListener(boton_14, contenido_14, salir_14);
agregarEventListener(boton_15, contenido_15, salir_15);
agregarEventListener(boton_16, contenido_16, salir_16);
agregarEventListener(boton_17, contenido_17, salir_17);
agregarEventListener(boton_18, contenido_18, salir_18);
agregarEventListener(boton_19, contenido_19, salir_19);
agregarEventListener(boton_20, contenido_20, salir_20);
agregarEventListener(boton_21, contenido_21, salir_21);
agregarEventListener(boton_22, contenido_22, salir_22);
agregarEventListener(boton_23, contenido_23, salir_23);