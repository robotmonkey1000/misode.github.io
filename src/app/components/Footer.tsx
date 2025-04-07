import { useLocale } from '../contexts/index.js'
import { SOURCE_REPO_URL } from '../Utils.js'
import { Octicon } from './index.js'

interface Props {
	donate?: boolean,
}
export function Footer({ donate }: Props) {
	const { locale } = useLocale()

	return <footer>
		<p>
			<span>Forked From: <a href="https://github.com/misode" target="_blank" rel="noreferrer">Misode</a></span>
		</p>
		<p>
			{Octicon.mark_github}
			<span>{locale('source_code_on')} <a href={SOURCE_REPO_URL} target="_blank" rel="noreferrer">{locale('github')}</a></span>
		</p>
	</footer>
}
