import { Keys, KeyModifiers } from '../enum/enum';import { Property, Complex, ChildProperty, Collection } from '@syncfusion/ej2-base';import { ContextMenuItemModel } from '../objects/interface/interfaces';

/**
 * Interface for a class KeyGesture
 */
export interface KeyGestureModel {

    /**
     * Sets the key value, on recognition of which the command will be executed.
     * @aspDefaultValueIgnore
     * @aspNumberEnum 
     * @default undefined
     */
    key?: Keys;

    /**
     * Sets a combination of key modifiers, on recognition of which the command will be executed.
     * @aspDefaultValueIgnore
     * @aspNumberEnum 
     * @default undefined
     */
    keyModifiers?: KeyModifiers;

}

/**
 * Interface for a class Command
 */
export interface CommandModel {

    /**
     * Defines the name of the command
     * @default ''
     */
    name?: string;

    /**
     * Check the command is executable at the moment or not
     * @aspDefaultValueIgnore
     * @default undefined
     */
    canExecute?: Function | string;

    /**
     * Defines what to be executed when the key combination is recognized
     * @aspDefaultValueIgnore
     * @default undefined
     */
    execute?: Function | string;

    /**
     * Defines a combination of keys and key modifiers.
     * @default {}
     */
    gesture?: KeyGestureModel;

    /**
     * Defines the parameter of the command
     * @default ''
     */
    parameter?: string;

}

/**
 * Interface for a class CommandManager
 */
export interface CommandManagerModel {

    /**
     * Stores the multiple command names with the corresponding command objects
     * @default []
     */
    commands?: CommandModel[];

}

/**
 * Interface for a class ContextMenuSettings
 */
export interface ContextMenuSettingsModel {

    /**
     * Enables/Disables the context menu items
     * @aspDefaultValueIgnore
     * @default undefined
     */
    show?: boolean;

    /**
     * Shows only the custom context menu items
     * @aspDefaultValueIgnore
     * @default undefined
     */
    showCustomMenuOnly?: boolean;

    /**
     * Defines the custom context menu items
     * @aspDefaultValueIgnore
     * @default undefined
     */
    items?: ContextMenuItemModel[];

}