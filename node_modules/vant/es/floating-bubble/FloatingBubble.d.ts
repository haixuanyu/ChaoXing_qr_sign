import { PropType, TeleportProps, type ExtractPropTypes } from 'vue';
import { FloatingBubbleAxis, FloatingBubbleMagnetic, FloatingBubbleOffset, FloatingBubbleGap } from './types';
export declare const floatingBubbleProps: {
    gap: {
        type: PropType<FloatingBubbleGap>;
        default: number;
    };
    icon: StringConstructor;
    axis: {
        type: PropType<FloatingBubbleAxis>;
        default: FloatingBubbleAxis;
    };
    magnetic: PropType<FloatingBubbleMagnetic>;
    offset: PropType<FloatingBubbleOffset>;
    teleport: {
        type: PropType<TeleportProps["to"]>;
        default: string;
    };
};
export type FloatingBubbleProps = ExtractPropTypes<typeof floatingBubbleProps>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    gap: {
        type: PropType<FloatingBubbleGap>;
        default: number;
    };
    icon: StringConstructor;
    axis: {
        type: PropType<FloatingBubbleAxis>;
        default: FloatingBubbleAxis;
    };
    magnetic: PropType<FloatingBubbleMagnetic>;
    offset: PropType<FloatingBubbleOffset>;
    teleport: {
        type: PropType<TeleportProps["to"]>;
        default: string;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "update:offset" | "offsetChange")[], "click" | "update:offset" | "offsetChange", import("vue").PublicProps, Readonly<ExtractPropTypes<{
    gap: {
        type: PropType<FloatingBubbleGap>;
        default: number;
    };
    icon: StringConstructor;
    axis: {
        type: PropType<FloatingBubbleAxis>;
        default: FloatingBubbleAxis;
    };
    magnetic: PropType<FloatingBubbleMagnetic>;
    offset: PropType<FloatingBubbleOffset>;
    teleport: {
        type: PropType<TeleportProps["to"]>;
        default: string;
    };
}>> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
    "onUpdate:offset"?: ((...args: any[]) => any) | undefined;
    onOffsetChange?: ((...args: any[]) => any) | undefined;
}>, {
    teleport: string | import("vue").RendererElement | null | undefined;
    gap: FloatingBubbleGap;
    axis: FloatingBubbleAxis;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
