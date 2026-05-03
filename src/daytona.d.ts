/** Minimal type declarations for @daytona/sdk (optional peer dependency). */
declare module "@daytona/sdk" {
  export class Daytona {
    constructor(config?: DaytonaConfig);
    create(
      options?: CreateSandboxFromImageParams | CreateSandboxFromSnapshotParams,
    ): Promise<DaytonaSandbox>;
    current(): Promise<DaytonaSandbox>;
    close(): Promise<void>;
  }

  export interface DaytonaConfig {
    apiKey?: string;
    apiUrl?: string;
    target?: string;
  }

  export interface DaytonaSandbox {
    id: string;
    getRootDir(): string;
    exec(
      cmd: string,
      options?: { cwd?: string; timeout?: number },
    ): Promise<{ exitCode: number; output: string }>;
    fs: DaytonaFs;
    stop(): Promise<void>;
  }

  export interface DaytonaFs {
    uploadFile(path: string, content: string | Buffer): Promise<void>;
    downloadFile(path: string): Promise<string>;
    listFiles(path: string): Promise<{ files: string[]; dirs: string[] }>;
    deleteFile(path: string): Promise<void>;
    createFolder(path: string): Promise<void>;
  }

  export interface CreateSandboxFromImageParams {
    image?: string;
    env?: Record<string, string>;
    resources?: { cpu?: number; memory?: number; disk?: number };
  }

  export interface CreateSandboxFromSnapshotParams {
    snapshotId: string;
    env?: Record<string, string>;
  }
}
