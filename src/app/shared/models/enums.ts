// Available Products Enum
export class AvailableProducts {
    baseUrl = 'assets/images/products/';
    variant = new productVariant().types

    products = [
        {
            id: 1, productName: 'Headphone', imageurl: [
                `${this.baseUrl}headphone.jpg`,
                `${this.baseUrl}headphone-2.jpg`,
                `${this.baseUrl}headphone-3.jpg`,
                `${this.baseUrl}headphone-4.jpg`,
                `${this.baseUrl}headphone-5.jpg`,
            ], variant: {
                type: this.variant.color,
                sku: [
                    { name: this.variant.color[0], number: 'sku-0001', price: 250, promoPrice: 200, stock: 25, wishlist: '11.2k' },
                    { name: this.variant.color[1], number: 'sku-0002', price: 250, promoPrice: 200, stock: 25, wishlist: '11.2k' },
                    { name: this.variant.color[2], number: 'sku-0003', price: 250, promoPrice: 200, stock: 25, wishlist: '11.2k' },
                ]
            }
        },
        {
            id: 2, productName: 'Wrist Watch', imageurl: [`${this.baseUrl}wrist-watch.jpg`], variant: {
                type: this.variant.size,
                sku: [
                    { name: this.variant.size[0], number: 'sku-0007', price: 250, promoPrice: 200, stock: 25, wishlist: '11.2k' },
                    { name: this.variant.size[1], number: 'sku-0008', price: 250, promoPrice: 200, stock: 25, wishlist: '11.2k' },
                    { name: this.variant.size[2], number: 'sku-0008', price: 250, promoPrice: 200, stock: 25, wishlist: '11.2k' },
                    { name: this.variant.size[3], number: 'sku-0010', price: 250, promoPrice: 200, stock: 25, wishlist: '11.2k' },
                    { name: this.variant.size[4], number: 'sku-0011', price: 250, promoPrice: 200, stock: 25, wishlist: '11.2k' },
                ]
            }
        },
        {
            id: 3, productName: 'Television', imageurl: [`${this.baseUrl}television.jpg`], variant: {
                type: this.variant.color,
                sku: [
                    { name: this.variant.color[0], number: 'sku-0001', price: 250, promoPrice: 200, stock: 25, wishlist: '11.2k' },
                    { name: this.variant.color[1], number: 'sku-0002', price: 250, promoPrice: 200, stock: 25, wishlist: '11.2k' },
                    { name: this.variant.color[2], number: 'sku-0003', price: 250, promoPrice: 200, stock: 25, wishlist: '11.2k' },
                ]
            }
        },
        {
            id: 4, productName: 'Headphone', imageurl: [
                `${this.baseUrl}headphone.jpg`,
                `${this.baseUrl}wrist-watch.jpg`,
                `${this.baseUrl}television.jpg`
            ], variant: {
                type: this.variant.color,
                sku: [
                    { name: this.variant.color[0], number: 'sku-0001', price: 250, promoPrice: 200, stock: 25, wishlist: '11.2k' },
                    { name: this.variant.color[1], number: 'sku-0002', price: 250, promoPrice: 200, stock: 25, wishlist: '11.2k' },
                    { name: this.variant.color[2], number: 'sku-0003', price: 250, promoPrice: 200, stock: 25, wishlist: '11.2k' },
                ]
            }
        },
        {
            id: 5, productName: 'Wrist Watch', imageurl: [`${this.baseUrl}wrist-watch.jpg`], variant: {
                type: this.variant.size,
                sku: [
                    { name: this.variant.size[0], number: 'sku-0007', price: 250, promoPrice: 200, stock: 25, wishlist: '11.2k' },
                    { name: this.variant.size[1], number: 'sku-0008', price: 250, promoPrice: 200, stock: 25, wishlist: '11.2k' },
                    { name: this.variant.size[2], number: 'sku-0008', price: 250, promoPrice: 200, stock: 25, wishlist: '11.2k' },
                    { name: this.variant.size[3], number: 'sku-0010', price: 250, promoPrice: 200, stock: 25, wishlist: '11.2k' },
                    { name: this.variant.size[4], number: 'sku-0011', price: 250, promoPrice: 200, stock: 25, wishlist: '11.2k' },
                ]
            }
        },
        {
            id: 6, productName: 'Television', imageurl: [`${this.baseUrl}television.jpg`], variant: {
                type: this.variant.color,
                sku: [
                    { name: this.variant.color[0], number: 'sku-0001', price: 250, promoPrice: 200, stock: 25, wishlist: '11.2k' },
                    { name: this.variant.color[1], number: 'sku-0002', price: 250, promoPrice: 200, stock: 25, wishlist: '11.2k' },
                    { name: this.variant.color[2], number: 'sku-0003', price: 250, promoPrice: 200, stock: 25, wishlist: '11.2k' },
                ]
            }
        },
    ]
}

// Product Variant Types
export class productVariant {
    types = {
        unspecified: [],
        color: ['White', 'Blue', 'Black', 'Green'],
        size: ['S', 'M', 'L', 'XL', "XXL"],
        style: [],
        price: [],
        manufacturer: [],
        brand: []
    }
}