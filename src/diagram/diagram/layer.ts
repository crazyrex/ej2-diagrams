import { Property, ChildProperty } from '@syncfusion/ej2-base';


/**
 * Defines the BackgroundImage of diagram
 */
export class Layer extends ChildProperty<Layer> {
    /**
     * Defines the id of the layer 
     * @default ''
     */
    @Property('')
    public id: string;
    /**
     * Defines visibility of the layer
     * @default true
     */
    @Property(true)
    public visible: boolean;
    /**
     * Defines lock property of the layer 
     * @default false
     */
    @Property(false)
    public lock: boolean;
    /**
     * Defines the object in the layer
     * @aspDefaultValueIgnore
     * @default undefined
     */
    @Property()
    public objects: string[];
    /**
     * Defines the description of the layer
     * @aspDefaultValueIgnore
     * @default undefined
     */
    @Property()
    public addInfo: Object;
    /**
     * Defines the zOrder of the layer
     * @default -1
     */
    @Property(-1)
    public zIndex: number;
    /**  @private   */
    public objectZIndex: number = -1;
    /**   @private  */
    public zIndexTable: {} = {};

    // tslint:disable-next-line:no-any
    constructor(parent: any, propName: string, defaultValue: Object, isArray?: boolean) {
        super(parent, propName, defaultValue, isArray);
        this.objects = [];
    }
}









