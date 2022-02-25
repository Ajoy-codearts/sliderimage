

 var pannel = document.getElementsByClassName('pannel');

for (let i=0; i<pannel.length; i++){
    pannel[i].addEventListener('click', function(item){
        for (let i=0; i<pannel.length; i++){
            if(item !== pannel){
                pannel[i].classList.remove('active')
            }
        }
        this.classList.toggle('active');
    })
}



// function clickminus(){
//     var pannel2 = document.getElementsByClassName('pannel');
//     // for(let i=0;i<pannel2.length;i++){
//         pannel2.classList.add('pannel');
//    // }
// }