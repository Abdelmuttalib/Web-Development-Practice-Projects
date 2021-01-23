fetch('https://regres.in/api/users', {
    method: 'POST',
    headers:{
    'Content-Type': 'application/json'
},
    body: JSON.stringify({
        name: 'aj,ed',
        age: 22,
        family: 'sakhr'
    })
}
)
.then(res => {
    
    
    if(res.ok){
        console.log("FETCHED");
    }else{
        console.log("ELHA");
    }
    }).catch(err => {console.log(err);});