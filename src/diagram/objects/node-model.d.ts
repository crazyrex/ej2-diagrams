import { Property, Complex, Collection, ChildProperty, ComplexFactory } from '@syncfusion/ej2-base';import { ShapeStyle, Margin, TextStyle, Shadow } from '../core/appearance';import { ShapeStyleModel, TextStyleModel, ShadowModel, } from '../core/appearance-model';import { Point } from '../primitives/point';import { Size } from '../primitives/size';import { PointModel } from '../primitives/point-model';import { Shapes, BasicShapes, FlowShapes, Scale, ImageAlignment } from '../enum/enum';import { IElement } from './interface/IElement';import { Container } from '../core/containers/container';import { Canvas } from '../core/containers/canvas';import { getBasicShape } from './dictionary/basic-shapes';import { DiagramElement } from '../core/elements/diagram-element';import { PathElement } from '../core/elements/path-element';import { TextElement } from '../core/elements/text-element';import { ImageElement } from '../core/elements/image-element';import { DiagramNativeElement } from '../core/elements/native-element';import { Port, PointPort } from './port';import { PointPortModel } from './port-model';import { Annotation, ShapeAnnotation } from './annotation';import { ShapeAnnotationModel, HyperlinkModel } from './annotation-model';import { getPortShape, getIconShape } from './dictionary/common';import { getFlowShape } from './dictionary/flow-shapes';import { HorizontalAlignment, VerticalAlignment, BpmnShapes, BpmnEvents, BpmnTriggers, BpmnGateways, NodeConstraints } from '../enum/enum';import { BpmnDataObjects, BpmnTasks, BpmnSubProcessTypes, BpmnLoops } from '../enum/enum';import { BpmnBoundary, BpmnActivities } from '../enum/enum';import { MarginModel } from '../core/appearance-model';import { LayoutModel } from '../layout/layout-base-model';import { checkPortRestriction } from './../utility/diagram-util';import { randomId, getFunction } from './../utility/base-util';import { NodeBase } from './node-base';import { canShadow } from './../utility/constraints-util';import { PortVisibility, Stretch } from '../enum/enum';import { IconShapeModel } from './icon-model';import { IconShape } from './icon';import { measurePath } from './../utility/dom-util';import { Rect } from '../primitives/rect';import { getPolygonPath } from './../utility/path-util';import { DiagramHtmlElement } from '../core/elements/html-element';
import {NodeBaseModel} from "./node-base-model";

/**
 * Interface for a class Shape
 */
export interface ShapeModel {

    /**
     * Defines the type of node shape
     * @default 'Basic'
     */
    type?: Shapes;

}

/**
 * Interface for a class Path
 */
export interface PathModel extends ShapeModel{

    /**
     * Defines the type of node shape
     * @default 'Basic'
     */
    type?: Shapes;

    /**
     * Defines the geometry of a path
     * @default ''
     */
    data?: string;

}

/**
 * Interface for a class Native
 */
export interface NativeModel extends ShapeModel{

    /**
     * Defines the type of node shape.
     * @default 'Basic'
     */
    type?: Shapes;

    /**
     * Defines the geometry of a native element.
     * @default ''
     */
    content?: string | SVGElement;

    /**
     * Defines the scale of the native element.
     * @default 'Stretch'
     */
    scale?: Stretch;

}

/**
 * Interface for a class Html
 */
export interface HtmlModel extends ShapeModel{

    /**
     * Defines the type of node shape.
     * @default 'Basic'
     */
    type?: Shapes;

    /**
     * Defines the geometry of a html element.
     * @default ''
     */
    content?: string | HTMLElement;

}

/**
 * Interface for a class Image
 */
export interface ImageModel extends ShapeModel{

    /**
     * Defines the type of node shape
     * @default 'Basic'
     */
    type?: Shapes;

    /**
     * Defines the source of the image
     * @default ''
     */
    source?: string;

    /**
     * Defines the scale of the image
     * @default ''
     */
    scale?: Scale;

    /**
     * Defines the alignment of the image
     * @default 'None'
     */
    align?: ImageAlignment;

}

/**
 * Interface for a class Text
 */
export interface TextModel extends ShapeModel{

    /**
     * Defines the type of node shape
     * @default 'Basic'
     */
    type?: Shapes;

    /**
     * Defines the content of a text
     * @default ''
     */
    content?: string;

    /**
     * Defines the space to be let between the node and its immediate parent
     * @default 0
     */
    margin?: MarginModel;

}

/**
 * Interface for a class BasicShape
 */
export interface BasicShapeModel extends ShapeModel{

    /**
     * Defines the type of node shape
     * @default 'Basic'
     */
    type?: Shapes;

    /**
     * Defines the type of the basic shape
     * @default 'Rectangle'
     */
    shape?: BasicShapes;

    /**
     * Sets the corner of the node
     * @default 0
     */
    cornerRadius?: number;

    /**
     * Defines the collection of points to draw a polygon
     * @aspDefaultValueIgnore
     * @default undefined
     */
    points?: PointModel[];

}

