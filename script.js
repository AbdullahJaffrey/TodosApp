document.getElementById('submit-btn').addEventListener("click",()=> {
    const dob = document.getElementById('date').value
    console.log(dob)
  })

const person = {

    'name': 'Noah',
    'class': 1,
    'age': 2,
    'subject' : ['Urdu', 'Science', 'Pakistan Studies', 'Swedish'],
    'address' : {
    'area' :  'Sollentuna',
    'country': 'Sweden',
    },
    'extracurricularactivity' : ['football', 'jetsu']

}

console.log(person.name)
console.log(person.address.country)
console.log(person.extracurricularactivity[1])
console.log(person.subject[1] = 'Social Studies')
console.log(Object.keys(person))

const todos = []

document.getElementById('todosubmit').addEventListener("click",()=> {
    const todo_data = document.getElementById('todoinput').value
    var data = []
    function valueexist(){
        if (todo_data === ''){
            alert('No Value Inserted!')
        }
        else{
            alert('Thanks for adding')
            todos.push(todo_data)
        }

    document.write(todo_data)
    }

    valueexist();
  })


