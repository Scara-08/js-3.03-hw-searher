
let url = "https://63d304794abff88834170d21.mockapi.io/ss"

 fetch(url).then((response) => {
    if (!response.ok) {
        console.log('error');
    }
    return response.json()
})
// .then((data) => {
    function displayData(data) {
        container.innerHTML = "";
    data.forEach(item => {container.innerHTML +=`<div class="Xiao">
    <p>ID: ${item.id}</p>
        <p>${item.name}<p/> 
        <p>${item.age}<p/>
        <img src="${item.avatar}"/>
        <p>${item.desprition}<p/>
        <p>Address: ${item.address}</p>
        <div/>`;
    });
}
// console.log(data);

// }).catch((err) => {
//     console.log(err);
// })

   




fetch(url)
.then((response) => {
    if (!response.ok) {
        console.log('error');
    }
    return response.json();
})
.then((data) => {
    displayData(data);
    console.log(data);
})
.catch((err) => {
    console.log(err);
});




const container = document.getElementById('res')



function search() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase();

    fetch(url)
        .then((response) => {
            if (!response.ok) {
                console.log('error');
            }
            return response.json();
        })
        .then((data) => {
            const filteredData = data.filter(item => item.name.toLowerCase().includes(searchTerm));
            displayData(filteredData);
        })
        .catch((err) => {
            console.log(err);
        });
}






































// let myPromise = new Promise((res, rej)=> {
//     console.log("client has request to get data");
// setTimeout(() => {
//     res("data get success")
//     rej("error to get data")
// }, 2000)
// }).then((result) => {
// console.log(result);
// }).catch((error) => {
// console.log(error);
// })

//  myPromise.then((result) => {
//     console.log(result);
//     }).catch((error) => {
//     console.log(error);
//     })
 




















// function getData () {
//     return new Promise((res,rej) => {
//      setTimeout(()=>{
//         res('success')
//      }, 1500)
//     })
// }

// getData().then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })

