import { useEffect } from 'preact/hooks'

declare const ethicalads: any

// type AdProps = {
// 	type: 'text' | 'image',
// 	id: string,
// }
export function Ad() {
	useEffect(() => {
		document.getElementById('ad-placeholder')?.remove()
		if ('ethicalads' in window) {
			ethicalads.load()
		}
	}, [])

	return <></>
}
