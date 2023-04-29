const local = {
  setItem(name,data){
    localStorage.setItem(name, data);
  },
  getItem(name){
    return localStorage.getItem(name)
  },
  removeItem(name){
    localStorage.getItem(name)
  },
  clear(){
    localStorage.clear()
  },
  writeCookie(name,values){
    document.cookie =  name+'='+values+'; domain=bul.com.tr; path=/';
  },
  readCookie(alan) {
    var allcookies = document.cookie;
    var cookiearray = allcookies.split(';');
    for (var i = 0; i < cookiearray.length; i++) {
      var spl = cookiearray[i].split('=');
      if(spl.length >= 2){
        var name = cookiearray[i].split('=')[0].trim();
        var value = cookiearray[i].split('=')[1].trim();
        if (name === alan) {
          return value
        }
      }
    }
    return 0;
  }
}

export default local