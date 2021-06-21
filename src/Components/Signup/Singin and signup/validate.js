import isEmail from 'validator/lib/isEmail';

export default function validate(state,setError){
    console.log('validator');
    let isFormValid=true
    if(!state.name){
        isFormValid=false
        setError(['Name required'])
        
    }else if(!state.email){
        isFormValid=false
        setError(['Email required'])
    }else if(!state.password || !state.rePassword ){
        setError(['Password is required']);
        isFormValid=false;
    }else if(!isEmail(state.email)){
        setError(['Email is not valid']);
        isFormValid=false;
    }else if(state.password.length<6){
        isFormValid=false;
        setError(['Passwords must be at least 6 characters']);

    }else if(state.password !== state.rePassword){
        console.log(state.password,state.rePassword);
        console.log('pass');
        isFormValid=false;
        setError(['Password is not match']);
    }else{
        setError([])
    }
    console.log(isFormValid);
    return isFormValid
}

