function opzioni(){
    let p = document.getElementById("choose");
    let select = document.createElement("select");
    select.setAttribute("id","scelta");
    let opt = document.createElement("option");
    opt.setAttribute("value","");
    opt.setAttribute("selected", "true");
    opt.setAttribute("disabled", "true");
    opt.setAttribute("hidden", "true");
    let t = document.createTextNode("Scegli l'operazione");
    opt.appendChild(t);
    select.appendChild(opt);
    let text = ["Inversa", "Determinante"]
    for(let i = 0; i < 2; i++){
        opt = document.createElement("option")
        t = document.createTextNode(text[i])
        opt.appendChild(t);
        select.appendChild(opt);
    }
    select.addEventListener("change", function(){
        createSolver();
    });
    p.appendChild(select);
}

//invocato quando si sceglie l'operazione
function createSolver(){
    let solverLen = document.getElementById("configSolver").childNodes.length;
    if(solverLen==1)createSelect();
}

function createSelect(){
    let div = document.getElementById("configSolver");
    let select = document.createElement("select");
    select.setAttribute("id", "rowCol");
    let opt = document.createElement("option");
    opt.setAttribute("value","");
    opt.setAttribute("selected", "true");
    opt.setAttribute("disabled", "true");
    opt.setAttribute("hidden", "true");
    let t = document.createTextNode("Scegli numero di righe e colonne")
    opt.appendChild(t);
    select.appendChild(opt);
    for(let i =2; i<7; i++){
        opt = document.createElement("option");
        opt.setAttribute("value", i)
        t = document.createTextNode(i);
        opt.appendChild(t);
        select.appendChild(opt);
    }
        select.addEventListener("change", function(){
            //text, select e br 
            if(div.childNodes.length==3){
            createMatrix(select.options[select.selectedIndex].value);
            }
            else {
                document.getElementById("mainSolver").remove();
                createMatrix(select.options[select.selectedIndex].value);
            }
        })
        div.appendChild(select);
        div.appendChild(document.createElement("br"));
}    

//n size della matrice
function createMatrix(n){
    let div = document.getElementById("configSolver");
    let main = document.createElement("div");
    main.setAttribute("id", "mainSolver");
    main.setAttribute("class", "container"); 
    for(let r = 0; r < n; r++){
        for(let c = 0; c < n; c++){
            input = document.createElement("input");
            input.setAttribute("id",r+"."+c);
            input.setAttribute("size", "5")
            main.appendChild(input);
        }
        main.appendChild(document.createElement("br"));
    }
    let btn = document.createElement("button");
    t = document.createTextNode("Calcola");
    btn.appendChild(t)
    btn.setAttribute("class", "btn");
    btn.style.background = "#2c3e50";
    btn.style.color = "#ffffff";
    btn.style.marginTop = "1%";
    btn.addEventListener("click", function(){
        calcola();
    });
    main.appendChild(btn);
    div.appendChild(main)   
}