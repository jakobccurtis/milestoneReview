const listingsDiv = document.createElement('div')
const body = document.querySelector('body')
listingsDiv.classList.add('listings')
body.appendChild(listingsDiv)


class Listings {
    constructor(){
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
        ourList.map((obj)=>{
            // const listingEntry = document.createElement('div')
            // listingEntry.classList.add('listing_entry')
            // listingEntry.append(obj)
            // listingsDiv.appendChild(listingEntry)
            const userWrapper = document.createElement('ul')
            listingsDiv.appendChild(userWrapper)
            // listingsDiv.append(userWrapper)
    
            const addressLi = document.createElement('li')
            userWrapper.appendChild(addressLi)
            addressLi.innerHTML = obj.address
            const propTypeLi = document.createElement('li')
            userWrapper.appendChild(propTypeLi)
            propTypeLi.innerHTML = obj.propType
            const cityLi = document.createElement('li')
            userWrapper.appendChild(cityLi)
            cityLi.innerHTML = obj.city
            const stateLi = document.createElement('li')
            userWrapper.appendChild(stateLi)
            stateLi.innerHTML = obj.state
    

        })

        // return listingsRender
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

console.log(testUser)

const masterListing = new Listings
masterListing.addListing(testUser)
console.log(masterListing)
masterListing.render()

// event listerner. submit button. define a new entry.
// const testUser = new UserEntry(inputfield.value, "Apt", "Brooklyn", "New York");

