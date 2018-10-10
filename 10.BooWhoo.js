    function booWho(bool) {
      return bool === false || bool === true;
    }
    // test here
    booWho(null);
    
    //
    
    function booWho(bool) {
      return typeof bool === 'boolean';
    }
    // test here
    booWho(null);
