import { Container } from '../../core/containers/container';
import { Diagram } from '../../diagram';
import { ConnectorModel } from '../connector-model';
import { NodeModel } from '../node-model';
import { PointModel } from '../../primitives/point-model';
import { EventState, ChangeType, State, DiagramAction } from '../../enum/enum';
import { SelectorModel } from '../../interaction/selector-model';
import { DiagramModel } from '../../diagram-model';
import { Connector } from '../../objects/connector';

/**
 * IElement interface defines the base of the diagram objects (node/connector)
 */
export interface IElement {
    wrapper: Container;
    init(diagram: Diagram, getDescription?: Function): void;
}

/**
 * IDataLoadedEventArgs defines the event arguments after data is loaded
 */
export interface IDataLoadedEventArgs {
    diagram: Diagram;
}
/**
 * ISelectionChangeEventArgs notifies when the node/connector are select
 * 
 */
export interface ISelectionChangeEventArgs {
    oldValue: (NodeModel | ConnectorModel)[];
    newValue: (NodeModel | ConnectorModel)[];
    state: EventState;
    cause: DiagramAction;
    type: ChangeType;
    cancel: boolean;
}

/**
 * ISizeChangeEventArgs notifies when the node/connector are resize
 * 
 */
export interface ISizeChangeEventArgs {
    source: SelectorModel;
    state: State;
    oldValue: SelectorModel;
    newValue: SelectorModel;
    cancel: boolean;
}

/**
 * IRotationEventArgs notifies when the node/connector are rotate
 * 
 */
export interface IRotationEventArgs {
    source: SelectorModel;
    state: State;
    oldValue: SelectorModel;
    newValue: SelectorModel;
    cancel: boolean;
}

/**
 * ICollectionChangeEventArgs notifies while the node/connector are added or removed
 * 
 */
export interface ICollectionChangeEventArgs {
    element: NodeModel | ConnectorModel;
    cause: DiagramAction;
    state: EventState;
    type: ChangeType;
    cancel: boolean;
}

/**
 * IPropertyChangeEventArgs notifies when the node/connector property changed
 * 
 */
export interface IPropertyChangeEventArgs {
    element: (NodeModel | ConnectorModel)[];
    cause: DiagramAction;
    oldValue: DiagramModel;
    newValue: DiagramModel;
}

/**
 * IDraggingEventArgs notifies when the node/connector are dragged
 * 
 */
export interface IDraggingEventArgs {
    source: SelectorModel;
    state: State;
    oldValue: SelectorModel;
    newValue: SelectorModel;
    target: NodeModel | ConnectorModel;
    targetPosition: PointModel;
    allowDrop: boolean;
    cancel: boolean;
}

/**
 * IConnectionChangeEventArgs notifies when the connector are connect or disconnect
 * 
 */
export interface IConnectionChangeEventArgs {
    connector: ConnectorModel;
    oldValue: Connector | { nodeId: string, portId: string };
    newValue: Connector | { nodeId: string, portId: string };
    connectorEnd: string;
    state: EventState;
    cancel: boolean;
}

/**
 * IEndChangeEventArgs notifies when the connector end point are resized
 * 
 */
export interface IEndChangeEventArgs {
    connector: ConnectorModel;
    oldValue: PointModel;
    newValue: PointModel;
    targetNode: string;
    targetPort: string;
    state: State;
    cancel: boolean;
}

/**
 * Animation notifies when the animation is take place
 * 
 */
export interface Animation {
    state: State;
}

/**
 * IClickEventArgs notifies while click on the objects or diagram
 * 
 */
export interface IClickEventArgs {
    element: SelectorModel | Diagram;
    position: PointModel;
    count: number;
    /** returns the actual object that is clicked or id of the diagram */
    actualObject: SelectorModel | Diagram;
}

/**
 * IDoubleClickEventArgs notifies while double click on the diagram or its objects 
 * 
 */
export interface IDoubleClickEventArgs {
    source: SelectorModel | Diagram;
    position: PointModel;
    count: number;
}

export interface IMouseEventArgs {
    /** returns the target node or connector */
    element: NodeModel | ConnectorModel | SelectorModel;
    /**  returns the object from where the selected object is dragged */
    actualObject: Object;
    /** returns the target object over which the selected object is dragged */
    targets: (NodeModel | ConnectorModel)[];
}

/**
 * scrollArgs notifies when the scroller had updated
 * 
 */
export interface ScrollValues {
    HorizontalOffset: number;
    VerticalOffset: number;
    CurrentZoom: number;
    ViewportWidth: number;
    ViewportHeight: number;
}

/**
 * IScrollChangeEventArgs notifies when the scroller has changed
 * 
 */
export interface IScrollChangeEventArgs {
    source: SelectorModel | Diagram;
    oldValue: ScrollValues;
    newValue: ScrollValues;
}

/**
 * IPaletteSelectionChangeArgs notifies when the selection objects change in the symbol palette
 * 
 */
export interface IPaletteSelectionChangeArgs {
    oldValue: string;
    newValue: string;
}

/**
 * IDragEnterEventArgs notifies when the element enter into the diagram from symbol palette
 * 
 */
export interface IDragEnterEventArgs {
    source: Object;
    element: NodeModel | ConnectorModel;
    diagram: DiagramModel;
    cancel: boolean;
}

/**
 * IDragLeaveEventArgs notifies when the element leaves from  the diagram 
 * 
 */
export interface IDragLeaveEventArgs {
    diagram: DiagramModel;
    element: SelectorModel;
}

/**
 * IDragOverEventArgs notifies when an element drag over another diagram element
 * 
 */
export interface IDragOverEventArgs {
    diagram: DiagramModel;
    element: SelectorModel;
    target: SelectorModel;
    mousePosition: PointModel;
}

/**
 * ITextEditEventArgs notifies when the label of an element under goes editing
 * 
 */
export interface ITextEditEventArgs {
    oldValue: string;
    newValue: string;
    cancel: boolean;
}
/**
 * IHistoryChangeArgs notifies when the label of an element under goes editing
 * 
 */
export interface IHistoryChangeArgs {
    source: (NodeModel | ConnectorModel)[];
    change: SelectorModel;
    cause: string;
}
/**
 * IDropEventArgs notifies when the element is dropped in the diagram
 * 
 */
export interface IDropEventArgs {
    element: NodeModel | ConnectorModel | SelectorModel;
    source?: Object;
    target: NodeModel | ConnectorModel | DiagramModel;
    position: PointModel;
    cancel: false;
}