import {Selector, t} from 'testcafe'

let itemsList = [];
class CartPage{
    constructor(){
        this.cartPageTitle = Selector('.subheader')
        this.menuButton = Selector('#react-burger-menu-btn')
        this.continueShoppingButton = Selector('.btn_secondary')
        this.checkoutButton = Selector('.btn_action.checkout_button')
        this.removeItemButton = Selector('.btn_secondary.cart_button')
        this.carItemCount = Selector('.fa-layers-counter.shopping_cart_badge')

        this.items = Selector('.inventory_item_name')

    }

    async checkoutAction(){
        await t.click(this.checkoutButton)
    }

    async arrayCount(){
        const contador = await this.items.count;
        // let itemsList = [];
        for (let i=0; i < contador; i++){
            itemsList[i] = await this.items.nth(i).innerText;
        }
        return itemsList;
        // console.log(itemsList);
    }

}

export default new CartPage()