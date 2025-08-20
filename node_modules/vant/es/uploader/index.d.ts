import { UploaderProps } from './Uploader';
export declare const Uploader: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    name: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    accept: {
        type: import("vue").PropType<string>;
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
        type: import("vue").PropType<import("csstype").Property.ObjectFit | undefined>;
        default: import("csstype").Property.ObjectFit | undefined;
    };
    resultType: {
        type: import("vue").PropType<import("./types").UploaderResultType>;
        default: import("./types").UploaderResultType;
    };
    uploadIcon: {
        type: import("vue").PropType<string>;
        default: string;
    };
    uploadText: StringConstructor;
    deletable: {
        type: BooleanConstructor;
        default: true;
    };
    reupload: BooleanConstructor;
    afterRead: import("vue").PropType<import("./types").UploaderAfterRead>;
    showUpload: {
        type: BooleanConstructor;
        default: true;
    };
    modelValue: {
        type: import("vue").PropType<import("./types").UploaderFileListItem[]>;
        default: () => never[];
    };
    beforeRead: import("vue").PropType<import("./types").UploaderBeforeRead>;
    beforeDelete: import("vue").PropType<import("../utils").Interceptor>;
    previewSize: import("vue").PropType<import("../utils").Numeric | [import("../utils").Numeric, import("../utils").Numeric]>;
    previewImage: {
        type: BooleanConstructor;
        default: true;
    };
    previewOptions: import("vue").PropType<Partial<import("..").ImagePreviewOptions>>;
    previewFullImage: {
        type: BooleanConstructor;
        default: true;
    };
    maxSize: {
        type: import("vue").PropType<import("./types").UploaderMaxSize>;
        default: number;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("delete" | "update:modelValue" | "oversize" | "clickUpload" | "closePreview" | "clickPreview" | "clickReupload")[], "delete" | "update:modelValue" | "oversize" | "clickUpload" | "closePreview" | "clickPreview" | "clickReupload", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    name: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    accept: {
        type: import("vue").PropType<string>;
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
        type: import("vue").PropType<import("csstype").Property.ObjectFit | undefined>;
        default: import("csstype").Property.ObjectFit | undefined;
    };
    resultType: {
        type: import("vue").PropType<import("./types").UploaderResultType>;
        default: import("./types").UploaderResultType;
    };
    uploadIcon: {
        type: import("vue").PropType<string>;
        default: string;
    };
    uploadText: StringConstructor;
    deletable: {
        type: BooleanConstructor;
        default: true;
    };
    reupload: BooleanConstructor;
    afterRead: import("vue").PropType<import("./types").UploaderAfterRead>;
    showUpload: {
        type: BooleanConstructor;
        default: true;
    };
    modelValue: {
        type: import("vue").PropType<import("./types").UploaderFileListItem[]>;
        default: () => never[];
    };
    beforeRead: import("vue").PropType<import("./types").UploaderBeforeRead>;
    beforeDelete: import("vue").PropType<import("../utils").Interceptor>;
    previewSize: import("vue").PropType<import("../utils").Numeric | [import("../utils").Numeric, import("../utils").Numeric]>;
    previewImage: {
        type: BooleanConstructor;
        default: true;
    };
    previewOptions: import("vue").PropType<Partial<import("..").ImagePreviewOptions>>;
    previewFullImage: {
        type: BooleanConstructor;
        default: true;
    };
    maxSize: {
        type: import("vue").PropType<import("./types").UploaderMaxSize>;
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
    modelValue: import("./types").UploaderFileListItem[];
    readonly: boolean;
    lazyLoad: boolean;
    maxCount: string | number;
    imageFit: import("csstype").Property.ObjectFit | undefined;
    resultType: import("./types").UploaderResultType;
    uploadIcon: string;
    deletable: boolean;
    reupload: boolean;
    showUpload: boolean;
    previewImage: boolean;
    previewFullImage: boolean;
    maxSize: import("./types").UploaderMaxSize;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default Uploader;
export { uploaderProps } from './Uploader';
export type { UploaderProps };
export type { UploaderInstance, UploaderThemeVars, UploaderResultType, UploaderFileListItem, UploaderBeforeRead, UploaderAfterRead, } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanUploader: typeof Uploader;
    }
}
