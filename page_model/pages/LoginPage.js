import {Selector, t} from 'testcafe'

class LoginPage{
    constructor(){
        this.loginUserField = Selector("#user-name")
        this.passwordUserFiel = Selector('#password')
        this.loginButton = Selector('.btn_action')
        this.loginErrorCode = Selector('h3[data-test="error"]')

    }

    async submitLoginForm(username, password){
        await t 
            .typeText(this.loginUserField, username)
            .typeText(this.passwordUserFiel, password)
            .click(this.loginButton)
    }
}

export default new LoginPage()