let y=confirm("one divide by zero kardun?")
if(y==true){
    let yy=confirm("Ek bar phir soch le ....")
    if(yy==true){
        let x=document.getElementById("na_manra").style.display="block"
        let b1=document.getElementById("btn1").innerHTML="Na Manra"
        let b2=document.getElementById("btn2").innerHTML="Bilkul hi na Manra"

    }
    else{
        document.getElementById("na_manra").style.display="none"
        let z=document.getElementById("phatgo").style.display="block"
        let b1=document.getElementById("pt1").innerHTML="phatgayi? "
    }
    
}
else{
    alert("bachgo bc marjato abhi chal bhg ja ab yahan te khilwaaun toh game shame 😒")
    document.getElementById("nikal").style.display="block"
}
let bt1=()=>{
    alert("bhai fir soch le ek bar...")
    document.getElementById("na_manra").style.display="none"
    let z=document.getElementById("na_manu").style.display="block"
    let b1=document.getElementById("btn3").innerHTML="soch lia age badh"
    let b2=document.getElementById("btn4").innerHTML="tera baap hun mc baap ko mat sikha"
    
}
let bt2=()=>{
    alert("na manego? bilkul na manego?...")
    document.getElementById("na_manra").style.display="none"
    let z=document.getElementById("na_manu").style.display="block"
    let b1=document.getElementById("btn3").innerHTML="soch lia age badh"
    let b2=document.getElementById("btn4").innerHTML="tera baap hun mc baap ko mat sikha"
    
}
let bt3=()=>{
    document.getElementById("na_manu").style.display="none"
    alert("Marna chahto hai ka bsdk?")
    let z=document.getElementById("marobc").style.display="block"
    let b1=document.getElementById("m1").innerHTML="hannn"
    let b2=document.getElementById("m2").innerHTML="aree bachpan te marne ka shaunk hai"

}
let pt1=()=>{
    let x=confirm("han bhai phat gayi")
    if(x==true){
        alert("toh tailor ke pass jake silwale lodu 🤣🤣💦💦")
        let z=document.getElementById("phatgo").style.display="none"
        document.getElementById("nikal").style.display="block"
    }
    else{
        let z=document.getElementById("phatgo").style.display="none"
        bt1()
    }
}
let bt4=()=>{
    let z=document.getElementById("marobc").style.display="none"
    alert("zyada gand mein khujli machri na toh ke? marego randikkeeeee")
    document.getElementById("dabao").style.display="block"
    document.getElementById("d1").innerHTML="gand mein dum ho tabhi dabayein"
}
let red=()=>{
    document.getElementById("d1").onclick = function () {
        location.href = "https://pnrtscr.com/kqrkc7";
    };
}
