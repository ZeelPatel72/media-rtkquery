import { GoTrashcan } from 'react-icons/go'
import Button from './Button'
import ExpandablePanel from './ExpandablePanel'
import { useRemoveAlbumMutation } from '../store'
import PhototsList from './PhotosList'

function AlbumsListItem({ album }) {
	const [removeAlbum, results] = useRemoveAlbumMutation()

	const handleRemoveAlbum = () => {
		removeAlbum(album)
	}
	const header = (
		<div className="flex flex-row">
			<Button className="mr-2" loading={results.isLoading} onClick={handleRemoveAlbum}>
				<GoTrashcan />
			</Button>
			{album.title}
		</div>
	)
	return (
		<ExpandablePanel key={album.id} header={header}>
			<PhototsList album={album} />
		</ExpandablePanel>
	)
}
export default AlbumsListItem
