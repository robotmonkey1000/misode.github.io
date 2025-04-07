import { useEffect } from 'preact/hooks'

declare const ethicalads: any

type AdProps = {
	type: 'text' | 'image',
	id: string,
}
export function Ad({ type, id }: AdProps) {
	useEffect(() => {
		document.getElementById('ad-placeholder')?.remove()
		if ('ethicalads' in window) {
			ethicalads.load()
		}
	}, [])

	return <></>
}
