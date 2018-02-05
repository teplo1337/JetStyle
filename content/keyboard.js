/* языки */

let languages = [
  { alphabet: 'abcdefghijklmnopqrstuvwxyz1234567890', lang: 'en'},
  { alphabet: 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя1234567890', lang: 'ru'},
  { alphabet: 'любой другой язык', lang: 'ra'}
];

/* назначения клавиш */

let setButton = (input, element, key, parent) => {
  element.setAttribute('type', 'button');
  element.addEventListener('click', () => {
    if (key === 'backspace') {
      input.value = input.value.substring(0, input.value.length -1)

    } else if (key === 'lang') { 

      console.log(parent.dataset.lang)
      let setLang = Number(parent.dataset.lang);
      parent.dataset.lang = ++setLang;
      parent.removeChild(parent.lastChild);

      console.log(parent.dataset.lang)
      if (!languages[setLang]) {
        parent.dataset.lang = 0;
        setLang = 0;
      }    

      if(setLang === languages.length - 1) {
        parent.querySelectorAll('.keyboard-bar-lang')[0].innerHTML = languages[0].lang; 
      } else {
        parent.querySelectorAll('.keyboard-bar-lang').innerHTML = languages[setLang + 1].lang;
      }
      
  console.log(parent.dataset.lang)
      generateKeyboard (input, parent, setLang);
    } else if (key === 'space') {
      input.value += ' ';

    } else {
      input.value += key;     
    }
  });
}

/* добавляем нижнию часть клавиатуры */

let generateKeyboard = (element, parent, id) => {
  const alphabet = languages[id].alphabet;
  const keys = document.createElement('div');        
  keys.className = 'keyboard-keys';
    
  for (let i = 0; i < alphabet.length; i++) {
    const button = document.createElement('button');
    button.innerHTML = alphabet[i];      
    setButton(element, button, alphabet[i], null);
    keys.appendChild(button);
  }
  parent.appendChild(keys);
}


/* добавляем всем элементам с классом .input-keyboard клавиатуры на странице */

document.querySelectorAll('.input-keyboard').forEach((element) => {
  const parent = element.parentNode;
  parent.dataset.lang = 0;
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

