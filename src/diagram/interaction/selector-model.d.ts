import { Property, ChildProperty, Collection, Complex } from '@syncfusion/ej2-base';import { IElement } from '../objects/interface/IElement';import { Container } from '../core/containers/container';import { Node } from '../objects/node';import { Connector } from '../objects/connector';import { PointModel } from '../primitives/point-model';import { Point } from '../primitives/point';import { Size } from '../primitives/size';import { RubberBandSelectionMode, Side, ThumbsConstraints } from '../enum/enum';import { SelectorConstraints, HorizontalAlignment, VerticalAlignment } from '../enum/enum';import { NodeModel } from '../objects/node-model';import { ConnectorModel } from '../objects/connector-model';import { Diagram } from '../../diagram/diagram';import { MarginModel } from '../core/appearance-model';import { Margin } from '../core/appearance';

/**
 * Interface for a class UserHandle
 */
export interface UserHandleModel {

    /**
     * Defines the name of user Handle
     * @default ''
     */
    name?: string;

    /**
     * Defines the path data of user Handle 
     * @default ''
     */
    pathData?: string;

    /**
     * Defines the background color of user Handle 
     * @default 'black'
     */
    backgroundColor?: string;

    /**
     * Defines the side of user Handle 
     * @default 'top'
     */
    side?: Side;

    /**
     * Defines the borderColor of user Handle 
     * @default ''
     */
    borderColor?: string;

    /**
     * Defines the borderWidth of user Handle 
     * @default 0.5
     */
    borderWidth?: number;

    /**
     * Defines the size of user Handle 
     * @default 25
     */
    size?: number;

    /**
     * Defines the path color of user Handle 
     * @default 'white'
     */
    pathColor?: string;

    /**
     * Defines the displacement of user Handle 
     * @default 10
     */
    displacement?: number;

    /**
     * Defines the visible of user Handle 
     * @default true
     */
    visible?: boolean;

    /**
     * Defines the offset of user Handle 
     * @default 0
     */
    offset?: number;

    /**
     * Defines the margin of the user handle
     * @default new Margin(0,0,0,0)
     */
    margin?: MarginModel;

    /**
     * Defines the horizontalAlignment of user Handle 
     * @default 'Center'
     */
    horizontalAlignment?: HorizontalAlignment;

    /**
     * Defines the verticalAlignment of user Handle 
     * @default 'Center'
     */
    verticalAlignment?: VerticalAlignment;

}

/**
 * Interface for a class Selector
 */
export interface SelectorModel {

    /**
     * Defines the size and position of the container
     * @default null
     */
    wrapper?: Container;

    /**
     * Defines the collection of selected nodes
     */
    nodes?: NodeModel[];

    /**
     * Defines the collection of selected connectors
     */
    connectors?: ConnectorModel[];

    /**
     * Sets/Gets the width of the container
     * @aspDefaultValueIgnore
     * @default undefined
     */
    width?: number;

    /**
     * Sets/Gets the height of the container
     * @aspDefaultValueIgnore
     * @default undefined
     */
    height?: number;

    /**
     * Sets the rotate angle of the container
     * @default 0
     */
    rotateAngle?: number;

    /**
     * Sets the position of the container
     * @default 0
     */
    offsetX?: number;

    /**
     * Sets the position of the container
     * @default 0
     */
    offsetY?: number;

    /**
     * Sets the pivot of the selector
     * @default { x: 0.5, y: 0.5 }
     */
    pivot?: PointModel;

    /**
     * Defines how to pick the objects to be selected using rubber band selection
     * @default 'CompleteIntersect'
     */
    rubberBandSelectionMode?: RubberBandSelectionMode;

    /**
     * Defines the collection of user handle connectors
     * @default []
     */
    userHandles?: UserHandleModel[];

    /**
     * Defines how to pick the objects to be selected 
     * @default 'All'
     * @aspNumberEnum 
     */
    constraints?: SelectorConstraints;

}