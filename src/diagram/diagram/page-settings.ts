import { Property, Complex, ChildProperty } from '@syncfusion/ej2-base';
import { PageOrientation, BoundaryConstraints, ImageAlignment, ScrollLimit, Scale } from '../enum/enum';
import { MarginModel } from '../core/appearance-model';
import { Margin } from '../core/appearance';
import { Rect } from '../primitives/rect';
import { BackgroundModel } from './page-settings-model';


/**
 * Defines the BackgroundImage of diagram
 */
export class Background extends ChildProperty<Background> {
    /**
     * Defines the source of BackgroundImage 
     * @default ''
     */
    @Property('')
    public source: string;
    /**
     * Defines the background color
     * @default 'transparent'
     */
    @Property('transparent')
    public color: string;
    /**
     * Defines the scale of the BackgroundImage 
     * @default 'None'
     */
    @Property('None')
    public scale: Scale;
    /**
     * Defines the alignment of the BackgroundImage 
     * @default 'None'
     */
    @Property('None')
    public align: ImageAlignment;
}

/**
 * Defines PageSettings
 */
export class PageSettings extends ChildProperty<PageSettings> {
    /**
     * Sets the width for the Page
     * @default null
     */
    @Property(null)
    public width: number;

    /**
     * Sets the height of the Page
     * @default null
     */
    @Property(null)
    public height: number;

    /**
     * Sets the space to be left between an annotation and its parent node/connector
     * @default new Margin(0,0,0,0)
     */
    @Complex<MarginModel>({}, Margin)
    public margin: MarginModel;

    /**
     * Sets the PageOrientation for the diagram to page
     * @default 'Landscape'
     */
    @Property('Landscape')
    public orientation: PageOrientation;

    /**
     * Sets the BoundaryConstraints to page
     * @default 'Infinity'
     */
    @Property('Infinity')
    public boundaryConstraints: BoundaryConstraints;

    /**
     * Defines the background color and image  of diagram
     * @default 'transparent' 
     */
    @Complex<BackgroundModel>({}, Background)
    public background: BackgroundModel;

    /**
     * Sets the Multiple page for diagram
     * @default false
     */
    @Property(false)
    public multiplePage: boolean;
    /**
     * Sets the Page Break for diagram
     * @default false
     */
    @Property(false)
    public showPageBreaks: boolean;
}

/**
 * Diagram ScrollSettings module handles the scroller properties of the diagram
 */
export class ScrollSettings extends ChildProperty<ScrollSettings> {
    /**
     * Defines horizontalOffset of scroller
     * @default 0
     */
    @Property(0)
    public horizontalOffset: number;

    /**
     * Defines verticalOffset of scroller
     * @default 0
     */
    @Property(0)
    public verticalOffset: number;

    /**
     * Defines the currentZoomLevel of scroller
     * @default 1
     */
    @Property(1)
    public currentZoom: number;
    /**
     * Defines the viewPortWidth of scroller
     * @default 0
     */
    @Property(0)
    public viewPortWidth: number;

    /**
     * Defines the viewPortHeight of scroller
     * @default 0
     */
    @Property(0)
    public viewPortHeight: number;

    /**
     * Defines the minimum zoom value of scroller
     * @default 0.2
     */
    @Property(0.2)
    public minZoom: number;

    /**
     * Defines the maximum zoom value of scroller
     * @default 30
     */
    @Property(30)
    public maxZoom: number;


    /**
     * Defines the scrollable are of diagram control
     * @default 'Diagram'
     */
    @Property('Diagram')
    public scrollLimit: ScrollLimit;


    /**
     * Defines the scrollable area
     * @aspDefaultValueIgnore
     * @default undefined
     */
    @Property()
    public scrollableArea: Rect;

    /**
     * Enable auto scroll for diagram
     * @default false
     */
    @Property(false)
    public canAutoScroll: boolean;

    /**
     * AutoScrollBorder
     * @default { left: 15, right: 15, top: 15, bottom: 15 }
     */
    @Complex<MarginModel>({ left: 15, right: 15, top: 15, bottom: 15 }, Margin)
    public autoScrollBorder: MarginModel;
}




