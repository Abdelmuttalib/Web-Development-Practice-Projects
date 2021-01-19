const posts = [
    {title:"Post One", body:"This is post one"},
    {title:"Post Two", body:"This is post two"}
];

function getposts(){
    setTimeout(() => {
       let output = '';
       posts.forEach((post, index) => {
           output += `<li class='post'>${post.title}</li>`;
       });
       document.body.innerHTML = output;
    }, 1000);
}


function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = true;
        if(!error){
            resolve();
        }else{
            reject("Error: Something Went Wrong!");
        }    
        }, 2000);

    });
    
}

function printL(){
    console.log("IT IS:");
}


//createPost({title:'Post Three', body: 'This is post three'})
//.then(getposts)
//.catch(err => console.log(err));