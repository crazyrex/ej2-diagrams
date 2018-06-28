
import { PointModel } from '../primitives/point-model';
import { Rect } from '../primitives/rect';
import { MarginModel } from '../core/appearance-model';
import { Margin } from '../core/appearance';
import { HorizontalAlignment, VerticalAlignment, ConnectionDirection, } from '../enum/enum';
import { LayoutOrientation, ConnectorSegments, LayoutType, SubTreeOrientation, SubTreeAlignments, Segments} from '../enum/enum';
import { Property, Complex, ChildProperty } from '@syncfusion/ej2-base';
import { OrthogonalSegmentModel, BezierSegmentModel, StraightSegmentModel } from '../objects/connector-model';

/**
 * Defines the behavior of the automatic layouts
 */
export class Layout extends ChildProperty<Layout> {

    /**
     * Sets the name of the node with respect to which all other nodes will be translated
     * @default ''
     */
    @Property('')
    public fixedNode: string;

    /**
     * Sets the space that has to be horizontally left between the nodes
     * @default 30
     */
    @Property(30)
    public horizontalSpacing: number;

    /**
     * Sets the space that has to be Vertically left between the nodes
     * @default 30
     */
    @Property(30)
    public verticalSpacing: number;

    /**
     * Sets the Maximum Iteration of the symmetrical layout
     * @default 30
     */
    @Property(30)
    public maxIteration: number;


    /**
     * Sets the spring Factor of the symmetrical layout
     * @default 40
     */
    @Property(40)
    public springFactor: number;

    /**
     * Sets the spring length of the symmetrical layout
     * @default 50
     */
    @Property(50)
    public springLength: number;


    /**
     * * Defines the space between the viewport and the layout
     * @default { left: 50, top: 50, right: 0, bottom: 0 }
     */
    @Complex<MarginModel>({ left: 50, top: 50, right: 0, bottom: 0 }, Margin)
    public margin: MarginModel;

    /**
     * Defines how the layout has to be horizontally aligned
     * @default 'Auto'
     */
    @Property('Auto')
    public horizontalAlignment: HorizontalAlignment;

    /**
     * Defines how the layout has to be Vertically aligned
     * @default 'Auto'
     */
    @Property('Auto')
    public verticalAlignment: VerticalAlignment;

    /**
     * Defines the orientation of layout
     * @default 'TopToBottom'
     */
    @Property('TopToBottom')
    public orientation: LayoutOrientation;

    /**
     * Sets how to define the connection direction (first segment direction & last segment direction).
     * @default 'Auto'
     */
    @Property('Auto')
    public connectionDirection: ConnectionDirection;

    /**
     * Sets whether the segments have to be customized based on the layout or not
     * @default 'Default'
     */
    @Property('Default')
    public connectorSegments: ConnectorSegments;

    /**
     * Defines the Type of Layout
     * @default 'None'
     */
    @Property('None')
    public type: LayoutType;

    /**
     * getLayout Info
     * @aspDefaultValueIgnore
     * @default undefined
     */
    @Property()
    public getLayoutInfo: Function | string;

    /**
     * get layout branch
     * @aspDefaultValueIgnore
     * @default undefined
     */
    @Property()
    public getBranch: Function | string;

    /**
     * Aligns the layout within the given bounds
     * @aspDefaultValueIgnore
     * @default undefined
     */
    @Property()
    public bounds: Rect;

    /**
     * Animation feature for layout
     * @default true
     */
    @Property(true)
    public enableAnimation: boolean;

    /**
     * Root node name  of the layout 
     * @default ''
     */
    @Property('')
    public root: string;
}

/**
 * Defines the properties of the node
 */
export interface INode {
    id: string;
    offsetX: number;
    offsetY: number;
    actualSize: { width: number, height: number };
    inEdges: string[];
    outEdges: string[];
    pivot: PointModel;
    excludeFromLayout: boolean;
    isExpanded: boolean;
    data: Object;
    treeBounds?: Bounds;
    differenceX?: number;
    differenceY?: number;
    visited?: boolean;
}

/**
 * Defines the properties of the connector
 */
export interface IConnector {
    id: string;
    sourceID: string;
    targetID: string;
    visited?: boolean;
    visible?: boolean;
    points?: PointModel[];
    type?: Segments;
    segments?: OrthogonalSegmentModel[] | StraightSegmentModel[] | BezierSegmentModel[];
}

export interface Bounds {
    x: number;
    y: number;
    right: number;
    bottom: number;
    canMoveBy?: number;
}

export interface TreeInfo {
    orientation?: SubTreeOrientation;
    type?: SubTreeAlignments;
    offset?: number;
    enableRouting?: boolean;
    children?: string[];
    assistants?: string[];
    level?: number;
    hasSubTree?: boolean;
    rows?: number;
}

/** @private */
export interface ILayout {
    anchorX?: number;
    anchorY?: number;
    maxLevel?: number;
    nameTable?: Object;
    firstLevelNodes?: INode[];
    centerNode?: null;
    type?: string;
    orientation?: string;
    graphNodes?: {};
    rootNode?: INode;
    updateView?: boolean;
    verticalSpacing?: number;
    horizontalSpacing?: number;
    levels?: LevelBounds[];
    horizontalAlignment?: HorizontalAlignment;
    verticalAlignment?: VerticalAlignment;
    fixedNode?: string;
    bounds?: Rect;
    getLayoutInfo?: Function;
    getBranch?: Function;
    getConnectorSegments?: Function;
    level?: number;
    margin?: MarginModel;
    objects?: INode[];
    root?: string;
}

/** @private */
export interface LevelBounds {
    rBounds: Bounds;
}