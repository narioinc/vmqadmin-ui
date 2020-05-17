export interface Webhook {
    hook: string
    endpoint: string
    base64payload: boolean
    response_timeout: number
    no_payload: boolean
}