class Valid {

    emailCheck(value){
        let re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        return re.test(String(value).toLowerCase());
    }
    
    validphone(phoneNumber) {
        let re = /^[\d]{1}\ \([\d]{2,3}\)\ [\d]{2,3}-[\d]{2,3}-[\d]{2,3}$/;
        return re.test(phoneNumber);
    }  

    checkEmpty(){
        let fields = document.getElementsByClassName('field');
        for(let i=0; i<fields.length; i++){
            if(fields[i].value == ''){
                alert('Введите данные')
            } else {
                return true
            }
        }
    }
}


export default Valid