import { Property, Complex, ChildProperty } from '@syncfusion/ej2-base';
import { ShapeStyle, Margin } from '../core/appearance';
import { ShapeStyleModel, MarginModel } from '../core/appearance-model';
import { Point } from '../primitives/point';
import { PointModel } from '../primitives/point-model';
import { HorizontalAlignment, VerticalAlignment, PortShapes, PortConstraints, PortVisibility } from '../enum/enum';


/**
 * Defines the behavior of connection ports
 */
export abstract class Port extends ChildProperty<Port> {

    /**
     * Defines the unique id of the port
     * @default ''
     */
    @Property('')
    public id: string;

    /**
     * Sets the horizontal alignment of the port with respect to its immediate parent(node/connector)
     * @default 'Center'
     */
    @Property('Center')
    public horizontalAlignment: HorizontalAlignment;

    /**
     * Sets the vertical alignment of the port with respect to its immediate parent(node/connector)
     * @default 'Center'
     */
    @Property('Center')
    public verticalAlignment: VerticalAlignment;

    /**
     * Defines the space that the port has to be moved from its actual position
     * @default new Margin(0,0,0,0)
     */
    @Complex<MarginModel>({}, Margin)
    public margin: MarginModel;

    /**
     * Sets the width of the port
     * @default 12
     */
    @Property(12)
    public width: number;

    /**
     * Sets the height of the port
     * @default 12
     */
    @Property(12)
    public height: number;

    /**
     * Defines the appearance of the port
     * @default {}
     */
    @Complex<ShapeStyleModel>({}, ShapeStyle)
    public style: ShapeStyleModel;

    /**
     * Defines the type of the port shape
     * @default 'Square'
     */
    @Property('Square')
    public shape: PortShapes;

    /**
     * Defines the type of the port visibility
     * @default 'Connect'
     * @aspNumberEnum 
     */
    @Property(PortVisibility.Connect)
    public visibility: PortVisibility;

    /**
     * Defines the geometry of the port
     * @default ''
     */
    @Property('')
    public pathData: string;

    /**
     * Defines the constraints of port
     * @default 'None'
     * @aspNumberEnum 
     */
    @Property(PortConstraints.None)
    public constraints: PortConstraints;

    /**
     * Allows the user to save custom information/data about a port
     * @aspDefaultValueIgnore
     * @default undefined
     */
    @Property()
    public addInfo: Object;
}

/**
 * Defines the behavior of a port, that sticks to a point
 */
export class PointPort extends Port {
    /**
     * Defines the position of the port with respect to the boundaries of nodes/connector
     * @default new Point(0.5,0.5)
     */
    @Complex<PointModel>({ x: 0.5, y: 0.5 }, Point)
    public offset: PointModel;
    // tslint:disable-next-line:no-any
    constructor(parent: any, propName: string, defaultValue: Object, isArray?: boolean) {
        super(parent, propName, defaultValue, isArray);
    }
}