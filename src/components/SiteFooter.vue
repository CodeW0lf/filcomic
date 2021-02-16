<template>
  <div class="text-gray-800 mt-16 text-center py-2">
    <p>
      Like the comic? Support me on
      <a
        href="https://www.patreon.com/foxesinlove"
        target="_blank"
        class="text-patreon-lighter hover:text-patreon"
      >
        <svg
          class="fill-current inline-block w-4 h-4 align-text-top"
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Patreon icon</title>
          <path
            d="M15.386.524c-4.764 0-8.64 3.876-8.64 8.64 0 4.75 3.876 8.613 8.64 8.613 4.75 0 8.614-3.864 8.614-8.613C24 4.4 20.136.524 15.386.524M.003 23.537h4.22V.524H.003"
          />
        </svg>
        Patreon
      </a>
      or visit the
      <a
        class="text-primary hover:text-primary-lighter font-bold"
        href="https://www.fenrispublishing.com/order.php?r=g&s=foxes"
        target="_blank"
        >Store</a
      >!
    </p>
    <p class="mt-8 mb-4">
      Copyright &copy; {{ new Date().getFullYear() }} Foxes in Love. All rights
      reserved.
    </p>
  </div>
</template>
<script>
export default {
  name: 'site-footer',
}
</script>
