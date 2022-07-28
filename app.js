// function httpGetasync(theUrl,callback) {
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.onreadystatechange = function() {
//         if (xmlHttp.readyState == 4 && xmlHttp.status == 200) callback(xmlHttp);
//     };
//     xmlHttp.open("GET",theUrl,true);
//     xmlHttp.send(null);
// }

// httpGetasync('https://picsum.photos/200/300',(data) =>{
//     console.log(data);
//     document.getElementById('img_1').setAttribute('src',data.responseURL);

//     httpGetasync('https://picsum.photos/200/300',(data) =>{
//         document.getElementById('img_2').setAttribute('src',data.responseURL);

//         httpGetasync('https://picsum.photos/200/300',(data) =>{
//             document.getElementById('img_3').setAttribute('src',data.responseURL);

//         })
//     })
// });


//promise

function httpGetasync(theUrl,resolve,reject) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) resolve(xmlHttp);
    };
    xmlHttp.open("GET",theUrl,true);
    xmlHttp.send(null);
}

const currentPromise = new Promise((resolve, reject) => {
    httpGetasync('https://picsum.photos/200/300',resolve)
});
const promise2 = new Promise((resolve, reject) => {
    httpGetasync('https://picsum.photos/200/300',resolve)
});
const promise3 = new Promise((resolve, reject) => {
    httpGetasync('https://picsum.photos/200/300',resolve)
});

//async
const execurAsync = async () => {
    try{
        const response = await currentPromise;
        document.getElementById('img_1').setAttribute('src',response.responseURL);
    
        const respons2 = await promise2;
        document.getElementById('img_2').setAttribute('src',respons2.responseURL);
    
        const respons3 = await promise3;
        document.getElementById('img_3').setAttribute('src',respons3.responseURL);
    }catch(e){
        console.log(e);
    }
    
}
execurAsync();
//end async


// currentPromise
//   .then((data) => {
//     document.getElementById('img_1').setAttribute('src',data.responseURL);
//     return promise2;
//   })
//   .then((data)=>{
//     document.getElementById('img_2').setAttribute('src',data.responseURL);
//     return promise3;
//   })
//   .then((data)=>{
//     document.getElementById('img_3').setAttribute('src',data.responseURL);
//     // return promise4;
//   })
//   .catch((err) => {
//     console.log(err);
//   });




