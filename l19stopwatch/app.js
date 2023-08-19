// UI
const getdisplay = document.querySelectorAll('.display');
const getstartbtn = document.querySelector('.start'), 
      getpausebtn = document.querySelector('.pause'),
      getresetbtn = document.querySelector('.reset');
    
const getdlpsec = document.getElementById('dlpsecond');
const getdlpmlsec = document.getElementById('dlpmillisecond');
const getmodebtn = document.querySelector('.mode-btn');

let [hour,minute,second,millisecond] = [0,0,0,0];


var setinvdisplay;

// getstartbtn.addEventListener('click',starttime);
// getpausebtn.addEventListener('click',pausetime);
// getresetbtn.addEventListener('click',resettime);


// function starttime(){
//     clearInterval(setinvdisplay);
//     setinvdisplay = setInterval(showdisplay,10);
// }

// function pausetime(){
//     clearInterval(setinvdisplay);
// }

// function resettime(){
//     clearInterval(setinvdisplay);

//     [hour,minute,second,millisecond] = [0,0,0,0];

//     getdisplay.innerHTML = "00 : 00 : 00 : 000";
// }
// function showdisplay(){
//     // console.log('hay');

//     millisecond += 10;

//     if(millisecond === 1000){
//         millisecond = 0;
//         second++;

//         if(second === 60){
//             second = 0;
//             minute++;

//             if(minute === 60){
//                 minute = 0;
//                 hour++;

                
//             }
//         }
//     }

//     // console.log(millisecond);
//     // console.log(second);
//     // console.log(minute);
//     // console.log(hour);

//     let h = hour < 10 ? '0'+hour : hour;
//     let m = minute < 10 ? '0'+minute : minute;
//     let s = second < 10 ? '0'+second : second;
//     let ms = millisecond < 10  ? '00'+millisecond : millisecond < 100 ? '0'+millisecond : millisecond;

//     getdisplay.innerHTML = `${h} : ${m} : ${s} : ${ms}`;

    
// }

var idx = 0;
getdisplay[idx].style.display = "block";

getmodebtn.onclick = function(){

    reloadagain();
    [hour,minute,second,millisecond] = [0,0,0,0];

    getdisplay[idx].style.display = "none";

     idx++;
     
     if(idx > 1){
        idx = 0;
     }

    getdisplay[idx].style.display = "block";

    getmodebtn.innerHTML = `Mode ${idx+1}`;
}


getstartbtn.onclick = function(){
    clearInterval(setinvdisplay);
    setinvdisplay = setInterval(showdisplay,10);
}

getpausebtn.onclick = function(){
    clearInterval(setinvdisplay);
}

getresetbtn.onclick = function(){
    reloadagain();
}

function reloadagain(){
    if(idx === 0){
        clearInterval(setinvdisplay);
        [hour,minute,second,millisecond] = [0,0,0,0];
        getdisplay[idx].innerHTML = "00 : 00 : 00 : 000";
      }else{
          clearInterval(setinvdisplay);
          millisecond = '00';
          second = '00';
          getdlpmlsec.innerHTML = millisecond;
          getdlpsec.innerHTML = second;
      }
}

// function showdisplay(){
//     millisecond++;

//     // console.log(millisecond);

//     if(millisecond <= 9){
//         getdlpmlsec.innerHTML = '0'+millisecond;
//     }

//     if(millisecond > 9){
//         getdlpmlsec.innerHTML = millisecond;
//     }

//     if(millisecond > 99){
//         millisecond = 0;
//         second++;
//         getdlpmlsec.innerHTML = '0' + 0;
//         getdlpsec.innerHTML = '0'+second;
//     }

//     if(second > 9){
//         getdlpsec.innerHTML = second;
//     }
// }

function showdisplay(){
    if(idx === 0){
        millisecond += 10;

    if(millisecond === 1000){
        millisecond = 0;
        second++;

        if(second === 60){
            second = 0;
            minute++;

            if(minute === 60){
                minute = 0;
                hour++;

                
            }
        }
    }

    // console.log(millisecond);
    // console.log(second);
    // console.log(minute);
    // console.log(hour);

    let h = hour < 10 ? '0'+hour : hour;
    let m = minute < 10 ? '0'+minute : minute;
    let s = second < 10 ? '0'+second : second;
    let ms = millisecond < 10  ? '00'+millisecond : millisecond < 100 ? '0'+millisecond : millisecond;

    getdisplay[idx].innerHTML = `${h} : ${m} : ${s} : ${ms}`;

    }else{
            millisecond++;

    // console.log(millisecond);

    if(millisecond <= 9){
        getdlpmlsec.innerHTML = '0'+millisecond;
    }

    if(millisecond > 9){
        getdlpmlsec.innerHTML = millisecond;
    }

    if(millisecond > 99){
        millisecond = 0;
        second++;
        getdlpmlsec.innerHTML = '0' + 0;
        getdlpsec.innerHTML = '0'+second;
    }

    if(second > 9){
        getdlpsec.innerHTML = second;
    }
    }
}
