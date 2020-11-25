function load_info(){
    console.log("cu")
    for (let index = 0; index < 300; index++) {
        document.getElementById("main").innerHTML+="<br/>"
        
    }
    // fetch("data/shopinfo.json")
    // .then(response=>response.json())
    // .then(data=>{
        
        
    //     data.data.forEach(element => {
    //         // console.log(element)
    //         document.getElementById("list-items").innerHTML+=item_shop(element.img,element.price)
    //     });
    // })
}
function item_shop(img,price){
    var code = "<article class='item-shop'> \
                    <div class='container-image'> \
                        <img src="+img+" alt=''> \
                    </div> \
                    <span class='price'>$"+price+"$</span> \
                    <a href=''>Comprar</a> \
                </article>"
    return code
}