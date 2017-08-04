# Junction 2016

## Problem

UPM is in an ever more complex supply chain environment, it needs a way of connecting to other parties in the chain. They use a lot of paper and fixed EDI systems in logistics of a supply chain.

## Solution

Turning interdependent supply chain nodes into an functionally integrated supply chain, using blockchains.

### Built with

Azure, Ethereum. We've set up a private blockchain with multiple nodes.

### Production workflow
# Production workflow (simplified)

1. Items are ordered (Customer Order)

  - Generate IDs for Items - [1, 2, 3]
  - Link IDs to Order IDs

2. Orders are split into Order Rows

  - Generate Order Rows data (IDs, Configurations)
  - Link Items to Order Rows

3. Order Rows are combined into Production Orders

  - Generate Production Orders data (IDs, timestamps)
  - Link Order Rows to Production Orders

4. Produced Items are split into Shipments

  - Generate Shipment data
  - Link Items to Shipments

5. Shipments are split into Schedule Lines

  - Generate Schedule Line data
  - Link Items to Schedule Lines

6. Shipments are delivered

  - Record Delivery Status

# Items Lifecycle

1. Ordered
2. Scheduled for Production
3. Produced
4. Scheduled for Shipment
5. Shipped
6. Delivered

# Data structure

TBD
