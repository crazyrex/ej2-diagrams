import { DataManager } from '@syncfusion/ej2-data';
import { Property, ChildProperty } from '@syncfusion/ej2-base';

/**
 * data source defines the basic unit of diagram
 */

export class DataSource extends ChildProperty<DataSource> {
    /**
     * Sets the unique id of the data source items
     * @default ''
     */

    @Property('')
    public id: string;

    /**
     * Sets the data source either as a collection of objects or as an URL of DataManager
     * @default null
     */

    @Property(null)
    public dataManager: DataManager;

    /**
     * Sets the unique id of the root data source item
     * @default ''
     */
    @Property('')
    public root: string;

    /**
     * Sets the parent id of the data source item
     * @default ''
     */
    @Property('')
    public parentId: string;

    /**
     * Binds the custom data with node model
     * @aspDefaultValueIgnore
     * @default undefined
     */
    @Property()
    public data: Object[];

    /**
     * Binds the custom data with node model
     * @aspDefaultValueIgnore
     * @default undefined
     */
    @Property()
    public doBinding: Function | string;

}