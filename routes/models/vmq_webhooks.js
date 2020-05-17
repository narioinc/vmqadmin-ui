/**
 * Typical model for a webhook. Wehbooks will fall under session, pusblish or subscribe 
 * sections in the javascript object
 *  {
            hook_type: "auth_on_subscribe",            
            hooks_optional_settings: [{
                setting_name: "",
                setting_value: ""
            }]
        }
 */

var vmq_webhooks = {
    session_lifecyle_hooks: [{
            hook_type: "auth_on_register",

        },
        {
            hook_type: "auth_on_register_m5",

        },
        {
            hook_type: "on_auth_m5",

        },
        {
            hook_type: "on_register",

        },
        {
            hook_type: "on_register_m5",

        },
        {
            hook_type: "on_client_wakeup",

        },
        {
            hook_type: "on_client_offline",

        },
        {
            hook_type: "on_client_gone",

        }

    ],
    subscribe_hooks: [,
        {
            hook_type: "auth_on_subscribe",

        },
        {
            hook_type: "auth_on_subscribe_m5",

        },
        {
            hook_type: "on_subscribe",

        },
        {
            hook_type: "on_subscribe_m5",

        },
        {
            hook_type: "on_unsubscribe",

        },
        {
            hook_type: "on_unsubscribe_m5",

        }
    ],
    publish_hooks: [{
            hook_type: "auth_on_publish",
            hooks_optional_settings: [{
                setting_name: "no_payload",
                setting_value: "on"
            }]
        },
        {
            hook_type: "auth_on_publish_m5",
            hooks_optional_settings: [{
                setting_name: "no_payload",
                setting_value: "on"
            }]
        },
        {
            hook_type: "on_publish",
        },
        {
            hook_type: "on_publish_m5",
        },
        {
            hook_type: "on_offline_message",
        },
        {
            hook_type: "on_deliver",
        },
        {
            hook_type: "on_deliver_m5",
        }
    ]
}

module.exports = vmq_webhooks;