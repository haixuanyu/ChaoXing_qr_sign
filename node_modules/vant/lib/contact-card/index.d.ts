export declare const ContactCard: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    tel: StringConstructor;
    name: StringConstructor;
    type: {
        type: import("vue").PropType<import("./ContactCard").ContactCardType>;
        default: import("./ContactCard").ContactCardType;
    };
    addText: StringConstructor;
    editable: {
        type: BooleanConstructor;
        default: true;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    tel: StringConstructor;
    name: StringConstructor;
    type: {
        type: import("vue").PropType<import("./ContactCard").ContactCardType>;
        default: import("./ContactCard").ContactCardType;
    };
    addText: StringConstructor;
    editable: {
        type: BooleanConstructor;
        default: true;
    };
}>> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
}>, {
    type: import("./ContactCard").ContactCardType;
    editable: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default ContactCard;
export { contactCardProps } from './ContactCard';
export type { ContactCardType, ContactCardProps } from './ContactCard';
export type { ContactCardThemeVars } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanContactCard: typeof ContactCard;
    }
}
