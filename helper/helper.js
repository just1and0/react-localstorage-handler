const props = {

    checkStorage: function(key){
            if (localStorage.getItem(key).length == 0 ) {
                return false; 
            }else{
                return true;
            }
       },

       addStorage: function(key, value){
         
   }



}

export default props;