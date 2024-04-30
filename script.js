//your code here
const btn=document.getElementById("add");
const name=document.getElementById("item-name-input");
const price=document.getElementById("item-price-input");

const total=document.getElementById("total");
const table=document.getElementById("table");
let i=0;
let data=[];
let gtotal=0;


btn.addEventListener("click",(e)=>{
	if (!(name.value.length>0 && price.value.length>0)) {
		return;
	}
	const row=table.insertRow(i++);
	row.insertCell(0).innerText=name.value;
	row.insertCell(1).innerText=price.value;
	data.push({
		name:name.value,
		price:price.value
	})
	gtotal=Number(price.value)+gtotal
	total.innerText="";
	total.innerText=gtotal;
	name.value="";
	price.value="";
})
