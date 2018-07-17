import { Component, Property, Complex, Collection, EventHandler, createElement, L10n, Droppable, remove } from '@syncfusion/ej2-base';import { Browser, ModuleDeclaration, Event, EmitType } from '@syncfusion/ej2-base';import { INotifyPropertyChanged } from '@syncfusion/ej2-base';import { CanvasRenderer } from './rendering/canvas-renderer';import { SvgRenderer } from './rendering/svg-renderer';import { DiagramRenderer } from './rendering/renderer';import { BaseAttributes } from './rendering/canvas-interface';import { PageSettings, ScrollSettings } from './diagram/page-settings';import { PageSettingsModel, ScrollSettingsModel } from './diagram/page-settings-model';import { DiagramElement } from './core/elements/diagram-element';import { ServiceLocator } from './objects/service';import { IElement, IDataLoadedEventArgs, ISelectionChangeEventArgs, IClickEventArgs, ScrollValues } from './objects/interface/IElement';import { ISizeChangeEventArgs, IConnectionChangeEventArgs, IEndChangeEventArgs, IDoubleClickEventArgs } from './objects/interface/IElement';import { ICollectionChangeEventArgs, IPropertyChangeEventArgs, IDraggingEventArgs, IRotationEventArgs } from './objects/interface/IElement';import { IDragEnterEventArgs, IDragLeaveEventArgs, IDragOverEventArgs, IDropEventArgs } from './objects/interface/IElement';import { ITextEditEventArgs, IHistoryChangeArgs, IScrollChangeEventArgs, IMouseEventArgs } from './objects/interface/IElement';import { ZoomOptions, IPrintOptions, IExportOptions, IFitOptions, ActiveLabel } from './objects/interface/interfaces';import { View } from './objects/interface/interfaces';import { Container } from './core/containers/container';import { Node, BpmnShape } from './objects/node';import { Segment } from './interaction/scroller';import { OrthogonalSegment, Connector } from './objects/connector';import { ConnectorModel, BpmnFlowModel } from './objects/connector-model';import { SnapSettings } from './diagram/grid-lines';import { RulerSettings } from './diagram/ruler-settings';import { removeRulerElements, updateRuler, getRulerSize } from './ruler/ruler';import { renderRuler, renderOverlapElement } from './ruler/ruler';import { RulerSettingsModel } from './diagram/ruler-settings-model';import { SnapSettingsModel } from './diagram/grid-lines-model';import { NodeModel, TextModel, BpmnShapeModel, BpmnAnnotationModel } from './objects/node-model';import { Size } from './primitives/size';import { Point } from './primitives/point';import { Keys, KeyModifiers, DiagramTools } from './enum/enum';import { DiagramConstraints, BridgeDirection, AlignmentOptions, SelectorConstraints, PortVisibility, DiagramEvent } from './enum/enum';import { DistributeOptions, SizingOptions, RenderingMode, DiagramAction, ThumbsConstraints, NudgeDirection } from './enum/enum';import { PathElement } from './core/elements/path-element';import { TextElement } from './core/elements/text-element';import { updateStyle, removeItem, updateConnector, updateShape } from './utility/diagram-util';import { checkPortRestriction, serialize, deserialize, updateHyperlink, getObjectType } from './utility/diagram-util';import { Rect } from './primitives/rect';import { getPortShape } from './objects/dictionary/common';import { PointPortModel } from './objects/port-model';import { ShapeAnnotationModel, AnnotationModel, PathAnnotationModel } from './objects/annotation-model';import { ShapeAnnotation, PathAnnotation, Annotation } from './objects/annotation';import { PointModel } from './primitives/point-model';import { Canvas } from './core/containers/canvas';import { DataSourceModel } from './diagram/data-source-model';import { DataSource } from './diagram/data-source';import { LayoutModel } from './layout/layout-base-model';import { Layout, INode, ILayout } from './layout/layout-base';import { DataBinding } from './data-binding/data-binding';import { Selector } from './interaction/selector';import { SelectorModel } from './interaction/selector-model';import { DiagramEventHandler } from './interaction/event-handlers';import { CommandHandler } from './interaction/command-manager';import { DiagramScroller } from './interaction/scroller';import { Actions, isSelected } from './interaction/actions';import { ToolBase } from './interaction/tool';import { BpmnDiagrams } from './objects/bpmn';import { DiagramContextMenu } from './objects/context-menu';import { ConnectorBridging } from './objects/connector-bridging';import { SpatialSearch } from './interaction/spatial-search/spatial-search';import { HistoryEntry, History } from './diagram/history';import { UndoRedo } from './objects/undo-redo';import { ConnectorEditing } from './interaction/connector-editing';import { Ruler } from '../ruler/index';import { BeforeOpenCloseMenuEventArgs, MenuEventArgs, EJ2Instance } from '@syncfusion/ej2-navigations';import { setAttributeSvg, setAttributeHtml, measureHtmlText, removeElement, createMeasureElements } from './utility/dom-util';import { getDiagramElement, getScrollerWidth, getHTMLLayer } from './utility/dom-util';import { getBackgroundLayer, createHtmlElement, createSvgElement, getNativeLayerSvg } from './utility/dom-util';import { getPortLayerSvg, getDiagramLayerSvg } from './utility/dom-util';import { getAdornerLayerSvg, getSelectorElement, getGridLayerSvg, getBackgroundLayerSvg } from './utility/dom-util';import { CommandManager, ContextMenuSettings } from './diagram/keyboard-commands';import { CommandManagerModel, CommandModel, ContextMenuSettingsModel } from './diagram/keyboard-commands-model';import { canDelete, canInConnect, canOutConnect, canRotate, canResize, canSingleSelect, canZoomPan } from './utility/constraints-util';import { canDragSourceEnd, canDragTargetEnd, canDragSegmentThumb, enableReadOnly, canMove } from './utility/constraints-util';import { findAnnotation } from './utility/diagram-util';import { randomId, cloneObject, extendObject, getFunction, getBounds } from './utility/base-util';import { Snapping } from './objects/snapping';import { DiagramTooltipModel } from './objects/tooltip-model';import { TextStyleModel } from './core/appearance-model';import { TransformFactor } from './interaction/scroller';import { RadialTree } from './layout/radial-tree';import { HierarchicalTree } from './layout/hierarchical-tree';import { ComplexHierarchicalTree } from './layout/complex-hierarchical-tree';import { MindMap } from './layout/mind-map';import { DiagramTooltip, initTooltip } from './objects/tooltip';import { Tooltip } from '@syncfusion/ej2-popups';import { PrintAndExport } from './print-settings';import { Port, PointPort } from './objects/port';import { SymmetricLayout, IGraphObject } from './layout/symmetrical-layout';import { LayoutAnimation } from './objects/layout-animation';import { canShadow } from './utility/constraints-util';import { Layer } from './diagram/layer';import { LayerModel } from './diagram/layer-model';import { DiagramNativeElement } from './core/elements/native-element';import { DiagramHtmlElement } from './core/elements/html-element';import { IconShapeModel } from './objects/icon-model';
import {ComponentModel} from '@syncfusion/ej2-base';

