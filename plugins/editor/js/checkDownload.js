function checkDownload(hashkey){
  $.ajax({url: "https://testnet.gateway.proximax.io/xpxfs/"+hashkey,
    success: function(response, status, xhr){
        if(typeof response=="object")
        {
          alert("Your attachment not approve by Proximax blockchain yet, please try again later.");
        }
        else
        {
          window.open("https://testnet.gateway.proximax.io/xpxfs/"+hashkey,'_blank');
        }
    },
    error: function(response, status, xhr){
      if(response.responseJSON.message == "Failed to lookup content. Check if hash is valid and confirmed."){
        alert("Your attachment not approve by Proximax blockchain yet, please try again later.");
      }else{
        alert("Your attachment not approve by Proximax blockchain yet, please try again later.");
      }
    }
  });
}
