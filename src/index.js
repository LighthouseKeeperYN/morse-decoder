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
  morse.forEach((value, index) => {
    morse[index] = morse[index].replace(/10/g, '.');
    morse[index] = morse[index].replace(/11/g, '-');
    morse[index] = morse[index].replace(/00/g, '');
    morse[index] = morse[index].replace(/\*\*\*\*\*\*\*\*\*\*/g, ' ');
  })
  morse.forEach((value, index) => {
    if (value != ' ') morse[index] = MORSE_TABLE[value];
  })
  return morse.join('')
}

module.exports = {
    decode
}