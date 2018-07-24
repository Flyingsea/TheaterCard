export default {
    get: (url, data) => {
        let request = new XMLHttpRequest()
        request.addEventListener("load", e => {
            let data = JSON.parse(request.responseText)
            return(data)
        })

    }
}
