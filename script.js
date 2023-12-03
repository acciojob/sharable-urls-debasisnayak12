// your code here
const urlId = document.getElementById("url");
const formInput = document.getElementById("form");

formInput.addEventListener('submit',(e)=>{
	e.preventDefault();
	const name = document.getElementById("name").value;
	const year = document.getElementById("year").value;

	let queryString = `&name=${name}`;
	if(year){
		queryString += `&year=${year}`;
	}
	const updateUrl = `https://localhost:8080/${queryString}`;
	urlId.innerText = updateUrl;
});