import dotenv from 'dotenv'
dotenv.config()

export const CREDENTIALS = {
    VALID_USERS:{
        USERNAME: process.env.USERNAME,
        PASSWORD: process.env.PASSWORD
    },

    INVALID_USER:{
        USERNAME: 'invaliduser',
        PASSWORD: 'invalidpass'

    }
}

export const CHECKOUT_INFO = {
    FIRST_NAME: 'Francisco',
    LAST_NAME: 'Sandoval',
    ZIP: '45609'
}

export const PAGE = {
    LINK: process.env.PAGE
}

