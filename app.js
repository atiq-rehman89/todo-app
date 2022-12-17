const todos = document.getElementById('input')
        const submitBtn = document.querySelector('#submit')
        submitBtn.addEventListener('click', addTodos)
        let serilNo = 1;
        function addTodos(){
            if(todos.value === ''){
                alert('Please enter some text here')
            }else{

                let todoDiv = document.createElement('div');
                let closeBtn = document.createElement('span')
                closeBtn.innerText = 'X'
                todoDiv.classList.add('item')
                let todoText = todos.value
                todoDiv.innerText =  `${serilNo})  ${todoText}`
                serilNo++
                
                // console.log(serilNo);
                todoDiv.appendChild(closeBtn)         
                let mainBody =document.body.appendChild(todoDiv)
                
                closeBtn.addEventListener('click', ()=>{
                    todoDiv.remove();    
                })
                todos.value = "";
            }   
        }