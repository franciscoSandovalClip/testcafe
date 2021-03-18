import {Selector, t} from 'testcafe'

class CheckoutPage{
    constructor(){
        this.firstNameField = Selector('#first-name')
        this.lastNameField = Selector('#last-name')
        this.zipcodeField = Selector('#postal-code')
        this.continueButton = Selector('.btn_primary.cart_button')
        this.errorCheckout = Selector('h3[data-test="error"]')


    }

    async continueCheckoutMissingZip(name,lastname){
        await t.typeText(this.firstNameField, name)
        await t.typeText(this.lastNameField, lastname)
        await t.click(this.continueButton)
    }

    async continueCheckoutCorrectly(name,lastname,zipcode){
        await t.typeText(this.firstNameField, name)
        await t.typeText(this.lastNameField, lastname)
        await t.typeText(this.zipcodeField, zipcode)
        await t.click(this.continueButton)
    }

}

export default new CheckoutPage()