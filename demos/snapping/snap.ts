import { Diagram } from '../../src/diagram/diagram';
import {  SnapConstraints, NodeConstraints } from '../../src/diagram/enum/enum';
import { NodeModel } from '../../src/diagram/objects/node-model';
import { SnapSettingsModel, GridlinesModel } from '../../src/diagram/diagram/grid-lines-model';
import { Snapping } from '../../src/diagram/objects/snapping';
Diagram.Inject(Snapping);


/**
 * pageSettings
 */
let diagram: Diagram;
            let node: NodeModel = {
                id: 'node1', width: 60, height: 60, offsetX: 100, offsetY: 100,
            };
            let node2: NodeModel = {
                id: 'node2', width: 60, height: 90, offsetX: 170, offsetY: 100,
            };
            let node3: NodeModel = {
                id: 'node3', width: 60, height: 120, offsetX: 240, offsetY: 100,
            };
            let node4: NodeModel = {
                id: 'node4', width: 60, height: 90, offsetX: 100, offsetY: 250,
            };
            let node5: NodeModel = {
                id: 'node5', width: 90, height: 90, offsetX: 185, offsetY: 250,
            };
            let node6: NodeModel = {
                id: 'node6', width: 120, height: 90, offsetX: 300, offsetY: 250,
            };
            let node7: NodeModel = {
                id: 'node7', width: 60, height: 90, offsetX: 100, offsetY: 380,
                constraints: NodeConstraints.AspectRatio | NodeConstraints.Default
            };
            let node8: NodeModel = {
                id: 'node8', width: 60, height: 90, offsetX: 170, offsetY: 380,
            };
            let node9: NodeModel = {
                id: 'node9', width: 60, height: 90, offsetX: 240, offsetY: 380,
            };
            let horizontalGridlines: GridlinesModel = {lineColor: 'black', lineDashArray: '1,1' };
            let verticalGridlines: GridlinesModel = {lineColor: 'black', lineDashArray: '1,1'};
            let snapSettings: SnapSettingsModel = { snapObjectDistance: 5,
                constraints:  (SnapConstraints.SnapToObject | SnapConstraints.SnapToLines) | SnapConstraints.ShowLines,
                horizontalGridlines, verticalGridlines };
            diagram = new Diagram({
                width: '1000px', height: '1000px', nodes: [node, node2,
                 node3, node4, node5, node6, node7, node8, node9
                ],
                snapSettings: snapSettings
            });
            diagram.appendTo('#diagram');



