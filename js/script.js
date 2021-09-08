function init(){
    var $ = go.GraphObject.make;
    myDiagram = $(go.Diagram, "myDiagramDiv");
    //Se agrega la figura al nodo
    myDiagram.nodeTemplate =
        $(go.Node, "Auto",
            $(go.Shape, "Ellipse",
            new go.Binding("fill", "color")),
            $(go.TextBlock,
            { margin: 5 },
            new go.Binding("text", "key"))
        );
    //Se agrega el texto del link
    myDiagram.linkTemplate =
        $(go.Link,
          $(go.Shape),                           // this is the link shape (the line)
          $(go.Shape, { toArrow: "Standard" }),  // this is an arrowhead
          $(go.TextBlock,                        // this is a Link label
            new go.Binding("text", "text"))
        );
    //Arreglo de nodos
    var nodeDataArray = [
        {key: "Estado 1", color: "lightblue"},
        {key: "Estado 2", color: "lightblue"},
        {key: "Estado 3", color: "lightblue"},
        {key: "Estado 4", color: "lightblue"},
        {key: "Estado 5", color: "lightblue"},
        {key: "Estado 6", color: "lightblue"},
        {key: "Estado 7", color: "lightblue"},];
    //Arreglo enlaceses
    var linkDataArray = [
        { to : "Estado 1", from: "Estado 1", text:"Valor1"},
        { to : "Estado 2", from: "Estado 1", text:"Valor2"},
        { to : "Estado 4", from: "Estado 2", text:"Valor3"}
     ]
    //Graficar los nodos y links o enlaceses
    myDiagram.model = new go.GraphLinksModel(nodeDataArray,linkDataArray);
}