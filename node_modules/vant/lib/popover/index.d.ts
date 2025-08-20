export declare const Popover: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    show: BooleanConstructor;
    theme: {
        type: import("vue").PropType<import("./types").PopoverTheme>;
        default: import("./types").PopoverTheme;
    };
    overlay: BooleanConstructor;
    actions: {
        type: import("vue").PropType<import("./types").PopoverAction[]>;
        default: () => never[];
    };
    actionsDirection: {
        type: import("vue").PropType<import("./types").PopoverActionsDirection>;
        default: import("./types").PopoverActionsDirection;
    };
    trigger: {
        type: import("vue").PropType<import("./types").PopoverTrigger>;
        default: import("./types").PopoverTrigger;
    };
    duration: (NumberConstructor | StringConstructor)[];
    showArrow: {
        type: BooleanConstructor;
        default: true;
    };
    placement: {
        type: import("vue").PropType<import("./types").PopoverPlacement>;
        default: import("./types").PopoverPlacement;
    };
    iconPrefix: StringConstructor;
    overlayClass: import("vue").PropType<unknown>;
    overlayStyle: import("vue").PropType<import("vue").CSSProperties>;
    closeOnClickAction: {
        type: BooleanConstructor;
        default: true;
    };
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: true;
    };
    closeOnClickOutside: {
        type: BooleanConstructor;
        default: true;
    };
    offset: {
        type: import("vue").PropType<[number, number]>;
        default: () => number[];
    };
    teleport: {
        type: import("vue").PropType<import("vue").TeleportProps["to"]>;
        default: string;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "touchstart" | "update:show")[], "select" | "touchstart" | "update:show", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    show: BooleanConstructor;
    theme: {
        type: import("vue").PropType<import("./types").PopoverTheme>;
        default: import("./types").PopoverTheme;
    };
    overlay: BooleanConstructor;
    actions: {
        type: import("vue").PropType<import("./types").PopoverAction[]>;
        default: () => never[];
    };
    actionsDirection: {
        type: import("vue").PropType<import("./types").PopoverActionsDirection>;
        default: import("./types").PopoverActionsDirection;
    };
    trigger: {
        type: import("vue").PropType<import("./types").PopoverTrigger>;
        default: import("./types").PopoverTrigger;
    };
    duration: (NumberConstructor | StringConstructor)[];
    showArrow: {
        type: BooleanConstructor;
        default: true;
    };
    placement: {
        type: import("vue").PropType<import("./types").PopoverPlacement>;
        default: import("./types").PopoverPlacement;
    };
    iconPrefix: StringConstructor;
    overlayClass: import("vue").PropType<unknown>;
    overlayStyle: import("vue").PropType<import("vue").CSSProperties>;
    closeOnClickAction: {
        type: BooleanConstructor;
        default: true;
    };
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: true;
    };
    closeOnClickOutside: {
        type: BooleanConstructor;
        default: true;
    };
    offset: {
        type: import("vue").PropType<[number, number]>;
        default: () => number[];
    };
    teleport: {
        type: import("vue").PropType<import("vue").TeleportProps["to"]>;
        default: string;
    };
}>> & Readonly<{
    onSelect?: ((...args: any[]) => any) | undefined;
    onTouchstart?: ((...args: any[]) => any) | undefined;
    "onUpdate:show"?: ((...args: any[]) => any) | undefined;
}>, {
    offset: [number, number];
    theme: import("./types").PopoverTheme;
    overlay: boolean;
    show: boolean;
    teleport: string | import("vue").RendererElement | null | undefined;
    closeOnClickOverlay: boolean;
    actions: import("./types").PopoverAction[];
    closeOnClickAction: boolean;
    closeOnClickOutside: boolean;
    actionsDirection: import("./types").PopoverActionsDirection;
    trigger: import("./types").PopoverTrigger;
    showArrow: boolean;
    placement: import("./types").PopoverPlacement;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default Popover;
export { popoverProps } from './Popover';
export type { PopoverProps } from './Popover';
export type { PopoverTheme, PopoverAction, PopoverTrigger, PopoverThemeVars, PopoverPlacement, } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanPopover: typeof Popover;
    }
}
