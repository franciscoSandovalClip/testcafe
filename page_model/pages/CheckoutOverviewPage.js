import {Selector, t} from 'testcafe'
import CartPage from './CartPage'

class CheckoutOverviewPage{
    constructor(){
        this.checkoutOverviewTitle = Selector('.subheader')
        this.finishCheckoutButton = Selector('.btn_action.cart_button')
        this.overviewItems = Selector('.inventory_item_name')
    }

    async finishCheckout(){
        await t.click(this.finishCheckoutButton)
    }

    async overviewItemsCount(){
        const cnt = await this.overviewItems.count;
        let itemsOverviewList = [];
        for (let i=0; i < cnt; i++){
            itemsOverviewList[i] = await this.overviewItems.nth(i).innerText;
        }
        return itemsOverviewList;
        // console.log(itemsOverviewList);
    }

    async compare(array){
        let flag = true;
        const list2 = await this.overviewItemsCount();
        // console.log(array);
        // console.log(list2);

        for(let i=0;i<array.length;i++){
            if(array[i] != list2[i]){
                throw "Error, invalid match"
                flag = false;
            }
        }
        return flag;
    }
}

export default new CheckoutOverviewPage()