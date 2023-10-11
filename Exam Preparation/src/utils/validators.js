export const albumIsInvalid = (albumData) => {
    const requireField = [
        'name',
        'imgUrl',
        'price',
        'releaseDate',
        'artist',
        'genre',
        'description'
    ]
    return requireField.some(x => !albumData[x]);
}