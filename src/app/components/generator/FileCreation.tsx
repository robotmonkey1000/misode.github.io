import type { DocAndNode } from '@spyglassmc/core'
import { useState } from 'preact/hooks'
import { Analytics } from '../../Analytics.js'
import { useLocale, useProject } from '../../contexts/index.js'
import { Btn } from '../Btn.js'
import { TextInput } from '../forms/index.js'
import { Modal } from '../Modal.js'

interface Props {
	docAndNode: DocAndNode,
	id: string,
	method: string,
	onClose: () => void,
}
export function FileCreation({ docAndNode, id, method, onClose }: Props) {
	const { locale } = useLocale()
	const { projects, project, updateFile } = useProject()
	const [fileId, setFileId] = useState(id === 'pack_mcmeta' ? 'pack' : '')
	const [error, setError] = useState<string>()

	const changeFileId = (str: string) => {
		setError(undefined)
		setFileId(str)
	}

	const doSave = () => {
		if (!fileId.match(/^([a-z0-9_.-]+:)?[a-z0-9/_.-]+$/)) {
			setError('Invalid resource location')
			return
		}
		Analytics.saveProjectFile(id, projects.length, project.files.length, method as any)
		const data = JSON.parse(docAndNode.doc.getText())
		updateFile(id, undefined, { type: id, id: fileId, data })
		onClose()
	}

	return <Modal class="file-modal" onDismiss={onClose}>
		<p>{locale('project.save_current_file')}</p>
		<TextInput autofocus={id !== 'pack_mcmeta'} class="btn btn-input" value={fileId} onChange={changeFileId} onEnter={doSave} onCancel={onClose} placeholder={locale('resource_location')} spellcheck={false} readOnly={id === 'pack_mcmeta'} />
		{error !== undefined && <span class="invalid">{error}</span>}
		<Btn icon="file" label={locale('project.save')} onClick={doSave} />
	</Modal>
}
