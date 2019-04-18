const props = {

    checkStorage: function(key){
            if (localStorage.getItem(key).length == 0 ) {
                return false; 
            }else{
                return true;
            }
       },

       addStorage: function(key, value){
            localStorage.setItem(key , value);
            return true;         
       },

       getStorage: function(key){
            const data = localStorage.getItem(key);
            return data;
       },
       removeStorage: function(key){
            localStorage.removeItem();
            return true;
       },
       clearStorage: function(key){
          localStorage.clear();
          return true;
       }



}

export default props;