
$.ajax("https://myjson.dit.upm.es/api/bins/j8nl", {
    success:function(ress){
        // console.log(ress);
        Alldata = ress
        reRender(ress)
        
    },
    error:function(ress){
        console.log(ress);
    }
})
// ===========================================//
function reRender(data) {
    $(".malumotOl").html("")
    data.map(item =>{
        let col = `
            <div class = "col-6  col-lg-3 col-md-4">
                <div class = "card my-2 p-4 text-center">
                    <img class="images" src="${item.img_src}">
                    <h3>${item.name}</h3>
                    <h2>${item.cost}</h2>
                   
                    <button onclick= korish() class="mx-5 w-50 korish  btn btn-warning ">Ko'rish</button>
                    <button onclick= sotibOlish() class="mx-5 w-50 my-2 btn btn-info">Sotib olish</button>
                </div>            
            </div>
        `
        // console.log(col);
        $(".malumotOl").append(col)
    })
}
let searchResalt = []

function searchText(value){
    searchResalt = Alldata.filter(item =>{
        return item.name.toLowerCase().includes(value.value.toLowerCase())
    })
    $(".malumotOl").html("")
    reRender(searchResalt)
}


