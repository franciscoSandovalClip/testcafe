import {Role} from 'testcafe'
import {CREDENTIALS, PAGE} from '../data/Constants'
import LoginPage from '../pages/LoginPage'

class roles{
    regularAccUser = Role(PAGE.LINK,async t=> {
        await LoginPage.submitLoginForm(CREDENTIALS.VALID_USERS.USERNAME, CREDENTIALS.VALID_USERS.PASSWORD)
    },{preserveUrl:true})
}

export default new roles()