export interface Session{
    client_id: string;
    is_online: boolean;
    mountpoint: string;
    peer_host: string;
    peer_port: number;
    user: string;
}
