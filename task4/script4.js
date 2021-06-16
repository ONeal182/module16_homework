// 
let visitName = localStorage.getItem('name');
let visitDate = localStorage.getItem('time');
if(visitName === null || visitDate === null){
    let name = prompt('Добро пожаловать! Назовите, пожалуйста, ваше имя');
    let dateTime = new Date();
    localStorage.setItem('name',name);
    localStorage.setItem('time',dateTime);
}else{
    alert(`Добрый день, ${visitName}! Давно не виделись. В последний раз вы были у нас ${visitDate}`);
    let dateTime = new Date();
    localStorage.setItem('time',dateTime);
    
}