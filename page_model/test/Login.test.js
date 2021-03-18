import LoginPage from '../pages/LoginPage'
import MenuPage from '../pages/MenuPage'
import ProductsPage from '../pages/ProductsPage'
import {CHECKOUT_INFO, CREDENTIALS, PAGE} from '../data/Constants'
// import CartPage from '../pages/CartPage'
// import CheckoutPage from '../pages/CheckoutPage'
// import CheckoutOverviewPage from '../pages/CheckoutOverviewPage'
// import FinishOrderPage from '../pages/FinishOrderPage'
// import Roles from '../utils/Roles'

let itemsList = [];
fixture('Challenge Excercises testing')
    .page(PAGE.LINK)
    // .beforeEach(async t=> {
    //     await t.useRole(Roles.regularAccUser)
    // })

test('Users can login using valid credentials', async t=> {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USERS.USERNAME, CREDENTIALS.VALID_USERS.PASSWORD)
    await t.expect(ProductsPage.productsTitleText.exists).ok()

})

test('User is unable to Login with empty credentials', async t=> {
    await LoginPage.submitLoginForm(CREDENTIALS.INVALID_USER.USERNAME, CREDENTIALS.INVALID_USER.PASSWORD)
    await t.expect(LoginPage.loginErrorCode.exists).ok()
    await t.expect(LoginPage.loginErrorCode.innerText).eql('Epic sadface: Username and password do not match any user in this service')

})

test('Logout user from products page', async t=> {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USERS.USERNAME, CREDENTIALS.VALID_USERS.PASSWORD)
    await ProductsPage.openMenu()
     await MenuPage.logout()
    await t.expect(LoginPage.loginButton.exists).ok()

})

// test('Navigate to shopping cart', async t=> {
//     await LoginPage.submitLoginForm(CREDENTIALS.VALID_USERS.USERNAME, CREDENTIALS.VALID_USERS.PASSWORD)
//     await ProductsPage.openCart()
//     await t.expect(CartPage.cartPageTitle.exists).ok()
// })

// test('Add single item to cart', async t=> {
//     // await LoginPage.submitLoginForm(CREDENTIALS.VALID_USERS.USERNAME, CREDENTIALS.VALID_USERS.PASSWORD)
//     await ProductsPage.addItemToCart()
//     await ProductsPage.openCart()
//     await t.expect(CartPage.carItemCount.exists).ok()
//     await t.expect(CartPage.carItemCount.innerText).eql('1')
// })

// test('Add multiple items to cart', async t=> {
//     // await LoginPage.submitLoginForm(CREDENTIALS.VALID_USERS.USERNAME, CREDENTIALS.VALID_USERS.PASSWORD)
//     await ProductsPage.addMultipleItems()
//     await ProductsPage.openCart()
//     await t.expect(CartPage.carItemCount.innerText).notEql('1')
// })

// test('Continue with missing mail information', async t=> {
//     // await LoginPage.submitLoginForm(CREDENTIALS.VALID_USERS.USERNAME, CREDENTIALS.VALID_USERS.PASSWORD)
//     await ProductsPage.addItemToCart()
//     await ProductsPage.openCart()
//     await CartPage.checkoutAction()
//     await CheckoutPage.continueCheckoutMissingZip(CHECKOUT_INFO.FIRST_NAME, CHECKOUT_INFO.LAST_NAME)
//     await t.expect(CheckoutPage.errorCheckout.exists).ok()
//     await t.expect(CheckoutPage.errorCheckout.innerText).eql('Error: Postal Code is required')
// })

// test('Fill users information', async t=> {
//     // await LoginPage.submitLoginForm(CREDENTIALS.VALID_USERS.USERNAME, CREDENTIALS.VALID_USERS.PASSWORD)
//     await ProductsPage.addItemToCart()
//     await ProductsPage.openCart()
//     await CartPage.checkoutAction()
//     await CheckoutPage.continueCheckoutCorrectly(CHECKOUT_INFO.FIRST_NAME, CHECKOUT_INFO.LAST_NAME, CHECKOUT_INFO.ZIP)
//     await t.expect(CheckoutOverviewPage.checkoutOverviewTitle.exists).ok()
//     await t.expect(CheckoutOverviewPage.checkoutOverviewTitle.innerText).eql('Checkout: Overview')
// })

// test('Complete a purchase', async t=> {
//     // await LoginPage.submitLoginForm(CREDENTIALS.VALID_USERS.USERNAME, CREDENTIALS.VALID_USERS.PASSWORD)
//     await ProductsPage.addItemToCart()
//     await ProductsPage.openCart()
//     await CartPage.checkoutAction()
//     await CheckoutPage.continueCheckoutCorrectly(CHECKOUT_INFO.FIRST_NAME, CHECKOUT_INFO.LAST_NAME, CHECKOUT_INFO.ZIP)
//     await CheckoutOverviewPage.finishCheckout()
//     await t.expect(FinishOrderPage.thankYouMessage.exists).ok()
//     await t.expect(FinishOrderPage.thankYouMessage.innerText).eql('THANK YOU FOR YOUR ORDER')
// })

// test('Verify matching items in shopping cart & overview page', async t=> {
//     // await LoginPage.submitLoginForm(CREDENTIALS.VALID_USERS.USERNAME, CREDENTIALS.VALID_USERS.PASSWORD)
//     await ProductsPage.addMultipleItems()
//     await ProductsPage.openCart()
//     itemsList = await CartPage.arrayCount()
//     await CartPage.checkoutAction()
//     await CheckoutPage.continueCheckoutCorrectly(CHECKOUT_INFO.FIRST_NAME, CHECKOUT_INFO.LAST_NAME, CHECKOUT_INFO.ZIP)
//     await CheckoutOverviewPage.overviewItemsCount()
//     await t.expect(await CheckoutOverviewPage.compare(itemsList)).eql(true)
// })

