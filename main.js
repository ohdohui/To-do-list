// let's get our object
let input = document.querySelector('#add');
let btn = document.querySelector('#btn');
let list = document.querySelector('#list');
let el = document.getElementsByTagName('li');

// now we will create a funtion that will allow us to add elenent on button click

btn.addEventListener('click',() => {
    let txt = input.Value;
    if(txt === ""){
        alert('you must write something');
    }else{
        let li = document.createElement('li');
        li.innerHTML = txt;
        list.insertBefore(li, list.childNodes[0]);
        input.value= '';
    }
})

// now let;s write the function that will allows us to mark the done subject
list.addEventListener('click',() =>{
    if(e.target.tagName == 'Li'{
        e.target.classList.toggle('checked');
    })
})
