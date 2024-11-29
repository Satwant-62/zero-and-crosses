/* matriks
    0 1 2
    3 4 5
    6 7 8
    */
const vining_patun=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
chek_vinu=() => {
    for(let patun of vining_patun) {
        if(boksez[patun[0]].innerText!=""&&boksez[patun[1]].innerText!=""&&boksez[patun[2]].innerText!=""&&boksez[patun[0]].innerText==boksez[patun[1]].innerText&&boksez[patun[1]].innerText==boksez[patun[2]].innerText) {
            masez_kontenu.classList.remove("hqid");
            masez.innerText=`kungrats! "${boksez[patun[0]].innerText}" iz Du vinu.`;
            masez.setAttribute("style","background-color:#0f0;");
            for(let boks of boksez) boks.disabled=true;
        }
    }
};
let masez_kontenu=document.querySelector(".masez_kuntenu");
let masez=document.querySelector("#masez");
let niw_gem_butun=document.querySelector("#niw_butun");
let boksez=document.querySelectorAll(".boks");
let ining=["O","X"][Math.floor(Math.random()*2)],inings_kqwnt=0;
boksez.forEach((boks) => {
    boks.addEventListener("click",() => {
        boks.innerText=ining;
        ining=(ining=="O"? "X":"O");
        boks.disabled=true;
        if(++inings_kqwnt>4) chek_vinu();
    });
});

niw_gem_butun.addEventListener("click",() => {
    ining=["O","X"][Math.floor(Math.random()*2)];
    for(let boks of boksez) {
        boks.disabled=false;
        boks.innerText="";
    }
    masez_kontenu.classList.add("hqid");
});