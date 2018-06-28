import { Property, Complex, ChildProperty } from '@syncfusion/ej2-base';
import { TextStyle, Margin } from '../core/appearance';
import { Point } from '../primitives/point';
import { TextStyleModel, MarginModel } from '../core/appearance-model';
import { PointModel } from '../primitives/point-model';
import { HyperlinkModel } from '../objects/annotation-model';
import { HorizontalAlignment, VerticalAlignment, AnnotationAlignment, AnnotationTypes, TextDecoration } from '../enum/enum';
import { AnnotationConstraints } from '../enum/enum';

/**
 * Defines the hyperlink for the annotation
 */
export class Hyperlink extends ChildProperty<Hyperlink> {
    /**
     * Sets the fill color of the link
     * @default 'blue'
     */
    @Property('blue')
    public color: string;

    /**
     * Defines the content for hyperlink
     * @default ''
     */
    @Property('')
    public content: string;
    /**
     * Defines the link for hyperlink
     * @default ''
     */
    @Property('')
    public link: string;

    /**
     * Defines how the link should be decorated. For example, with underline/over line
     * @default 'None'
     */
    @Property('None')
    public textDecoration: TextDecoration;
}
/**
 * Defines the textual description of nodes/connectors
 */
export class Annotation extends ChildProperty<Annotation> {
    /**
     * Sets the textual description of the node/connector
     * @default ''
     */
    @Property('')
    public content: string;

    /**
     * Defines the visibility for the label
     * @default true
     */
    @Property(true)
    public visibility: boolean;

    /**
     * Defines the constraints for the label
     * @default 'InheritReadOnly'
     * @aspNumberEnum 
     */
    @Property(AnnotationConstraints.InheritReadOnly)
    public constraints: AnnotationConstraints;

    /**
     * Sets the hyperlink for the label
     * @aspDefaultValueIgnore
     * @default undefined
     */
    @Complex<HyperlinkModel>(undefined, Hyperlink)
    public hyperlink: HyperlinkModel;

    /**
     * Defines the unique id of the annotation
     * @default ''
     */
    @Property('')
    public id: string;

    /**
     * Sets the width of the text
     * @aspDefaultValueIgnore
     * @default undefined
     */
    @Property()
    public width: number;

    /**
     * Sets the height of the text
     * @aspDefaultValueIgnore
     * @default undefined
     */
    @Property()
    public height: number;

    /**
     * Defines the appearance of the text
     * @default new TextStyle()
     */
    @Complex<TextStyleModel>({ strokeWidth: 0, strokeColor: 'transparent', fill: 'transparent' }, TextStyle)
    public style: TextStyleModel;

    /**
     * Sets the horizontal alignment of the text with respect to the parent node/connector
     * @default 'Center'
     */
    @Property('Center')
    public horizontalAlignment: HorizontalAlignment;

    /**
     * Sets the vertical alignment of the text with respect to the parent node/connector
     * @default 'Center'
     */
    @Property('Center')
    public verticalAlignment: VerticalAlignment;

    /**
     * Sets the space to be left between an annotation and its parent node/connector
     * @default new Margin(0,0,0,0)
     */
    @Complex<MarginModel>({}, Margin)
    public margin: MarginModel;

    /**
     * Sets the type of the annotation
     * @default 'Shape'
     */
    @Property('Shape')
    public type: AnnotationTypes;

    /**
     * Allows the user to save custom information/data about an annotation
     * @aspDefaultValueIgnore
     * @default undefined
     */
    @Property()
    public addInfo: Object;
}

/**
 * Defines the textual description of nodes/connectors with respect to bounds
 */
export class ShapeAnnotation extends Annotation {
    /**
     * Sets the position of the annotation with respect to its parent bounds
     * @default { x: 0.5, y: 0.5 }
     */
    @Complex<PointModel>({ x: 0.5, y: 0.5 }, Point)
    public offset: PointModel;

    // tslint:disable-next-line:no-any
    constructor(parent: any, propName: string, defaultValue: Object, isArray?: boolean) {
        super(parent, propName, defaultValue, isArray);
    }
}
/**   
 * Defines the connector annotation 
 */
export class PathAnnotation extends Annotation {
    /**
     * Sets the segment offset of annotation
     * @default 0.5
     */
    @Property(0.5)
    public offset: number;
    /**
     * Sets the displacement from the label position
     * @aspDefaultValueIgnore
     * @default undefined
     */
    @Complex<PointModel>({ x: 0, y: 0 }, Point)
    public displacement: PointModel;

    /**
     * Sets the segment alignment of annotation
     * @default Center
     */
    @Property('Center')
    public alignment: AnnotationAlignment;

    // tslint:disable-next-line:no-any
    constructor(parent: any, propName: string, defaultValue: Object, isArray?: boolean) {
        super(parent, propName, defaultValue, isArray);
    }
}