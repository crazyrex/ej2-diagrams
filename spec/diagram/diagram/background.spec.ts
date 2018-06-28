/**
 * Diagram spec document
 */
import { createElement } from '@syncfusion/ej2-base';
import { Diagram } from '../../../src/diagram/diagram'; import { BackgroundModel } from '../../../src/diagram/diagram/page-settings-model';
import { DiagramModel } from '../../../src/diagram/index';
;


/**
 * Page Background
 */
describe('Diagram Control', () => {
    describe('Background', () => {
        let diagram: Diagram;
        let ele: HTMLElement;
        beforeAll((): void => {
            ele = createElement('div', { id: 'diagrama' });
            document.body.appendChild(ele);
            diagram = new Diagram({

                width: '1000px', height: '600px',
            } as DiagramModel);
            diagram.appendTo('#diagrama');
        });
        afterAll((): void => {
            diagram.destroy();
            ele.remove();
        });

        it('Checking diagram without background', (done: Function) => {
            diagram.getPersistData();
            done();
        });
    });
    describe('Background', () => {
        let diagram: Diagram;
        let ele: HTMLElement;
        beforeAll((): void => {
            ele = createElement('div', { id: 'diagramb' });
            document.body.appendChild(ele);
            let background: BackgroundModel = { source: 'base/spec/images/bike.jpg' };
            diagram = new Diagram({

                width: '1000px', height: '600px', pageSettings: { background: background }
            } as DiagramModel);
            diagram.appendTo('#diagramb');
        });
        afterAll((): void => {
            diagram.destroy();
            ele.remove();
        });

        it('Checking with background image', (done: Function) => {

            done();
        });
    });

    describe('Text element white space and break word property', () => {
        let diagram: Diagram;
        let ele: HTMLElement;
        beforeAll((): void => {
            ele = createElement('div', { id: 'diagramc' });
            document.body.appendChild(ele);
            let background: BackgroundModel = { color: 'red' };
            diagram = new Diagram({

                width: '1000px', height: '600px', pageSettings: { background: background }
            } as DiagramModel);
            diagram.appendTo('#diagramc');
        });
        afterAll((): void => {
            diagram.destroy();
            ele.remove();
        });

        it('Checking wiht background color', (done: Function) => {

            done();
        });
    });



});