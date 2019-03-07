import moment from 'moment'

export const slug = (id, title) => {
    return id+'-'+title.toString().toLowerCase()
        .replace(/\s+/g, '-')
}

export const getIdMovie = (idSlug) => {
    return idSlug.split("-")[0]
}