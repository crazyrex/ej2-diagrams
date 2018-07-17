import { Diagram, ConnectorBridging, DiagramConstraints } from '../../src/diagram/index';
import { ConnectorModel } from '../../src/diagram/objects/connector-model';
Diagram.Inject(ConnectorBridging);

/**
 * Connectors
 */

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
},
{
    id: 'connector3',
    type: 'Straight',
    sourcePoint: { x: 500, y: 100 },
    targetPoint: { x: 600, y: 200 },
    sourceDecorator: {
        style: { fill: 'black' },
        shape: 'Arrow',
        pivot: { x: 0, y: 0.5 }
    },
    targetDecorator: {
        shape: 'Diamond',
        style: { fill: 'blue' },
        pivot: { x: 0, y: 0.5 }
    }
},
{
    style: {},
    id: 'connector4',
    type: 'Orthogonal',
    sourcePoint: { x: 100, y: 300 },
    targetPoint: { x: 200, y: 400 },
    sourceDecorator: {
        style: { fill: 'black' },
        shape: 'Arrow',
        pivot: { x: 0, y: 0.5 },
    },
    targetDecorator: {
        shape: 'Diamond',
        style: { fill: 'blue' },
        pivot: { x: 0, y: 0.5 },
    }
},
{
    id: 'connector5',
    type: 'Orthogonal',
    sourcePoint: { x: 300, y: 300 },
    targetPoint: { x: 400, y: 400 },
    cornerRadius: 10,
    style: {
        strokeDashArray: '2,2'
    },
    sourceDecorator: {
        style: {
            fill: 'black'
        },
        shape: 'Arrow',
        pivot: {
            x: 0, y: 0.5
        }
    },
    targetDecorator: {
        shape: 'Diamond',
        style: {
            fill: 'blue'
        },
        pivot: {
            x: 0, y: 0.5
        },
    }
},
{
    id: 'connector6',
    type: 'Orthogonal',
    sourcePoint: { x: 500, y: 300 },
    targetPoint: { x: 600, y: 400 },
    cornerRadius: 10,
    style: {
        strokeColor: 'red',
        strokeWidth: 3,
        opacity: 3
    },
    sourceDecorator: {
        style: { fill: 'blue' },
        shape: 'Arrow',
        pivot: {
            x: 0, y: 0.5
        }
    },
    targetDecorator: {
        shape: 'Diamond',
        style: {
            fill: 'blue'
        },
        pivot: {
            x: 0, y: 0.5
        }
    }
}];

let diagram: Diagram = new Diagram({
    width: 1500, height: 1500, connectors: connectors,
    constraints: DiagramConstraints.Default | DiagramConstraints.Bridging
});

diagram.appendTo('#diagram');



