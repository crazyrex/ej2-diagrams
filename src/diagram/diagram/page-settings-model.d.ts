import { Property, Complex, ChildProperty } from '@syncfusion/ej2-base';import { PageOrientation, BoundaryConstraints, ImageAlignment, ScrollLimit, Scale } from '../enum/enum';import { MarginModel } from '../core/appearance-model';import { Margin } from '../core/appearance';import { Rect } from '../primitives/rect';

/**
 * Interface for a class Background
 */
export interface BackgroundModel {

    /**
     * Defines the source of BackgroundImage 
     * @default ''
     */
    source?: string;

    /**
     * Defines the background color
     * @default 'transparent'
     */
    color?: string;

    /**
     * Defines the scale of the BackgroundImage 
     * @default 'None'
     */
    scale?: Scale;

    /**
     * Defines the alignment of the BackgroundImage 
     * @default 'None'
     */
    align?: ImageAlignment;

}

/**
 * Interface for a class PageSettings
 */
export interface PageSettingsModel {

    /**
     * Sets the width for the Page
     * @default null
     */
    width?: number;

    /**
     * Sets the height of the Page
     * @default null
     */
    height?: number;

    /**
     * Sets the space to be left between an annotation and its parent node/connector
     * @default new Margin(0,0,0,0)
     */
    margin?: MarginModel;

    /**
     * Sets the PageOrientation for the diagram to page
     * @default 'Landscape'
     */
    orientation?: PageOrientation;

    /**
     * Sets the BoundaryConstraints to page
     * @default 'Infinity'
     */
    boundaryConstraints?: BoundaryConstraints;

    /**
     * Defines the background color and image  of diagram
     * @default 'transparent' 
     */
    background?: BackgroundModel;

    /**
     * Sets the Multiple page for diagram
     * @default false
     */
    multiplePage?: boolean;

    /**
     * Sets the Page Break for diagram
     * @default false
     */
    showPageBreaks?: boolean;

}

/**
 * Interface for a class ScrollSettings
 */
export interface ScrollSettingsModel {

    /**
     * Defines horizontalOffset of scroller
     * @default 0
     */
    horizontalOffset?: number;

    /**
     * Defines verticalOffset of scroller
     * @default 0
     */
    verticalOffset?: number;

    /**
     * Defines the currentZoomLevel of scroller
     * @default 1
     */
    currentZoom?: number;

    /**
     * Defines the viewPortWidth of scroller
     * @default 0
     */
    viewPortWidth?: number;

    /**
     * Defines the viewPortHeight of scroller
     * @default 0
     */
    viewPortHeight?: number;

    /**
     * Defines the minimum zoom value of scroller
     * @default 0.2
     */
    minZoom?: number;

    /**
     * Defines the maximum zoom value of scroller
     * @default 30
     */
    maxZoom?: number;

    /**
     * Defines the scrollable are of diagram control
     * @default 'Diagram'
     */
    scrollLimit?: ScrollLimit;

    /**
     * Defines the scrollable area
     * @aspDefaultValueIgnore
     * @default undefined
     */
    scrollableArea?: Rect;

    /**
     * Enable auto scroll for diagram
     * @default false
     */
    canAutoScroll?: boolean;

    /**
     * AutoScrollBorder
     * @default { left: 15, right: 15, top: 15, bottom: 15 }
     */
    autoScrollBorder?: MarginModel;

}