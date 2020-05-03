export interface NodeConfig{
    node: string
    value: string
}
export interface LiveConfig{
    config_name: string;
    config_vals: string[];
    default: string;
    hidden: boolean;
    value: string;
    currentVal: NodeConfig[];
}