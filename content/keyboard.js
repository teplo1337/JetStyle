document.querySelectorAll('.input-keyboard').forEach((element) => {
    let parent = element.parentNode;
    let label = document.createElement('label');
    
    label.innerHTML = '<b>Новый элемент</b>';
    parent.appendChild(label);
    
    let alphabet = 'abcdefghijklmnopqrstuvwxyz 1234567890';
    let alphabetArray = alphabet.split('');
    let keys = document.createElement('div');
    

    for (let i = 0; i < alphabetArray.length; i++) {
      let button = document.createElement('button');
      button.innerHTML = alphabetArray[i];
      keys.appendChild(button);
    }
    parent.appendChild(keys);
});
