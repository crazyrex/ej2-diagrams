import { PointModel } from '../primitives/point-model';import { Rect } from '../primitives/rect';import { MarginModel } from '../core/appearance-model';import { Margin } from '../core/appearance';import { HorizontalAlignment, VerticalAlignment, ConnectionDirection, } from '../enum/enum';import { LayoutOrientation, ConnectorSegments, LayoutType, SubTreeOrientation, SubTreeAlignments, Segments} from '../enum/enum';import { Property, Complex, ChildProperty } from '@syncfusion/ej2-base';import { OrthogonalSegmentModel, BezierSegmentModel, StraightSegmentModel } from '../objects/connector-model';

/**
 * Interface for a class Layout
 */
export interface LayoutModel {

    /**
     * Sets the name of the node with respect to which all other nodes will be translated
     * @default ''
     */
    fixedNode?: string;

    /**
     * Sets the space that has to be horizontally left between the nodes
     * @default 30
     */
    horizontalSpacing?: number;

    /**
     * Sets the space that has to be Vertically left between the nodes
     * @default 30
     */
    verticalSpacing?: number;

    /**
     * Sets the Maximum Iteration of the symmetrical layout
     * @default 30
     */
    maxIteration?: number;

    /**
     * Sets the spring Factor of the symmetrical layout
     * @default 40
     */
    springFactor?: number;

    /**
     * Sets the spring length of the symmetrical layout
     * @default 50
     */
    springLength?: number;

    /**
     * * Defines the space between the viewport and the layout
     * @default { left: 50, top: 50, right: 0, bottom: 0 }
     */
    margin?: MarginModel;

    /**
     * Defines how the layout has to be horizontally aligned
     * @default 'Auto'
     */
    horizontalAlignment?: HorizontalAlignment;

    /**
     * Defines how the layout has to be Vertically aligned
     * @default 'Auto'
     */
    verticalAlignment?: VerticalAlignment;

    /**
     * Defines the orientation of layout
     * @default 'TopToBottom'
     */
    orientation?: LayoutOrientation;

    /**
     * Sets how to define the connection direction (first segment direction & last segment direction).
     * @default 'Auto'
     */
    connectionDirection?: ConnectionDirection;

    /**
     * Sets whether the segments have to be customized based on the layout or not
     * @default 'Default'
     */
    connectorSegments?: ConnectorSegments;

    /**
     * Defines the Type of Layout
     * @default 'None'
     */
    type?: LayoutType;

    /**
     * getLayout Info
     * @aspDefaultValueIgnore
     * @default undefined
     */
    getLayoutInfo?: Function | string;

    /**
     * get layout branch
     * @aspDefaultValueIgnore
     * @default undefined
     */
    getBranch?: Function | string;

    /**
     * Aligns the layout within the given bounds
     * @aspDefaultValueIgnore
     * @default undefined
     */
    bounds?: Rect;

    /**
     * Animation feature for layout
     * @default true
     */
    enableAnimation?: boolean;

    /**
     * Root node name  of the layout 
     * @default ''
     */
    root?: string;

}