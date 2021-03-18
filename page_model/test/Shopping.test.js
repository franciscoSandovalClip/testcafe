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

test('Navigate to shopping cart', async t=> {

    await ProductsPage.openCart()
    await t.expect(CartPage.cartPageTitle.exists).ok()
})

test('Add single item to cart', async t=> {

    await ProductsPage.addItemToCart()
    await ProductsPage.openCart()
    await t.expect(CartPage.carItemCount.exists).ok()
    await t.expect(CartPage.carItemCount.innerText).eql('1')
})

test('Add multiple items to cart', async t=> {

    await ProductsPage.addMultipleItems()
    await ProductsPage.openCart()
    await t.expect(CartPage.carItemCount.innerText).notEql('1')
})