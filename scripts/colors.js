class Colors{
    constructor(){
        if(localStorage.getItem("SaveColor")==null){
            this.header.style.background ="linear-gradient(to right,#00d2ff, #928dab)";
            this.header.style.borderLeft ="0.5px solid #928dab";
            this.header.style.borderTop ="0.5px solid #928dab";
            document.getElementById("footer").style.borderLeft ="0.5px solid #928dab";
            document.body.style.background = "#00d2ff";
            document.getElementById("footer").style.background = "linear-gradient(to right, #43978D, #F9E07F)";
        }

    this.color1 = document.getElementById("color-1");
    this.color1.addEventListener("click",()=>{
        this.selectColor("color-1");
    });

    this.color2 = document.getElementById("color-2");
    this.color2.addEventListener("click",()=>{
        this.selectColor("color-2");
    });

    this.color3 = document.getElementById("color-3");
    this.color3.addEventListener("click",()=>{
        this.selectColor("color-3");
    });

this.color4 = document.getElementById("color-4");
    this.color4.addEventListener("click",()=>{
        this.selectColor("color-4");
    });

this.color5 = document.getElementById("color-5");
    this.color5.addEventListener("click",()=>{
        this.selectColor("color-5");
    });

this.color6 = document.getElementById("color-6");
    this.color6.addEventListener("click",()=>{
        this.selectColor("color-6");
    });

    this.color7 = document.getElementById("color-7");
    this.color7.addEventListener("click",()=>{
    this.selectColor("color-7");
    });
    

    this.color8 = document.getElementById("color-8");
    this.color8.addEventListener("click",()=>{
        this.selectColor("color-8");
    });

    this.selectColor(localStorage.getItem("SaveColor"));
    }

    selectColor(color){
       
        this.header = document.getElementById("header");
        if(color == "color-1"){
            this.header.style.background ="linear-gradient(to right, #43978D, #F9E07F)";
            this.header.style.borderLeft ="0.5px solid #F9E07F";
            this.header.style.borderTop ="0.5px solid #F9E07F";
            document.getElementById("footer").style.borderLeft ="0.5px solid #F9E07F";
            document.body.style.background = "#43978d";
            document.getElementById("footer").style.background = "linear-gradient(to right, #43978D, #F9E07F)";
        }
        else if(color == "color-2"){
            this.header.style.background ="linear-gradient(to right, #CCABD8, #E4C787)";
            this.header.style.borderLeft ="0.5px solid #E4C787";
            this.header.style.borderTop ="0.5px solid #E4C787";
            document.getElementById("footer").style.borderLeft ="0.5px solid #E4C787";
            document.body.style.background ="#CCABD8";
            document.getElementById("footer").style.background = "linear-gradient(to right, #CCABD8, #E4C787)";
        }

        else if(color == "color-3"){
            this.header.style.background ="linear-gradient(to right, #A7D676, #85CBCC)";
            this.header.style.borderLeft ="0.5px solid #85CBCC";
            this.header.style.borderTop ="0.5px solid #85CBCC";
            document.body.style.background ="#A7D676";
            document.getElementById("footer").style.background = "linear-gradient(to right, #A7D676, #85CBCC)";
        }

        else if(color == "color-4"){
            this.header.style.background = "linear-gradient(to right, #3C4CAD, #F9C449)";
            this.header.style.borderLeft ="0.5px solid #F9C449";
            this.header.style.borderTop ="0.5px solid #F9C449";
            document.getElementById("footer").style.borderLeft ="0.5px solid #F9C449";
            document.body.style.background = "#3C4CAD";
            document.getElementById("footer").style.background = "linear-gradient(to right, #3C4CAD, #F9C449)";
        }
        else if(color == "color-5"){
        this.header.style.background = "linear-gradient(to right, #5a565a, #4d3d)";
            this.header.style.borderLeft ="0.5px solid #5a565a";
            this.header.style.borderTop ="0.5px solid #5a565a";
            document.getElementById("footer").style.borderLeft ="0.5px solid #5a565a";
        document.body.style.background = "#4d463d";
        document.getElementById("footer").style.background = "linear-gradient(to right, #5a565a, #4d3d)";
        }
        else if(color == "color-6"){
        this.header.style.background = "linear-gradient(to right, #623596, #069bc9)";
            this.header.style.borderLeft ="0.5px solid #069bc9";
            this.header.style.borderTop ="0.5px solid #069bc9";
            document.getElementById("footer").style.borderLeft ="0.5px solid #069bc9";
        document.body.style.background = "#623596";
        document.getElementById("footer").style.background = "linear-gradient(to right, #623596, #069bc9)";
        }
        else if(color == "color-7"){
        this.header.style.background = "linear-gradient(to right, yellowgreen, orangered)";
            this.header.style.borderLeft ="0.5px solid orangered";
            this.header.style.borderTop ="0.5px solid orangered";
            document.getElementById("footer").style.borderLeft ="0.5px solid orangered";
        document.body.style.background = "yellowgreen";
        document.getElementById("footer").style.background = "linear-gradient(to right, yellowgreen, orangered)";
        }
        else if(color == "color-8"){
        this.header.style.background = "linear-gradient(to right, blue, red)";
            this.header.style.borderLeft ="0.5px solid red";
            this.header.style.borderTop ="0.5px solid red";
            document.getElementById("footer").style.borderLeft ="0.5px solid red";
        document.body.style.backgroundColor = "blue";
        document.getElementById("footer").style.background = "linear-gradient(to right, blue, red)";
        }
        localStorage.setItem("SaveColor",color);
    }

}
onload = new Colors();
// document.body.style.backgroundImage = "linear-gradient(to right, #00d2ff, #928dab";
