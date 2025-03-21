declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.svg' {
    import type React from 'react';
    const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

type TProject = 'storybook' | 'frontend' | 'jest';

// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __IS_DEV__: boolean;
// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __API__: string;
// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __PROJECT__: TProject;

type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

type TOptionalRecord<K extends keyof unknown, T> = {
    [P in K]?: T;
};

declare module '*.module.scss' {
    const classes: Record<string, string>;
    export default classes;
}
