export const getGif = async ( category ) => {


    const url = `https://api.giphy.com/v1/gifs/search?q=${ category }&limit=3&api_key=c46j5KrJkrg8b3qVMBBzBWlRuyFhHFqC`;
    const resp = await fetch(url);

    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
        })
    )

    // console.log(data)

    return gifs;
}