/**
 * Interface for a class Diagram
 */
export interface DiagramModel extends ComponentModel{

    /**
     * Defines the width of the diagram model.
     * @default '100%'
     */
    width?: string | number;

    /**
     * Defines the diagram rendering mode.
     * @default 'SVG'
     */
    mode?: RenderingMode;

    /**
     * Defines the height of the diagram model.
     * @default '100%'
     */
    height?: string | number;

    /**
     * Defines the behavior of the context menu items 
     */
    contextMenuSettings?: ContextMenuSettingsModel;

    /**
     * Defines the diagram constraints
     * @default 'Default'
     * @aspNumberEnum 
     */
    constraints?: DiagramConstraints;

    /**
     * Defines the precedence of the interactive tools
     * @default 'Default'
     * @aspNumberEnum 
     */
    tool?: DiagramTools;

    /**
     * Defines the bridge direction of diagram connectors
     * @default top
     */
    bridgeDirection?: BridgeDirection;

    /**
     * Defines the background color of the diagram
     * @default transparent
     */
    backgroundColor?: String;

    /**
     * Defines the snap settings of diagram
     * @default {}
     */
    snapSettings?: SnapSettingsModel;

    /**
     * Defines the ruler settings of diagram
     * @default {}
     */
    rulerSettings?: RulerSettingsModel;

    /**
     * Defines the page settings of the diagram
     * @default {}
     */
    pageSettings?: PageSettingsModel;

    /**
     * Defines the collection of nodes - change diagram element as node
     * @aspDefaultValueIgnore
     * @default undefined
     */
    nodes?: NodeModel[];

    /**
     * Define the draw type of diagram
     * @aspDefaultValueIgnore
     * @default undefined
     */
    drawingObject?: NodeModel | ConnectorModel;

    /**
     * Defines the collection of connectors
     * @default []
     */
    connectors?: ConnectorModel[];

    /**
     * basic elements
     * @default []
     */
    basicElements?: DiagramElement[];

    /**
     * defines the Tooltip for the diagram
     * @default {}
     */
    tooltip?: DiagramTooltipModel;

    /**
     * Configure data source for diagram
     * @default {}
     */
    dataSourceSettings?: DataSourceModel;

    /**
     * Allows the user to save custom information/data about diagram
     * @aspDefaultValueIgnore
     * @default undefined
     */
    addInfo?: Object;

    /**
     * Helps to return the default properties of node
     * @aspDefaultValueIgnore
     * @default undefined
     */
    getNodeDefaults?: Function | string;

    /**
     * Helps to return the default properties of connector 
     * @aspDefaultValueIgnore
     * @default undefined
     */
    getConnectorDefaults?: Function | string;

