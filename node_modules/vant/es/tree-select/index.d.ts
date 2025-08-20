export declare const TreeSelect: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    max: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    items: {
        type: import("vue").PropType<import("./TreeSelect").TreeSelectItem[]>;
        default: () => never[];
    };
    height: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    selectedIcon: {
        type: import("vue").PropType<string>;
        default: string;
    };
    mainActiveIndex: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    activeId: {
        type: import("vue").PropType<import("../utils").Numeric | import("../utils").Numeric[]>;
        default: number;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("clickItem" | "clickNav" | "update:activeId" | "update:mainActiveIndex")[], "clickItem" | "clickNav" | "update:activeId" | "update:mainActiveIndex", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    max: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    items: {
        type: import("vue").PropType<import("./TreeSelect").TreeSelectItem[]>;
        default: () => never[];
    };
    height: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    selectedIcon: {
        type: import("vue").PropType<string>;
        default: string;
    };
    mainActiveIndex: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    activeId: {
        type: import("vue").PropType<import("../utils").Numeric | import("../utils").Numeric[]>;
        default: number;
    };
}>> & Readonly<{
    onClickItem?: ((...args: any[]) => any) | undefined;
    onClickNav?: ((...args: any[]) => any) | undefined;
    "onUpdate:activeId"?: ((...args: any[]) => any) | undefined;
    "onUpdate:mainActiveIndex"?: ((...args: any[]) => any) | undefined;
}>, {
    height: string | number;
    max: string | number;
    items: import("./TreeSelect").TreeSelectItem[];
    selectedIcon: string;
    mainActiveIndex: string | number;
    activeId: import("../utils").Numeric | import("../utils").Numeric[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default TreeSelect;
export { treeSelectProps } from './TreeSelect';
export type { TreeSelectItem, TreeSelectChild, TreeSelectProps, } from './TreeSelect';
export type { TreeSelectThemeVars } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanTreeSelect: typeof TreeSelect;
    }
}
