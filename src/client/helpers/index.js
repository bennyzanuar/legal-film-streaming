import moment from 'moment'

export const slug = (id, title) => {
    return id+'-'+title.toString().toLowerCase()
        .replace(/\s+/g, '-')
}

export const getIdMovie = (idSlug) => {
    return idSlug.split("-")[0]
}

export const parseGenre = (genre) => {
    if (genre && genre.length > 0) {
        let res = []
        
        genre.map(gr => {
            res.push(gr.name)
        })
        
        return res.join(', ')
    }else {
        return ''
    }
}

export const formatDate = (date) => (date ? moment(date).format('D MMMM YYYY') : '')

export const getPrice = (rating) => {
    let price = 0;
    if (rating >= 1 && rating < 4) {
        price = 3500;
    } else if (rating >= 4 && rating < 6) {
        price = 8250;
    } else if (rating >= 6 && rating < 8) {
        price = 16350;
    } else if (rating >= 8 && rating <= 10) {
        price = 21250;
    }
    return price;
}

export const formatCurrency = (num) => {
    var parts = num.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return 'Rp. ' + parts.join(".");
}