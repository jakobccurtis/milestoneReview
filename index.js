const listingsDiv = document.createElement('div')
listingsDiv.classList.add('listings')


class Listings {
    constructor(){
        this.listing = [];
    }

    render() {
        // this is simply rendering a div that will house each entry object
        const listingsRender = document.createElement('div')
        listingsRender.classList.add('listings_render')
        listingsDiv.append(listingsRender)

        return listingsRender
    }

    addListing() {
        // going to push new entries into this.listing array
        // addListing should add new instances of UserEntry

    }

    removeListing() {

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

testUser.render()
console.log(testUser)

const masterListing = new Listings
document.body.append(masterListing.render())