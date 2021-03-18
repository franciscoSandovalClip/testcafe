import LoginPage from '../pages/LoginPage'
import MenuPage from '../pages/MenuPage'
import ProductsPage from '../pages/ProductsPage'
import {CHECKOUT_INFO, CREDENTIALS, PAGE} from '../data/Constants'
import CartPage from '../pages/CartPage'
import CheckoutPage from '../pages/CheckoutPage'
import CheckoutOverviewPage from '../pages/CheckoutOverviewPage'
import FinishOrderPage from '../pages/FinishOrderPage'
import Roles from '../utils/Roles'

fixture('Challenge Excercises testing')
    .page(PAGE.LINK)
    .beforeEach(async t=> {
        await t.useRole(Roles.regularAccUser)
    })


test('Continue with missing mail information', async t=> {
    // await LoginPage.submitLoginForm(CREDENTIALS.VALID_USERS.USERNAME, CREDENTIALS.VALID_USERS.PASSWORD)
    await ProductsPage.addItemToCart()
    await ProductsPage.openCart()
    await CartPage.checkoutAction()
    await CheckoutPage.continueCheckoutMissingZip(CHECKOUT_INFO.FIRST_NAME, CHECKOUT_INFO.LAST_NAME)
    await t.expect(CheckoutPage.errorCheckout.exists).ok()
    await t.expect(CheckoutPage.errorCheckout.innerText).eql('Error: Postal Code is required')
})

test('Fill users information', async t=> {
    // await LoginPage.submitLoginForm(CREDENTIALS.VALID_USERS.USERNAME, CREDENTIALS.VALID_USERS.PASSWORD)
    await ProductsPage.addItemToCart()
    await ProductsPage.openCart()
    await CartPage.checkoutAction()
    await CheckoutPage.continueCheckoutCorrectly(CHECKOUT_INFO.FIRST_NAME, CHECKOUT_INFO.LAST_NAME, CHECKOUT_INFO.ZIP)
    await t.expect(CheckoutOverviewPage.checkoutOverviewTitle.exists).ok()
    await t.expect(CheckoutOverviewPage.checkoutOverviewTitle.innerText).eql('Checkout: Overview')
})