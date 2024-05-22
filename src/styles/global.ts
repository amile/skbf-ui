import {CSSObject} from '@emotion/react';

export const globalStyles: CSSObject = {
    'html, body, .root': {
        height: '100%'
    },
    body: {
        margin: 0,
        fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale'
    },
    code: {
        fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace'
    },
    'a.link, a.link:hover, a.link:visited': {
        color: 'inherit',
        fontSize: 'inherit',
        fontWeight: 'inherit',
        textDecoration: 'none'
    },
    // Margin
    '.mr-1': {
        marginRight: '.25rem'
    },
    '.mr-2': {
        marginRight: '.5rem'
    },
    '.mr-3': {
        marginRight: '1rem'
    },
    '.mr-4': {
        marginRight: '1.5rem'
    },
    '.mr-5': {
        marginRight:' 3rem'
    },
    '.ml-1': {
        marginLeft: '.25rem'
    },
    '.ml-2': {
        marginLeft: '.5rem'
    },
    '.ml-3': {
        marginLeft: '1rem'
    },
    '.ml-4': {
        marginLeft: '1.5rem'
    },
    '.ml-5': {
        marginLeft:' 3rem'
    },
    '.mt-1': {
        marginTop: '.25rem'
    },
    '.mt-2': {
        marginTop: '.5rem'
    },
    '.mt-3': {
        marginTop: '1rem'
    },
    '.mt-4': {
        marginTop: '1.5rem'
    },
    '.mt-5': {
        marginTop:' 3rem'
    },
    '.mb-1': {
        marginBottom: '.25rem'
    },
    '.mb-2': {
        marginBottom: '.5rem'
    },
    '.mb-3': {
        marginBottom: '1rem'
    },
    '.mb-4': {
        marginBottom: '1.5rem'
    },
    '.mb-5': {
        marginBottom:' 3rem'
    },
    // Text
    '.text-center': {
        textAlign: 'center'
    },
    '.text-right': {
        textAlign: 'right'
    }
};
