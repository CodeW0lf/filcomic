<template>
  <nav
    class="flex flex-col justify-between items-center w-full my-2 px-4 md:flex-row"
  >
    <patreon-link></patreon-link>
    <!--    <div class="mt-2 md:mt-0 text-size-md text-primary font-bold">-->
    <!--      <a-->
    <!--        class="hover:text-primary-lighter"-->
    <!--        href="https://www.fenrispublishing.com/order.php?r=g&s=foxes"-->
    <!--        target="_blank"-->
    <!--        >Store</a-->
    <!--      >-->
    <!--    </div>-->
  </nav>
</template>

<script>
import PatreonLink from '@/components/PatreonLink'

export default {
  name: 'SiteNav',
  components: {
    PatreonLink,
  },
}
</script>

<style scoped></style>
