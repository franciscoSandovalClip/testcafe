import {Selector, t} from 'testcafe'

class ProductsPage{
    constructor(){
        this.backpackButton = Selector('.inventory_list .inventory_item:nth-of-type(1) .btn_primary')
        this.bikeLightButton = Selector('.inventory_list .inventory_item:nth-of-type(2) .btn_primary')
        this.boltShirtButton = Selector('.inventory_list .inventory_item:nth-of-type(3) .btn_primary')
        this.fleeceJacketButton = Selector('.inventory_list .inventory_item:nth-of-type(4) .btn_primary')
        this.labsOnesieButton = Selector('.inventory_list .inventory_item:nth-of-type(5) .btn_primary')
        this.tshirtRedButton = Selector('.inventory_list .inventory_item:nth-of-type(6) .btn_primary')
        this.addButton = Selector('.btn_primary.btn_inventory')
        this.menuButton = Selector('#react-burger-menu-btn')
        this.cartButton = Selector('path[fill=currentColor]')
        this.productsTitleText = Selector('.product_label')
    }

    async openMenu(){
        await t.click(this.menuButton)
    }

    async openCart(){
        await t.click(this.cartButton)
    }

    async addItemToCart(){
        await t.click(this.backpackButton)
    }

    async addMultipleItems(){
        await t.click(this.bikeLightButton)
        await t.click(this.fleeceJacketButton)
        await t.click(this.tshirtRedButton)

    }

}

export default new ProductsPage()