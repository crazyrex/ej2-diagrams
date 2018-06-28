import { Property, Complex, ChildProperty, Collection } from '@syncfusion/ej2-base';import { Margin } from '../core/appearance';import { PointPortModel } from './port-model';import { MarginModel } from '../core/appearance-model';import { DiagramTooltipModel } from './tooltip-model';import { IconShape } from './icon';import { IconShapeModel } from './icon-model';import { DiagramTooltip } from './tooltip';import { PointPort } from './port';

/**
 * Interface for a class NodeBase
 */
export interface NodeBaseModel {

    /**
     * Represents the unique id of nodes/connectors
     * @default ''
     */
    id?: string;

    /**
     * Defines the visual order of the node/connector in DOM
     * @default -1
     */
    zIndex?: number;

    /**
     * Defines the space to be let between the node and its immediate parent
     * @default {}
     */
    margin?: MarginModel;

    /**
     * Sets the visibility of the node/connector
     * @default true
     */
    visible?: boolean;

    /**
     * Defines the collection of connection points of nodes/connectors
     * @aspDefaultValueIgnore
     * @default undefined
     */
    ports?: PointPortModel[];

    /**
     * Defines if the node is expanded or not
     * @default true
     */
    isExpanded?: boolean;

    /**
     * defines the tooltip for the node
     * @default {}
     */
    tooltip?: DiagramTooltipModel;

    /**
     * Defines the properties of the Expand Icon
     * @default {}
     */
    expandIcon?: IconShapeModel;

    /**
     * Defines the properties of the collapse Icon
     * @default {}
     */
    collapseIcon?: IconShapeModel;

    /**
     * Defines whether the node should be automatically positioned or not
     * @default false
     */
    excludeFromLayout?: boolean;

    /**
     * Allows the user to save custom information/data about a node/connector
     * @aspDefaultValueIgnore
     * @default undefined
     */
    addInfo?: Object;

}