const WooCommerceRestApi = require('@woocommerce/woocommerce-rest-api').default

export const api = new WooCommerceRestApi({
	url: process.env.NEXT_PUBLIC_WC_URL, // Your store URL
	consumerKey:
		process.env.WC_API_KEY || 'ck_28b50d6249e37b86bf83b396c19f056442c6f497', // Your consumer key
	consumerSecret:
		process.env.WC_API_SECRET || 'cs_8a4e366740218e0ebdd074db154872da1c12791a', // Your consumer secret
	version: 'wc/v3', // WooCommerce WP REST API version
})

export const API_URL = process.env.API_URL || 'http://localhost:3000'
