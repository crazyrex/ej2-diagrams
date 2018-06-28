import { createElement } from '@syncfusion/ej2-base';
import { Diagram, } from '../../../src/diagram/diagram';
import { NodeModel, BasicShapeModel } from '../../../src/diagram/objects/node-model';
import { ConnectorModel } from '../../../src/diagram/objects/connector-model';
import { Layer } from "../../../src/diagram/diagram/layer";

/**
 * Order Command spec
 */
describe('Diagram Control', () => {

    describe('order command for canvas ', () => {
        let diagram: Diagram;
        let ele: HTMLElement;
        let selArray: any = [];

        beforeAll((): void => {
            ele = createElement('div', { id: 'diagram' });
            document.body.appendChild(ele);
            let shape: BasicShapeModel = { type: 'Basic', shape: 'Rectangle' };
            let node1: NodeModel[] = [
                {
                    id: 'node1', width: 100, height: 100, offsetX: 100, offsetY: 100, zIndex: 2,
                    ports: [{
                        id: 'port1',
                        shape: 'Circle',
                        offset: { x: 1, y: 0.75 }
                    }],
                    annotations: [{ content: 'Mouse Hover' }]
                },
                {
                    id: 'node2', width: 100, height: 100, offsetX: 125, offsetY: 100, zIndex: 10,
                    ports: [{
                        id: 'port2',
                        shape: 'Circle',
                        offset: { x: 1, y: 0.75 }
                    }],
                    annotations: [{ content: 'Connect' }]
                },
                {
                    id: 'node3', width: 100, height: 100, offsetX: 150, offsetY: 100, zIndex: 4,
                    ports: [{
                        id: 'port3',
                        shape: 'Circle',
                        offset: { x: 1, y: 0.75 }
                    }],
                    annotations: [{ content: 'Port Visible' }]
                },
                {
                    id: 'node4', width: 100, height: 100, offsetX: 160, offsetY: 100,
                    ports: [{
                        id: 'port4',
                        shape: 'Circle',
                        offset: { x: 1, y: 0.75 }
                    }],
                    annotations: [{ content: 'Port Hidden' }]
                },
            ]
            let connectors: ConnectorModel[] = [{
                id: 'connector1',
                type: 'Straight',
                sourcePoint: { x: 100, y: 100 },
                targetPoint: { x: 200, y: 200 }, zIndex: 0
            }];
            diagram = new Diagram({
                width: 1500, height: 1000, nodes: node1
            });
            diagram.appendTo('#diagram');
            selArray.push(diagram.nodes[0]);
            diagram.select(selArray);

        });

        afterAll((): void => {
            diagram.destroy();
            ele.remove();
        });

        it('chande the order of the element ', (done: Function) => {
            diagram.select(selArray);
            diagram.sendToBack();
            expect(diagram.selectedItems.nodes[0].id === (diagram.layers[0] as Layer).zIndexTable[0]).toBe(true);
            done();
            diagram.bringToFront();
            expect(diagram.selectedItems.nodes[0].id === (diagram.layers[0] as Layer).zIndexTable[10]).toBe(true);
            done();
            diagram.sendBackward();
            expect(diagram.selectedItems.nodes[0].id === (diagram.layers[0] as Layer).zIndexTable[9]).toBe(true);
            done();
            diagram.moveForward();
            expect(diagram.selectedItems.nodes[0].id === (diagram.layers[0] as Layer).zIndexTable[10]).toBe(true);
            done();
        });
    });


    describe('order command for canvas ', () => {
        let diagram: Diagram;
        let ele: HTMLElement;
        let selArray: any = [];

        beforeAll((): void => {
            ele = createElement('div', { id: 'diagram' });
            document.body.appendChild(ele);
            let shape: BasicShapeModel = { type: 'Basic', shape: 'Rectangle' };
            let node1: NodeModel = { id: 'node', offsetX: 100, offsetY: 100, width: 100, height: 100, shape: shape };
            let connectors: ConnectorModel[] = [{
                id: 'connector1',
                type: 'Straight',
                sourcePoint: { x: 100, y: 100 },
                targetPoint: { x: 200, y: 200 },
            }];
            diagram = new Diagram({
                width: 1500, height: 1000, nodes: [node1], connectors: connectors
            });
            diagram.appendTo('#diagram');
            selArray.push(diagram.nodes[0]);
            diagram.select(selArray);

        });

        afterAll((): void => {
            diagram.destroy();
            ele.remove();
        });

        it('chande the order of the element ', (done: Function) => {
            diagram.select(selArray);
            diagram.sendToBack()
            expect(diagram.selectedItems.nodes[0].id === (diagram.layers[0] as Layer).zIndexTable[0]).toBe(true);
            done();
            diagram.bringToFront();
            expect(diagram.selectedItems.nodes[0].id === (diagram.layers[0] as Layer).zIndexTable[Object.keys((diagram.layers[0] as Layer).zIndexTable).length - 1]).toBe(true);
            done();
            done();
            diagram.sendBackward();
            expect(diagram.selectedItems.nodes[0].id === (diagram.layers[0] as Layer).zIndexTable[0]).toBe(true);
            done();
            diagram.moveForward();
            expect(diagram.selectedItems.nodes[0].id === (diagram.layers[0] as Layer).zIndexTable[1]).toBe(true);
            done();

            diagram.select([diagram.nameTable['connector1']])
            diagram.sendToBack()
            expect(diagram.selectedItems.connectors[0].id === (diagram.layers[0] as Layer).zIndexTable[0]).toBe(true);
            done();
            diagram.bringToFront();
            expect(diagram.selectedItems.connectors[0].id === (diagram.layers[0] as Layer).zIndexTable[Object.keys((diagram.layers[0] as Layer).zIndexTable).length - 1]).toBe(true);
            done();
            diagram.sendBackward();
            expect(diagram.selectedItems.connectors[0].id === (diagram.layers[0] as Layer).zIndexTable[0]).toBe(true);
            done();
            diagram.moveForward();
            expect(diagram.selectedItems.connectors[0].id === (diagram.layers[0] as Layer).zIndexTable[1]).toBe(true);
            done();
            diagram.clearSelection();
            diagram.sendBackward();
            expect(diagram.selectedItems.nodes.length).toBe(0);

            diagram.sendToBack();
            expect(diagram.selectedItems.connectors.length).toBe(0);

            diagram.bringToFront();
            expect(diagram.selectedItems.connectors.length).toBe(0);

            diagram.moveForward();
            expect(diagram.selectedItems.nodes.length).toBe(0);

        });
    });
});    