import { Property, Complex, Collection, ChildProperty, ComplexFactory, CollectionFactory } from '@syncfusion/ej2-base';import { ShapeStyle, StrokeStyle } from '../core/appearance';import { StrokeStyleModel, ShapeStyleModel } from '../core/appearance-model';import { Point } from '../primitives/point';import { TextElement } from '../core/elements/text-element';import { PointModel } from '../primitives/point-model';import { Segments, DecoratorShapes, Transform, ConnectorConstraints, Direction, LayoutOrientation } from '../enum/enum';import { Rect } from '../primitives/rect';import { Size } from '../primitives/size';import { findAngle, findConnectorPoints, Bridge, getOuterBounds } from '../utility/connector';import { getAnnotationPosition, alignLabelOnSegments, updateConnector } from '../utility/diagram-util';import { randomId, getFunction } from './../utility/base-util';import { PathElement } from '../core/elements/path-element';import { PathAnnotation } from './annotation';import { Canvas } from '../core/containers/canvas';import { getDecoratorShape } from './dictionary/common';import { IElement } from './interface/IElement';import { Container } from '../core/containers/container';import { DiagramElement } from '../core/elements/diagram-element';import { HorizontalAlignment, VerticalAlignment } from '../enum/enum';import { ConnectionShapes, BpmnFlows, BpmnMessageFlows, BpmnSequenceFlows, BpmnAssociationFlows } from '../enum/enum';import { SegmentInfo, Alignment } from '../rendering/canvas-interface';import { PathAnnotationModel } from './annotation-model';import { NodeBase } from './node-base';import { DiagramTooltipModel } from './tooltip-model';import { DiagramTooltip } from './tooltip';import { Matrix, identityMatrix, rotateMatrix, scaleMatrix, transformPointsByMatrix } from '../primitives/matrix';
import {NodeBaseModel} from "./node-base-model";

/**
 * Interface for a class Decorator
 */
export interface DecoratorModel {

    /**
     * Sets the width of the decorator
     * @default 10
     */
    width?: number;

    /**
     * Sets the height of the decorator
     * @default 10
     */
    height?: number;

    /**
     * Sets the shape of the decorator
     * @default 'Arrow'
     */
    shape?: DecoratorShapes;

    /**
     * Defines the appearance of the decorator
     * @default new ShapeStyle()
     */
    style?: ShapeStyleModel;

    /**
     * Defines the position of the decorator with respect to the source/target point of the connector
     */
    pivot?: PointModel;

    /**
     * Defines the geometry of the decorator shape
     * @default ''
     */
    pathData?: string;

}

/**
 * Interface for a class Vector
 */
export interface VectorModel {

    /**
     * Defines the angle for the bezier curve
     * @default 0
     */
    angle?: number;

    /**
     * Defines the distance for the bezier curve
     * @default 0
     */
    distance?: number;

}

/**
 * Interface for a class ConnectorShape
 */
export interface ConnectorShapeModel {

    /**
     * Defines the type of node shape
     * @default 'None'
     */
    type?: ConnectionShapes;

}

/**
 * Interface for a class BpmnFlow
 */
export interface BpmnFlowModel extends ConnectorShapeModel{

    /**
     * Sets the type of the Bpmn flows
     * @default 'Sequence'
     */
    flow?: BpmnFlows;

    /**
     * Sets the type of the Bpmn Sequence flows
     * @default 'Normal'
     */
    sequence?: BpmnSequenceFlows;

    /**
     * Sets the type of the Bpmn message flows
     * @default ''
     */
    message?: BpmnMessageFlows;

    /**
     * Sets the type of the Bpmn association flows
     * @default ''
     */
    association?: BpmnAssociationFlows;

}

/**
 * Interface for a class ConnectorSegment
 */
export interface ConnectorSegmentModel {

    /**
     * Defines the type of the connector
     * @default 'Straight'
     */
    type?: Segments;

}

/**
 * Interface for a class StraightSegment
 * @private
 */
export interface StraightSegmentModel extends ConnectorSegmentModel{

    /**
     * Sets the end point of the connector segment
     * @default new Point(0,0)
     */
    point?: PointModel;

}

/**
 * Interface for a class BezierSegment
 */
export interface BezierSegmentModel extends StraightSegmentModel{

    /**
     * Sets the first control point of the connector
     * @default new Point(0,0)
     */
    point1?: PointModel;

    /**
     * Sets the second control point of the connector
     * @default new Point(0,0)
     */
    point2?: PointModel;

    /**
     * Defines the first vector point of the bezier connector
     * @default new Vector()
     */
    vector1?: VectorModel;

    /**
     * Defines the second vector point of the bezier connector
     * @default new Vector()
     */
    vector2?: VectorModel;

}

/**
 * Interface for a class OrthogonalSegment
 */
export interface OrthogonalSegmentModel extends ConnectorSegmentModel{

    /**
     * Defines the length of orthogonal segment
     * @default 0
     */
    length?: number;

    /**
     * Sets the direction of orthogonal segment
     * @default null
     */
    direction?: Direction;

}

/**
 * Interface for a class Connector
 */
export interface ConnectorModel extends NodeBaseModel{

    /**
     * Defines the shape of the connector
     * @default 'Bpmn'
     * @aspType object
     */
    shape?: ConnectorShapeModel | BpmnFlowModel;

    /**
     * Defines the constraints of connector
     * @default 'None'
     * @aspNumberEnum 
     */
    constraints?: ConnectorConstraints;

    /**
     * Defines the bridgeSpace of connector
     * @default 10
     */
    bridgeSpace?: number;

    /**
     * Defines the collection of textual annotations of connectors
     * @aspDefaultValueIgnore
     * @default undefined
     */
    annotations?: PathAnnotationModel[];

    /**
     * Sets the beginning point of the connector
     * @default new Point(0,0)
     */
    sourcePoint?: PointModel;

    /**
     * Sets the end point of the connector
     * @default new Point(0,0)
     */
    targetPoint?: PointModel;

    /**
     * Defines the segments
     * @default []
     * @aspType object
     */
    segments?: (OrthogonalSegmentModel | StraightSegmentModel | BezierSegmentModel)[];

    /**
     * Sets the source node/connector object of the connector
     * @default null
     */
    sourceID?: string;

    /**
     * Sets the target node/connector object of the connector
     * @default null
     */
    targetID?: string;

    /**
     * Sets the connector padding value
     * @default 10
     */
    hitPadding?: number;

    /**
     * Defines the type of the connector
     * @default 'Straight'
     */
    type?: Segments;

    /**
     * Sets the corner radius of the connector
     * @default 0
     */
    cornerRadius?: number;

    /**
     * Defines the source decorator of the connector
     * @default new Decorator()
     */
    sourceDecorator?: DecoratorModel;

    /**
     * Defines the target decorator of the connector
     * @default new Decorator()
     */
    targetDecorator?: DecoratorModel;

    /**
     * defines the tooltip for the connector
     * @default new DiagramToolTip();
     */
    tooltip?: DiagramTooltipModel;

    /**
     * Sets the unique id of the source port of the connector
     * @default ''
     */
    sourcePortID?: string;

    /**
     * Sets the unique id of the target port of the connector
     * @default ''
     */
    targetPortID?: string;

    /**
     * Defines the appearance of the connection path
     * @default ''
     */
    style?: StrokeStyleModel;

    /**
     * Defines the UI of the connector
     * @default null
     */
    wrapper?: Container;

}