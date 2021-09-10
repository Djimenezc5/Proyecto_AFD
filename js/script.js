/***
 * Universidad Mariano Galvez de Guatemala
 * Grupo numero 4
 * Autores: Fatima Samayoa, Kevin Rodríguez, Daniel Jiménez
 * Curso: Autómatas y lenguajes formales.
 */
function init(){
    
    var $ = go.GraphObject.make;
    myDiagram = $(go.Diagram, "myDiagramDiv");

    myDiagram.nodeTemplate =
        $(go.Node, "Auto",
            $(go.Shape, "Ellipse",
            new go.Binding("fill", "color")),
            $(go.TextBlock,
            { margin: 5 },
            new go.Binding("text", "key"))
        );

    myDiagram.linkTemplate =
        $(go.Link,
          $(go.Shape),                           
          $(go.Shape, { toArrow: "Standard" }),  
          $(go.TextBlock,                        
            new go.Binding("text", "text"))
        );
        var model = new go.GraphLinksModel();

            for (let i = 1; i <= 7; i++) {
                let FDC = document.getElementById("E"+[i]+[6]).value;
                let Color ="";
                if(FDC == "Error"){
                    Color = "green";
                }
                else{
                    Color = "yellow";
                }

                let ID = document.getElementById("E"+i).innerHTML;
                if (ID == "Estado 1") {
                    Color = "orange";
                }
                model.addNodeData({ key: ID, color: Color});
                
                for (let j = 1; j < 7; j++) {
                    let VAL = document.getElementById("E"+[i]+[j]).value;
                    let leyenda="";
                    if(j==1){
                        leyenda = "Digito";
                    }
                    if(j==2){
                        leyenda = ".";
                    }
                    if(j==3){
                        leyenda = "E";
                    }
                    if(j==4){
                        leyenda = "+";
                    }
                    if(j==5){
                        leyenda = "-";
                    }
                    if(VAL == "Error"){

                    }
                    else {
                        model.addLinkData({ to : VAL, from: ID, text:leyenda});
                    }
                }

            }
        myDiagram.model = model;
}