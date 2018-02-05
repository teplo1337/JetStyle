let languages = [
  { alphabet: 'abcdefghijklmnopqrstuvwxyz1234567890', lang: 'en'},
  { alphabet: 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя1234567890', lang: 'ru'},
  { alphabet: 'любой другой язык', lang: 'ra'}
];

let setLang = 0;

let setButton = (input, element, key, parent) => {
  element.setAttribute('type', 'button');
  element.addEventListener('click', () => {
    if (key === 'backspace') {
      input.value = input.value.substring(0, input.value.length -1)
    } else if (key === 'lang') { 
      parent.removeChild(parent.lastChild);
      if (!languages[++setLang]) {
        setLang = 0;
      }    
      if(setLang === languages.length - 1) {
        document.querySelectorAll('.keyboard-bar-lang').forEach((ketboardBarLang) => {
          ketboardBarLang.innerHTML = languages[0].lang; 
        });
      } else {
        document.querySelectorAll('.keyboard-bar-lang').forEach((ketboardBarLang) => {
          ketboardBarLang.innerHTML = languages[setLang + 1].lang; 
        });
      }
      
      generateKeyboard (input, parent, setLang);
    } else if (key === 'space') {
      input.value += ' ';

    } else {
      input.value += key;     
    }
  });
}

let generateKeyboard = (element, parent, id) => {
  const alphabet = languages[id].alphabet;
  const alphabetArray = alphabet.split('');
  const keys = document.createElement('div');        
  keys.className = 'keyboard-keys';
    
  for (let i = 0; i < alphabetArray.length; i++) {
    const button = document.createElement('button');
    button.innerHTML = alphabetArray[i];      
    setButton(element, button, alphabetArray[i], null);
    keys.appendChild(button);
  }
  parent.appendChild(keys);
}

document.querySelectorAll('.input-keyboard').forEach((element) => {
  const parent = element.parentNode;
  const bar = document.createElement('div');
  const backspace = document.createElement('button');
  backspace.innerHTML = '⌫';
  setButton(element, backspace, 'backspace');

  const space = document.createElement('button');
  space.innerHTML = '␣';
  space.className = 'keyboard-bar-space';
  setButton(element, space, 'space');

  const lang = document.createElement('button');
  lang.innerHTML = languages[1].lang;
  lang.className = 'keyboard-bar-lang';
  setButton(element, lang, 'lang', parent);

  bar.appendChild(backspace);
  bar.appendChild(space);
  bar.appendChild(lang);
  bar.className = 'keyboard-bar';
  parent.appendChild(bar);

  generateKeyboard(element, parent, 0);
});

