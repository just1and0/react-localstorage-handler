const props = {

    checkStorage: function(key){
            if (localStorage.getItem(key) === null) {
                return false; 
            }else{
                return true;
            }
       }
}

export default props;