import { createElement } from '@syncfusion/ej2-base';
import { Diagram } from '../../../src/diagram/diagram';
import { ConnectorModel } from '../../../src/diagram/objects/connector-model';
import { NodeModel } from '../../../src/diagram/objects/node-model';
import { SelectorModel } from '../../../src/diagram/interaction/selector-model';
import { Rect } from "../../../src/index";


/**
 * fit to page
 */
describe('Diagram Control', () => {
    describe('fit to page', () => {
        let diagram: Diagram;
        let ele: HTMLElement;

        beforeAll((): void => {
            ele = createElement('div', { id: 'diagram' });
            document.body.appendChild(ele);
            let selArray: (NodeModel | ConnectorModel)[] = [];
            let node: NodeModel = { id: 'node1', width: 100, height: 100, offsetX: 500, offsetY: 400 };
            diagram = new Diagram({
                width: '1000px', height: '500px', nodes: [node],
                pageSettings: { width: 1000, height: 1000 }
            });
            diagram.appendTo('#diagram');
        });

        afterAll((): void => {
            diagram.destroy();
            ele.remove();
        });

        it('checking content,custom,page property', (done: Function) => {
            let selectorModel: SelectorModel = diagram.selectedItems;
            let zoom: number = diagram.scroller.currentZoom;

            diagram.fitToPage({ mode: 'Page', region: 'Content', margin: { left: 50, right: 50 }, canZoomIn: false });
            expect(diagram.scroller.currentZoom == zoom).toBe(true);
            done();
            diagram.fitToPage({ mode: 'Width', region: 'Content', margin: { bottom: 50 }, canZoomIn: false });
            expect(diagram.scroller.currentZoom == zoom).toBe(true);
            done();
            diagram.fitToPage({ mode: 'Height', region: 'Content', margin: { top: 50 }, canZoomIn: false });
            expect(diagram.scroller.currentZoom == zoom).toBe(true);
            done();

            diagram.fitToPage({ mode: 'Page', region: 'PageSettings', margin: { left: 50, right: 50 }, canZoomIn: false });
            expect(diagram.scroller.currentZoom == 0.45).toBe(true);
            done();
            diagram.fitToPage({ mode: 'Width', region: 'PageSettings', margin: { bottom: 50 }, canZoomIn: false });
            expect(diagram.scroller.currentZoom == 0.9500000000000001).toBe(true);
            done();
            diagram.fitToPage({ mode: 'Height', region: 'PageSettings', margin: { top: 50 }, canZoomIn: false });
            expect(diagram.scroller.currentZoom == 0.425).toBe(true);
            done();
            let bound: Rect = new Rect(200, 400, 500, 400)
            diagram.fitToPage({ mode: 'Page', region: 'CustomBounds', margin: { left: 50, right: 50 }, canZoomIn: false, customBounds: bound });
            expect(diagram.scroller.currentZoom == zoom).toBe(true);
            done();
            diagram.fitToPage({ mode: 'Width', region: 'CustomBounds', margin: { bottom: 50 }, canZoomIn: false, customBounds: bound });
            expect(diagram.scroller.currentZoom == 1.9).toBe(true);
            done();
            diagram.fitToPage({ mode: 'Height', region: 'CustomBounds', margin: { top: 50 }, canZoomIn: false, customBounds: bound });
            expect(diagram.scroller.currentZoom == 0.9999999999999999).toBe(true);
            done();
            diagram.bringIntoView(bound);
            expect(diagram.scroller.currentZoom == 0.9999999999999999).toBe(true);
            done();
            diagram.bringToCenter(bound);
            expect(diagram.scroller.currentZoom == 0.9999999999999999).toBe(true);
            done();
        });


    });

    describe('fit to page', () => {
        let diagram: Diagram;
        let ele: HTMLElement;

        beforeAll((): void => {
            ele = createElement('div', { id: 'diagram' });
            document.body.appendChild(ele);
            let selArray: (NodeModel | ConnectorModel)[] = [];
            let node: NodeModel = { id: 'node1', width: 100, height: 100, offsetX: 500, offsetY: 400 };
            diagram = new Diagram({
                width: '1000px', height: '500px'
            });
            diagram.appendTo('#diagram');
        });

        afterAll((): void => {
            diagram.destroy();
            ele.remove();
        });

        it('checking page settings', (done: Function) => {
            let selectorModel: SelectorModel = diagram.selectedItems;
            diagram.fitToPage({ mode: 'Page', region: 'PageSettings', margin: { bottom: 50 }, canZoomIn: false });
            done();
        });
    });
});