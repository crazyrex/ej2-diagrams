import { Property, Complex, ChildProperty } from '@syncfusion/ej2-base';import { Margin } from '../core/appearance';import { MarginModel } from '../core/appearance-model';import { Point } from '../primitives/point';import { PointModel } from '../primitives/point-model';import { HorizontalAlignment, VerticalAlignment, IconShapes } from '../enum/enum';

/**
 * Interface for a class IconShape
 */
export interface IconShapeModel {

    /**
     * Defines the shape of the icon.
     * @default 'None'
     */
    shape?: IconShapes;

    /**
     * Sets the fill color of a icon.
     * @default 'white'
     */
    fill?: string;

    /**
     * Defines how the Icon has to be horizontally aligned.
     * @default 'Auto'
     */
    horizontalAlignment?: HorizontalAlignment;

    /**
     * Defines how the Icon has to be Vertically aligned.
     * @default 'Auto'
     */
    verticalAlignment?: VerticalAlignment;

    /**
     * Defines the width of the icon.
     * @default 10
     */
    width?: number;

    /**
     * Defines the height of the icon.
     * @default 10
     */
    height?: number;

    /**
     * Defines the offset of the icon.
     * @default new Point(0.5,1)
     */
    offset?: PointModel;

    /**
     * Sets the border color of a icon.
     * @default ''
     */
    borderColor?: string;

    /**
     * Defines the border width of the icon.
     * @default 1
     */
    borderWidth?: number;

    /**
     * Defines the space that the icon has to be moved from its actual position
     * @default new Margin(0,0,0,0)
     */
    margin?: MarginModel;

    /**
     * Defines the geometry of a path
     * @default ''
     */
    pathData?: string;

    /**
     * Defines the template
     * @default ''
     */
    content?: string;

    /**
     * Defines the corner radius for the icon
     * @default 0
     */
    cornerRadius?: number;

    /**
     * Defines the space that the icon has to be moved from the icon border
     * @default new Margin(2,2,2,2)
     */
    padding?: MarginModel;

}