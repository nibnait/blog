<template>
  <div>
  <main :class="{'withouttoc': !showPageToc, 'page':true}">
    <slot name="top"/>

    <Content class="theme-default-content"/>

    <div class="page-nav" v-if="prev || next">
      <p class="inner">
        <span
          v-if="prev"
          class="prev"
        >
          ←
          <router-link
            v-if="prev"
            class="prev"
            :to="prev.path"
          >
            {{ prev.title || prev.path }}
          </router-link>
        </span>

        <span
          v-if="next"
          class="next"
        >
          <router-link
            v-if="next"
            :to="next.path"
          >
            {{ next.title || next.path }}
          </router-link>
          →
        </span>
      </p>
    </div>

    <slot name="bottom"/>
  </main>
  </div>
</template>

<script>
import { resolvePage, outboundRE, endingSlashRE } from '../util'

export default {
  props: ['sidebarItems'],

  computed: {
    showPageToc () {
      return this.prev || this.next
    },

    prev () {
      const prev = this.$page.frontmatter.prev
      if (prev === false) {
        return
      } else if (prev) {
        return resolvePage(this.$site.pages, prev, this.$route.path)
      } else {
        return resolvePrev(this.$page, this.sidebarItems)
      }
    },

    next () {
      const next = this.$page.frontmatter.next
      if (next === false) {
        return
      } else if (next) {
        return resolvePage(this.$site.pages, next, this.$route.path)
      } else {
        return resolveNext(this.$page, this.sidebarItems)
      }
    },
  },

  methods: {

  }
}

function resolvePrev (page, items) {
  return find(page, items, -1)
}

function resolveNext (page, items) {
  return find(page, items, 1)
}

function find (page, items, offset) {
  const res = []
  flatten(items, res)
  for (let i = 0; i < res.length; i++) {
    const cur = res[i]
    if (cur.type === 'page' && cur.path === decodeURIComponent(page.path)) {
      return res[i + offset]
    }
  }
}

function flatten (items, res) {
  for (let i = 0, l = items.length; i < l; i++) {
    if (items[i].type === 'group') {
      flatten(items[i].children || [], res)
    } else {
      res.push(items[i])
    }
  }
}

</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  display block
  word-break break-word
  padding-bottom 15px
  padding-right 315px
  padding-top 55px
  padding-left 18rem
  background #f3f5f7
  .theme-default-content
    margin-top 14px
    margin-left 12px
    background #fff
.page.withouttoc
  padding-right 65px
.h1
  padding-top 1rem

.page-contract
  display none
  background #fff

.page-nav
  @extend $wrapper
  padding-top 1rem
  padding-bottom 0
  background #fff
  margin-left 12px
  .inner
    min-height 2rem
    margin-top 0
    border-top 1px solid $borderColor
    padding-top 1rem
    overflow auto // clear float
  .next
    float right

.theme-default-content:not(.custom) > h1:first-child
  margin-top -4.5rem

@media (max-width: $MQNarrow)
  h1
    font-size 1.6rem
  h2
    font-size 1.5rem
  h3
    font-size 1.3rem
  .page
    font-size 0.9rem
    padding-right 3.5rem
    padding-bottom 1rem
    display block
    padding-top 55px
    .theme-default-content
      margin-top 0px
      margin-left 0px
  .page-edit
    margin-left 0px
  .page-contract
    margin-left 0px
  .page-nav
    margin-left 0px
  .page.withouttoc
    padding-right: 55px;
@media (max-width: $MQMobile)
  .page
    font-size 0.9rem
    padding-right 0rem
    margin: 0;
    padding: 0;
    padding-top: 3.5rem;
    .theme-default-content
      padding 1rem
      overflow-x hidden
  .page-contract
    display block
    padding 2rem
    padding-top 0rem
    overflow auto
    .c-content
      text-align center
      width 99%
  .page.withouttoc
    padding-right: 0rem;
</style>
