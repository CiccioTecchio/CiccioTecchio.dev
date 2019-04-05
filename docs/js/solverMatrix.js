let matrix = [];
let n;
function calcola(){
    let op = document.getElementById("scelta").options[document.getElementById("scelta").selectedIndex].value;
    if(checkMatrix()){
        alert("Compila i campi correttamente");
    }else{
        console.log(op);
        if(op=="Inversa"){
            console.log(math.inv(matrix));
        }else{
            alert(math.det(matrix));
        }
    }
    matrix = [];
}
//true vuol dire che c'è un problema nel formato dell'input
function checkMatrix(){
    let toReturn = false;
    n = document.getElementById("rowCol").options[document.getElementById("rowCol").selectedIndex].value;
    let r=0;
    let c=0;
    
    while(!toReturn && r < n){
        let col = [];
        while(!toReturn && c < n){
            let cell = document.getElementById(r+"."+c).value;
            if(checkCell(cell)){
                toReturn = true;
            }else{
                col.push(cell);
            }
            c++;
        }
        matrix.push(col);
        c=0;
        r++;
    }
    return toReturn;
}

function checkCell(cell){
    let regex = {
     integer: /^(\-|\+)?([0-9])+$/g,
     real: /^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/,
     rational: /^\d+\/\d+$/g
    }
    return !(regex.integer.test(cell) || regex.real.test(cell) || regex.rational.test(cell))?true:false;
}