
import { MenuItemModel } from '@syncfusion/ej2-navigations';
import { ZoomTypes, PageOrientation, DiagramRegions, FitModes, RenderingMode } from '../../enum/enum';
import { PointModel } from '../../primitives/point-model';
import { Rect } from '../../primitives/rect';
import { MarginModel } from '../../core/appearance-model';
import { Stretch, FileFormats, ExportModes, } from '../../enum/enum';
import { DiagramRenderer } from '../../rendering/renderer';
import { BeforeOpenCloseMenuEventArgs } from '@syncfusion/ej2-navigations';


/**
 * Defines the context menu item model.
 */
export interface ContextMenuItemModel extends MenuItemModel {
    /**
     * Define the target to show the menu item.
     */
    target?: string;
}

export interface ZoomOptions {
    zoomFactor?: number;
    focusPoint?: PointModel;
    type?: ZoomTypes;
}

export interface ColorValue {
    r?: number;
    g?: number;
    b?: number;
}

/**
 * Defines the options to export diagrams
 */
export interface IPrintOptions {
    /**
     * Sets the width for the Page
     * @default null
     */
    pageWidth?: number;

    /**
     * Sets the height of the Page
     * @default null
     */
    pageHeight?: number;

    /**
     * Sets the space to be left between an annotation and its parent node/connector
     * @default new Margin(0,0,0,0)
     */
    margin?: MarginModel;

    /**
     * Sets the PageOrientation for the diagram to page
     * @default 'Landscape'
     */
    pageOrientation?: PageOrientation;

    /**
     * Sets the Multiple page for diagram
     * @default false
     */
    multiplePage?: boolean;

    /**
     * Sets the region for the print settings
     * @default 'PageSettings'
     */
    region?: DiagramRegions;

    /**
     * Sets the stretch
     * @default Stretch
     */
    stretch?: Stretch;
}

/**
 * Defines the options to export diagrams
 */
export interface IExportOptions extends IPrintOptions {
    /**
     * Sets the file name for the File
     * @default('')
     */
    fileName?: string;

    /**
     * Sets the file format to save the file
     * @default('')
     */
    format?: FileFormats;

    /**
     * Sets the Mode for the file to be downloaded
     * @default('')
     */
    mode?: ExportModes;

    /**
     * Sets the bounds for the export diagram
     * @default (0)
     */
    bounds?: Rect;
}


/** Defines the hidden items of the diagram context menu */
export interface DiagramBeforeMenuOpenEventArgs extends BeforeOpenCloseMenuEventArgs {
    hiddenItems: string[];
}

export interface IFitOptions {
    mode?: FitModes;
    region?: DiagramRegions;
    margin?: MarginModel;
    canZoomIn?: boolean;
    customBounds?: Rect;
}

/** @private */
export interface ITouches {
    pageX?: number;
    pageY?: number;
    pointerId?: number;
}

/** @private */
export interface View {
    mode: RenderingMode;
    removeDocument: Function;
    updateView: Function;
    renderDocument: Function;
    element: HTMLElement;
    contentWidth?: number;
    contentHeight?: number;
    diagramLayer: HTMLCanvasElement | SVGGElement;
    id: string;
    diagramRenderer: DiagramRenderer;
}

/** @private */
export interface ActiveLabel {
    id: string;
    parentId: string;
    isGroup: boolean;
}