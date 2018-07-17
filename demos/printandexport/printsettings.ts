import { Diagram } from '../../src/diagram/diagram';
import { ConnectorModel } from '../../src/diagram/objects/connector-model';
import { NodeModel } from '../../src/diagram/objects/node-model';
import { Snapping } from '../../src/diagram/objects/snapping';
import { PrintAndExport } from '../../src/diagram/print-settings';
import { BackgroundModel, PageSettingsModel } from '../../src/diagram/diagram/page-settings-model';
import { IExportOptions } from '../../src/diagram/objects/interface/interfaces';
Diagram.Inject(Snapping, PrintAndExport);


/**
 * printSettings
 */
let diagram: Diagram;
let connector: ConnectorModel = {
    id: 'connector1', sourcePoint: { x: 300, y: 400 }, targetPoint: { x: 500, y: 500 }
};
let node: NodeModel = {
    id: 'node1', width: 150, height: 100, offsetX: 100, offsetY: 100, annotations: [{ content: 'Node1', height: 50, width: 50 }]
};
let node2: NodeModel = {
    id: 'node2', width: 80, height: 130, offsetX: 200, offsetY: 200, annotations: [{ content: 'Node2', height: 50, width: 50 }]
};
let node3: NodeModel = {
    id: 'node3', width: 100, height: 75, offsetX: 300, offsetY: 350, annotations: [{ content: 'Node3', height: 50, width: 50 }]
};
let options: IExportOptions = {};
let background: BackgroundModel = {};
background.source = 'https://www.w3schools.com/images/w3schools_green.jpg';
background.color = 'yellow';
// options.multiplePage =  true;
options.pageOrientation = 'Landscape';
let pageSettings: PageSettingsModel = {};
pageSettings.multiplePage = true;
pageSettings.background = background;
pageSettings.height = 300; pageSettings.width = 300;
pageSettings.orientation = 'Portrait';
diagram = new Diagram({
    width: '850px', height: '1000px', nodes: [node, node2, node3],
    connectors: [connector],
     pageSettings: pageSettings
});
diagram.appendTo('#diagram');
document.getElementById('print').onclick = () => {
    let options: IExportOptions = {};
    options.mode = 'Data';
    options.region = 'PageSettings';
    options.multiplePage = true;
    options.pageHeight = 300;
    options.pageWidth = 300;
    diagram.print(options);
};
document.getElementById('export').onclick = () => {
    let options: IExportOptions = {};
    options.mode = 'Download';
    options.format = 'SVG';
    options.region = 'Content';
    options.fileName = 'export';
    let data: SVGElement | string;
    data = diagram.exportDiagram(options);
};
document.getElementById('exportTypes').onchange = () => {
    let options: IExportOptions = {};
    options.mode = 'Download';
    let regionType: any = document.getElementById('regionTypes');
    options.region = regionType.value;
    options.fileName = 'export';
    let type: any = document.getElementById('exportTypes');
    options.format = type.value;

    diagram.exportDiagram(options);
};
let regionTypes: any;
document.getElementById('regionTypes').onchange = () => {
    let options: IExportOptions = {};
    options.mode = 'Download';
    options.format = 'SVG';
    options.fileName = 'region';
    let type: any = document.getElementById('regionTypes');
    options.region = type.value;

    //diagram.exportDiagram(options);
};
document.getElementById('multiplePage').onchange = () => {
    let options: IExportOptions = {};
    options.mode = 'Download';
    options.format = 'PNG';
    options.fileName = 'multiplePage';
    options.region = 'PageSettings';
    let type: any = document.getElementById('multiplePage');
    if (type.checked) {
        options.multiplePage = true;
        options.pageHeight = 300;
        options.pageWidth = 300;
        options.pageOrientation = 'Landscape';
        diagram.exportDiagram(options);
    }
};


