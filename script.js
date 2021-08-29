const profilePopUp = document.querySelector('.profilePopUp')
        const users = document.querySelector('.users')

        function createIcon(iconName){
            const iconEl = document.createElement('i')
            iconEl.classList.add('fas')
            iconEl.classList.add(`fa-${iconName}`)

            return iconEl
        }

        function animate(element, time){
            setTimeout(() => {
                element.style.transition = `${time}s`
                element.style.padding = '10px 25px'
                element.style.filter = 'opacity(1)'
                element.style.transform = 'scaleY(1)'
            }, 50);
        }

        function populateUsers(userInfo){
            const {
                name, 
                age, 
                email, 
                img, 
                country, 
                phone, 
                state, 
                city, 
                street, 
                number 
            } = userInfo

            //cria elemento
            const personEl = document.createElement('div')
            const infoEl = document.createElement('div')
            const nameWrapperEl = document.createElement('div')
            const ageWrapperEl = document.createElement('div')
            const emailWrapperEl = document.createElement('div')
            const countryWrapperEl = document.createElement('div')
            const userImgEl = document.createElement('img')
            const nameEl = document.createElement('span')
            const ageEl = document.createElement('span')
            const emailEl = document.createElement('span')
            const yearsEl = document.createElement('span')
            const countryEl = document.createElement('span')

            //add classes, atributos e conteudo
            personEl.classList.add('person')
            infoEl.classList.add('info')
            userImgEl.setAttribute('src', img)
            userImgEl.setAttribute('title', 'Visualizar Perfil')
            userImgEl.setAttribute('onclick', `showProfile(
                "${name}", 
                "${age}", 
                "${email}", 
                "${img}", 
                "${country}", 
                "${phone}", 
                "${state}", 
                "${city}", 
                "${street}", 
                "${number}" 
                )`)
            nameEl.innerText = name
            ageEl.innerText = age
            emailEl.innerText = email
            yearsEl.innerText = ' years'
            countryEl.innerText = country

            //aninha elementos 
            personEl.append(userImgEl)
            personEl.append(infoEl)

            infoEl.append(nameWrapperEl)
            infoEl.append(ageWrapperEl)
            infoEl.append(emailWrapperEl)
            infoEl.append(countryWrapperEl)

            nameWrapperEl.append(createIcon('user'))
            nameWrapperEl.append(nameEl)

            ageWrapperEl.append(createIcon('calendar'))
            ageWrapperEl.append(ageEl)
            ageWrapperEl.append(yearsEl)

            emailWrapperEl.append(createIcon('envelope'))
            emailWrapperEl.append(emailEl)

            countryWrapperEl.append(createIcon('globe'))
            countryWrapperEl.append(countryEl)

            users.insertAdjacentElement('afterbegin',personEl)

            //add animacao
            animate(personEl, .5)
            
        }

        function getUsers(n){
            userUrl = 'https://randomuser.me/api/'
            for (let i = 0; i < n ; i++) {
                fetch(userUrl)
                .then(res => res.json())
                .then(res => {
                    console.log(res) 
                    return res.results[0]
                })
                .then(res => {
                    userInfo = {
                     name: `${res.name.first} ${res.name.last}`,
                     age: res.dob.age,
                     email: res.email,
                     img: res.picture.large,
                     country: res.location.country,
                     phone: res.phone,
                     state: res.location.state,
                     city: res.location.city,
                     street: res.location.street.name,
                     number: res.location.street.number,
                    }
                    populateUsers(userInfo)
                })
            }
        }

        function btnHandler(){
            const inputNumber = document.querySelector('.inputNumber')

            if(inputNumber.value < 1){
                alert('Insira um valor acima ou igual a 1')
                inputNumber.value = ''
                return
            }
            if(inputNumber.value.includes('.') || inputNumber.value.includes('-') || inputNumber.value.includes('+') ){
                alert('Insira um numero válido')
                inputNumber.value = ''
                return
            }
            if(inputNumber.value > 30){
                alert('Valor deve ser menor ou igual a 30')
                inputNumber.value = ''
                return
            }
            
            getUsers(inputNumber.value)
        }

        function showProfile(
                name, 
                age, 
                email, 
                img, 
                country, 
                phone, 
                state, 
                city, 
                street, 
                number 
            ){

            profilePopUp.removeAttribute('hidden','')
            const profileEl = document.querySelector('.profile')

            //cria elementos
            const infoEl = document.createElement('div')
            const nameWrapperEl = document.createElement('div')
            const ageWrapperEl = document.createElement('div')
            const emailWrapperEl = document.createElement('div')
            const countryWrapperEl = document.createElement('div')
            const phoneWrapperEl = document.createElement('div')
            const stateWrapperEl = document.createElement('div')
            const cityWrapperEl = document.createElement('div')
            const streetWrapperEl = document.createElement('div')

            const userImgEl = document.createElement('img')
            const nameEl = document.createElement('span')
            const ageEl = document.createElement('span')
            const emailEl = document.createElement('span')
            const yearsEl = document.createElement('span')
            const countryEl = document.createElement('span')
            const phoneEl = document.createElement('span')
            const stateEl = document.createElement('span')
            const cityEl = document.createElement('span')
            const streetEl = document.createElement('span')

            //add classes, atributos e conteudo
            infoEl.classList.add('info')
            userImgEl.setAttribute('src', img)
            nameEl.innerText = name
            ageEl.innerText = age
            emailEl.innerText = email
            yearsEl.innerText = ' years'
            countryEl.innerText = country
            phoneEl.innerText = phone
            stateEl.innerText = state
            cityEl.innerText = city
            streetEl.innerText = `${street}, ${number}`

            //aninha elementos
            profileEl.append(infoEl)

            infoEl.append(userImgEl)
            infoEl.append(nameWrapperEl)
            infoEl.append(ageWrapperEl)
            infoEl.append(emailWrapperEl)
            infoEl.append(phoneWrapperEl)
            infoEl.append(countryWrapperEl)
            infoEl.append(stateWrapperEl)
            infoEl.append(cityWrapperEl)
            infoEl.append(streetWrapperEl)

            nameWrapperEl.append(createIcon('user'))
            nameWrapperEl.append(nameEl)

            ageWrapperEl.append(createIcon('calendar'))
            ageWrapperEl.append(ageEl)
            ageWrapperEl.append(yearsEl)

            emailWrapperEl.append(createIcon('envelope'))
            emailWrapperEl.append(emailEl)

            countryWrapperEl.append(createIcon('globe'))
            countryWrapperEl.append(countryEl)

            phoneWrapperEl.append(createIcon('phone'))
            phoneWrapperEl.append(phoneEl)

            stateWrapperEl.append(createIcon('map-pin'))
            stateWrapperEl.append(stateEl)

            cityWrapperEl.append(createIcon('building'))
            cityWrapperEl.append(cityEl)

            streetWrapperEl.append(createIcon('home'))
            streetWrapperEl.append(streetEl)

            animateProfile(1,1,0.5)

        }

        function closeProfile(){
            profilePopUp.setAttribute('hidden','')
            const info = document.querySelector('.profile .info')

            animateProfile(0,0.85,0)
            
            info.remove()
        }
        
        function animateProfile(opacity,scale,shadow){
            const profileEl = document.querySelector('.profile')
            const shadowEl = document.querySelector('.shadow')

            setTimeout(() => {
                profileEl.style.filter = `opacity(${opacity})`
                profileEl.style.transform = `scale(${scale})`
                shadowEl.style.background = `rgba(0, 0, 0, ${shadow})`
            }, 50);
        }

        getUsers(30)
