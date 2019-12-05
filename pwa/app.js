/* jshint esversion: 6 */

const app = {
  operations: ['+', '-', 'X', '/'],

  text: '',

  num1: '',
  operation: '',
  num2: '',

  txtCalc: '',

  btnCE: '',
  btnC: '',
  btnBack: '',
  btnDiv: '',

  btn7: '',
  btn8: '',
  btn9: '',
  btnTimes: '',

  btn6: '',
  btn5: '',
  btn4: '',
  btnMinus: '',

  btn3: '',
  btn2: '',
  btn1: '',
  btnPlus: '',

  btnSignal: '',
  btn0: '',
  btnComma: '',
  btnEquals: '',

  init: function() {
    app.txtCalc = document.getElementById('txtCalc');


    app.btnCE = document.getElementById('ce');
    app.btnCE.addEventListener('click', app.clearAll);

    app.btnC = document.getElementById('c');
    app.btnC.addEventListener('click', app.clear);

    app.btnBack = document.getElementById('back');
    app.btnBack.addEventListener('click', app.backspace);

    app.btnDiv = document.getElementById('div');
    app.btnDiv.addEventListener('click', app.div);


    app.btn7 = document.getElementById('btn7');
    app.btn7.addEventListener('click', app.btn7Click);

    app.btn8 = document.getElementById('btn8');
    app.btn8.addEventListener('click', app.btn8Click);

    app.btn9 = document.getElementById('btn9');
    app.btn9.addEventListener('click', app.btn9Click);

    app.btnTimes = document.getElementById('times');
    app.btnTimes.addEventListener('click', app.times);


    app.btn6 = document.getElementById('btn6');
    app.btn6.addEventListener('click', app.btn6Click);

    app.btn5 = document.getElementById('btn5');
    app.btn5.addEventListener('click', app.btn5Click);

    app.btn4 = document.getElementById('btn4');
    app.btn4.addEventListener('click', app.btn4Click);

    app.btnMinus = document.getElementById('minus');
    app.btnMinus.addEventListener('click', app.minus);


    app.btn3 = document.getElementById('btn3');
    app.btn3.addEventListener('click', app.btn3Click);

    app.btn2 = document.getElementById('btn2');
    app.btn2.addEventListener('click', app.btn2Click);

    app.btn1 = document.getElementById('btn1');
    app.btn1.addEventListener('click', app.btn1Click);

    app.btnPlus = document.getElementById('plus');
    app.btnPlus.addEventListener('click', app.plus);


    app.btnSignal = document.getElementById('signal');
    app.btnSignal.addEventListener('click', app.signal);

    app.btn0 = document.getElementById('btn0');
    app.btn0.addEventListener('click', app.btn0Click);

    app.btnComma = document.getElementById('comma');
    app.btnComma.addEventListener('click', app.comma);

    app.btnEquals = document.getElementById('equals');
    app.btnEquals.addEventListener('click', app.equals);
  },

  // Auxiliar Functions
  updateText: function() {
    app.text = app.num1 + ' ' + app.operation + ' ' + app.num2;
    app.txtCalc.value = app.text;
    console.debug('Update Text');
    console.debug('Text: ' + app.text);
  },

  concatDigit: function(digit) {
    if (app.operation === '') {
      app.num1 += digit;
    } else {
      app.num2 += digit;
    }
    app.updateText();
  },

  // Button Functions
  clearAll: function() {
    app.num1 = '';
    app.operation = '';
    app.num2 = '';
    app.updateText();
    console.debug('Clear All');
  },

  clear: function() {
    if (app.operation === '') {
      app.num1 = '';
    } else {
      app.num2 = '';
    }

    app.updateText();
    console.debug('Clear');
  },

  backspace: function() {
    if (app.num2 == '') {
      if (app.operation == '') {
        app.num1 = app.num1.slice(0, -1); ;
      } else {
        app.operation = '';
      }
    } else {
      app.num2 = app.num2.slice(0, -1); ;
    }

    app.updateText();
    console.debug('backspace');
  },

  // Operation Functions
  div: function() {
    app.operation = app.operations[3];
    app.updateText();
    console.debug('div');
  },

  times: function() {
    app.operation = app.operations[2];
    app.updateText();
    console.debug('times');
  },

  minus: function() {
    app.operation = app.operations[1];
    app.updateText();
    console.debug('minus');
  },

  plus: function() {
    app.operation = app.operations[0];
    app.updateText();
    console.debug('plus');
  },

  // Digit Button Functions
  btn9Click: function() {
    app.concatDigit('9');
    console.debug('btn9');
  },

  btn8Click: function() {
    app.concatDigit('8');
    console.debug('btn8');
  },

  btn7Click: function() {
    app.concatDigit('7');
    console.debug('btn7');
  },

  btn6Click: function() {
    app.concatDigit('6');
    console.debug('btn6');
  },

  btn5Click: function() {
    app.concatDigit('5');
    console.debug('btn5');
  },

  btn4Click: function() {
    app.concatDigit('4');
    console.debug('btn4');
  },

  btn3Click: function() {
    app.concatDigit('3');
    console.debug('btn3');
  },

  btn2Click: function() {
    app.concatDigit('2');
    console.debug('btn2');
  },

  btn1Click: function() {
    app.concatDigit('1');
    console.debug('btn1');
  },

  btn0Click: function() {
    app.concatDigit('0');
    console.debug('btn0');
  },

  signal: function() {
    if (app.num2 == '') {
      +app.num1 * -1;
    } else {
      +app.num2 * -1;
    }

    app.updateText();
    console.debug('signal');
  },

  comma: function() {
    app.concatDigit(',');
    console.debug('comma');
  },

  equals: function() {
    switch (app.operation) {
      case app.operations[0]:
        app.num1 = parseInt(app.num1) + parseInt(app.num2);
        app.num2 = '';
        app.operation = '';
        app.updateText();
        break;
      case app.operations[1]:
        app.num1 = parseInt(app.num1) - parseInt(app.num2);
        app.num2 = '';
        app.operation = '';
        app.updateText();
        break;
      case app.operations[2]:
        app.num1 = parseInt(app.num1) * parseInt(app.num2);
        app.num2 = '';
        app.operation = '';
        app.updateText();
        break;
      case app.operations[3]:
        app.num1 = parseInt(app.num1) / parseInt(app.num2);
        app.num2 = '';
        app.operation = '';
        app.updateText();
        break;
      default:
        console.debug('Equals');
    }

    console.debug('equals');
  },

};

app.init();
