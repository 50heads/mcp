import { WEBHOOK_EVENTS, type WebhookEndpoint, type WebhookFilter } from "@50heads/shared";
import type { WebhookDelivery as DeliverySchema } from "@50heads/shared";
import type { z } from "zod";
import type { WebhookDeliveryOut, WebhookEndpointOut, WebhookFilterInput } from "./schemas.js";
/** What each event type means, for 50heads://webhook-events and the tool descriptions. */
export declare const WEBHOOK_EVENT_NOTES: Record<(typeof WEBHOOK_EVENTS)[number] | "webhook.test", string>;
/** The API's endpoint as the tools return it (snake_case). */
export declare function toEndpoint(e: WebhookEndpoint): WebhookEndpointOut;
export declare function toDelivery(d: z.infer<typeof DeliverySchema>): WebhookDeliveryOut;
/** snake_case filter → the API's; null stays null (clears), undefined stays undefined. */
export declare function fromFilter(f: z.infer<typeof WebhookFilterInput> | null | undefined): WebhookFilter | null | undefined;
/** One line per endpoint for the text content. */
export declare function endpointLine(e: WebhookEndpointOut): string;
export declare function deliveryLine(d: WebhookDeliveryOut): string;
/** The 50heads://webhook-events resource: event types, what they carry and where the schemas are. */
export declare function webhookEventsDoc(apiUrl: string, webUrl: string): {
    apiVersions: "2026-10-10"[];
    latest: "2026-10-10";
    schemas: string;
    docs: string;
    events: {
        type: "question.reserved" | "question.completed" | "question.underfilled" | "question.canceled" | "question.refused" | "credits.purchased" | "credits.low" | "credits.expiring" | "dispute.resolved" | "connection.cap_warning" | "webhook.test" | "member.provisioned" | "member.deprovisioned" | "policy.changed" | "approval.requested" | "approval.decided" | "approval.expired" | "approval.refused";
        description: string;
        schema: string;
    }[];
    envelope: string;
    filters: string;
    signing: {
        standard: string;
        legacy: string;
        rotation: string;
        tolerance: string;
    };
    retries: string;
};
