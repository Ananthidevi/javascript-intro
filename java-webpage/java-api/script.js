//javascript API

// "https://fakestoreapi.com/products"

fetch( "https://fakestoreapi.com/products").then(res =>{
    
//response print correct data or else catch the error promises//
//promises -then ,catch
if(!res.ok){  //api message status ok-success, pendng (no name) error or err - failed
    throw new Error("API fetching failed")
    //throw new eeroe is custom error
        
    }
    return res.json();
    //convering all datatype in json is obj data type

}).then(data =>{
console.log(data);
//res to data (api data assigned from res to data)callback

}).catch(err =>{
    console.log(err); //console.error(err)
})
//fetch - learnt about how to make api call
//promises then catch // carring api form one pace to another place
