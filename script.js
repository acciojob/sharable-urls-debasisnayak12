// your code here
let urlId = document.getElementById("url");
let formInput = document.getElementById("form");

formInput.addEventListener('submit',(event)=>{
	event.preventDefault();
	let name = document.getElementById("name").value;
	let year = document.getElementById("year").value;

	let queryString = `&name=${name}`;
	if(year){
		queryString += `&year=${year}`;
	}
	let updateUrl = `https://localhost:8080/${queryString}`;
	urlId.textContent = updateUrl;
});