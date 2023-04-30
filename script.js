const data_arr = [];

document.getElementById('submit-todos').addEventListener('click', ()=>{

    var data = document.getElementById('input-todos').value;
    document.querySelector("span").innerHTML = data;

function Add_datavalue(){
    if (data === ''){
        document.getElementById('Message').innerText = 'Kindly, Enter some value!';
        document.getElementById('Message').style.color = 'red';
    }
    else{
        document.getElementById('Message').innerText = 'Thanks for adding';        
        document.getElementById('Message').style.color = 'green';
        document.getElementById('Task_content').innerText = data;
        data_arr.push(data)

    }
}

Add_datavalue()

})