import { WatchSource } from 'vue';
export declare function useLazyRender(show: WatchSource<boolean | undefined>): (render: () => JSX.Element | undefined) => () => JSX.Element | null | undefined;
