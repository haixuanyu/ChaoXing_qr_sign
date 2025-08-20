import type { OverlayProps } from '../overlay';
import { Interceptor } from '../utils';
import type { PropType, CSSProperties, TeleportProps } from 'vue';
export declare const popupSharedProps: {
    show: BooleanConstructor;
    zIndex: (NumberConstructor | StringConstructor)[];
    overlay: {
        type: BooleanConstructor;
        default: true;
    };
    duration: (NumberConstructor | StringConstructor)[];
    teleport: PropType<TeleportProps["to"]>;
    lockScroll: {
        type: BooleanConstructor;
        default: true;
    };
    lazyRender: {
        type: BooleanConstructor;
        default: true;
    };
    beforeClose: PropType<Interceptor>;
    overlayProps: PropType<Partial<OverlayProps>>;
    overlayStyle: PropType<CSSProperties>;
    overlayClass: PropType<unknown>;
    transitionAppear: BooleanConstructor;
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: true;
    };
};
export type PopupSharedPropKeys = Array<keyof typeof popupSharedProps>;
export declare const popupSharedPropKeys: PopupSharedPropKeys;
