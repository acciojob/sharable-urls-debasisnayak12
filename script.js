// your code here
let urlId = document.getElementById("url");
let formInput = document.getElementById("form");

formInput.addEventListener('submit',(event)=>{
	event.preventDefault();
	const name = document.getElementById("name").value;
	const year = document.getElementById("year").value;

	const queryString = `&name=${name}`;
	if(year){
		queryString += `&year=${year}`;
	}
	const updateUrl = `https://localhost:8080/${queryString}`;
	urlId.textContent = updateUrl;
});