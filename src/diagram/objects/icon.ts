import { Property, Complex, ChildProperty } from '@syncfusion/ej2-base';
import { Margin } from '../core/appearance';
import { MarginModel } from '../core/appearance-model';
import { Point } from '../primitives/point';
import { PointModel } from '../primitives/point-model';
import { HorizontalAlignment, VerticalAlignment, IconShapes } from '../enum/enum';

/**
 * Defines the behavior of default IconShape
 */
export class IconShape extends ChildProperty<IconShape> {

    /**
     * Defines the shape of the icon.
     * @default 'None'
     */
    @Property('None')
    public shape: IconShapes;

    /**
     * Sets the fill color of a icon.
     * @default 'white'
     */
    @Property('white')
    public fill: string;

    /**
     * Defines how the Icon has to be horizontally aligned.
     * @default 'Auto'
     */
    @Property('Auto')
    public horizontalAlignment: HorizontalAlignment;

    /**
     * Defines how the Icon has to be Vertically aligned.
     * @default 'Auto'
     */
    @Property('Auto')
    public verticalAlignment: VerticalAlignment;

    /**
     * Defines the width of the icon.
     * @default 10
     */
    @Property(10)
    public width: number;

    /**
     * Defines the height of the icon.
     * @default 10
     */
    @Property(10)
    public height: number;

    /**
     * Defines the offset of the icon.
     * @default new Point(0.5,1)
     */
    @Complex<PointModel>({ x: 0.5, y: 1 }, Point)
    public offset: PointModel;

    /**
     * Sets the border color of a icon.
     * @default ''
     */
    @Property('#1a1a1a')
    public borderColor: string;

    /**
     * Defines the border width of the icon.
     * @default 1
     */
    @Property(1)
    public borderWidth: number;

    /**
     * Defines the space that the icon has to be moved from its actual position
     * @default new Margin(0,0,0,0)
     */
    @Complex<MarginModel>({}, Margin)
    public margin: MarginModel;

    /**
     * Defines the geometry of a path
     * @default ''
     */
    @Property('')
    public pathData: string;

    /**
     * Defines the template
     * @default ''
     */
    @Property('')
    public content: string;

    /**
     * Defines the corner radius for the icon
     * @default 0
     */
    @Property(0)
    public cornerRadius: number;

    /**
     * Defines the space that the icon has to be moved from the icon border
     * @default new Margin(2,2,2,2)
     */
    @Complex<MarginModel>({ left: 2, right: 2, top: 2, bottom: 2 }, Margin)
    public padding: MarginModel;
}

