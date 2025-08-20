import { Ref } from 'vue';
import type { BEM } from '../utils/create';
export declare function usePlaceholder(contentRef: Ref<Element | undefined>, bem: BEM): (renderContent: () => JSX.Element) => import("vue/jsx-runtime").JSX.Element;
