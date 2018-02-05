let setButton = (input, element, key) => {
  element.setAttribute('type', 'button');
  element.addEventListener('click', () => {
    if (key === 'backspace') {
      input.value = input.value.substring(0, input.value.length -1)
    } else if (key === 'lang') {

    } else if (key === 'space') {
      input.value += ' ';
    } else {
      input.value += key;     
    }
  });
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
  lang.innerHTML = 'rus';
  setButton(element, lang, 'rus');

  bar.appendChild(backspace);
  bar.appendChild(space);
  bar.appendChild(lang);
  bar.className = 'keyboard-bar';
  parent.appendChild(bar);
    
  const alphabet = 'abcdefghijklmnopqrstuvwxyz1234567890';
  const alphabetArray = alphabet.split('');
  const keys = document.createElement('div');        
  keys.className = 'keyboard-keys';
    
  for (let i = 0; i < alphabetArray.length; i++) {
    const button = document.createElement('button');
    button.innerHTML = alphabetArray[i];      
    setButton(element, button, alphabetArray[i]);
    keys.appendChild(button);
  }
  parent.appendChild(keys);
});

