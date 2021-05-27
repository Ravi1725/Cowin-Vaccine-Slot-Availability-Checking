/*try{
global.fetch = require("node-fetch");
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
}catch(err){ throw error}

let pincode=491335;
let Original_date=20-05-2021
const api_url='https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=491335&date=21-05-2021'
async function getapi(url){
    const response=await fetch(url);
    var data = await response.json();
    console.log("reached here");
    console.log(data['centers']);
}

getapi(api_url);
function raj(){
let pincode=491335;
let date=7;
    let i;
    for (i = 1; i <= date; i++) {
    var l, array_result;
    let someDate = new Date();
        let duration = i; //In Days
        someDate.setTime(someDate.getTime() + duration * 24 * 60 * 60 * 1000);
        let c = someDate.toISOString().split('T')[0];
        let Original_date = c.split('-').reverse().join('-');
        async function fetchText() {
          global.fetch = require("node-fetch");
          let response = await fetch(
            `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pincode}&date=${Original_date}`
          );
          l = await response.json();
          console.log(l['centers']);
        }
        fetchText();
    }
}
    raj();*/ 
   /* global.fetch = require("node-fetch");
    fetch('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=491335&date=21-05-2021')
  .then(response => response.json())
  .then(data => console.log(data));
    */

  function availablity(){
    let dateRange=document.getElementById('data-date');
    let pincode=document.getElementById('data-pin');
    let age=document.getElementById('data-age');
    let cost=document.getElementById('data-free');
    let availability=document.getElementById('data-available');
    let table=document.getElementById('table');

    for(let i=0;i<=dateRange.value;i++){
    var today = new Date();
    var date =(today.getDate()+i) + '-' + (today.getMonth()+1) +'-' + today.getFullYear();
    
    if(dateRange.value!=="" &&
      pincode.value!=="" &&
      age.value!=="" &&
      cost.value!=="" &&
      availability.value!==""
    ){
        console.log(dateRange.value);
        console.log(pincode.value);
        console.log(age.value);
        console.log(cost.value);
        console.log(availability.value);
        console.log(date.value);
        const pinCode=pincode.value;
        

        async function fetchText() {
          let response = await fetch(
            `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pinCode}&date=${date}`
          );
          data = await response.json();
          //console.log(data);
          var array_result=[...data['centers']];
          //console.log(array_result);            array_result.forEach(element=>{
              //console.log(element);
              element['sessions'].forEach(subElement =>{
                  console.log(subElement['age']);
                  if(subElement['available_capacity']>0 && subElement['min_age_limit']<=age.value)
                  {
                      const row = document.createElement('TR');
                      table.appendChild(row);
                      const td = row.insertCell(-1);
                      remove_child(); 

                      const td0=row.insertCell(0);
                      td0.setAttribute('data-ns-test', 'item-date');
                      const td1=row.insertCell(1);
                      td1.setAttribute('data-ns-test', 'item-available-capacity');
                      const td2=row.insertCell(2);
                      td2.setAttribute('data-ns-test', 'item-vaccine');
                      const td3=row.insertCell(3);
                      td3.setAttribute('data-ns-test', 'item-min-age');
                      const td4=row.insertCell(4);
                      td4.setAttribute('data-ns-test', 'item-pincode');
                      const td5=row.insertCell(5);
                      td5.setAttribute('data-ns-test', 'item-hospital-name');
                      const td6=row.insertCell(6);
                      td6.setAttribute('data-ns-test', 'item-state');
                      const td7=row.insertCell(7);
                      td7.setAttribute('data-ns-test', 'item-district');
                      const td8=row.insertCell(8);
                      td8.setAttribute('data-ns-test', 'item-block-name');
                      const td9=row.insertCell(9);
                      td0.setAttribute('data-ns-test', 'item-fee');
                      const td10=row.insertCell(10);
                      td10.setAttribute('data-ns-test', 'item-availability');

                      td0.innerText=date;
                      td1.innerText=subElement['available_capacity'];
                      td2.innerText=subElement['vaccine'];
                      td3.innerText=subElement['min_age_limit'];
                      td4.innerText=pincode.value;
                      td5.innerText=element['name'];
                      td6.innerText=element['state_name'];
                      td7.innerText=element['district_name'];
                      td8.innerText=element['address'];
                      td9.innerText=cost.value;
                      td10.innerText=availability.value;
                      table.appendChild(row);  

                      
                  }
                  else
                  {
                      const row = document.createElement('TR');
                      td=row.insertCell(-1);
                      table.appendChild(row);
                      remove_child(); 
                      td1=row.insertCell(0);
                      td1.innerText="No slot is available";
                      table.appendChild(row);
                  }
              });
          });
          }
          fetchText();

}
}
clear_fields();

}

function clear_fields() {
  document.getElementById('data-date').value = '';
  document.getElementById('data-pin').value = '';
  document.getElementById('data-age').value = '';
  document.getElementById('data-free').value = '';
  document.getElementById('data-available').value = '';
}
function remove_child() {
  const total = document.getElementById('table').lastElementChild;
  total.innerHTML = '';
}
