/**
 * Auto scroll
 */
import { createElement } from '@syncfusion/ej2-base';
import { Diagram } from '../../../src/diagram/diagram';
import { NodeModel } from '../../../src/diagram/objects/node-model';
import { BpmnDiagrams } from '../../../src/diagram/objects/bpmn';
import { PointModel } from '../../../src/diagram/primitives/point-model';
import { DiagramContextMenu } from '../../../src/diagram/objects/context-menu';
import { MouseEvents } from './mouseevents.spec';
import { UndoRedo } from '../../../src/diagram/objects/undo-redo';
import { SnapConstraints } from '../../../src/diagram/index';
Diagram.Inject(BpmnDiagrams, DiagramContextMenu, UndoRedo);
describe('Diagram Control', () => {
    describe('Auto Scroll left and right', () => {
        let diagram: Diagram;
        let ele: HTMLElement;
        let mouseEvents: MouseEvents = new MouseEvents();
        beforeAll(() => {
            ele = createElement('div', { id: 'diagram' });
            document.body.appendChild(ele);
            let node1: NodeModel = { id: 'node1', width: 100, height: 100, offsetX: 50, offsetY: 150 };
            let node2: NodeModel = { id: 'node2', width: 100, height: 100, offsetX: 950, offsetY: 350 };
            let node3: NodeModel = { id: 'node3', width: 100, height: 100, offsetX: 500, offsetY: 50 };
            let node4: NodeModel = { id: 'node4', width: 100, height: 100, offsetX: 500, offsetY: 550 };
            diagram = new Diagram({
                width: '1000px', height: '600px',
                nodes: [node1, node2, node3, node4],
                scrollSettings: { canAutoScroll: true, scrollLimit: 'Infinity' },
                snapSettings: { constraints: SnapConstraints.None }
            });
            diagram.appendTo('#diagram');
        });
        afterAll(() => {
            diagram.destroy();
            ele.remove();
        });
        it('Checking Autoscroll Left', (done: Function) => {
            let dgm: Diagram = diagram;
            let diagramCanvas: HTMLElement = document.getElementById(diagram.element.id + 'content');
            let center: PointModel = (diagram.nodes[0] as NodeModel).wrapper.bounds.center;
            mouseEvents.clickEvent(diagramCanvas, center.x, center.x);
            mouseEvents.mouseDownEvent(diagramCanvas, center.x, center.y);
            mouseEvents.mouseMoveEvent(diagramCanvas, center.x - 50, center.y - 50);
            mouseEvents.mouseMoveEvent(diagramCanvas, center.x - 50 - 25, center.y - 50 - 25);
            mouseEvents.mouseMoveEvent(diagramCanvas, center.x - 50 - 25 - 10, center.y - 50 - 25 - 10);
            setTimeout(() => {
                expect(dgm.scroller.horizontalOffset == 10).toBe(true);
                done();
                mouseEvents.mouseUpEvent(diagramCanvas, center.x - 50 - 25 - 10, center.y - 50 - 25 - 10);
            }, 110);
        });
        it('Checking Autoscroll right', (done: Function) => {
            let dgm: Diagram = diagram;
            let diagramCanvas: HTMLElement = document.getElementById(diagram.element.id + 'content');
            let center: PointModel = (diagram.nodes[1] as NodeModel).wrapper.bounds.center;
            mouseEvents.clickEvent(diagramCanvas, center.x, center.x);
            mouseEvents.mouseDownEvent(diagramCanvas, center.x, center.y);
            mouseEvents.mouseMoveEvent(diagramCanvas, center.x + 50, center.y + 50);
            mouseEvents.mouseMoveEvent(diagramCanvas, center.x + 50 + 25, center.y + 50 + 25);
            mouseEvents.mouseMoveEvent(diagramCanvas, center.x + 50 + 25 + 10, center.y + 50 + 25 + 10);

            setTimeout(() => {
                expect(dgm.scroller.horizontalOffset == 20 || dgm.scroller.horizontalOffset == 30).toBe(true);
                done();
                mouseEvents.mouseUpEvent(diagramCanvas, center.x + 50 + 25 + 10 + 10, center.y + 50 + 25 + 10 + 10);
            }, 110);
        });


    });
    describe('Auto Scroll top and bottom', () => {
        let diagram: Diagram;
        let ele: HTMLElement;
        let mouseEvents: MouseEvents = new MouseEvents();
        beforeAll(() => {
            ele = createElement('div', { id: 'diagram' });
            document.body.appendChild(ele);
            let node1: NodeModel = { id: 'node1', width: 100, height: 100, offsetX: 50, offsetY: 150 };
            let node2: NodeModel = { id: 'node2', width: 100, height: 100, offsetX: 950, offsetY: 350 };
            let node3: NodeModel = { id: 'node3', width: 100, height: 100, offsetX: 500, offsetY: 50 };
            let node4: NodeModel = { id: 'node4', width: 100, height: 100, offsetX: 500, offsetY: 550 };
            diagram = new Diagram({
                width: '1000px', height: '600px',
                nodes: [node1, node2, node3, node4], scrollSettings: { canAutoScroll: true, scrollLimit: 'Infinity' },
                snapSettings: { constraints: SnapConstraints.None }
            });
            diagram.appendTo('#diagram');
        });
        afterAll(() => {
            diagram.destroy();
            ele.remove();
        });
        it('Checking Autoscroll top', (done: Function) => {
            let dgm: Diagram = diagram;
            let diagramCanvas: HTMLElement = document.getElementById(diagram.element.id + 'content');
            let center: PointModel = (diagram.nodes[2] as NodeModel).wrapper.bounds.center;
            mouseEvents.clickEvent(diagramCanvas, center.x, center.x);
            mouseEvents.mouseDownEvent(diagramCanvas, center.x, center.y);
            mouseEvents.mouseMoveEvent(diagramCanvas, center.x - 50, center.y - 50);
            mouseEvents.mouseMoveEvent(diagramCanvas, center.x - 50 - 25, center.y - 50 - 25);
            mouseEvents.mouseMoveEvent(diagramCanvas, center.x - 50 - 25 - 10, center.y - 50 - 25 - 10);
            setTimeout(() => {
                expect(dgm.scroller.verticalOffset === 10).toBe(true);
                done();
                mouseEvents.mouseUpEvent(diagramCanvas, center.x - 50 - 25 - 10, center.y - 50 - 25 - 10);
            }, 110);
        });
        it('Checking Autoscroll bottom', (done: Function) => {
            let dgm: Diagram = diagram;
            let diagramCanvas: HTMLElement = document.getElementById(diagram.element.id + 'content');
            let center: PointModel = (diagram.nodes[3] as NodeModel).wrapper.bounds.center;
            mouseEvents.clickEvent(diagramCanvas, center.x, center.x);
            mouseEvents.mouseDownEvent(diagramCanvas, center.x, center.y);
            mouseEvents.mouseMoveEvent(diagramCanvas, center.x + 50, center.y + 50);
            mouseEvents.mouseMoveEvent(diagramCanvas, center.x + 50 + 25, center.y + 50 + 25);
            mouseEvents.mouseMoveEvent(diagramCanvas, center.x + 50 + 25 + 10, center.y + 50 + 25 + 10);
            setTimeout(() => {
                expect(dgm.scroller.verticalOffset === 20 || dgm.scroller.verticalOffset === 30).toBe(true);
                done();
                mouseEvents.mouseUpEvent(diagramCanvas, center.x + 50 + 25 + 10 + 10, center.y + 50 + 25 + 10 + 10);
            }, 110);
        });
    });
});