import { Property, ChildProperty } from '@syncfusion/ej2-base';

/**
 * Interface for a class Layer
 */
export interface LayerModel {

    /**
     * Defines the id of the layer 
     * @default ''
     */
    id?: string;

    /**
     * Defines visibility of the layer
     * @default true
     */
    visible?: boolean;

    /**
     * Defines lock property of the layer 
     * @default false
     */
    lock?: boolean;

    /**
     * Defines the object in the layer
     * @aspDefaultValueIgnore
     * @default undefined
     */
    objects?: string[];

    /**
     * Defines the description of the layer
     * @aspDefaultValueIgnore
     * @default undefined
     */
    addInfo?: Object;

    /**
     * Defines the zOrder of the layer
     * @default -1
     */
    zIndex?: number;

}