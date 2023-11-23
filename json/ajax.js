fetch('./index.json').then(Response =>
{
    if (!Response.ok){
        throw new Error ('HTTP error')
    }
    else{return Response.json()}
}
   
).then(data => console.log(data))
.catch(err => console.error(err))