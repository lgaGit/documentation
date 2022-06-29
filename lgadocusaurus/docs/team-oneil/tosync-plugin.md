---
sidebar_position: 1
title: TOSync WordPress Plugin
---

# Introduction

This plugin was made to handle the syncing of order & booking data to Team O'Neil's HubSpot account.


Orders that are considered "On Hold" or "Failed" are _not_ imported.

## Technologies Used

- WordPress (https://www.teamoneil.com)
- HubSpot
- HubSpot API
- PHP
- ENV file to hold API Key.

## Repository

Code for this plugin can be found at the following GitHub location:

https://github.com/lgaGit/TOSync

## Server Directory

The Plugin is loaded onto the live Team O'Neil server at the following location:

_/wp-content/plugins/TOSync_

## Build Instructions

None. Runs off of the Team O'Neil WordPress PHP server.

## Core Functions

printout() - Runs the plugin on each order update.

neworder_creation($order_id) - Runs the plugin on each order creation

neworder_delegator($order_id, $order) - Function that runs the plugin.

mainplugin($orderid, $order) - Runs the main plugin.

## Useful Functions

write_to_log('message) - Logs to the hubspotlog.txt file.


## Known Issues

#### Partial Payments

Partial Payment orders were not importing into HubSpot correctly, due to WooCommerce not passing into the order complete hook the parent order. There is currently a delegation function
to try to retrieve the parent order from the partial payment order:
$order = get_woocommerce_order($order_id);
```php
    $orderdata = $order->get_data();

    $order_parent_id = $orderdata['parent_id'];
    write_to_log('Parent ID: ' . $order_parent_id);

    if ($order_parent_id != 0){
        $parentorder = get_woocommerce_order($order_parent_id);
        mainplugin($order_parent_id, $parentorder);
    }
    else {
        mainplugin($order_id, $order);
    }
    if ($order_parent_id != 0){
        $parentorder = get_woocommerce_order($order_parent_id);
        mainplugin($order_parent_id, $parentorder);
    }
    else {
        mainplugin($order_id, $order);
    }
```

If a Partial Payment doesn't correctly link to HubSpot, the fix is the following steps:
1. Delete the deal in HubSpot
2. Open the order on WooCommerce
3. Click update

This will force a update to the database and HubSpot.

#### Products

When a new product is created by Team O'Neil, it needs to be added to the code base in order to be able to be imported into HubSpot. This involves creating the product within HubSpot and then
retrieving the product number, of which is then added to the `set_product_id` switch case function. For example:
```php
    // solar turbines
        case 37106:
            return 1407904381;
            break;
```

Solar Turbines are identified in the switch case statement with two ids:
- 37106 - Retrieved from WooCommerce Product Admin Screen Link (https://teamoneil.com/wp-admin/post.php?post=37106&action=edit)
- 1407904381 - Retrieved from HubSpot API Call to the products endpoint for Team O'Neil. (https://api.hubapi.com/crm/v3/objects/products?limit=10&archived=false&hapikey=YOUR_HUBSPOT_API_KEY)

HubSpot Product API Documentation is found at https://developers.hubspot.com/docs/api/crm/products.