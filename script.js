let ans1 = document.querySelector ('.ans1')
let ans2 = document.querySelector ('.ans2')
let ans3 = document.querySelector ('.ans3')

function toggle (cls){
    if (cls== 'ans1'){
        if (ans1.style.display == 'none'){
            ans1.style.display ='block'
        }
        else{
            ans1.style.display = 'none'
        }
    }


if (cls== 'ans2'){
        if (ans2.style.display == 'none'){
            ans2.style.display ='block'
        }
        else{
            ans2.style.display = 'none'
        }
    }



    if (cls== 'ans3'){
        if (ans3.style.display == 'none'){
            ans3.style.display ='block'
        }
        else{
            ans3.style.display = 'none'
        }
    }

}

