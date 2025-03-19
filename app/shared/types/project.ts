import type { Translation } from './translation'

export type Project = {
	id: string
	title: string
	link: string
	poster: string
	date: string
	technologies: Technologies[]
	translations: Translation
}

export type Technologies =
	| 'Go'
	| 'Typescript'
	| '.Net'
	| 'Java'
	| 'Spring Boot'
	| 'Angular'
	| 'Docker'
	| 'Kubernetes'
	| 'Javascript'
	| 'Webpack'
	| 'Vue'
	| 'React'
	| 'Next'
	| 'Nuxt'
	| 'Node.js'
