export declare const pickerToolbarProps: {
    title: StringConstructor;
    cancelButtonText: StringConstructor;
    confirmButtonText: StringConstructor;
};
export declare const pickerToolbarSlots: string[];
export type PickerToolbarPropKeys = Array<keyof typeof pickerToolbarProps>;
export declare const pickerToolbarPropKeys: PickerToolbarPropKeys;
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    title: StringConstructor;
    cancelButtonText: StringConstructor;
    confirmButtonText: StringConstructor;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("cancel" | "confirm")[], "cancel" | "confirm", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    title: StringConstructor;
    cancelButtonText: StringConstructor;
    confirmButtonText: StringConstructor;
}>> & Readonly<{
    onCancel?: ((...args: any[]) => any) | undefined;
    onConfirm?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
