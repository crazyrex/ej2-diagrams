import { Property, Complex, ChildProperty } from '@syncfusion/ej2-base';import { ShapeStyle, Margin } from '../core/appearance';import { ShapeStyleModel, MarginModel } from '../core/appearance-model';import { Point } from '../primitives/point';import { PointModel } from '../primitives/point-model';import { HorizontalAlignment, VerticalAlignment, PortShapes, PortConstraints, PortVisibility } from '../enum/enum';

/**
 * Interface for a class Port
 */
export interface PortModel {

    /**
     * Defines the unique id of the port
     * @default ''
     */
    id?: string;

    /**
     * Sets the horizontal alignment of the port with respect to its immediate parent(node/connector)
     * @default 'Center'
     */
    horizontalAlignment?: HorizontalAlignment;

    /**
     * Sets the vertical alignment of the port with respect to its immediate parent(node/connector)
     * @default 'Center'
     */
    verticalAlignment?: VerticalAlignment;

    /**
     * Defines the space that the port has to be moved from its actual position
     * @default new Margin(0,0,0,0)
     */
    margin?: MarginModel;

    /**
     * Sets the width of the port
     * @default 12
     */
    width?: number;

    /**
     * Sets the height of the port
     * @default 12
     */
    height?: number;

    /**
     * Defines the appearance of the port
     * @default {}
     */
    style?: ShapeStyleModel;

    /**
     * Defines the type of the port shape
     * @default 'Square'
     */
    shape?: PortShapes;

    /**
     * Defines the type of the port visibility
     * @default 'Connect'
     * @aspNumberEnum 
     */
    visibility?: PortVisibility;

    /**
     * Defines the geometry of the port
     * @default ''
     */
    pathData?: string;

    /**
     * Defines the constraints of port
     * @default 'None'
     * @aspNumberEnum 
     */
    constraints?: PortConstraints;

    /**
     * Allows the user to save custom information/data about a port
     * @aspDefaultValueIgnore
     * @default undefined
     */
    addInfo?: Object;

}

/**
 * Interface for a class PointPort
 */
export interface PointPortModel extends PortModel{

    /**
     * Defines the position of the port with respect to the boundaries of nodes/connector
     * @default new Point(0.5,0.5)
     */
    offset?: PointModel;

}