/**
 * Interface for a class FlowShape
 */
export interface FlowShapeModel extends ShapeModel{

    /**
     * Defines the type of node shape
     * @default 'Basic'
     */
    type?: Shapes;

    /**
     * Defines the type of the flow shape
     * @default ''
     */
    shape?: FlowShapes;

}

/**
 * Interface for a class BpmnGateway
 */
export interface BpmnGatewayModel {

    /**
     * Defines the type of the BPMN Gateway
     * @default 'None'
     */
    type?: BpmnGateways;

}

/**
 * Interface for a class BpmnDataObject
 */
export interface BpmnDataObjectModel {

    /**
     * Defines the type of the BPMN data object
     * @default 'None'
     */
    type?: BpmnDataObjects;

    /**
     * Sets whether the data object is a collection or not
     * @default false
     */
    collection?: boolean;

}

/**
 * Interface for a class BpmnTask
 */
export interface BpmnTaskModel {

    /**
     * Defines the type of the task
     * @default 'None'
     */
    type?: BpmnTasks;

    /**
     * Defines the type of the BPMN loops
     * @default 'None'
     */
    loop?: BpmnLoops;

    /**
     * Sets whether the task is global or not
     * @default false
     */
    call?: boolean;

    /**
     * Sets whether the task is triggered as a compensation of another specific activity
     * @default false
     */
    compensation?: boolean;

}

/**
 * Interface for a class BpmnEvent
 */
export interface BpmnEventModel {

    /**
     * Sets the type of the BPMN Event
     * @default 'Start'
     */
    event?: BpmnEvents;

    /**
     * Defines the type of the trigger
     * @default 'None'
     */
    trigger?: BpmnTriggers;

}

/**
 * Interface for a class BpmnSubEvent
 */
export interface BpmnSubEventModel {

    /**
     * Defines the type of the trigger
     * @default 'None'
     */
    trigger?: BpmnTriggers;

    /**
     * Sets the type of the BPMN Event
     * @default 'Start'
     */
    event?: BpmnEvents;

    /**
     * Sets the id of the BPMN sub event
     * @default ''
     */
    id?: string;

    /**
     * Defines the position of the sub event
     * @default new Point(0.5,0.5)
     */

    offset?: PointModel;

    /**
     * Defines the collection of textual annotations of the sub events
     * @aspDefaultValueIgnore
     * @default undefined
     */
    annotations?: ShapeAnnotationModel[];

    /**
     * Defines the collection of connection points of the sub events
     * @aspDefaultValueIgnore
     * @default undefined
     */
    ports?: PointPortModel[];

    /**
     * Sets the width of the node
     * @aspDefaultValueIgnore
     * @default undefined
     */
    width?: number;

    /**
     * Sets the height of the node
     * @aspDefaultValueIgnore
     * @default undefined
     */
    height?: number;

    /**
     * Defines the space to be left between the node and its immediate parent
     * @default 0
     */
    margin?: MarginModel;

    /**
     * Sets how to horizontally align a node with respect to its immediate parent
     * @default 'Center'
     */
    horizontalAlignment?: HorizontalAlignment;

    /**
     * Sets how to vertically align a node with respect to its immediate parent
     * @default 'Center'
     */
    verticalAlignment?: VerticalAlignment;

    /**
     * Sets the visibility of the sub event
     * @default true
     */
    visible?: boolean;

}

/**
 * Interface for a class BpmnTransactionSubProcess
 */
export interface BpmnTransactionSubProcessModel {

    /**
     * Defines the size and position of the success port
     */
    success?: BpmnSubEventModel;

    /**
     * Defines the size and position of the failure port
     */
    failure?: BpmnSubEventModel;

    /**
     * Defines the size and position of the cancel port
     */
    cancel?: BpmnSubEventModel;

}

/**
 * Interface for a class BpmnSubProcess
 */
export interface BpmnSubProcessModel {

    /**
     * Defines the type of the sub process
     * @default 'None'
     */
    type?: BpmnSubProcessTypes;

    /**
     * Defines whether the sub process is without any prescribed order or not
     * @default false
     */
    adhoc?: boolean;

    /**
     * Defines the boundary type of the BPMN process
     * @default 'Default'
     */
    boundary?: BpmnBoundary;

    /**
     * Defines the whether the task is triggered as a compensation of another task
     * @default false
     */
    compensation?: boolean;

    /**
     * Defines the  type of the BPMNLoop
     * @default 'None'
     */
    loop?: BpmnLoops;

    /**
     * Defines the whether the shape is collapsed or not
     * @default true
     */
    collapsed?: boolean;

    /**
     * Defines the collection of events of the BPMN sub event
     * @default 'undefined'
     */
    events?: BpmnSubEventModel[];

    /**
     * Defines the transaction sub process
     */
    transaction?: BpmnTransactionSubProcessModel;

    /**
     * Defines the transaction sub process
     * @default []
     */
    processes?: string[];

}

/**
 * Interface for a class BpmnActivity
 */
export interface BpmnActivityModel {

