import { Component, Property, Complex, CollectionFactory, ChildProperty, Event } from '@syncfusion/ej2-base';import { Browser, EventHandler, Draggable, INotifyPropertyChanged, Collection, ModuleDeclaration } from '@syncfusion/ej2-base';import { remove, createElement, classList, EmitType } from '@syncfusion/ej2-base';import { Accordion, AccordionItemModel, ExpandMode, ExpandEventArgs } from '@syncfusion/ej2-navigations';import { NodeModel, ConnectorModel, Node, Connector, Shape, Size, Transform } from '../diagram/index';import { DiagramRenderer, Container, StackPanel, Margin, BpmnDiagrams } from '../diagram/index';import { DiagramElement, TextElement, MarginModel, Canvas, BpmnShape, PointModel, IElement } from '../diagram/index';import { TextWrap, TextOverflow, IPaletteSelectionChangeArgs } from '../diagram/index';import { SvgRenderer } from '../diagram/rendering/svg-renderer';import { parentsUntil, createSvgElement, createHtmlElement, createMeasureElements } from '../diagram/utility/dom-util';import { scaleElement } from '../diagram/utility/diagram-util';import { getFunction } from '../diagram/utility/base-util';import { getOuterBounds } from '../diagram/utility/connector';import { Point } from '../diagram/primitives/point';import { CanvasRenderer } from '../diagram/rendering/canvas-renderer';import { Rect } from '../diagram/primitives/rect';
import {ComponentModel} from '@syncfusion/ej2-base';

/**
 * Interface for a class Palette
 */
export interface PaletteModel {

    /**
     * Defines the unique id of a symbol group
     * @default ''
     */
    id?: string;

    /**
     * Sets the height of the symbol group
     * @aspDefaultValueIgnore
     * @default undefined
     */
    height?: number;

    /**
     * Sets whether the symbol group is expanded or not
     * @default true
     */
    expanded?: boolean;

    /**
     * Defines the content of the group icon
     * @default ''
     */
    iconCss?: string;

    /**
     * Defines the title of the group icon
     * @default ''
     */
    title?: string;

    /**
     * Defines the collection of predefined symbols
     * @aspType object
     */
    symbols?: (NodeModel | ConnectorModel)[];

}

/**
 * Interface for a class SymbolPreview
 */
export interface SymbolPreviewModel {

    /**
     * Sets the preview width of the symbols
     * @aspDefaultValueIgnore
     * @default undefined
     */
    width?: number;

    /**
     * Sets the preview height of the symbols
     * @aspDefaultValueIgnore
     * @default undefined
     */
    height?: number;

    /**
     * Defines the distance to be left between the cursor and symbol
     * @default {}
     */
    offset?: PointModel;

}

/**
 * Interface for a class SymbolPalette
 */
export interface SymbolPaletteModel extends ComponentModel{

    /**
     * Configures the key, when it pressed the symbol palette will be focused
     * @default 'S'
     */
    accessKey?: string;

    /**
     * Defines the width of the symbol palette
     * @default '100%'
     */
    width?: string | number;

    /**
     * Defines the height of the symbol palette
     * @default '100%'
     */
    height?: string | number;

    /**
     * Defines the collection of symbol groups
     * @default []
     */
    palettes?: PaletteModel[];

    /**
     * Defines the size, appearance and description of a symbol
     * @aspDefaultValueIgnore
     * @default undefined
     */
    getSymbolInfo?: Function | string;

    /**
     * Defines the symbols to be added in search palette
     * @aspDefaultValueIgnore
     * @default undefined
     */
    filterSymbols?: Function | string;

    /**
     * Defines the content of a symbol
     * @aspDefaultValueIgnore
     * @default undefined
     */
    getSymbolTemplate?: Function | string;

    /**
     * Defines the width of the symbol
     * @aspDefaultValueIgnore
     * @default undefined
     */
    symbolWidth?: number;

    /**
     * Defines the height of the symbol
     * @aspDefaultValueIgnore
     * @default undefined
     */
    symbolHeight?: number;

    /**
     * Defines the space to be left around a symbol
     * @default {left:10,right:10,top:10,bottom:10}
     */
    symbolMargin?: MarginModel;

    /**
     * Enables/Disables dragging the symbols from palette
     * @default true
     */
    allowDrag?: boolean;

    /**
     * Defines the size and position of the symbol preview
     * @aspDefaultValueIgnore
     * @default undefined
     */
    symbolPreview?: SymbolPreviewModel;

    /**
     * Enables/Disables search option in symbol palette
     * @default false
     */
    enableSearch?: boolean;

    /**
     * Enables/Disables animation when the palette header is expanded/collapsed
     */
    enableAnimation?: boolean;

    /**
     * Defines how many palettes can be at expanded mode at a time
     * @default 'Multiple'
     */
    expandMode?: ExpandMode;

    /**
     * Triggers after the selection changes in the symbol palette
     * @event
     */
    paletteSelectionChange?: EmitType<IPaletteSelectionChangeArgs>;

    /**
     * Helps to return the default properties of node
     */
    getNodeDefaults?: Function | string;

    /**
     * Helps to return the default properties of connector 
     */
    getConnectorDefaults?: Function | string;

}