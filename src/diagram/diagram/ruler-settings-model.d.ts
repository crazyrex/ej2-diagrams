import { Property, ChildProperty, Complex } from '@syncfusion/ej2-base';import { Ruler, RulerOrientation, TickAlignment } from '../../ruler/index';

/**
 * Interface for a class DiagramRuler
 */
export interface DiagramRulerModel {

    /**
     * Defines the unique interval of the ruler
     * @default 5
     */
    interval?: number;

    /**
     * Sets the segment width of the ruler
     * @default 100
     */
    segmentWidth?: number;

    /**
     * Defines the orientation of the ruler
     * @default 'Horizontal'
     */
    orientation?: RulerOrientation;

    /**
     * Defines the alignment of the tick in the ruler
     * @default 'RightOrBottom'
     */
    tickAlignment?: TickAlignment;

    /**
     * Defines the color of the marker
     * @default 'red'
     */
    markerColor?: string;

    /**
     * Defines the thickness of the ruler
     * @default 25
     */
    thickness?: number;

    /**
     * Sets the height of tick lines
     * @default null
     */
    arrangeTick?: Function | string;

}

/**
 * Interface for a class RulerSettings
 */
export interface RulerSettingsModel {

    /**
     * Sets the visibility of the ruler
     * @default 'false'
     */
    showRulers?: Boolean;

    /**
     * Updates the gridlines relative to the ruler ticks.
     * @default 'true'
     */
    dynamicGrid?: Boolean;

    /**
     * defines the horizontal ruler
     * @default new DiagramRuler({})
     */
    horizontalRuler?: DiagramRulerModel;

    /**
     * defines the vertical ruler
     * @default new DiagramRuler({})
     */
    verticalRuler?: DiagramRulerModel;

}