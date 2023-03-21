

export const isAuth = _ => {
    try{
        let cookie = {};
    
        document.cookie.split(';').forEach(function(el) {
            let [k,v] = el.split('=');
            cookie[k.trim()] = v;
        })

        if(!(cookie['userToken'] == null)){
            return (true);
        }
        return (false);
    }catch(err){
        return (false);
    }
    
}