import { DropdownMenuProps } from './DropdownMenu';
export declare const DropdownMenu: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    overlay: {
        type: BooleanConstructor;
        default: true;
    };
    zIndex: (NumberConstructor | StringConstructor)[];
    duration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    direction: {
        type: import("vue").PropType<import("./types").DropdownMenuDirection>;
        default: import("./types").DropdownMenuDirection;
    };
    activeColor: StringConstructor;
    autoLocate: BooleanConstructor;
    closeOnClickOutside: {
        type: BooleanConstructor;
        default: true;
    };
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: true;
    };
    swipeThreshold: (NumberConstructor | StringConstructor)[];
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    overlay: {
        type: BooleanConstructor;
        default: true;
    };
    zIndex: (NumberConstructor | StringConstructor)[];
    duration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    direction: {
        type: import("vue").PropType<import("./types").DropdownMenuDirection>;
        default: import("./types").DropdownMenuDirection;
    };
    activeColor: StringConstructor;
    autoLocate: BooleanConstructor;
    closeOnClickOutside: {
        type: BooleanConstructor;
        default: true;
    };
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: true;
    };
    swipeThreshold: (NumberConstructor | StringConstructor)[];
}>> & Readonly<{}>, {
    overlay: boolean;
    duration: string | number;
    closeOnClickOverlay: boolean;
    direction: import("./types").DropdownMenuDirection;
    autoLocate: boolean;
    closeOnClickOutside: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default DropdownMenu;
export { dropdownMenuProps } from './DropdownMenu';
export type { DropdownMenuProps };
export type { DropdownMenuInstance, DropdownMenuDirection, DropdownMenuThemeVars, } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanDropdownMenu: typeof DropdownMenu;
    }
}
