export default {
    get: (url, callback) => {
        let request = new XMLHttpRequest()
        request.addEventListener("load", e => {
            let data = JSON.parse(request.responseText)
            callback(data)
        })
        request.open("GET", url)
        request.send()
    }
}