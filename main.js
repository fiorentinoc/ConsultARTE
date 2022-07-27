const URL = 'https://api.artic.edu/api/v1/artworks'

/* Funcion para consultar la API */
const consultarApi = URL => {
    return fetch(URL)
    .then(res => res.json())
    .catch(err => console.error(err))
}

/* Funcion para transformar el objeto devuelto por la API en un Array */
const objAArray = infoApi => {
    arrayData = Object.entries(infoApi)
    return arrayData
}

/* Disparador de la consulta */
form.addEventListener('submit', async (event) => {
    event.preventDefault()

    submit.setAttribute('disabled', '')
    submit.setAttribute('aria-busy', 'true')

    const infoApi = await consultarApi(URL)

    if (infoApi) {
        title.innerHTML = "Datos Crudos, recibidos desde la la API"
        results.innerHTML = JSON.stringify(infoApi, null, 2)
        let array1 = objAArray(infoApi.data)
        let datos = "<h3>Datos procesados (Obra - Artista)</h3>"
        let obras = []
        let artistas = []
        array1.forEach(item => {
            console.log(item[1].title)
            datos += "<p>" + item[1].title + " - " + item[1].artist_title + "</p>"
            obras.push(item[1].title)
            artistas.push(item[1].artist_title)
        });
        mostrardatos.innerHTML = datos
        /* Mostrar en consola los arrays creados */
        console.log(obras)
        console.log(artistas)
    }

    submit.removeAttribute('disabled')
    submit.removeAttribute('aria-busy')
})
