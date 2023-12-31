import { useAddPhotoMutation, useFetchPhotosQuery } from '../store'
import Button from './Button'
import Skeleton from './Skeleton'
import PhotosListItems from './PhotosListItems'

function PhototsList({ album }) {
	const { data, error, isLoading } = useFetchPhotosQuery(album)
	const [addPhoto, addPhotoResults] = useAddPhotoMutation()

	let photocontent
	if (isLoading) {
		photocontent = <Skeleton className="" times={3} />
	} else if (error) {
		photocontent = <div>Error loading photots</div>
	} else {
		photocontent = data.map((photo) => {
			return <PhotosListItems key={photo.id} photo={photo} />
		})
	}
	const handlePhotoAdd = () => {
		addPhoto(album)
	}
	return (
		<div>
			<div className="m-2 flex flex-row items-center justify-between">
				<div className="text-lg font-bold">Photos In {album.title}</div>
				<Button loading={addPhotoResults.isLoading} onClick={handlePhotoAdd}>
					+Add Photo
				</Button>
			</div>
			<div className="flex mx-8 flex-row flex-wrap justify-center">{photocontent}</div>
		</div>
	)
}

export default PhototsList
