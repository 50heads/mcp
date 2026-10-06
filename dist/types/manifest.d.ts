/**
 * Discovery documents: the server card at /.well-known/mcp.json (and
 * /.well-known/mcp/server-card.json) and server.json for the official MCP registry.
 */
export declare const REGISTRY_NAME = "com.50heads/mcp";
export declare const NPM_PACKAGE = "@50heads/mcp";
export declare const DESCRIPTION = "Ask fifty verified real people a five-second question and get the split back.";
export type ManifestOptions = {
    /** The hosted endpoint, https://mcp.50heads.com/mcp. */
    endpoint?: string;
    webUrl?: string;
    resourceMetadataUrl?: string;
};
/** The server card: enough for a directory or host to connect without a round trip. */
export declare function serverCard(opts?: ManifestOptions): {
    $schema: string;
    version: string;
    protocolVersion: string;
    supportedProtocolVersions: string[];
    serverInfo: {
        name: string;
        title: string;
        version: string;
    };
    description: string;
    instructions: string;
    iconUrl: string;
    documentationUrl: string;
    transport: {
        type: string;
        endpoint: string;
    };
    authentication: {
        required: boolean;
        schemes: string[];
        resourceMetadata: string;
        authorizationServers: string[];
        scopes: ("questions:read" | "questions:write" | "templates:read" | "account:read")[];
    };
    capabilities: {
        tools: {
            listChanged: boolean;
        };
        resources: {
            listChanged: boolean;
        };
        prompts: {
            listChanged: boolean;
        };
        extensions: {
            "io.modelcontextprotocol/tasks": {
                methods: string[];
                tools: string[];
                pollIntervalMs: number;
            };
            "io.modelcontextprotocol/apps": {
                mimeTypes: string[];
                views: string[];
            };
            "com.50heads/skills": {
                skillVersion: string;
                skills: {
                    name: string;
                    version: string;
                    uri: string;
                    files: string[];
                    download: string;
                }[];
            };
            "com.50heads/auth": {
                authorizationServer: string;
                apiKeys: string;
                resourceMetadata?: string | undefined;
            };
        };
    };
    tools: {
        name: string;
        scope: "questions:read" | "questions:write" | "account:read" | null;
    }[];
    resources: string[];
    prompts: string[];
    skillVersion: string;
};
/** server.json for the official MCP registry: the hosted remote and the npm stdio package. */
export declare function registryServerJson(): {
    $schema: string;
    name: string;
    title: string;
    description: string;
    version: string;
    websiteUrl: string;
    repository: {
        url: string;
        source: string;
    };
    icons: {
        src: string;
        mimeType: string;
        sizes: string[];
    }[];
    remotes: {
        type: string;
        url: string;
        headers: {
            name: string;
            description: string;
            isRequired: boolean;
            isSecret: boolean;
        }[];
    }[];
    packages: {
        registryType: string;
        registryBaseUrl: string;
        identifier: string;
        version: string;
        runtimeHint: string;
        transport: {
            type: string;
        };
        environmentVariables: {
            name: string;
            description: string;
            isRequired: boolean;
            isSecret: boolean;
            format: string;
        }[];
    }[];
    _meta: {
        "io.modelcontextprotocol.registry/publisher-provided": {
            categories: string[];
            authorization: {
                resourceMetadata: string;
                authorizationServer: string;
                scopes: ("questions:read" | "questions:write" | "templates:read" | "account:read")[];
            };
            skillVersion: string;
        };
    };
};
