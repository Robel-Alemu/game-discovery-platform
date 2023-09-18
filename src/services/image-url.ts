//this service helps to crop images by giving size to the api

const getCroppedImageUrl =  (url : string)=>{
    const target = 'media/'
    const index = url.indexOf(target) + target.length
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index)
}
export default getCroppedImageUrl
