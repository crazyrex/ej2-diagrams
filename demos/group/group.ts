/**
 * TEST SAMPLES-BPMN SHAPES
 */

import {
    Diagram, NodeModel, UndoRedo, DiagramContextMenu, ConnectorModel, Snapping, SnapSettingsModel, SnapConstraints,
    GridlinesModel
} from '../../src/diagram/index';
Diagram.Inject(UndoRedo, DiagramContextMenu, Snapping);

let diagram: Diagram;
let nodes: NodeModel[] = [
    {
        id: 'node1', width: 100, height: 100, offsetX: 100,
        offsetY: 200,
    }, {
        id: 'node2', width: 200, height: 100, offsetX: 400,
        offsetY: 400
    },
    {
        id: 'node3', width: 100, height: 100, offsetX: 700,
        offsetY: 400
    },
    {
        id: 'node4', width: 100, height: 100, offsetX: 950,
        offsetY: 300
    },
    { id: 'group', children: ['node1', 'node2'], rotateAngle: 45 },

];

let connector: ConnectorModel = {
    id: 'connector1', sourceID: 'node1', targetID: 'node2'
};
let connector2: ConnectorModel = {
    id: 'connector2', sourcePoint: { x: 200, y: 200 }, targetPoint: { x: 400, y: 300 }
};

let snapSettings: SnapSettingsModel = {
    snapObjectDistance: 5,
    constraints: (SnapConstraints.SnapToObject | SnapConstraints.SnapToLines) | SnapConstraints.ShowLines
};


diagram = new Diagram(
    {
        width: '1500px', height: '600px', nodes: nodes,
        //connectors: [connector],
        //snapSettings: { constraints: 0 }, 
        snapSettings: snapSettings,
        contextMenuSettings: { show: true }
    });

let group: NodeModel = { id: 'group2', children: ['node3', 'group'] };
diagram.appendTo('#diagram');
//diagram.add(group);
