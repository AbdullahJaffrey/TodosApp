function Operation_todos(){
    document.getElementById('Message').innerText = '';        


    let data = document.getElementById('input-todos').value;
    if (data === ''){
        document.getElementById('Message').innerText = 'Kindly, Enter some value!';
        document.getElementById('Message').style.color = 'red';
    }
    else{
        document.getElementById('Message').innerText = 'Thanks for adding';        
        document.getElementById('Message').style.color = 'green';
        let box = document.getElementById('box');
        let li = document.createElement('li');
        li.textContent = data;

        let a = document.createElement('a');
        a.textContent='X'
        a.href='javascript:void(0)';
        a.className='remove';
        li.appendChild(a);

        let pos = box.firstElementChild;

        if (pos === null){
            box.appendChild(li);
        }
        else{
            box.insertBefore(li, pos);
        }
        
    }
   document.getElementById('input-todos').value='';

}

let btn=document.querySelector('ul');
btn.addEventListener('click',(e)=>{
    let box = document.getElementById('box');
    let li = e.target.parentNode;
    box.removeChild(li);
})