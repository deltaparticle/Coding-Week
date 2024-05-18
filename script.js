fetch("https://coding-week-2024-api.onrender.com/api/data")
    .then(response => response.json())
    .then(data => {console.log(data);

        //changing image source
        
        for (let i = 0; i < 10; i++) {
            document.getElementById('img' + (i + 1)).src = data[i].image;
        }
        

        //changing headline

        for (let i = 0; i < 10; i++) {
            document.getElementById('title' + (i + 1)).textContent = data[i].headline;
        }
        

        //changing dates

        for (let i = 0; i < 10; i++) {
            document.getElementById('d' + (i + 1)).textContent = data[i].date;
        }
        

        //changing type while capitalising the first letter

        for (let i = 0; i < 4; i++) {
            let type = data[i].type;
            document.getElementById('t' + (i + 1)).textContent = type.charAt(0).toUpperCase() + type.slice(1);
        }
        
        

        // changing author

        for (let i = 0; i < 4; i++) {
            document.getElementById('w' + (i + 1)).textContent = data[i].author;
        }
        
        
    })
    