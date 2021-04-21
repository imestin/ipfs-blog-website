// Fetch article meta, returns an object
async function fetchMeta(articleHash) {
    let url = gateway + articleHash + '/meta.json';
    let response = await fetch(url)
                            .catch(error => console.error("Error (fetch): ", error));           // IPFS error will not cause error in fetch
    let obj = await response.json()
                            .catch(() => {throw "Couldn't fetch article " + articleHash});      // IPFS error will cause error in the JSON parsing 
                                                                                                // (response is not a JSON object)
    return obj;
}
