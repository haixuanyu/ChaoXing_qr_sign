import { type PropType } from 'vue';
import { type Numeric, type Interceptor } from '../utils';
import { ImageFit } from '../image';
import type { UploaderFileListItem } from './types';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    name: (NumberConstructor | StringConstructor)[];
    item: {
        type: PropType<UploaderFileListItem>;
        required: true;
    };
    index: NumberConstructor;
    imageFit: PropType<ImageFit>;
    lazyLoad: BooleanConstructor;
    deletable: BooleanConstructor;
    reupload: BooleanConstructor;
    previewSize: PropType<Numeric | [Numeric, Numeric]>;
    beforeDelete: PropType<Interceptor>;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("delete" | "reupload" | "preview")[], "delete" | "reupload" | "preview", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    name: (NumberConstructor | StringConstructor)[];
    item: {
        type: PropType<UploaderFileListItem>;
        required: true;
    };
    index: NumberConstructor;
    imageFit: PropType<ImageFit>;
    lazyLoad: BooleanConstructor;
    deletable: BooleanConstructor;
    reupload: BooleanConstructor;
    previewSize: PropType<Numeric | [Numeric, Numeric]>;
    beforeDelete: PropType<Interceptor>;
}>> & Readonly<{
    onDelete?: ((...args: any[]) => any) | undefined;
    onReupload?: ((...args: any[]) => any) | undefined;
    onPreview?: ((...args: any[]) => any) | undefined;
}>, {
    lazyLoad: boolean;
    deletable: boolean;
    reupload: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
