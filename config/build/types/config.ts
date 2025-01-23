type TBuildMode = ('development' | 'production')

export interface IBuildPaths {
    entry: string
    build: string
    html: string
    src: string
    locales: string
    buildLocales: string
}

export interface IBuildOptions {
    mode: TBuildMode
    paths: IBuildPaths
    isDev: boolean
    port: number
    apiUrl: string
    project: TProject
}

export interface IBuildEnv {
    mode: TBuildMode
    port: number
    apiUrl: string
}
