import { Ref } from 'vue';
export declare function useRefs<T = Element>(): readonly [Ref<T[], T[]>, (index: number) => (el: unknown) => void];
