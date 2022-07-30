import type { Theme } from '@vuepress/core'
import { defaultTheme } from '@vuepress/theme-default'
import type { DefaultThemeOptions } from '@vuepress/theme-default'
import { path } from '@vuepress/utils'

export const localTheme = (options: DefaultThemeOptions): Theme => {
    return {
        name: 'vuepress-theme-local',
        extends: defaultTheme(options),
        layouts: {
            Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
        },
        alias: {
            '@theme/components/DropdownLink.vue': path.resolve(__dirname, './components/DropdownLink.vue'),
            '@theme/components/DropdownTransition.vue': path.resolve(__dirname, './components/DropdownTransition.vue'),
            '@theme/components/Home.vue': path.resolve(__dirname, './components/Home.vue'),
            '@theme/components/Navbar.vue': path.resolve(__dirname, './components/Navbar.vue'),
            '@theme/components/NavLink.vue': path.resolve(__dirname, './components/NavLink.vue'),
            '@theme/components/Page.vue': path.resolve(__dirname, './components/Page.vue'),
            '@theme/components/PageSidebar.vue': path.resolve(__dirname, './components/PageSidebar.vue'),
            '@theme/components/PageSidebarBackToTop.vue': path.resolve(__dirname, './components/PageSidebarBackToTop.vue'),
            '@theme/components/PageSidebarToc.vue': path.resolve(__dirname, './components/PageSidebarToc.vue'),
            '@theme/components/PageSidebarTocLink.vue': path.resolve(__dirname, './components/PageSidebarTocLink.vue'),
        }
    }
}
