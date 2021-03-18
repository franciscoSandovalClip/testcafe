import {Selector, t} from 'testcafe'

class MenuPage{
    constructor(){
        this.logoutButton = Selector('#logout_sidebar_link')
        this.closeMenuButton = Selector('#react-burger-cross-btn')

    }

    async logout(){
        await t.click(this.logoutButton)
    }
}

export default new MenuPage()