const getUrl = "https://my.api.mockaroo.com/revenue_2017-2019.json?key=fd36b440";
let dateJson;

let selectedList = document.querySelector(".listSelected");
let goTable = document.querySelector(".goTable");

const request = (yearDate = false) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', getUrl, true);

    xhr.send();

    xhr.onload = function () {

        let result = '';

        dateJson = JSON.parse(xhr.response);
        if (yearDate !== false) {
            result = dateJson.filter(word => word.year == yearDate);
            result.forEach(element => {
                let salesDate = element.sales;
                salesDate = Object.values(salesDate);
                let keySales = Object.keys(salesDate);
                creatTable('.tableList',keySales,'listKey');
                creatTable('.tableList',salesDate,'listYear');


            })

        } else {
            result = dateJson;
            result.forEach(element => {
                let selectedList = document.querySelector(".listSelected");
                let option = document.createElement("option");
                option.setAttribute('value', element.year);
                option.text = element.year;
                selectedList.add(option);

            })

        }
    };
}

const creatTable = (selector, date,classTr) =>{
    
    if(document.querySelector('.'+classTr+'')){
        document.querySelector('.'+classTr+'').remove();
    }
    let tableList =  document.querySelector(selector);
    let tr = document.createElement("tr");
    tr.className = classTr;
    tableList.append(tr);
    date.forEach(sale =>{

        let list = document.querySelector('.'+classTr+'');
        let td = document.createElement("td");
        td.innerHTML = sale;
        list.append(td);
        
    })


}

const goGraph = (year, date) =>{

}

request();

goTable.onclick = function () {
    let year = selectedList.options[selectedList.selectedIndex].value;
    request(year);

};