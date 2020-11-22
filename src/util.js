//This function takes the url for the api.js on the images
//and rewrite some of the url so it can return a smaller image size
//so it loads the page faster.
//Bigger image size takes longer to render.
export function smallImage(imagePath, size){
	const image = imagePath.match(/media\/screenshots/)
	? imagePath.replace("/media/screenshots", `/media/resize/${size}/-/screenshots/`)
	: imagePath.replace('/media/games/', `/media/resize/${size}/-/games/`);

	return image;
}