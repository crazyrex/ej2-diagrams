import { Property, ChildProperty, Complex } from '@syncfusion/ej2-base';
import { Ruler, RulerOrientation, TickAlignment } from '../../ruler/index';
import { DiagramRulerModel } from './ruler-settings-model';
/**
 * defines the Properties for the Diagram Ruler
 */
export abstract class DiagramRuler extends ChildProperty<DiagramRuler> {
    /**
     * Defines the unique interval of the ruler
     * @default 5
     */
    @Property(5)
    public interval: number;

    /**
     * Sets the segment width of the ruler
     * @default 100
     */
    @Property(100)
    public segmentWidth: number;

    /**
     * Defines the orientation of the ruler
     * @default 'Horizontal'
     */
    @Property('Horizontal')
    public orientation: RulerOrientation;

    /**
     * Defines the alignment of the tick in the ruler
     * @default 'RightOrBottom'
     */
    @Property('RightOrBottom')
    public tickAlignment: TickAlignment;

    /**
     * Defines the color of the marker
     * @default 'red'
     */
    @Property('red')
    public markerColor: string;

    /**
     * Defines the thickness of the ruler
     * @default 25
     */
    @Property(25)
    public thickness: number;

    /**
     * Sets the height of tick lines
     * @default null
     */
    @Property(null)
    public arrangeTick: Function | string;
}

/**
 * Defines rulers
 */
export class RulerSettings extends ChildProperty<RulerSettings> {
    /**
     * Sets the visibility of the ruler
     * @default 'false'
     */
    @Property(false)
    public showRulers: Boolean;

    /**
     * Updates the gridlines relative to the ruler ticks.
     * @default 'true'
     */
    @Property(true)
    public dynamicGrid: Boolean;

    /** 
     * defines the horizontal ruler
     * @default new DiagramRuler({})
     */
    @Complex<DiagramRulerModel>({ orientation: 'Horizontal' }, DiagramRuler)
    public horizontalRuler: DiagramRulerModel;

    /** 
     * defines the vertical ruler
     * @default new DiagramRuler({})
     */
    @Complex<DiagramRulerModel>({ orientation: 'Vertical' }, DiagramRuler)
    public verticalRuler: DiagramRulerModel;
}