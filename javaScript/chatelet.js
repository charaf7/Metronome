$(document).ready(function()
{
 
    
    $( "#drakkar" ).hover(
        function() {
      
            $( "#drakkar-hover" ).css('display', 'block');
        }, function() {
      
            $( "#drakkar-hover" ).css('display', 'none');
    }
    );
    
      $( "#drakkar-hover" ).hover(
        function() {
      
            $( "#drakkar-hover" ).css('display', 'block');
             $( "#drakkar" ).css('display', 'none');
            
        }, function() {
      
            $( "#drakkar-hover" ).css('display', 'none');
             $( "#drakkar" ).css('display', 'block');
    }
    );
    
    
    $( "#barreau" ).hover(
        function() {
      
            $( "#barreau-hover" ).css('display', 'block');
        }, function() {
      
            $( "#barreau-hover" ).css('display', 'none');
    }
    );
    
      $( "#barreau-hover" ).hover(
        function() {
      
            $( "#barreau-hover" ).css('display', 'block');
             $( "#barreau" ).css('display', 'none');
            
        }, function() {
      
            $( "#barreau-hover" ).css('display', 'none');
             $( "#barreau" ).css('display', 'block');
    }
    );
    
    $( "#cadavre" ).hover(
        function() {
      
            $( "#cadavre-hover" ).css('display', 'block');
        }, function() {
      
            $( "#cadavre-hover" ).css('display', 'none');
    }
    );
    
      $( "#cadavre-hover" ).hover(
        function() {
      
            $( "#cadavre-hover" ).css('display', 'block');
             $( "#cadavre" ).css('display', 'none');
            
        }, function() {
      
            $( "#cadavre-hover" ).css('display', 'none');
             $( "#cadavre" ).css('display', 'block');
    }
    );
    
     $( "#prostitue" ).hover(
        function() {
      
            $( "#prostitue-hover" ).css('display', 'block');
        }, function() {
      
            $( "#prostitue-hover" ).css('display', 'none');
    }
    );
    
      $( "#prostitue-hover" ).hover(
        function() {
      
            $( "#prostitue-hover" ).css('display', 'block');
             $( "#prostitue" ).css('display', 'none');
            
        }, function() {
      
            $( "#prostitue-hover" ).css('display', 'none');
             $( "#prostitue" ).css('display', 'block');
    }
    );
    
    
    $( "#chevalier" ).hover(
        function() {
      
            $( "#chevalier-hover" ).css('display', 'block');
        }, function() {
      
            $( "#chevalier-hover" ).css('display', 'none');
    }
    );
    
      $( "#chevalier-hover" ).hover(
        function() {
      
            $( "#chevalier-hover" ).css('display', 'block');
             $( "#chevalier" ).css('display', 'none');
            
        }, function() {
      
            $( "#chevalier-hover" ).css('display', 'none');
             $( "#chevalier" ).css('display', 'block');
    }
    );
     /*-----------------------------------------------------------------------------*/
    
     $( "#barreau-hover" ).click(
        function() {
      
            $( "#video_barreau" ).css('display', 'block');
            
            $( "#video_drakkar" ).css('display', 'none');
            $( "#video_cadavre" ).css('display', 'none');
            $( "#video_prostitue" ).css('display', 'none');
            $( "#video_chevalier" ).css('display', 'none');
            
            $( "#texte_barreau" ).css('display', 'block');
            
            $( "#texte_drakkar" ).css('display', 'none');
            $( "#texte_cadavre" ).css('display', 'none');
            $( "#texte_prostitue" ).css('display', 'none');
            $( "#texte_chevalier" ).css('display', 'none');
            
            var video = $("#video_barreau").attr("src");
            $("#video_barreau").attr("src","");
            $("#video_barreau").attr("src",video);
            
             var video = $("#video_drakkar").attr("src");
            $("#video_drakkar").attr("src","");
            $("#video_drakkar").attr("src",video);
            
             var video = $("#video_cadavre").attr("src");
            $("#video_cadavre").attr("src","");
            $("#video_cadavre").attr("src",video);
            
             var video = $("#video_prostitue").attr("src");
            $("#video_prostitue").attr("src","");
            $("#video_prostitue").attr("src",video);
            
             var video = $("#video_chevalier").attr("src");
            $("#video_chevalier").attr("src","");
            $("#video_chevalier").attr("src",video);
            
            $( "#retrChateletBarreau" ).css('display', 'block');
            
            $( "#retrChateletDrakkar" ).css('display', 'none');
            $( "#retrChateletProstitue" ).css('display', 'none');
            $( "#retrChateletCadavre" ).css('display', 'none');
            $( "#retrChateletChevalier" ).css('display', 'none');
            
            $( "#popupBarreau" ).css('display', 'block');      
            $( "#popupDrakkar" ).css('display', 'none');
            $( "#popupProstitue" ).css('display', 'none');
            $( "#popupCadavre" ).css('display', 'none');
            $( "#popupChevalier" ).css('display', 'none');

             
        });
    
     /*-----------------------------------------------------------------------------*/
    
     $( "#cadavre-hover" ).click(
        function() {
            $( "#video_cadavre" ).css('display', 'block');
            
            $( "#video_drakkar" ).css('display', 'none');
            $( "#video_prostitue" ).css('display', 'none');
            $( "#video_chevalier" ).css('display', 'none');
            $( "#video_barreau" ).css('display', 'none');
            
            $( "#texte_cadavre" ).css('display', 'block');
            
            $( "#texte_drakkar" ).css('display', 'none');
            $( "#texte_prostitue" ).css('display', 'none');
            $( "#texte_chevalier" ).css('display', 'none');
            $( "#texte_barreau" ).css('display', 'none');
             
            
            var video = $("#video_barreau").attr("src");
            $("#video_barreau").attr("src","");
            $("#video_barreau").attr("src",video);
            
             var video = $("#video_drakkar").attr("src");
            $("#video_drakkar").attr("src","");
            $("#video_drakkar").attr("src",video);
            
             var video = $("#video_cadavre").attr("src");
            $("#video_cadavre").attr("src","");
            $("#video_cadavre").attr("src",video);
            
             var video = $("#video_prostitue").attr("src");
            $("#video_prostitue").attr("src","");
            $("#video_prostitue").attr("src",video);
            
             var video = $("#video_chevalier").attr("src");
            $("#video_chevalier").attr("src","");
            $("#video_chevalier").attr("src",video);
            
            
             $( "#retrChateletBarreau" ).css('display', 'none');
            
            $( "#retrChateletDrakkar" ).css('display', 'none');
            $( "#retrChateletProstitue" ).css('display', 'none');
            $( "#retrChateletCadavre" ).css('display', 'block');
            $( "#retrChateletChevalier" ).css('display', 'none');
            
             $( "#popupBarreau" ).css('display', 'none');      
            $( "#popupDrakkar" ).css('display', 'none');
            $( "#popupProstitue" ).css('display', 'none');
            $( "#popupCadavre" ).css('display', 'block');
            $( "#popupChevalier" ).css('display', 'none');
        });
    
    /*-----------------------------------------------------------------------------*/
    
     $( "#drakkar-hover" ).click(
        function() {
      
            $( "#video_drakkar" ).css('display', 'block');
            
            $( "#video_cadavre" ).css('display', 'none');
            $( "#video_prostitue" ).css('display', 'none');
            $( "#video_chevalier" ).css('display', 'none');
            $( "#video_barreau" ).css('display', 'none');
            
             $( "#texte_drakkar" ).css('display', 'block');
            
            $( "#texte_cadavre" ).css('display', 'none');
            $( "#texte_prostitue" ).css('display', 'none');
            $( "#texte_chevalier" ).css('display', 'none');
            $( "#texte_barreau" ).css('display', 'none');
             
             var video = $("#video_barreau").attr("src");
            $("#video_barreau").attr("src","");
            $("#video_barreau").attr("src",video);
            
             var video = $("#video_drakkar").attr("src");
            $("#video_drakkar").attr("src","");
            $("#video_drakkar").attr("src",video);
            
             var video = $("#video_cadavre").attr("src");
            $("#video_cadavre").attr("src","");
            $("#video_cadavre").attr("src",video);
            
             var video = $("#video_prostitue").attr("src");
            $("#video_prostitue").attr("src","");
            $("#video_prostitue").attr("src",video);
            
             var video = $("#video_chevalier").attr("src");
            $("#video_chevalier").attr("src","");
            $("#video_chevalier").attr("src",video);
            
             $( "#retrChateletBarreau" ).css('display', 'none');
            
            $( "#retrChateletDrakkar" ).css('display', 'block');
            $( "#retrChateletProstitue" ).css('display', 'none');
            $( "#retrChateletCadavre" ).css('display', 'none');
            $( "#retrChateletChevalier" ).css('display', 'none');
            
            
             $( "#popupBarreau" ).css('display', 'none');      
            $( "#popupDrakkar" ).css('display', 'block');
            $( "#popupProstitue" ).css('display', 'none');
            $( "#popupCadavre" ).css('display', 'none');
            $( "#popupChevalier" ).css('display', 'none');
        });
    
    /*-----------------------------------------------------------------------------*/
    
     $( "#prostitue-hover" ).click(
        function() {
      
          $( "#video_prostitue" ).css('display', 'block');
            
            $( "#video_drakkar" ).css('display', 'none');
            $( "#video_cadavre" ).css('display', 'none');
            $( "#video_barreau" ).css('display', 'none');
            $( "#video_chevalier" ).css('display', 'none');
            
            $( "#texte_prostitue" ).css('display', 'block');
            
            $( "#texte_drakkar" ).css('display', 'none');
            $( "#texte_cadavre" ).css('display', 'none');
            $( "#texte_barreau" ).css('display', 'none');
            $( "#texte_chevalier" ).css('display', 'none');
            
             var video = $("#video_barreau").attr("src");
            $("#video_barreau").attr("src","");
            $("#video_barreau").attr("src",video);
            
             var video = $("#video_drakkar").attr("src");
            $("#video_drakkar").attr("src","");
            $("#video_drakkar").attr("src",video);
            
             var video = $("#video_cadavre").attr("src");
            $("#video_cadavre").attr("src","");
            $("#video_cadavre").attr("src",video);
            
             var video = $("#video_prostitue").attr("src");
            $("#video_prostitue").attr("src","");
            $("#video_prostitue").attr("src",video);
            
             var video = $("#video_chevalier").attr("src");
            $("#video_chevalier").attr("src","");
            $("#video_chevalier").attr("src",video);
            
             $( "#retrChateletBarreau" ).css('display', 'none');
            
            $( "#retrChateletDrakkar" ).css('display', 'none');
            $( "#retrChateletProstitue" ).css('display', 'block');
            $( "#retrChateletCadavre" ).css('display', 'none');
            $( "#retrChateletChevalier" ).css('display', 'none');
            
            $( "#popupBarreau" ).css('display', 'none');      
            $( "#popupDrakkar" ).css('display', 'none');
            $( "#popupProstitue" ).css('display', 'block');
            $( "#popupCadavre" ).css('display', 'none');
            $( "#popupChevalier" ).css('display', 'none');
            
            
             
        });
    /*-----------------------------------------------------------------------------*/
    
     $( "#chevalier-hover" ).click(
        function() {
      
            $( "#video_chevalier" ).css('display', 'block');
            
            $( "#video_drakkar" ).css('display', 'none');
            $( "#video_cadavre" ).css('display', 'none');
            $( "#video_prostitue" ).css('display', 'none');
            $( "#video_barreau" ).css('display', 'none');
            
            $( "#texte_chevalier" ).css('display', 'block');
            
            $( "#texte_drakkar" ).css('display', 'none');
            $( "#texte_cadavre" ).css('display', 'none');
            $( "#texte_prostitue" ).css('display', 'none');
            $( "#texte_barreau" ).css('display', 'none');
            
             var video = $("#video_barreau").attr("src");
            $("#video_barreau").attr("src","");
            $("#video_barreau").attr("src",video);
            
             var video = $("#video_drakkar").attr("src");
            $("#video_drakkar").attr("src","");
            $("#video_drakkar").attr("src",video);
            
             var video = $("#video_cadavre").attr("src");
            $("#video_cadavre").attr("src","");
            $("#video_cadavre").attr("src",video);
            
             var video = $("#video_prostitue").attr("src");
            $("#video_prostitue").attr("src","");
            $("#video_prostitue").attr("src",video);
            
             var video = $("#video_chevalier").attr("src");
            $("#video_chevalier").attr("src","");
            $("#video_chevalier").attr("src",video);
            
            $( "#retrChateletBarreau" ).css('display', 'none');
            
            $( "#retrChateletDrakkar" ).css('display', 'none');
            $( "#retrChateletProstitue" ).css('display', 'none');
            $( "#retrChateletCadavre" ).css('display', 'none');
            $( "#retrChateletChevalier" ).css('display', 'block');
            
            
            $( "#popupBarreau" ).css('display', 'none');      
            $( "#popupDrakkar" ).css('display', 'none');
            $( "#popupProstitue" ).css('display', 'none');
            $( "#popupCadavre" ).css('display', 'none');
            $( "#popupChevalier" ).css('display', 'block');
            
        });
    
});
      