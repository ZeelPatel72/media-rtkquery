import { useFetchAlbumsQuery, useCreateAlbumsMutation } from '../store'
import Skeleton from './Skeleton'
import Button from './Button'
import AlbumsListItem from './AlbumsListItem'

function AlbumsList({ user }) {
	const { data, error, isFetching } = useFetchAlbumsQuery(user)
	const [addAlbum, results] = useCreateAlbumsMutation()

	let content
	if (isFetching) {
		content = <Skeleton className="h-10 w-full" times={3} />
	} else if (error) {
		content = <div>Error Loading Albums</div>
	} else {
		content = data.map((album) => {
			return <AlbumsListItem key={album.id} album={album} />
		})
	}
	const handleAddAlbum = () => {
		addAlbum(user)
	}
	return (
		<div>
			<div className="m-2 flex flex-row items-center justify-between">
				<div className="text-lg font-bold">Albums for {user.name}</div>
				<Button loading={results.isLoading} onClick={handleAddAlbum}>
					+Add Album
				</Button>
			</div>
			<div>{content}</div>
		</div>
	)
}

export default AlbumsList
