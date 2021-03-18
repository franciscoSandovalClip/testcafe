import {Selector, t} from 'testcafe'

class FinishOrderPage{
    constructor(){
        this.thankYouMessage = Selector('.complete-header')
    }
}

export default new FinishOrderPage()