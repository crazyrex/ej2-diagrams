import { Keys, KeyModifiers } from '../enum/enum';
import { Property, Complex, ChildProperty, Collection } from '@syncfusion/ej2-base';
import { CommandModel, KeyGestureModel } from './keyboard-commands-model';
import { ContextMenuItemModel } from '../objects/interface/interfaces';

/**
 * Defines keyboard commands
 */

export class KeyGesture extends ChildProperty<KeyGesture> {
    /**
     * Sets the key value, on recognition of which the command will be executed.
     * @aspDefaultValueIgnore
     * @aspNumberEnum 
     * @default undefined
     */
    @Property()
    public key: Keys;
    /**
     * Sets a combination of key modifiers, on recognition of which the command will be executed.
     * @aspDefaultValueIgnore
     * @aspNumberEnum 
     * @default undefined
     */
    @Property()
    public keyModifiers: KeyModifiers;


}

export class Command extends ChildProperty<Command> {

    /**
     * Defines the name of the command
     * @default ''
     */
    @Property('')
    public name: string;

    /**
     * Check the command is executable at the moment or not
     * @aspDefaultValueIgnore
     * @default undefined
     */
    @Property()
    public canExecute: Function | string;
    /**
     * Defines what to be executed when the key combination is recognized
     * @aspDefaultValueIgnore
     * @default undefined
     */
    @Property()
    public execute: Function | string;
    /**
     * Defines a combination of keys and key modifiers.
     * @default {}
     */
    @Complex<KeyGestureModel>({}, KeyGesture)
    public gesture: KeyGestureModel;


    /**
     * Defines the parameter of the command
     * @default ''
     */
    @Property('')
    public parameter: string;
}


export class CommandManager extends ChildProperty<CommandManager> {
    /**
     * Stores the multiple command names with the corresponding command objects
     * @default []
     */
    @Collection<CommandModel>([], Command)
    public commands: CommandModel[];
}

/**
 * Defines the behavior of the context menu items
 */
export class ContextMenuSettings extends ChildProperty<ContextMenuSettings> {
    /**
     * Enables/Disables the context menu items
     * @aspDefaultValueIgnore
     * @default undefined
     */
    @Property()
    public show: boolean;

    /**
     * Shows only the custom context menu items
     * @aspDefaultValueIgnore
     * @default undefined
     */
    @Property()
    public showCustomMenuOnly: boolean;

    /**
     * Defines the custom context menu items
     * @aspDefaultValueIgnore
     * @default undefined
     */
    @Property()
    public items: ContextMenuItemModel[];

}