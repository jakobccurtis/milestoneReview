const listingsDiv = document.createElement('div')
const body = document.querySelector('body')
listingsDiv.classList.add('listings')
body.appendChild(listingsDiv)


class Listings {
    constructor() {
        this.listArr = [];
    }

    addListing(listing) {
        // going to push new entries into this.listing array
        // addListing should add new instances of UserEntry
        this.listArr.push(listing)
    }

    removeListing() {

    }

    render() {
        // this is simply rendering a div that will house each entry object
        // create entry form
        // add event listener on submit button
        const ourList = this.listArr
        ourList.map((obj) => {

            const userWrapper = document.createElement('ul')
            userWrapper.classList.add('user_entry')
            listingsDiv.appendChild(userWrapper)

            const addressLi = document.createElement('li')
            addressLi.classList.add('address')
            userWrapper.appendChild(addressLi)
            addressLi.innerHTML = obj.address
            const propTypeLi = document.createElement('li')
            propTypeLi.classList.add('propType')
            userWrapper.appendChild(propTypeLi)
            propTypeLi.innerHTML = obj.propType
            const cityLi = document.createElement('li')
            cityLi.classList.add('city')
            userWrapper.appendChild(cityLi)
            cityLi.innerHTML = obj.city
            const stateLi = document.createElement('li')
            stateLi.classList.add('state')
            userWrapper.appendChild(stateLi)
            stateLi.innerHTML = obj.state

            const removeBtn = document.createElement('button')
            removeBtn.classList.add('remove')
            removeBtn.innerHTML="X"
            userWrapper.append(removeBtn)
        })
    }
}



class UserEntry {
    constructor(address, propType, city, state) {
        this.address = address,
            this.propType = propType,
            this.city = city,
            this.state = state
    }

    render() {
        // this is rendering a ul that is housing each property of the user entry
        const userWrapper = document.createElement('ul')
        // listingsDiv.append(userWrapper)

        const addressLi = document.createElement('li')
        userWrapper.appendChild(addressLi)
        const propTypeLi = document.createElement('li')
        userWrapper.appendChild(propTypeLi)
        const cityLi = document.createElement('li')
        userWrapper.appendChild(cityLi)
        const stateLi = document.createElement('li')
        userWrapper.appendChild(stateLi)

        return userWrapper
    }
}



const testUser = new UserEntry("123 Street Lane", "Apt", "Brooklyn", "New York");


const button = document.querySelector("#submitButton");

const masterListing = new Listings()

button.addEventListener('click', function (e) {
    e.preventDefault()
    const addressInput = document.querySelector('#addressInput')
    const propTypeInput = document.querySelector('#propTypeInput')
    const cityInput = document.querySelector('#cityInput')
    const stateInput = document.querySelector('#stateInput')

    const newEntry = new UserEntry(addressInput.value, propTypeInput.value, cityInput.value, stateInput.value)

    const newList = new Listings()

    newList.addListing(newEntry)
    newList.removeListing(newEntry)
    newList.render()

    // console.log(newEntry)
    // console.log(newList)
})

