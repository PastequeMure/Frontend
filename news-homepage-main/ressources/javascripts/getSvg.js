export async function getSvg(url) {
    try {
        const responseSvg = await fetch(url);
        if(responseSvg.ok) {
            return await responseSvg.text()
        } else {
            throw new Error('svg-err')
        }
    } catch (err) {
        console.error(err);
        return null
    }
    
}