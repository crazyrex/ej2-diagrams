import { Property, Complex, ChildProperty } from '@syncfusion/ej2-base';
import { GridlinesModel } from './grid-lines-model';
import { SnapConstraints } from '../enum/enum';


/**
 * Defines gridlines
 */
export class Gridlines extends ChildProperty<Gridlines> {
    /**
     * Sets the line color of gridlines
     * @default ''
     */
    @Property('lightgray')
    public lineColor: string;
    /**
     * Defines the lineDashArray of gridlines
     * @default ''
     */
    @Property('')
    public lineDashArray: string;
    /**
     * Sets the lineIntervals of Gridlines
     * @default [1.25, 18.75, 0.25, 19.75, 0.25, 19.75, 0.25, 19.75, 0.25, 19.75]
     */
    @Property([1.25, 18.75, 0.25, 19.75, 0.25, 19.75, 0.25, 19.75, 0.25, 19.75])
    public lineIntervals: number[];
    /**
     * Defines the snap interval for object
     * @default [20]
     */
    @Property([20])
    public snapIntervals: number[];

    /** @private */
    public scaledIntervals: number[];
}


/**
 * Defines the public properties of diagram
 */
export class SnapSettings extends ChildProperty<SnapSettings> {
    /**
     * Horizontal gridlines for SnapSettings
     * @default {}
     */
    @Complex<GridlinesModel>({}, Gridlines)
    public horizontalGridlines: GridlinesModel;
    /**
     * Vertical gridlines for SnapSettings
     * @default {}
     */
    @Complex<GridlinesModel>({}, Gridlines)
    public verticalGridlines: GridlinesModel;
    /**
     * Constraints for gridlines and snapping
     * @default 'All'
     * @aspNumberEnum 
     */
    @Property(SnapConstraints.All)
    public constraints: SnapConstraints;
    /**
     * Snap Angle for object
     * @default 5
     */
    @Property(5)
    public snapAngle: number;
    /**
     * Sets the Snap object distance
     * @default 5
     */
    @Property(5)
    public snapObjectDistance: number;
}






