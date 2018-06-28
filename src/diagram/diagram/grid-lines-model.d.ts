import { Property, Complex, ChildProperty } from '@syncfusion/ej2-base';import { SnapConstraints } from '../enum/enum';

/**
 * Interface for a class Gridlines
 */
export interface GridlinesModel {

    /**
     * Sets the line color of gridlines
     * @default ''
     */
    lineColor?: string;

    /**
     * Defines the lineDashArray of gridlines
     * @default ''
     */
    lineDashArray?: string;

    /**
     * Sets the lineIntervals of Gridlines
     * @default [1.25, 18.75, 0.25, 19.75, 0.25, 19.75, 0.25, 19.75, 0.25, 19.75]
     */
    lineIntervals?: number[];

    /**
     * Defines the snap interval for object
     * @default [20]
     */
    snapIntervals?: number[];

}

/**
 * Interface for a class SnapSettings
 */
export interface SnapSettingsModel {

    /**
     * Horizontal gridlines for SnapSettings
     * @default {}
     */
    horizontalGridlines?: GridlinesModel;

    /**
     * Vertical gridlines for SnapSettings
     * @default {}
     */
    verticalGridlines?: GridlinesModel;

    /**
     * Constraints for gridlines and snapping
     * @default 'All'
     * @aspNumberEnum 
     */
    constraints?: SnapConstraints;

    /**
     * Snap Angle for object
     * @default 5
     */
    snapAngle?: number;

    /**
     * Sets the Snap object distance
     * @default 5
     */
    snapObjectDistance?: number;

}