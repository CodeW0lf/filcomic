<template>
  <div
    class="flex flex-col justify-center items-center mb-2 sm:flex-row md:mb-0"
  >
    <a
      href="https://www.patreon.com/foxesinlove"
      @click="patreonClick"
      target="_blank"
      class="inline-block py-3 px-4 bg-patreon-lighter text-white rounded text-sm sm:text-lg hover:ring-2 hover:ring-patreon-lighter hover:ring-offset-2 hover:ring-offset-gray-200 active:bg-gray-700"
    >
      <svg
        class="fill-current inline-block w-4 h-4 align-middle"
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Patreon icon</title>
        <path
          d="M15.386.524c-4.764 0-8.64 3.876-8.64 8.64 0 4.75 3.876 8.613 8.64 8.613 4.75 0 8.614-3.864 8.614-8.613C24 4.4 20.136.524 15.386.524M.003 23.537h4.22V.524H.003"
        />
      </svg>
      Become a Patron
    </a>
    <a
      href="https://www.fenrispublishing.com/fil"
      @click="storeClick"
      target="_blank"
      class="inline-block mt-2 py-3 px-4 bg-primary text-white rounded text-sm sm:mt-0 sm:ml-3 sm:text-lg hover:ring-2 hover:ring-primary-lighter hover:ring-offset-2 hover:ring-offset-gray-200 active:bg-gray-700"
    >
      <img
        class="inline-block -mt-2 -mb-1 w-7"
        src="@/assets/fplogo-small.png"
      />
      Store</a
    >
    <span
      class="text-primary font-semibold inline-block animated bounceIn delay-1s text-sm mt-2 sm:mt-0 sm:ml-2 sm:text-base"
    >
      <svg
        class="fill-current w-5 h-5 mx-1 hidden sm:inline-block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M3.828 9l6.071-6.071-1.414-1.414L0 10l.707.707 7.778 7.778 1.414-1.414L3.828 11H20V9H3.828z"
        />
      </svg>
      Support Foxes in Love!
    </span>
  </div>
</template>

<script>
export default {
  name: 'PatreonLink',
  methods: {
    patreonClick() {
      // eslint-disable-next-line no-undef
      gtag('event', 'Patreon', { event_category: 'Social' })
    },
    storeClick() {
      // eslint-disable-next-line no-undef
      gtag('event', 'Store', { event_category: 'Social' })
    },
  },
}
</script>

<style scoped></style>
