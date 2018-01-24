$(document).ready(function()
{
 
    $( "#robert" ).hover(
        function() {
      
            $( "#robert-hover" ).css('display', 'block');
        }, function() {
      
            $( "#robert-hover" ).css('display', 'none');
    }
    );
    
      $( "#robert-hover" ).hover(
        function() {
      
            $( "#robert-hover" ).css('display', 'block');
             $( "#robert" ).css('display', 'none');
            
        }, function() {
      
            $( "#robert-hover" ).css('display', 'none');
             $( "#robert" ).css('display', 'block');
    }
    );
    
    
    $( "#romain" ).hover(
        function() {
      
            $( "#romain-hover" ).css('display', 'block');
        }, function() {
      
            $( "#romain-hover" ).css('display', 'none');
    }
    );
    
      $( "#romain-hover" ).hover(
        function() {
      
            $( "#romain-hover" ).css('display', 'block');
             $( "#romain" ).css('display', 'none');
            
        }, function() {
      
            $( "#romain-hover" ).css('display', 'none');
             $( "#romain" ).css('display', 'block');
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
            
            
        });
    
});
      