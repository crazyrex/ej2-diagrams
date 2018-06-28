import { Property, Complex, ChildProperty } from '@syncfusion/ej2-base';import { TextStyle, Margin } from '../core/appearance';import { Point } from '../primitives/point';import { TextStyleModel, MarginModel } from '../core/appearance-model';import { PointModel } from '../primitives/point-model';import { HorizontalAlignment, VerticalAlignment, AnnotationAlignment, AnnotationTypes, TextDecoration } from '../enum/enum';import { AnnotationConstraints } from '../enum/enum';

/**
 * Interface for a class Hyperlink
 */
export interface HyperlinkModel {

    /**
     * Sets the fill color of the link
     * @default 'blue'
     */
    color?: string;

    /**
     * Defines the content for hyperlink
     * @default ''
     */
    content?: string;

    /**
     * Defines the link for hyperlink
     * @default ''
     */
    link?: string;

    /**
     * Defines how the link should be decorated. For example, with underline/over line
     * @default 'None'
     */
    textDecoration?: TextDecoration;

}

/**
 * Interface for a class Annotation
 */
export interface AnnotationModel {

    /**
     * Sets the textual description of the node/connector
     * @default ''
     */
    content?: string;

    /**
     * Defines the visibility for the label
     * @default true
     */
    visibility?: boolean;

    /**
     * Defines the constraints for the label
     * @default 'InheritReadOnly'
     * @aspNumberEnum 
     */
    constraints?: AnnotationConstraints;

    /**
     * Sets the hyperlink for the label
     * @aspDefaultValueIgnore
     * @default undefined
     */
    hyperlink?: HyperlinkModel;

    /**
     * Defines the unique id of the annotation
     * @default ''
     */
    id?: string;

    /**
     * Sets the width of the text
     * @aspDefaultValueIgnore
     * @default undefined
     */
    width?: number;

    /**
     * Sets the height of the text
     * @aspDefaultValueIgnore
     * @default undefined
     */
    height?: number;

    /**
     * Defines the appearance of the text
     * @default new TextStyle()
     */
    style?: TextStyleModel;

    /**
     * Sets the horizontal alignment of the text with respect to the parent node/connector
     * @default 'Center'
     */
    horizontalAlignment?: HorizontalAlignment;

    /**
     * Sets the vertical alignment of the text with respect to the parent node/connector
     * @default 'Center'
     */
    verticalAlignment?: VerticalAlignment;

    /**
     * Sets the space to be left between an annotation and its parent node/connector
     * @default new Margin(0,0,0,0)
     */
    margin?: MarginModel;

    /**
     * Sets the type of the annotation
     * @default 'Shape'
     */
    type?: AnnotationTypes;

    /**
     * Allows the user to save custom information/data about an annotation
     * @aspDefaultValueIgnore
     * @default undefined
     */
    addInfo?: Object;

}

/**
 * Interface for a class ShapeAnnotation
 */
export interface ShapeAnnotationModel extends AnnotationModel{

    /**
     * Sets the position of the annotation with respect to its parent bounds
     * @default { x: 0.5, y: 0.5 }
     */
    offset?: PointModel;

}

/**
 * Interface for a class PathAnnotation
 */
export interface PathAnnotationModel extends AnnotationModel{

    /**
     * Sets the segment offset of annotation
     * @default 0.5
     */
    offset?: number;

    /**
     * Sets the displacement from the label position
     * @aspDefaultValueIgnore
     * @default undefined
     */
    displacement?: PointModel;

    /**
     * Sets the segment alignment of annotation
     * @default Center
     */
    alignment?: AnnotationAlignment;

}