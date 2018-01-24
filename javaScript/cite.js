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
    
    $( "#diable" ).hover(
        function() {
      
            $( "#diable-hover" ).css('display', 'block');
        }, function() {
      
            $( "#diable-hover" ).css('display', 'none');
    }
    );
    
      $( "#diable-hover" ).hover(
        function() {
      
            $( "#diable-hover" ).css('display', 'block');
             $( "#diable" ).css('display', 'none');
            
        }, function() {
      
            $( "#diable-hover" ).css('display', 'none');
             $( "#diable" ).css('display', 'block');
    }
    );
    
     $( "#culotte" ).hover(
        function() {
      
            $( "#culotte-hover" ).css('display', 'block');
        }, function() {
      
            $( "#culotte-hover" ).css('display', 'none');
    }
    );
    
      $( "#culotte-hover" ).hover(
        function() {
      
            $( "#culotte-hover" ).css('display', 'block');
             $( "#culotte" ).css('display', 'none');
            
        }, function() {
      
            $( "#culotte-hover" ).css('display', 'none');
             $( "#culotte" ).css('display', 'block');
    }
    );
    
    
    $( "#plateau" ).hover(
        function() {
      
            $( "#plateau-hover" ).css('display', 'block');
        }, function() {
      
            $( "#plateau-hover" ).css('display', 'none');
    }
    );
    
      $( "#plateau-hover" ).hover(
        function() {
      
            $( "#plateau-hover" ).css('display', 'block');
             $( "#plateau" ).css('display', 'none');
            
        }, function() {
      
            $( "#plateau-hover" ).css('display', 'none');
             $( "#plateau" ).css('display', 'block');
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
      