// generate current date and time

const generateCurrDate = {

    domSelects() {
        const currTimeElm = document.querySelector('#blogCurrTime')
        const currDateElm = document.querySelector('#blogCurrDate')

        return {
            currTimeElm,
            currDateElm
        }
    },

    currDateAndTime() {
        const currDate = new Date().toDateString()
        const currTime = new Date().toLocaleTimeString('en-BD')

        return {
            currDate,
            currTime
        }
    },

    insetCurrDateAndTime() {
        const {currDate, currTime} = this.currDateAndTime();
        const {currTimeElm, currDateElm} = this.domSelects()

        currTimeElm.value = currTime
        currDateElm.value = currDate

        console.log(currDateElm, currDate);
    }
}

// login area function

const loginAreaJs = {

    loginAreaDomSelector() {
        const adminPass = document.querySelector('#adminPass')
        const showPassBox = document.querySelector('#showPassCheck')

        return {
            adminPass,
            showPassBox
        }
    },

    loginFunc() {

        const {
            adminPass,
            showPassBox
        } = this.loginAreaDomSelector()

        showPassBox.addEventListener('click', () => {
            if (showPassBox.checked === true) {
                adminPass.type = 'text'
            } else {
                adminPass.type = 'password'
            }
        })
    }
}


// dashboard area function

const dashboard = {

    sidebarDomSelector() {
        const sideBarToggleBtnElm = document.querySelector('.toggleBtn')
        const siderBarElm = document.querySelector('.sideBar')
        const dbDetailsElm = document.querySelector('.dbDetails')

        return {
            sideBarToggleBtnElm,
            siderBarElm,
            dbDetailsElm
        }
    },

    /// menu bar toggle
    menuToggle() {

        const {
            sideBarToggleBtnElm,
            siderBarElm,
            dbDetailsElm
        } = this.sidebarDomSelector()

        sideBarToggleBtnElm.addEventListener('click', () => {
            siderBarElm.classList.toggle('toggleSidebar')
            console.log(siderBarElm.classList[1] === 'toggleSidebar');

            if (siderBarElm.classList[1] === 'toggleSidebar') {
                dbDetailsElm.style.width = '100%'
            } else {
                dbDetailsElm.style.width = 'calc(100% - 200px)'
            }

        })

    }
}



// initializing funciton
const initFunc = () => {
    loginAreaJs.loginFunc()
    dashboard.menuToggle()
    generateCurrDate.insetCurrDateAndTime()
}

initFunc()