export type Interceptor = (...args: any[]) => Promise<boolean> | boolean | undefined | void;
export declare function callInterceptor(interceptor: Interceptor | undefined, { args, done, canceled, error, }: {
    args?: unknown[];
    done: () => void;
    canceled?: () => void;
    error?: () => void;
}): void;
