import {
    Diagram, NodeModel, BasicShapeModel, FlowShapeModel, BpmnShapeModel, ConnectorModel,
    PointPortModel, BasicShapes, FlowShapes, BpmnShapes, BpmnEventModel, BpmnGatewayModel, UndoRedo,
    BpmnDataObjectModel, BpmnActivityModel, BpmnDiagrams, Segments, DiagramTools, ShapeAnnotationModel
} from '../../src/diagram/index';
Diagram.Inject(BpmnDiagrams, UndoRedo );

/**
 * Basic Shapes
 */
let nodeport1: PointPortModel = { offset: { x: 1, y: 0.5 } };
let nodeport2: PointPortModel = { offset: { x: 0, y: 0.5 } };
let shape: BasicShapeModel = { type: 'Basic', shape: 'Rectangle' };
let node1: NodeModel = { id: 'node', offsetX: 100, offsetY: 100, shape: shape, ports: [nodeport1] };
let shape2: BasicShapeModel = { type: 'Basic', shape: 'Ellipse' };
let node2: NodeModel = { id: 'node2', offsetX: 700, offsetY: 500, shape: shape2, ports: [nodeport2] };


let connectors: ConnectorModel[] = [{
    id: 'connector1',
    type: 'Straight',
    sourcePoint: { x: 100, y: 100 },
    targetPoint: { x: 200, y: 200 },
},
{
    id: 'connector2',
    type: 'Orthogonal',
    sourcePoint: { x: 300, y: 100 },
    targetPoint: { x: 400, y: 200 },
}];
let diagram: Diagram = new Diagram({
    width: 700, height: 700, nodes: [node1, node2], connectors: connectors
});
diagram.appendTo('#diagram');


document.getElementById('connectorType').onchange = () => {
    let type: Segments = (document.getElementById('connectorType') as HTMLInputElement).value as Segments;


    let connector: ConnectorModel = {

        type: type,

    };

    let continuousDraw: any = document.getElementById('drawnode');
    if (continuousDraw.checked) {
        diagram.tool = DiagramTools.ContinuousDraw;
    } else {
        diagram.tool = DiagramTools.DrawOnce;
    }
    diagram.drawingObject = connector;
    diagram.dataBind();

};

document.getElementById('basicShapes').onchange = () => {
    let value: BasicShapes = (document.getElementById('basicShapes') as HTMLInputElement).value as BasicShapes;

    let shape: BasicShapeModel = { type: 'Basic', shape: value };
    let node: NodeModel =
        {
            shape: shape

        };

    let continuousDraw: any = document.getElementById('drawnode');
    if (continuousDraw.checked) {
        diagram.tool = DiagramTools.ContinuousDraw;
    } else {
        diagram.tool = DiagramTools.DrawOnce;
    }
    diagram.drawingObject = node;
    diagram.dataBind();

};

document.getElementById('flowShapes').onchange = () => {
    let value: FlowShapes = (document.getElementById('flowShapes') as HTMLInputElement).value as FlowShapes;

    let shape: FlowShapeModel = { type: 'Flow', shape: value };
    let node: NodeModel =
        {
            shape: shape

        };


    let continuousDraw: any = document.getElementById('drawnode');
    if (continuousDraw.checked) {
        diagram.tool = DiagramTools.ContinuousDraw;
    } else {
        diagram.tool = DiagramTools.DrawOnce;
    }
    diagram.drawingObject = node;
    diagram.dataBind();

};


