const numberList = document.querySelector('.numberList');
const numberLimit = document.querySelector('.numberLimit');
const submitBtn = document.querySelector('.submitBtn');
const mainBlock = document.querySelector('.mainBlock');
let urlStorge = localStorage.getItem('urlStorge');
let error;

const checkInput = (input, text) => {
    let label = document.querySelector(`[for="${input.className}"]`);

    if (input.value > 10 || input.value == '') {

        label.innerHTML = `${text} вне диапазона от 1 до 10`;
        error = true;

    } else {
        label.innerHTML = '';
        error = false;
    }
}
const createElement = (url) =>{
    localStorage.setItem('urlStorge',JSON.stringify(url));
    url.forEach(element => {

        let listHtml = 
        `
        <img src="${element.download_url}" alt="">
        `;
        mainBlock.innerHTML += listHtml;
    })
}
submitBtn.addEventListener('click', () => {
    console.log(error);
    checkInput(numberList, 'Номер страницы');
    checkInput(numberLimit, 'Лимит');
    if(error === false){
        fetch(`https://picsum.photos/v2/list?page=${numberList.value}&limit=${numberLimit.value}`)
        .then((response)=>{
            const result = response.json();
            return result;
        }).then((data) => {
            createElement(data);
            
        });
    }
})
const checkStorge = () =>{
    if(urlStorge !== null){
        urlStorge = JSON.parse(urlStorge);
        urlStorge.forEach(element => {

            let storgeHtml = 
            `
            <img src="${element.download_url}" alt="">
            `;
            mainBlock.innerHTML += storgeHtml;
        })
        localStorage.clear();
    }
}
checkStorge();
