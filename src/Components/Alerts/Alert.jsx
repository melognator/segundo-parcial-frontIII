import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)



export const addFavSuccess = (dentistName) => {
    MySwal.fire({
        title: <strong>Dentist faved succesfully :)</strong>,
        html: <i>The dentist {dentistName} was added to favs</i>,
        icon: 'success',
        timer: 1500,
        showConfirmButton: false,
      })
}

export const contactSuccess = (name) => {
    MySwal.fire({
        title: <strong>Thanks for submitting! :)</strong>,
        html: <i>We'll contact you soon {name}.</i>,
        icon: 'success',
        timer: 3000,
        showConfirmButton: false,
      })
}

export const removeFavSuccess = (dentistName) => {
    MySwal.fire({
        title: <strong>Dentist de-faved succesfully :)</strong>,
        html: <i>The dentist {dentistName} was removed from favs</i>,
        icon: 'success',
        timer: 1500,
        showConfirmButton: false,
      })
}

export const addFavFail = (dentistName) => {
    MySwal.fire({
        title: <strong>Couldn't fav the dentist :(</strong>,
        html: <i>The dentist {dentistName} was already added to favs, don't worry ;)</i>,
        icon: 'error',
        // timer: 1500,
        showConfirmButton: true,
        confirmButtonText: "Alright :>",
      })
}
