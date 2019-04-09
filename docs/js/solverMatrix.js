let matrix = [];
let n;

function calcola(){
    let op = document.getElementById("scelta").options[document.getElementById("scelta").selectedIndex].value;
    if(checkMatrix()){
        alert("Compila i campi correttamente");
    }else{
        if(op==="Inversa"){
            try {
                //issue https://github.com/josdejong/mathjs/issues/1463
                if(math.det(matrix)==0){
                    alert("Error: Cannot calculate inverse, determinant is zero");
                }else{
                    printInversa(math.inv(matrix))
                }
            } catch (error) {alert(error);}
        }else{
            if(op==="Determinante"){
            try {
                printDeterminate(math.det(matrix));
            } catch (error) {alert(error);}
            }
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
    let checked;
    while(!toReturn && r < n){
        let col = [];
        while(!toReturn && c < n){
            let cell = document.getElementById(r+"."+c).value;
            checked = checkCell(cell);
            
            if(checked == null){
                toReturn = true;
            }else{
                col.push(checked);
            }
            c++;
        }
        matrix.push(col);
        c=0;
        r++;
    }
    return toReturn;
}
//restituisce null se c'è un errore nell input
function checkCell(cell){
    let toReturn;
    let regex = {
     integer: /^(\-|\+)?([0-9])+$/g,
     real: /^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/,
     rational: /^(\-|\+)?([0-9])+\/\d+$/g
    }
    if(regex.integer.test(cell)){
        toReturn = parseInt(cell);
    }else{
        if(regex.real.test(cell)){
            toReturn = parseFloat(parseFloat(cell).toFixed(2));
        }else{
            if(regex.rational.test(cell)){
                let app = cell.split("/");
                toReturn = app[0] / app[1];
                toReturn.toFixed(2);
            }else toReturn = null;
        }
    }
    return toReturn;
}