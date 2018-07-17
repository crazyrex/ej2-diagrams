/**
 * Explores the types of nodes
 */

import {
    Diagram, NodeModel, StackPanel, TextElement, ConnectorModel, PortConstraints, PortVisibility
} from '../../src/diagram/index';

let nodes: NodeModel[] = [
    {
        id: 'node1', width: 100, height: 100, offsetX: 100, offsetY: 100,
        annotations: [{
            id: 'label1',
            content: 'Default Shape', style: { color: 'red' },
            hyperlink: { link: 'https://hr.syncfusion.com/home' }
        }],
        ports: [{ constraints: PortConstraints.Draw, visibility: PortVisibility.Visible }]
    },
    {
        id: 'node2', width: 100, height: 100, offsetX: 300, offsetY: 100,
        shape: { type: 'Path', data: 'M540.3643,137.9336L546.7973,159.7016L570.3633,159.7296L550.7723,171.9366L558.9053,194.9966L540.3643,179.4996L521.8223,194.9966L529.9553,171.9366L510.3633,159.7296L533.9313,159.7016L540.3643,137.9336z' },
        annotations: [{ content: 'Path Element' }]
    },
    {
        id: 'node3', width: 100, height: 100, offsetX: 500, offsetY: 100, shape: { type: 'Text', content: 'Text Element' },
        style: { strokeColor: 'none', fill: 'none', color: 'blue', bold: true }
    },
    {
        id: 'node4', width: 50, height: 50, offsetX: 700, offsetY: 100, style: { fill: 'none' },
        shape: { type: 'Image', source: './employee.PNG' }
    },
    {
        id: 'node5', width: 100, height: 100, offsetX: 100, offsetY: 300,
        annotations: [{ content: 'Custom Template', offset: { y: 1 }, verticalAlignment: 'Top' }]
    },
    { id: 'newNode', width: 100, style: { fill: 'red' }, annotations: [{ content: 'Content' }] }
];

let connector: ConnectorModel = {
    type: 'Orthogonal',
    segments: [
        { length: 50, direction: 'Bottom' }
    ]
};


//nodes = [{ id: 'root', offsetX: 300, offsetY: 300 }];

let getTextElement: Function = (text: string) => {
    let textElement: TextElement = new TextElement();
    textElement.width = 50;
    textElement.height = 20;
    textElement.content = text;
    return textElement;
};

let addRows: Function = (column: StackPanel) => {
    column.children.push(getTextElement('Row1'));
    column.children.push(getTextElement('Row2'));
    column.children.push(getTextElement('Row3'));
    column.children.push(getTextElement('Row4'));
};

let diagram: Diagram = new Diagram({
    width: 900, height: 900, nodes: nodes,
    setNodeTemplate: (obj: NodeModel, diagram: Diagram): StackPanel => {
        if (obj.id.indexOf('node5') !== -1) {
            //it will be replaced with grid panel
            let table: StackPanel = new StackPanel();
            table.orientation = 'Horizontal';

            let column1: StackPanel = new StackPanel();
            column1.children = [];
            column1.children.push(getTextElement('Column1'));
            addRows(column1);

            let column2: StackPanel = new StackPanel();
            column2.children = [];
            column2.children.push(getTextElement('Column2'));
            addRows(column2);

            table.children = [column1, column2];
            return table;
        }
        return null;
    },
    getNodeDefaults: (obj: NodeModel) => {
        let defaults: NodeModel = {
            width: 150, height: 50, annotations: [{ style: { color: 'black' } }],
            ports: [{ id: 'port1', visibility: PortVisibility.Visible }], offsetX: 100, offsetY: 100,
        };
        return defaults;
    }
});
diagram.appendTo('#diagram');

let urlbutton = document.getElementById('ChangeURL');
urlbutton.onclick = function () {
    let urlLink: string = (document.getElementById('url') as HTMLSelectElement).value;
    (diagram.nodes[0] as NodeModel).annotations[0].hyperlink.link = urlLink;
    diagram.dataBind();
}
