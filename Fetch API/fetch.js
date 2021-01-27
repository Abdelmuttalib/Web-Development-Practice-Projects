function post(){
    console.log("INSIDE");
    fetch('https://reqres.in/api/users?page=2', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: 'tloob50@hotmail.com',
            first_name: 'Abdelmuttalib',
            last_name: 'Alaa',
            avatar: 'https://www.techmerry.com/wp-content/uploads/2014/09/google.jpg'
        })
    }).then(res => {console.log(res.json());}).catch(err => {console.log(err);})
}

async function fetc(){
    await post();
    fetch('https://reqres.in/api/users?page=2')
    .then(res => {
        console.log(res.type);
        if(!res.status){
            throw Error("THAT's Error");
        }
        return data = res.json();
    }).then(data => {
        console.log(data);
        console.log(data.page);
        const mdata = data.data;
        var divv = document.getElementById("app");
        var output = "";
        mdata.forEach((element, index, how) => {
            output += `<div class="one">
                        <p><img src=${element.avatar} alt="avatar"></p>
                        <p class="fname">First Name: ${element.first_name}</p>
                        <p class="lname">Last Name: ${element.last_name}</p>
                       </div>`;
        });
        divv.insertAdjacentHTML('afterbegin', output);
        

    });
}

fetc();