    /**
     * Allows to set the node template
     * @aspDefaultValueIgnore
     * @default undefined
     */
    setNodeTemplate?: Function | string;

    /**
     * Allows to set accessibility content for diagram elements
     * @aspDefaultValueIgnore
     * @default undefined
     */
    getDescription?: Function | string;

    /**
     * Allows to get the custom properties that have to be serialized
     * @aspDefaultValueIgnore
     * @default undefined
     */
    getCustomProperty?: Function | string;

    /**
     * Allows the user to set custom tool that corresponds to the given action
     * @aspDefaultValueIgnore
     * @default undefined
     */
    getCustomTool?: Function | string;

    /**
     * Allows the user to set custom cursor that corresponds to the given action
     * @aspDefaultValueIgnore
     * @default undefined
     */
    getCustomCursor?: Function | string;

    /**
     * Defines the collection of selected items and size and position of the selector
     * @default {}
     */
    selectedItems?: SelectorModel;

    /**
     * Configure data source for diagram
     * @default {}
     */
    scrollSettings?: ScrollSettingsModel;

    /**
     * Defines how the diagram has to arrange the nodes
     * @default {}
     */
    layout?: LayoutModel;

    /**
     * Defines a set of custom commands and binds them with a set of desired key gestures
     * @default {}
     */
    commandManager?: CommandManagerModel;

    /**
     * Triggers after diagram is populated.
     * @event
     */
    dataLoaded?: EmitType<IDataLoadedEventArgs>;

    /**
     * Triggers while the dragging object enter into the diagram
     * @event
     */
    dragEnter?: EmitType<IDragEnterEventArgs>;

    /**
     * Triggers while the dragging object leave the diagram
     * @event
     */
    dragLeave?: EmitType<IDragLeaveEventArgs>;

    /**
     * Triggers while the dragging object over another object
     * @event
     */
    dragOver?: EmitType<IDragOverEventArgs>;

    /**
     * Triggers once  click on the diagram.
     * @event
     */
    click?: EmitType<IClickEventArgs>;

    /**
     * Triggers once  history has changed in the diagram.
     * @event
     */
    historyChange?: EmitType<IHistoryChangeArgs>;

    /**
     * Triggers once  double click on the diagram.
     * @event
     */
    doubleClick?: EmitType<IDoubleClickEventArgs>;

    /**
     * Triggers once the text is edited.
     * @event
     */
    textEdit?: EmitType<ITextEditEventArgs>;

    /**
     * Triggers after scroller is changed.
     * @event
     */
    scrollChange?: EmitType<IScrollChangeEventArgs>;

    /**
     * Triggers once the property changed.
     * @event
     */
    selectionChange?: EmitType<ISelectionChangeEventArgs>;

    /**
     * Triggers once the resize property changed.
     * @event
     */
    sizeChange?: EmitType<ISizeChangeEventArgs>;

    /**
     * Triggers once the connection changed.
     * @event
     */
    connectionChange?: EmitType<IConnectionChangeEventArgs>;

    /**
     * Triggers once the source point changed.
     * @event
     */
    sourcePointChange?: EmitType<IEndChangeEventArgs>;

    /**
     * Triggers once the target point changed.
     * @event
     */
    targetPointChange?: EmitType<IEndChangeEventArgs>;

    /**
     * Triggers once the node or connector  property changed.
     * @event
     */
    propertyChange?: EmitType<IPropertyChangeEventArgs>;

    /**
     * Triggers once the dragging is happening.
     * @event
     */
    positionChange?: EmitType<IDraggingEventArgs>;

    /**
     * Triggers once the animation has done
     * @event
     */
    animationComplete?: EmitType<Object>;

    /**
     * Triggers once the rotate property changed.
     * @event
     */
    rotateChange?: EmitType<IRotationEventArgs>;

    /**
     * Triggers once the diagram object is added or removed property changed.
     * @event
     */
    collectionChange?: EmitType<ICollectionChangeEventArgs>;

    /**
     * Triggers after render the diagram elements
     * @event
     */
    created?: EmitType<Object>;

    /**
     * * Triggered when mouse enters a node/connector.
     * @event
     */
    mouseEnter?: EmitType<IMouseEventArgs>;

    /**
     * Triggered when mouse leaves node/connector.
     * @event
     */
    mouseLeave?: EmitType<IMouseEventArgs>;

    /**
     * Triggered when mouse hovers a node/connector.
     * @event
     */
    mouseOver?: EmitType<IMouseEventArgs>;

    /**
     * Triggers before context menu opens.
     * @event
     */
    contextMenuOpen?: EmitType<BeforeOpenCloseMenuEventArgs>;

    /**
     * Triggers when click on context menu.
     * @event
     */
    contextMenuClick?: EmitType<MenuEventArgs>;

    /**
     * Defines layers of the diagram
     * @default []
     */
    layers?: LayerModel[];

    /**
     * Triggers when dropped.
     * @event
     */
    drop?: EmitType<IDropEventArgs>;

}