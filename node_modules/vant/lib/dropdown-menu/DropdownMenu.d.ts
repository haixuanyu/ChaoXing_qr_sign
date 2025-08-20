import { type InjectionKey, type ExtractPropTypes } from 'vue';
import type { DropdownMenuProvide, DropdownMenuDirection } from './types';
export declare const dropdownMenuProps: {
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
        type: import("vue").PropType<DropdownMenuDirection>;
        default: DropdownMenuDirection;
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
};
export type DropdownMenuProps = ExtractPropTypes<typeof dropdownMenuProps>;
export declare const DROPDOWN_KEY: InjectionKey<DropdownMenuProvide>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
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
        type: import("vue").PropType<DropdownMenuDirection>;
        default: DropdownMenuDirection;
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
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ExtractPropTypes<{
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
        type: import("vue").PropType<DropdownMenuDirection>;
        default: DropdownMenuDirection;
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
    direction: DropdownMenuDirection;
    autoLocate: boolean;
    closeOnClickOutside: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
