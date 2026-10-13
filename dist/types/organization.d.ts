/**
 * The organization as the read-only tools return it (plan 2 stage 5): snake_case, credits, and one
 * plain line per item for the text summary. Changes (domains, policies, single sign-on, SCIM,
 * service accounts) are made in the portal: these tools never write.
 */
import type { AuditEvent, MemberSessions, Organization, OrganizationDomain, ScimSettings, ScimToken, ServiceAccount } from "@50heads/shared";
import type { AuditEventOut, DomainOut, OrganizationOut, ServiceAccountOut } from "./schemas.js";
export declare function toOrganization(o: Organization): OrganizationOut;
/** "Acme (org_1): you are an admin. 2 workspaces; domains acme.com; single sign-on required; SCIM on." */
export declare function organizationLine(o: OrganizationOut): string;
export declare function toDomain(d: OrganizationDomain): DomainOut;
/** "acme.com: verified on 2026-10-01." or "beta.com: pending. Publish TXT _50heads-challenge.beta.com = …" */
export declare function domainLine(d: DomainOut): string;
export declare function toAuditEvent(e: AuditEvent): AuditEventOut;
/** "2026-10-11 09:30 · domain.added · acme.com · by Ana (API key)" */
export declare function auditLine(e: AuditEventOut): string;
export declare function scimStatus(settings: ScimSettings, tokens: ScimToken[]): {
    base_url: string;
    default_role: "admin" | "member" | "viewer" | "billing";
    default_workspace_id: string | null;
    provisioned_people: number;
    active_people: number;
    groups: number;
    tokens: {
        token_id: string;
        label: string;
        prefix: string;
        created_at: string;
        expires_at: string | null;
        last_used_at: string | null;
    }[];
};
export declare function memberSessions(m: MemberSessions): {
    user_id: string;
    sessions: {
        session_id: string;
        kind: "app" | "web";
        label: string;
        country: string | null;
        sign_in_method: "apple" | "google" | "email" | "sso" | "passkey" | "break_glass" | null;
        created_at: string;
        last_seen_at: string | null;
    }[];
};
export declare function toServiceAccount(s: ServiceAccount): ServiceAccountOut;
/** "sa_1 · Nightly agent (on) in Acme: 400 of 10,000 credits spent today; last token 2026-10-11." */
export declare function serviceAccountLine(s: ServiceAccountOut): string;
