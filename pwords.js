const pword = document.querySelector('#pword_input')
const confirmed = document.querySelector('#confirm')

const checkSameValue = function(){
    if(pword.value !== confirmed.value){
        this.setCustomValidity('Passwords currently do not match. Please ensure passwords match before submitting.')
        this.reportValidity()
    }
    else{
        pword.setCustomValidity('')
        confirmed.setCustomValidity('')
    }

}

pword.oninput = checkSameValue
confirmed.oninput = checkSameValue




