import { Property, ChildProperty, Collection, Complex } from '@syncfusion/ej2-base';
import { IElement } from '../objects/interface/IElement';
import { Container } from '../core/containers/container';
import { Node } from '../objects/node';
import { Connector } from '../objects/connector';
import { PointModel } from '../primitives/point-model';
import { Point } from '../primitives/point';
import { Size } from '../primitives/size';
import { RubberBandSelectionMode, Side, ThumbsConstraints } from '../enum/enum';
import { SelectorConstraints, HorizontalAlignment, VerticalAlignment } from '../enum/enum';
import { NodeModel } from '../objects/node-model';
import { ConnectorModel } from '../objects/connector-model';
import { UserHandleModel } from '../interaction/selector-model';
import { Diagram } from '../../diagram/diagram';
import { MarginModel } from '../core/appearance-model';
import { Margin } from '../core/appearance';

/**
 * Defines the behavior of selector
 */
export class UserHandle extends ChildProperty<UserHandle> {
    /**
     * Defines the name of user Handle
     * @default ''
     */
    @Property('')
    public name: string;

    /**
     * Defines the path data of user Handle 
     * @default ''
     */
    @Property('')
    public pathData: string;

    /**
     * Defines the background color of user Handle 
     * @default 'black'
     */
    @Property('#000000')
    public backgroundColor: string;

    /**
     * Defines the side of user Handle 
     * @default 'top'
     */
    @Property('top')
    public side: Side;

    /**
     * Defines the borderColor of user Handle 
     * @default ''
     */
    @Property('')
    public borderColor: string;

    /**
     * Defines the borderWidth of user Handle 
     * @default 0.5
     */
    @Property(0.5)
    public borderWidth: number;

    /**
     * Defines the size of user Handle 
     * @default 25
     */
    @Property(25)
    public size: number;

    /**
     * Defines the path color of user Handle 
     * @default 'white'
     */
    @Property('white')
    public pathColor: string;

    /**
     * Defines the displacement of user Handle 
     * @default 10
     */
    @Property(10)
    public displacement: number;

    /**
     * Defines the visible of user Handle 
     * @default true
     */
    @Property(true)
    public visible: boolean;

    /**
     * Defines the offset of user Handle 
     * @default 0
     */
    @Property(0)
    public offset: number;

    /**
     * Defines the margin of the user handle
     * @default new Margin(0,0,0,0)
     */
    @Complex<MarginModel>({}, Margin)
    public margin: MarginModel;

    /**
     * Defines the horizontalAlignment of user Handle 
     * @default 'Center'
     */
    @Property('Center')
    public horizontalAlignment: HorizontalAlignment;

    /**
     * Defines the verticalAlignment of user Handle 
     * @default 'Center'
     */
    @Property('Center')
    public verticalAlignment: VerticalAlignment;
}

/**
 * Defines the behavior of the selected objects
 */
export class Selector extends ChildProperty<Selector> implements IElement {
    /**
     * Defines the size and position of the container
     * @default null
     */
    @Property(null)
    public wrapper: Container;

    /**
     * Defines the collection of selected nodes
     */
    @Collection<NodeModel>([], Node)
    public nodes: NodeModel[];

    /**
     * Defines the collection of selected connectors
     */
    @Collection<ConnectorModel>([], Connector)
    public connectors: ConnectorModel[];

    /**
     * Sets/Gets the width of the container
     * @aspDefaultValueIgnore
     * @default undefined
     */
    @Property()
    public width: number;

    /**
     * Sets/Gets the height of the container
     * @aspDefaultValueIgnore
     * @default undefined
     */
    @Property()
    public height: number;

    /**
     * Sets the rotate angle of the container
     * @default 0
     */
    @Property(0)
    public rotateAngle: number;

    /**
     * Sets the position of the container
     * @default 0
     */
    @Property(0)
    public offsetX: number;

    /**
     * Sets the position of the container
     * @default 0
     */
    @Property(0)
    public offsetY: number;

    /**
     * Sets the pivot of the selector
     * @default { x: 0.5, y: 0.5 }
     */
    @Complex<PointModel>({ x: 0.5, y: 0.5 }, Point)
    public pivot: PointModel;

    /**
     * Defines how to pick the objects to be selected using rubber band selection
     * @default 'CompleteIntersect'
     */
    @Property('CompleteIntersect')
    public rubberBandSelectionMode: RubberBandSelectionMode;

    /**
     * Defines the collection of user handle connectors
     * @default []
     */
    @Collection<UserHandleModel>([], UserHandle)
    public userHandles: UserHandleModel[];

    /**
     * Defines how to pick the objects to be selected 
     * @default 'All'
     * @aspNumberEnum 
     */
    @Property(SelectorConstraints.All)
    public constraints: SelectorConstraints;


    /**
     * set the constraint of the container
     * @private
     * @aspNumberEnum
     */
    public thumbsConstraints: ThumbsConstraints;

    /**
     * Initializes the UI of the container
     */
    public init(diagram: Diagram): Container {
        let container: Container = new Container();
        container.measureChildren = false;
        let consize: Size = new Size();
        container.children = [];
        if (this.nodes || this.connectors) {
            for (let i: number = 0; i < this.nodes.length; i++) {
                let node: NodeModel = diagram.nameTable[this.nodes[i].id];
                let wrapper: Container = node.wrapper;
                // this.width = wrapper.actualSize.width; 
                // this.height = wrapper.actualSize.height;
                // this.rotateAngle = wrapper.rotateAngle;
                // this.offsetX = wrapper.offsetX;
                // this.offsetY = wrapper.offsetY;
                container.children.push(wrapper);
            }
            for (let j: number = 0; j < this.connectors.length; j++) {
                let connector: ConnectorModel = diagram.nameTable[this.connectors[j].id];
                let wrapper: Container = connector.wrapper;
                // this.width = wrapper.actualSize.width; this.height = wrapper.actualSize.height;
                // this.rotateAngle = wrapper.rotateAngle; this.offsetX = wrapper.offsetX;
                // this.offsetY = wrapper.offsetY;
                container.children.push(wrapper);
            }
        }
        this.wrapper = container;
        return container;
    }
}