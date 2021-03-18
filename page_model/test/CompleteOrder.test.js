import LoginPage from '../pages/LoginPage'
import MenuPage from '../pages/MenuPage'
import ProductsPage from '../pages/ProductsPage'
import {CHECKOUT_INFO, CREDENTIALS, PAGE} from '../data/Constants'
import CartPage from '../pages/CartPage'
import CheckoutPage from '../pages/CheckoutPage'
import CheckoutOverviewPage from '../pages/CheckoutOverviewPage'
import FinishOrderPage from '../pages/FinishOrderPage'
import Roles from '../utils/Roles'

let itemsList = [];
fixture('Challenge Excercises testing')
    .page(PAGE.LINK)
    .beforeEach(async t=> {
        await t.useRole(Roles.regularAccUser)
    })

test('Verify matching items in shopping cart & overview page', async t=> {
    // await LoginPage.submitLoginForm(CREDENTIALS.VALID_USERS.USERNAME, CREDENTIALS.VALID_USERS.PASSWORD)
    await ProductsPage.addMultipleItems()
    await ProductsPage.openCart()
    itemsList = await CartPage.arrayCount()
    await CartPage.checkoutAction()
    await CheckoutPage.continueCheckoutCorrectly(CHECKOUT_INFO.FIRST_NAME, CHECKOUT_INFO.LAST_NAME, CHECKOUT_INFO.ZIP)
    await CheckoutOverviewPage.overviewItemsCount()
    await t.expect(await CheckoutOverviewPage.compare(itemsList)).eql(true)
})

test('Complete a purchase', async t=> {
    // await LoginPage.submitLoginForm(CREDENTIALS.VALID_USERS.USERNAME, CREDENTIALS.VALID_USERS.PASSWORD)
    await ProductsPage.addItemToCart()
    await ProductsPage.openCart()
    await CartPage.checkoutAction()
    await CheckoutPage.continueCheckoutCorrectly(CHECKOUT_INFO.FIRST_NAME, CHECKOUT_INFO.LAST_NAME, CHECKOUT_INFO.ZIP)
    await CheckoutOverviewPage.finishCheckout()
    await t.expect(FinishOrderPage.thankYouMessage.exists).ok()
    await t.expect(FinishOrderPage.thankYouMessage.innerText).eql('THANK YOU FOR YOUR ORDER')
})