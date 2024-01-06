import { create } from 'zustand'

type SecondOrderAST = {
	id: number
	content: string
	nthOrder: Node[]
}

type Node = {
	id: number
	content: string
	goodOutcome: boolean
	order: number
}

type Store = {
	data: SecondOrderAST[]
	createNode?: (data: Node) => void
	deleteNode?: (data: Node) => void
	createAST?: (data: SecondOrderAST) => void
	getNthOrderNodes?: (order: number) => void
}

export const useSecondOrderStore = create<Store>()((set) => ({
	data: [
		{
			id: 1,
			content: 'Thinking things through',
			nthOrder: [
				{
					id: 1,
					content: 'I wash bumbum',
					order: 2,
					goodOutcome: true,
				},
			],
		},
	],

	// Add a new row under "Actions you could take"
	createAST: (newData) =>
		set(({ data }) => ({ data: [...data, newData] })),
}))

const getNthNode = (n: number) => (data: Node) => data.order === n
