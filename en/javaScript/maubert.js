$(document).ready(function()
{
 
    $( "#chapelet" ).hover(
        function() {
      
            $( "#chapelet-hover" ).css('display', 'block');
        }, function() {
      
            $( "#chapelet-hover" ).css('display', 'none');
    }
    );
    
      $( "#chapelet-hover" ).hover(
        function() {
      
            $( "#chapelet-hover" ).css('display', 'block');
             $( "#chapelet" ).css('display', 'none');
            
        }, function() {
      
            $( "#chapelet-hover" ).css('display', 'none');
             $( "#chapelet" ).css('display', 'block');
    }
    );
    
    
    $( "#lettre" ).hover(
        function() {
      
            $( "#lettre-hover" ).css('display', 'block');
        }, function() {
      
            $( "#lettre-hover" ).css('display', 'none');
    }
    );
    
      $( "#lettre-hover" ).hover(
        function() {
      
            $( "#lettre-hover" ).css('display', 'block');
             $( "#lettre" ).css('display', 'none');
            
        }, function() {
      
            $( "#lettre-hover" ).css('display', 'none');
             $( "#lettre" ).css('display', 'block');
    }
    );
    
    $( "#marrais" ).hover(
        function() {
      
            $( "#marrais-hover" ).css('display', 'block');
        }, function() {
      
            $( "#marrais-hover" ).css('display', 'none');
    }
    );
    
      $( "#marrais-hover" ).hover(
        function() {
      
            $( "#marrais-hover" ).css('display', 'block');
             $( "#marrais" ).css('display', 'none');
            
        }, function() {
      
            $( "#marrais-hover" ).css('display', 'none');
             $( "#marrais" ).css('display', 'block');
    }
    );
    
     $( "#manif" ).hover(
        function() {
      
            $( "#manif-hover" ).css('display', 'block');
        }, function() {
      
            $( "#manif-hover" ).css('display', 'none');
    }
    );
    
      $( "#manif-hover" ).hover(
        function() {
      
            $( "#manif-hover" ).css('display', 'block');
             $( "#manif" ).css('display', 'none');
            
        }, function() {
      
            $( "#manif-hover" ).css('display', 'none');
             $( "#manif" ).css('display', 'block');
    }
    );
    
    
    $( "#livres" ).hover(
        function() {
      
            $( "#livres-hover" ).css('display', 'block');
        }, function() {
      
            $( "#livres-hover" ).css('display', 'none');
    }
    );
    
      $( "#livres-hover" ).hover(
        function() {
      
            $( "#livres-hover" ).css('display', 'block');
             $( "#livres" ).css('display', 'none');
            
        }, function() {
      
            $( "#livres-hover" ).css('display', 'none');
             $( "#livres" ).css('display', 'block');
    }
    );
     /*-----------------------------------------------------------------------------*/
    
     $( "#lettre-hover" ).click(
        function() {
      
            $( "#video_lettre" ).css('display', 'block');
            
            $( "#video_livre" ).css('display', 'none');
            $( "#video_manif" ).css('display', 'none');
            $( "#video_marrais" ).css('display', 'none');
            $( "#video_chapelet" ).css('display', 'none');
            
            $( "#texte_lettre" ).css('display', 'block');
            
            $( "#texte_livre" ).css('display', 'none');
            $( "#texte_manif" ).css('display', 'none');
            $( "#texte_marrais" ).css('display', 'none');
            $( "#texte_chapelet" ).css('display', 'none');
            
            var video = $("#video_livre").attr("src");
            $("#video_livre").attr("src","");
            $("#video_livre").attr("src",video);
            
             var video = $("#video_chapelet").attr("src");
            $("#video_chapelet").attr("src","");
            $("#video_chapelet").attr("src",video);
            
             var video = $("#video_marrais").attr("src");
            $("#video_marrais").attr("src","");
            $("#video_marrais").attr("src",video);
            
             var video = $("#video_manif").attr("src");
            $("#video_manif").attr("src","");
            $("#video_manif").attr("src",video);
            
             var video = $("#video_lettre").attr("src");
            $("#video_lettre").attr("src","");
            $("#video_lettre").attr("src",video);
             
        });
    
     /*-----------------------------------------------------------------------------*/
    
     $( "#livres-hover" ).click(
        function() {
            $( "#video_livre" ).css('display', 'block');
            
            $( "#video_lettre" ).css('display', 'none');
            $( "#video_manif" ).css('display', 'none');
            $( "#video_marrais" ).css('display', 'none');
            $( "#video_chapelet" ).css('display', 'none');
            
            $( "#texte_livre" ).css('display', 'block');
            
            $( "#texte_lettre" ).css('display', 'none');
            $( "#texte_manif" ).css('display', 'none');
            $( "#texte_marrais" ).css('display', 'none');
            $( "#texte_chapelet" ).css('display', 'none');
             
       
             var video = $("#video_livre").attr("src");
            $("#video_livre").attr("src","");
            $("#video_livre").attr("src",video);
            
             var video = $("#video_chapelet").attr("src");
            $("#video_chapelet").attr("src","");
            $("#video_chapelet").attr("src",video);
            
             var video = $("#video_marrais").attr("src");
            $("#video_marrais").attr("src","");
            $("#video_marrais").attr("src",video);
            
             var video = $("#video_manif").attr("src");
            $("#video_manif").attr("src","");
            $("#video_manif").attr("src",video);
            
             var video = $("#video_lettre").attr("src");
            $("#video_lettre").attr("src","");
            $("#video_lettre").attr("src",video);
            
            
        });
    
    /*-----------------------------------------------------------------------------*/
    
     $( "#manif-hover" ).click(
        function() {
      
            $( "#video_manif" ).css('display', 'block');
            
            $( "#video_lettre" ).css('display', 'none');
            $( "#video_livre" ).css('display', 'none');
            $( "#video_marrais" ).css('display', 'none');
            $( "#video_chapelet" ).css('display', 'none');
            
             $( "#texte_manif" ).css('display', 'block');
            
            $( "#texte_lettre" ).css('display', 'none');
            $( "#texte_livre" ).css('display', 'none');
            $( "#texte_marrais" ).css('display', 'none');
            $( "#texte_chapelet" ).css('display', 'none');
             
            var video = $("#video_livre").attr("src");
            $("#video_livre").attr("src","");
            $("#video_livre").attr("src",video);
            
             var video = $("#video_chapelet").attr("src");
            $("#video_chapelet").attr("src","");
            $("#video_chapelet").attr("src",video);
            
             var video = $("#video_marrais").attr("src");
            $("#video_marrais").attr("src","");
            $("#video_marrais").attr("src",video);
            
             var video = $("#video_manif").attr("src");
            $("#video_manif").attr("src","");
            $("#video_manif").attr("src",video);
            
             var video = $("#video_lettre").attr("src");
            $("#video_lettre").attr("src","");
            $("#video_lettre").attr("src",video);
            
        });
    
    /*-----------------------------------------------------------------------------*/
    
     $( "#marrais-hover" ).click(
        function() {
      
          $( "#video_marrais" ).css('display', 'block');
            
            $( "#video_lettre" ).css('display', 'none');
            $( "#video_livre" ).css('display', 'none');
            $( "#video_manif" ).css('display', 'none');
            $( "#video_chapelet" ).css('display', 'none');
            
            $( "#texte_marrais" ).css('display', 'block');
            
            $( "#texte_lettre" ).css('display', 'none');
            $( "#texte_livre" ).css('display', 'none');
            $( "#texte_manif" ).css('display', 'none');
            $( "#texte_chapelet" ).css('display', 'none');
            
             var video = $("#video_livre").attr("src");
            $("#video_livre").attr("src","");
            $("#video_livre").attr("src",video);
            
             var video = $("#video_chapelet").attr("src");
            $("#video_chapelet").attr("src","");
            $("#video_chapelet").attr("src",video);
            
             var video = $("#video_marrais").attr("src");
            $("#video_marrais").attr("src","");
            $("#video_marrais").attr("src",video);
            
             var video = $("#video_manif").attr("src");
            $("#video_manif").attr("src","");
            $("#video_manif").attr("src",video);
            
             var video = $("#video_lettre").attr("src");
            $("#video_lettre").attr("src","");
            $("#video_lettre").attr("src",video);
            
             
        });
    /*-----------------------------------------------------------------------------*/
    
     $( "#chapelet-hover" ).click(
        function() {
      
            $( "#video_chapelet" ).css('display', 'block');
            
            $( "#video_lettre" ).css('display', 'none');
            $( "#video_livre" ).css('display', 'none');
            $( "#video_manif" ).css('display', 'none');
            $( "#video_marrais" ).css('display', 'none');
            
            $( "#texte_chapelet" ).css('display', 'block');
            
            $( "#texte_lettre" ).css('display', 'none');
            $( "#texte_livre" ).css('display', 'none');
            $( "#texte_manif" ).css('display', 'none');
            $( "#texte_marrais" ).css('display', 'none');
            
             var video = $("#video_livre").attr("src");
            $("#video_livre").attr("src","");
            $("#video_livre").attr("src",video);
            
             var video = $("#video_chapelet").attr("src");
            $("#video_chapelet").attr("src","");
            $("#video_chapelet").attr("src",video);
            
             var video = $("#video_marrais").attr("src");
            $("#video_marrais").attr("src","");
            $("#video_marrais").attr("src",video);
            
             var video = $("#video_manif").attr("src");
            $("#video_manif").attr("src","");
            $("#video_manif").attr("src",video);
            
             var video = $("#video_lettre").attr("src");
            $("#video_lettre").attr("src","");
            $("#video_lettre").attr("src",video);
            
            
        });
    
});
      