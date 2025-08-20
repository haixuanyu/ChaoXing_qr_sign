import { type PropType, type ExtractPropTypes } from 'vue';
import { Interceptor, type Numeric } from '../utils';
import { type ImagePreviewOptions } from '../image-preview';
import type { UploaderMaxSize, UploaderAfterRead, UploaderBeforeRead, UploaderResultType, UploaderFileListItem } from './types';
export declare const uploaderProps: {
    name: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    accept: {
        type: PropType<string>;
        default: string;
    };
    capture: StringConstructor;
    multiple: BooleanConstructor;
    disabled: BooleanConstructor;
    readonly: BooleanConstructor;
    lazyLoad: BooleanConstructor;
    maxCount: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    imageFit: {
        type: PropType<import("csstype").Property.ObjectFit | undefined>;
        default: import("csstype").Property.ObjectFit | undefined;
    };
    resultType: {
        type: PropType<UploaderResultType>;
        default: UploaderResultType;
    };
    uploadIcon: {
        type: PropType<string>;
        default: string;
    };
    uploadText: StringConstructor;
    deletable: {
        type: BooleanConstructor;
        default: true;
    };
    reupload: BooleanConstructor;
    afterRead: PropType<UploaderAfterRead>;
    showUpload: {
        type: BooleanConstructor;
        default: true;
    };
    modelValue: {
        type: PropType<UploaderFileListItem[]>;
        default: () => never[];
    };
    beforeRead: PropType<UploaderBeforeRead>;
    beforeDelete: PropType<Interceptor>;
    previewSize: PropType<Numeric | [Numeric, Numeric]>;
    previewImage: {
        type: BooleanConstructor;
        default: true;
    };
    previewOptions: PropType<Partial<ImagePreviewOptions>>;
    previewFullImage: {
        type: BooleanConstructor;
        default: true;
    };
    maxSize: {
        type: PropType<UploaderMaxSize>;
        default: number;
    };
};
export type UploaderProps = ExtractPropTypes<typeof uploaderProps>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    name: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    accept: {
        type: PropType<string>;
        default: string;
    };
    capture: StringConstructor;
    multiple: BooleanConstructor;
    disabled: BooleanConstructor;
    readonly: BooleanConstructor;
    lazyLoad: BooleanConstructor;
    maxCount: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    imageFit: {
        type: PropType<import("csstype").Property.ObjectFit | undefined>;
        default: import("csstype").Property.ObjectFit | undefined;
    };
    resultType: {
        type: PropType<UploaderResultType>;
        default: UploaderResultType;
    };
    uploadIcon: {
        type: PropType<string>;
        default: string;
    };
    uploadText: StringConstructor;
    deletable: {
        type: BooleanConstructor;
        default: true;
    };
    reupload: BooleanConstructor;
    afterRead: PropType<UploaderAfterRead>;
    showUpload: {
        type: BooleanConstructor;
        default: true;
    };
    modelValue: {
        type: PropType<UploaderFileListItem[]>;
        default: () => never[];
    };
    beforeRead: PropType<UploaderBeforeRead>;
    beforeDelete: PropType<Interceptor>;
    previewSize: PropType<Numeric | [Numeric, Numeric]>;
    previewImage: {
        type: BooleanConstructor;
        default: true;
    };
    previewOptions: PropType<Partial<ImagePreviewOptions>>;
    previewFullImage: {
        type: BooleanConstructor;
        default: true;
    };
    maxSize: {
        type: PropType<UploaderMaxSize>;
        default: number;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("delete" | "update:modelValue" | "oversize" | "clickUpload" | "closePreview" | "clickPreview" | "clickReupload")[], "delete" | "update:modelValue" | "oversize" | "clickUpload" | "closePreview" | "clickPreview" | "clickReupload", import("vue").PublicProps, Readonly<ExtractPropTypes<{
    name: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    accept: {
        type: PropType<string>;
        default: string;
    };
    capture: StringConstructor;
    multiple: BooleanConstructor;
    disabled: BooleanConstructor;
    readonly: BooleanConstructor;
    lazyLoad: BooleanConstructor;
    maxCount: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    imageFit: {
        type: PropType<import("csstype").Property.ObjectFit | undefined>;
        default: import("csstype").Property.ObjectFit | undefined;
    };
    resultType: {
        type: PropType<UploaderResultType>;
        default: UploaderResultType;
    };
    uploadIcon: {
        type: PropType<string>;
        default: string;
    };
    uploadText: StringConstructor;
    deletable: {
        type: BooleanConstructor;
        default: true;
    };
    reupload: BooleanConstructor;
    afterRead: PropType<UploaderAfterRead>;
    showUpload: {
        type: BooleanConstructor;
        default: true;
    };
    modelValue: {
        type: PropType<UploaderFileListItem[]>;
        default: () => never[];
    };
    beforeRead: PropType<UploaderBeforeRead>;
    beforeDelete: PropType<Interceptor>;
    previewSize: PropType<Numeric | [Numeric, Numeric]>;
    previewImage: {
        type: BooleanConstructor;
        default: true;
    };
    previewOptions: PropType<Partial<ImagePreviewOptions>>;
    previewFullImage: {
        type: BooleanConstructor;
        default: true;
    };
    maxSize: {
        type: PropType<UploaderMaxSize>;
        default: number;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onDelete?: ((...args: any[]) => any) | undefined;
    onOversize?: ((...args: any[]) => any) | undefined;
    onClickUpload?: ((...args: any[]) => any) | undefined;
    onClosePreview?: ((...args: any[]) => any) | undefined;
    onClickPreview?: ((...args: any[]) => any) | undefined;
    onClickReupload?: ((...args: any[]) => any) | undefined;
}>, {
    name: string | number;
    accept: string;
    disabled: boolean;
    multiple: boolean;
    modelValue: UploaderFileListItem[];
    readonly: boolean;
    lazyLoad: boolean;
    maxCount: string | number;
    imageFit: import("csstype").Property.ObjectFit | undefined;
    resultType: UploaderResultType;
    uploadIcon: string;
    deletable: boolean;
    reupload: boolean;
    showUpload: boolean;
    previewImage: boolean;
    previewFullImage: boolean;
    maxSize: UploaderMaxSize;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
