class calculator {
  constructor() {
    this.LHS = '';
    this.RHS = '';
    this.operand = '';
    this.screen = '0';
    this.validOperands = ['/', '+', '-', '*', '^'];
    this.validNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '.'];
    document.getElementById('screen').innerHTML = this.screen;
  }

  isValidValue(value) {
    let valueIsValid = false;
    if (this.validNumbers.includes(value) || this.validOperands.includes(value)) valueIsValid = true;
    return valueIsValid;
  }
 
  clear () {
    this.screen = '0';
    this.LHS = '';
    this.RHS = '';
    this.operand = '';
    document.getElementById('screen').innerHTML = this.screen;
  }

  remove() {
    if(this.screen.length == 1) {
      this.screen = '0';
    }else{
      this.screen = this.screen.slice(0, -1);
      this.RHS.slice(0, -1);
      if(!this.RHS) this.operand.slice(0, -1);
      if(!this.operand) this.LHS.slice(0, -1);
    }
    document.getElementById('screen').innerHTML = this.RHS;
    document.getElementById('screen').innerHTML = this.screen;
  }

  compute() {
    let result = 0;
    switch (this.operand) {
      case '+': result = Number(this.LHS) + Number(this.RHS); break;
      case '/': result = Number(this.LHS) / Number(this.RHS); break;
      case '*': result = Number(this.LHS) * Number(this.RHS); break;
      case '-': result = Number(this.LHS) - Number(this.RHS); break;
      case '^': result = Number(this.LHS) ** Number(this.RHS);
    }
    document.getElementById('result').innerHTML = result;
    return result
  }

  
  press(value) {
    if (this.screen === '0') this.screen = '';
    if (!this.isValidValue(value)) return this.screen = 'Invalid Value Parsed';
    if (this.operand && this.validOperands.includes(value)) {
      this.LHS = compute();
      this.RHS = '';
      document.getElementById('screen').innerHTML = this.LHS;
    }
    if (this.validOperands.includes(value)) this.operand = value;
    if (!this.operand && this.validNumbers.includes(value)) this.LHS += value;
    if (this.operand && this.validNumbers.includes(value)) this.RHS += value;
    this.screen += value;
    const a = document.getElementById("screen"); 

    document.getElementById('screen').innerHTML = this.screen;
  }
}
const myCalculator = new calculator();
const press = (value) => myCalculator.press(value);
const compute = () => myCalculator.compute();




const aud = document.getElementById("myAudio");
const playAudio = () => {
  aud.play();
}


const aud2 = document.getElementById("myAudio2");
const plaAudio = () => {
  aud2.play();
}

const aud3 = document.getElementById("myAudio3");
const plAudio = () => {
  aud3.play();
}

const aud4 = document.getElementById("myAudio4");
const pAudio = () => {
  aud4.play();
}

const aud5 = document.getElementById("myAudio5");
const audio = () => {
  aud5.play();
}

const aud6 = document.getElementById("myAudio6");
const audioP = () => {
  aud6.play();
}

const aud7 = document.getElementById("myAudio7");
const audioPl = () => {
  aud7.play();
}

const aud8 = document.getElementById("myAudio8");
const audioPla = () => {
  aud8.play();
}

const aud9 = document.getElementById("myAudio9");
const audioPlay= () => {
  aud9.play();
}



