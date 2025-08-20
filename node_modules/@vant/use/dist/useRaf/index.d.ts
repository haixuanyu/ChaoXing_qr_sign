interface UseRafOptions {
    interval?: number;
    isLoop?: boolean;
}
export declare function useRaf(fn: FrameRequestCallback, options?: UseRafOptions): () => void;
export {};