    /**
     * Defines the type of the activity
     * @default 'Task'
     */
    activity?: BpmnActivities;

    /**
     * Defines the BPMN task
     * @default 'new BPMNTask()'
     */
    task?: BpmnTaskModel;

    /**
     * Defines the type of the SubProcesses
     * @default 'None'
     */
    subProcess?: BpmnSubProcessModel;

}

/**
 * Interface for a class BpmnAnnotation
 */
export interface BpmnAnnotationModel {

    /**
     * Sets the text to annotate the bpmn shape
     * @default ''
     */
    text?: string;

    /**
     * Sets the id of the BPMN sub event
     * @default ''
     */
    id?: string;

    /**
     * Sets the angle between the bpmn shape and the annotation
     * @aspDefaultValueIgnore
     * @default undefined
     */
    angle?: number;

    /**
     * Sets the height of the text
     * @aspDefaultValueIgnore
     * @default undefined
     */
    height?: number;

    /**
     * Sets the width of the text
     * @aspDefaultValueIgnore
     * @default undefined
     */
    width?: number;

    /**
     * Sets the distance between the bpmn shape and the annotation
     * @aspDefaultValueIgnore
     * @default undefined
     */
    length?: number;

}

/**
 * Interface for a class BpmnShape
 */
export interface BpmnShapeModel extends ShapeModel{

    /**
     * Defines the type of node shape
     * @default 'Bpmn'
     */
    type?: Shapes;

    /**
     * Defines the type of the BPMN shape
     * @default 'Event'
     */
    shape?: BpmnShapes;

    /**
     * Defines the type of the BPMN Event shape
     * @default 'None'
     */
    event?: BpmnEventModel;

    /**
     * Defines the type of the BPMN Gateway shape
     * @default 'None'
     */
    gateway?: BpmnGatewayModel;

    /**
     * Defines the type of the BPMN DataObject shape
     * @default 'None'
     */
    dataObject?: BpmnDataObjectModel;

    /**
     * Defines the type of the BPMN Activity shape
     * @default 'None'
     */
    activity?: BpmnActivityModel;

    /**
     * Defines the text of the bpmn annotation
     * @default 'None'
     */

    annotations?: BpmnAnnotationModel[];

}

/**
 * Interface for a class Node
 */
export interface NodeModel extends NodeBaseModel{

    /**
     * Defines the collection of textual annotations of nodes/connectors
     * @aspDefaultValueIgnore
     * @default undefined
     */
    annotations?: ShapeAnnotationModel[];

    /**
     * Sets the x-coordinate of the position of the node
     * @default 0
     */
    offsetX?: number;

    /**
     * Sets the y-coordinate of the position of the node
     * @default 0
     */
    offsetY?: number;

    /**
     * Sets the reference point, that will act as the offset values(offsetX, offsetY) of a node
     * @default new Point(0.5,0.5)
     */
    pivot?: PointModel;

    /**
     * Sets the width of the node
     * @aspDefaultValueIgnore
     * @default undefined
     */
    width?: number;

    /**
     * Sets the height of the node
     * @aspDefaultValueIgnore
     * @default undefined
     */
    height?: number;

    /**
     * Sets the minimum width of the node
     * @aspDefaultValueIgnore
     * @default undefined
     */
    minWidth?: number;

    /**
     * Sets the minimum height of the node
     * @aspDefaultValueIgnore
     * @default undefined
     */
    minHeight?: number;

    /**
     * Sets the maximum width of the node
     * @aspDefaultValueIgnore
     * @default undefined
     */
    maxWidth?: number;

    /**
     * Sets the maximum height of the node
     * @aspDefaultValueIgnore
     * @default undefined
     */
    maxHeight?: number;

    /**
     * Sets the rotate angle of the node
     * @default 0
     */
    rotateAngle?: number;

    /**
     * Sets the shape style of the node
     * @default new ShapeStyle()
     * @aspType object
     */
    style?: ShapeStyleModel | TextStyleModel;

    /**
     * Sets the background color of the shape
     * @default 'transparent'
     */
    backgroundColor?: string;

    /**
     * Sets the border color of the node
     * @default 'none'
     */
    borderColor?: string;

    /**
     * Sets the border width of the node
     * @default 0
     */
    borderWidth?: number;

    /**
     * Sets the data source of the node
     */
    data?: Object;

    /**
     * Defines the shape of a node
     * @default Basic Shape
     * @aspType object
     */
    shape?: ShapeModel | FlowShapeModel | BasicShapeModel | ImageModel | PathModel | TextModel | BpmnShapeModel | NativeModel | HtmlModel;

    /**
     * Sets or gets the UI of a node
     * @default null
     */
    wrapper?: Container;

    /**
     * Enables/Disables certain features of nodes
     * @default 'Default'
     * @aspNumberEnum 
     */
    constraints?: NodeConstraints;

    /**
     * Defines the shadow of a shape/path
     * @default null
     */
    shadow?: ShadowModel;

    /**
     * Defines the children of group element
     * @aspDefaultValueIgnore
     * @default undefined
     */
    children?: string[];

}