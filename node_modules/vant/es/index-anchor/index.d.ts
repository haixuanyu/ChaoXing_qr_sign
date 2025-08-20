export declare const IndexAnchor: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    index: (NumberConstructor | StringConstructor)[];
}>, (() => import("vue/jsx-runtime").JSX.Element) | undefined, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    index: (NumberConstructor | StringConstructor)[];
}>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default IndexAnchor;
export { indexAnchorProps } from './IndexAnchor';
export type { IndexAnchorProps } from './IndexAnchor';
export type { IndexAnchorThemeVars } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanIndexAnchor: typeof IndexAnchor;
    }
}
