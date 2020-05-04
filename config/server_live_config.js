var liveConfig = {
    configs: [{
            config_name: "allow_anonymous",
            config_vals: ["on", "off"],
            default: 'on'
        },
        {
            config_name: "topic_alias_max_broker",
            config_vals: [],
            default: '0',
            hidden: true
        },
        {
            config_name: "receive_max_broker",
            config_vals: [],
            default: '65535',
            hidden: true
        },
        {
            config_name: "vmq_acl.acl_file",
            config_vals: [],
            default: "/etc/vernemq/vmq.acl"
        },
        {
            config_name: "graphite_host",
            config_vals: [],
            default: 'localhost'
        },
        {
            config_name: "vmq_acl.acl_reload_interval",
            config_vals: [],
            default: "10"
        },
        {
            config_name: "graphite_enabled",
            config_vals: ['on', 'off'],
            default: "off"
        },
        {
            config_name: "queue_type",
            config_vals: ['fifo', 'lifo'],
            default: "fifo",
            hidden: true
        },
        {
            config_name: "suppress_lwt_on_session_takeover",
            config_vals: ['on', 'off'],
            default: "off",
            hidden: true
        },
        {
            config_name: "max_message_size",
            config_vals: [],
            default: "0"
        },
        {
            config_name: "vmq_passwd.password_file",
            config_vals: [],
            default: "/etc/vernemq/vmq.passwd"
        },
        {
            config_name: "graphite_port",
            config_vals: [],
            default: "2003"
        },
        {
            config_name: "max_client_id_size",
            config_vals: [],
            default: "100"
        },
        {
            config_name: "upgrade_outgoing_qos",
            config_vals: ['on', 'off'],
            default: "off"
        },
        {
            config_name: "max_message_rate",
            config_vals: [],
            default: "0",
            hidden: true
        },
        {
            config_name: "graphite_interval",
            config_vals: [],
            default: "20000"
        },
        {
            config_name: "allow_multiple_sessions",
            config_vals: ['on', 'off'],
            default: "off"
        },
        {
            config_name: "systree_enabled",
            config_vals: ['on', 'off'],
            default: "on"
        },
        {
            config_name: "max_last_will_delay",
            config_vals: [],
            default: "client"
        },
        {
            config_name: "receive_max_client",
            config_vals: [],
            default: "65535"
        },
        {
            config_name: "max_offline_messages",
            config_vals: [],
            default: "1000"
        },
        {
            config_name: "max_online_messages",
            config_vals: [],
            default: "1000"
        },
        {
            config_name: "max_inflight_messages",
            config_vals: [],
            default: "20"
        },
        {
            config_name: "allow_register_during_netsplit",
            config_vals: ['on', 'off'],
            default: "off"
        },
        {
            config_name: "vmq_passwd.password_reload_interval",
            config_vals: [],
            default: "10"
        },
        {
            config_name: "topic_alias_max_client",
            config_vals: [],
            default: "10",
            hidden: true
        },
        {
            config_name: "systree_interval",
            config_vals: [],
            default: "20000"
        },
        {
            config_name: "allow_publish_during_netsplit",
            config_vals: ['on', 'off'],
            default: "off"
        },
        {
            config_name: "coordinate_registrations",
            config_vals: ['on', 'off'],
            default: "on"
        },
        {
            config_name: "remote_enqueue_timeout",
            config_vals: [],
            default: "5000",
            hidden: true
        },
        {
            config_name: "persistent_client_expiration",
            config_vals: [],
            default: "1w"
        },
        {
            config_name: "allow_unsubscribe_during_netsplit",
            config_vals: ['on', 'off'],
            default: "off"
        },
        {
            config_name: "graphite_include_labels",
            config_vals: ['on', 'off'],
            default: "off",
            hidden: true
        },
        {
            config_name: "shared_subscription_policy",
            config_vals: ['prefer_local', 'local_only', 'random'],
            default: "prefer_local"
        },
        {
            config_name: "queue_deliver_mode",
            config_vals: ['balance', 'fanout'],
            default: "fanout",
            hidden: true
        },
        {
            config_name: "allow_subscribe_during_netsplit",
            config_vals: ['on', 'off'],
            default: "off"
        },
    ]
}

module.exports = liveConfig;