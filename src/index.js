const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let morse = expr.match(/.{1,10}/g)
 foobar.forEach((value, index) => {
   foobar[index] =foobar[index].replace(/10/g, '.');
   foobar[index] =foobar[index].replace(/11/g, '-');
   foobar[index] =foobar[index].replace(/00/g, '');
   foobar[index] =foobar[index].replace(/\*\*\*\*\*\*\*\*\*\*/g, ' ');
  })
  morse.forEach((value, index) => {
    if (value != ' ') morse[index] = MORSE_TABLE[value];
  })
  return morse.join('')
}

module.exports = {
    decode
}