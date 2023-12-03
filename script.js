// your code here
 document.getElementById('myForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const year = document.getElementById('year').value;

      const queryString = `?name=${encodeURIComponent(name)}&year=${encodeURIComponent(year)}`;

      document.getElementById('url').innerText = `https://localhost:8080/${queryString}`;
    });