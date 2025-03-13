// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },

	modules: [
		'@nuxt/ui',
		'@nuxt/eslint',
		'@nuxt/fonts',
		'@nuxt/icon',
		'@nuxt/image',
		'@nuxt/scripts',
	],

	css: ['~/assets/css/main.css'],

	future: {
		compatibilityVersion: 4,
	},

	compatibilityDate: '2024-11-27',
})
