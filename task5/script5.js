

const myPromise = new Promise((resolve, reject) => {
    setTimeout(function () {
        let number = Math.floor((Math.random() * 100) + 1);
        if (number % 2) {
            reject(`Завершено c ошибкой. Сгенерированное число — ${number}`)
        } else {
            resolve(`Завершено успешно. Сгенерированное число — ${number}`);
        }
    }, 3000);


    


})

myPromise.then((result) => {
    console.log(result);
}).catch((result) => {
    console.log(result);
})