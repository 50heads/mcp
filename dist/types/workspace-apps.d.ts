/**
 * Workspace apps (the Slack and Microsoft Teams apps) and Zapier connections as the tools return them: snake_case,
 * credits, and a person's name or email for who added it. Read-only here; installs are added and
 * removed in the portal, and Zapier connects from Zapier.
 */
import type { WorkspaceApp, ZapierConnection } from "@50heads/shared";
import type { WorkspaceAppOut, ZapierConnectionOut } from "./schemas.js";
export declare function toWorkspaceApp(a: WorkspaceApp): WorkspaceAppOut;
/** One line per install: "app_1 · Slack · Acme: 400 of 2,000 credits spent today. Added by Ana on 2026-10-10." */
export declare function workspaceAppLine(a: WorkspaceAppOut): string;
export declare function toZapierConnection(z: ZapierConnection): ZapierConnectionOut;
/** "conn_1 · Zapier: 2 hooks; 1,200 of 5,000 credits spent today. Connected by Ana on 2026-10-09." */
export declare function zapierLine(z: ZapierConnectionOut): string;
