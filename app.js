

let gallery = document.querySelectorAll('.same')
 document.querySelector('#tabs').addEventListener('click',  (event)  =>   {

// console.log(event.target.dataset.category)
filtersearch(event.target.dataset.category)

})


let filtersearch  =  (valu) => {
    console.log(valu)
gallery.forEach((current) => {
    // console.log(current.dataset.category)
   console.log(current);
if ( current.dataset.category == valu || valu == 'all') {
    current.style.display = 'block'
}
else{
    
    current.style.display = 'none'
}
})
}















function imghenderl(nameImg){
    let same = document.getElementsByClassName('same')
    console.log(same);
  arr.forEach((valu , index) => {

    if(nameImg == same){
       same.style.display = 'block'
       //    same.style.display = 'block'
    }else if(valu == 'all'){
        
        same.style.display = 'block'
    }
    else{
        same.style.display = 'none'

    }
    // if (nameImg == valu.name) {
    //     next.innerHTML += `
    //       <img src="${valu.img}" alt="" srcset="">
        
    //     `
    //     nameImg.style.display = 'block'
    // }else{
    //     nameImg.style.display = 'none'
    //     // document.getElementsByTagName('img').style.display = 'none'

    // }
  })
}