function printDeterminate(determinante){
    let resultDiv = document.createElement("div");
    let det = formatDet(determinante);
    resultDiv.setAttribute("id","result");
    resultDiv.setAttribute("class", "container");
    resultDiv.setAttribute("align", "center");
    let h3= document.createElement("h3");
    let t = document.createTextNode(det);
    h3.setAttribute("id", "det");
    h3.setAttribute("align", "center");
    h3.appendChild(t);
    resultDiv.appendChild(h3);
    appendResult(resultDiv);
}

function printInversa(inversa){
    console.log(inversa);
    let resultDiv = document.createElement("div");
    resultDiv.setAttribute("id","result");
    resultDiv.setAttribute("class", "container span12 pagination-centered");
    resultDiv.setAttribute("align", "center");
    for(let r=0; r < n; r++){
        let row = document.createElement("div");
        row.setAttribute("class", "row");
        for(let c=0; c < n; c++){
            let col6 = document.createElement("div");
            col6.setAttribute("class", colonFormatter());
            let h6 = document.createElement("h6");
            let t = document.createTextNode(formatCell(inversa[r][c]));
            h6.appendChild(t);
            col6.appendChild(h6);
            row.appendChild(col6);
        }
        resultDiv.appendChild(row);
    }
    appendResult(resultDiv);
}

function appendResult(result){
    let mainDiv = document.getElementById("mainSolver");
    if(mainDiv.contains(document.getElementById("result"))){
        mainDiv.removeChild(document.getElementById("result"));
        mainDiv.appendChild(result);
    }else{
        mainDiv.appendChild(result);
    }
}

function formatDet(num){
    let toReturn = null;
    if(Number.isInteger(num)){
        toReturn = "Il determinante è: "+num;
    }else {
        let fract = math.fraction(num);
        toReturn = "Il determinante è: "+parseFloat(num).toFixed(2)+", la sua frazione è: ";
        toReturn += (fract.s==1)?
        fract.n+"/"+fract.d:
        "-"+fract.n+"/"+fract.d;
    }
    return toReturn;
}

function formatCell(cell){
    toReturn = null;
       if((/^(\-|\+)?([0-9])+$/g).test(cell)){
        toReturn = cell;
    }else{
          let fract = math.fraction(cell);
          toReturn = (fract.s==1)?
          fract.n+"/"+fract.d:
          "-"+fract.n+"/"+fract.d;
        }
    return toReturn;
}

function colonFormatter(){
    let colNum = "col-md-";
    switch (n){
        case "2": colNum+="6";
                break;
        case "3": colNum+="4";
                break;
        case "4": colNum+="3";
                break;
        case "5": colNum+="2";
                break;
        case "6": colNum+="2";
                break;     
    }
    return colNum;
}