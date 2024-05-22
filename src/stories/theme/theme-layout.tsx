import React from 'react';
import {ConfigProvider, Layout, Menu, theme as antdTheme} from 'antd';
import {darkToken} from '../../theme-token';
import styled from '@emotion/styled';

const {Content, Sider} = Layout;

const StyledHeader = styled(Layout.Header)({
    zIndex: 10,
    textAlign: 'center',
    boxShadow: '0 1px 2px 0 rgba(31,45,61,.07)'
});

const Header = ({children}) => {
    const {
        token: {colorBgContainer, colorBorder},
    } = antdTheme.useToken();
    return (
        <StyledHeader style={{background: colorBgContainer, borderColor: colorBorder}}>{children}</StyledHeader>
    );
}

const Sidebar = () => (
    <Sider
        collapsible
        width={200}
        trigger={null}
        collapsed={false}
        theme="light"
    >
        
        <Menu
            items={[
                {key: '1', label: 'Item 1'},
                {key: '2', label: 'Item 2'}
            ]}
        />
    </Sider>
);

export const ThemeLayout = ({dark}) => (
    <ConfigProvider
            theme={{
                algorithm: dark 
                    ? antdTheme.darkAlgorithm
                    : antdTheme.defaultAlgorithm,
                token: dark ? darkToken : undefined
            }}
        >
        <Layout style={{border: '1px solid gray'}}>
            <Header>Header</Header>
            <Layout>
                <Sidebar />
                <Content style={{minHeight: 200, padding: 24}}>Content</Content>
            </Layout>
        </Layout>
    </ConfigProvider>
);
