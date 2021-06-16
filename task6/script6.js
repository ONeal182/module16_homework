let inputValue = document.querySelector('.idUser');
let goUser = document.querySelector('.goUser');
let doUser = document.querySelector('.doUser');
goUser.addEventListener('click', () =>{
    fetch(`https://jsonplaceholder.typicode.com/users/${inputValue.value}/todos`).then((response)=>{
    const result = response.json();
    return result;
}).then((data) => {
    if(data.length === 0){
        doUser.innerHTML = '';
        alert('Пользователь с указанным id не найден')
    }else{
        doUser.innerHTML = '';
        data.forEach(element => {
            let listHtml = 
            `
            <li>Название задачи ${element.title}</li> 
            <li>Статус задачи ${element.completed}</li> 
            `;
            doUser.innerHTML += listHtml;
        })
        
    }
}).catch(()=>{
    console.log('error');
});
})
