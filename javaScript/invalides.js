$(document).ready(function()
{
 
    $( "#berceau" ).hover(
        function() {
      
            $( "#berceau-hover" ).css('display', 'block');
        }, function() {
      
            $( "#berceau-hover" ).css('display', 'none');
    }
    );
    
      $( "#berceau-hover" ).hover(
        function() {
      
            $( "#berceau-hover" ).css('display', 'block');
             $( "#berceau" ).css('display', 'none');
            
        }, function() {
      
            $( "#berceau-hover" ).css('display', 'none');
             $( "#berceau" ).css('display', 'block');
    }
    );
    
    
    $( "#raisin" ).hover(
        function() {
      
            $( "#raisin-hover" ).css('display', 'block');
        }, function() {
      
            $( "#raisin-hover" ).css('display', 'none');
    }
    );
    
      $( "#raisin-hover" ).hover(
        function() {
      
            $( "#raisin-hover" ).css('display', 'block');
             $( "#raisin" ).css('display', 'none');
            
        }, function() {
      
            $( "#raisin-hover" ).css('display', 'none');
             $( "#raisin" ).css('display', 'block');
    }
    );
    
    $( "#pont" ).hover(
        function() {
      
            $( "#pont-hover" ).css('display', 'block');
        }, function() {
      
            $( "#pont-hover" ).css('display', 'none');
    }
    );
    
      $( "#pont-hover" ).hover(
        function() {
      
            $( "#pont-hover" ).css('display', 'block');
             $( "#pont" ).css('display', 'none');
            
        }, function() {
      
            $( "#pont-hover" ).css('display', 'none');
             $( "#pont" ).css('display', 'block');
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
    
     $( "#robert-hover" ).click(
        function() {
      
            $( "#video_robert" ).css('display', 'block');
            
            $( "#video_romain" ).css('display', 'none');
            $( "#video_diable" ).css('display', 'none');
            $( "#video_plateau" ).css('display', 'none');
            $( "#video_culotte" ).css('display', 'none');
            
            $( "#texte_robert" ).css('display', 'block');
            
            $( "#texte_romain" ).css('display', 'none');
            $( "#texte_diable" ).css('display', 'none');
            $( "#texte_plateau" ).css('display', 'none');
            $( "#texte_culotte" ).css('display', 'none');
            
            var video = $("#video_robert").attr("src");
            $("#video_robert").attr("src","");
            $("#video_robert").attr("src",video);
            
             var video = $("#video_romain").attr("src");
            $("#video_romain").attr("src","");
            $("#video_romain").attr("src",video);
            
             var video = $("#video_diable").attr("src");
            $("#video_diable").attr("src","");
            $("#video_diable").attr("src",video);
            
             var video = $("#video_plateau").attr("src");
            $("#video_plateau").attr("src","");
            $("#video_plateau").attr("src",video);
            
             var video = $("#video_culotte").attr("src");
            $("#video_culotte").attr("src","");
            $("#video_culotte").attr("src",video);
            
             
        });
    
     /*-----------------------------------------------------------------------------*/
    
     $( "#romain-hover" ).click(
        function() {
            $( "#video_romain" ).css('display', 'block');
            
            $( "#video_robert" ).css('display', 'none');
            $( "#video_diable" ).css('display', 'none');
            $( "#video_plateau" ).css('display', 'none');
            $( "#video_culotte" ).css('display', 'none');
            
            $( "#texte_romain" ).css('display', 'block');
            
            $( "#texte_robert" ).css('display', 'none');
            $( "#texte_diable" ).css('display', 'none');
            $( "#texte_plateau" ).css('display', 'none');
            $( "#texte_culotte" ).css('display', 'none');
             
            
            var video = $("#video_robert").attr("src");
            $("#video_robert").attr("src","");
            $("#video_robert").attr("src",video);
            
             var video = $("#video_romain").attr("src");
            $("#video_romain").attr("src","");
            $("#video_romain").attr("src",video);
            
             var video = $("#video_diable").attr("src");
            $("#video_diable").attr("src","");
            $("#video_diable").attr("src",video);
            
             var video = $("#video_plateau").attr("src");
            $("#video_plateau").attr("src","");
            $("#video_plateau").attr("src",video);
            
             var video = $("#video_culotte").attr("src");
            $("#video_culotte").attr("src","");
            $("#video_culotte").attr("src",video);
            
        });
    
    /*-----------------------------------------------------------------------------*/
    
     $( "#diable-hover" ).click(
        function() {
      
            $( "#video_diable" ).css('display', 'block');
            
            $( "#video_robert" ).css('display', 'none');
            $( "#video_romain" ).css('display', 'none');
            $( "#video_plateau" ).css('display', 'none');
            $( "#video_culotte" ).css('display', 'none');
            
             $( "#texte_diable" ).css('display', 'block');
            
            $( "#texte_robert" ).css('display', 'none');
            $( "#texte_romain" ).css('display', 'none');
            $( "#texte_plateau" ).css('display', 'none');
            $( "#texte_culotte" ).css('display', 'none');
             
            var video = $("#video_robert").attr("src");
            $("#video_robert").attr("src","");
            $("#video_robert").attr("src",video);
            
             var video = $("#video_romain").attr("src");
            $("#video_romain").attr("src","");
            $("#video_romain").attr("src",video);
            
             var video = $("#video_diable").attr("src");
            $("#video_diable").attr("src","");
            $("#video_diable").attr("src",video);
            
             var video = $("#video_plateau").attr("src");
            $("#video_plateau").attr("src","");
            $("#video_plateau").attr("src",video);
            
             var video = $("#video_culotte").attr("src");
            $("#video_culotte").attr("src","");
            $("#video_culotte").attr("src",video);
            
            
        });
    
    /*-----------------------------------------------------------------------------*/
    
     $( "#plateau-hover" ).click(
        function() {
      
          $( "#video_plateau" ).css('display', 'block');
            
            $( "#video_robert" ).css('display', 'none');
            $( "#video_romain" ).css('display', 'none');
            $( "#video_diable" ).css('display', 'none');
            $( "#video_culotte" ).css('display', 'none');
            
            $( "#texte_plateau" ).css('display', 'block');
            
            $( "#texte_robert" ).css('display', 'none');
            $( "#texte_romain" ).css('display', 'none');
            $( "#texte_diable" ).css('display', 'none');
            $( "#texte_culotte" ).css('display', 'none');
            
            var video = $("#video_robert").attr("src");
            $("#video_robert").attr("src","");
            $("#video_robert").attr("src",video);
            
             var video = $("#video_romain").attr("src");
            $("#video_romain").attr("src","");
            $("#video_romain").attr("src",video);
            
             var video = $("#video_diable").attr("src");
            $("#video_diable").attr("src","");
            $("#video_diable").attr("src",video);
            
             var video = $("#video_plateau").attr("src");
            $("#video_plateau").attr("src","");
            $("#video_plateau").attr("src",video);
            
             var video = $("#video_culotte").attr("src");
            $("#video_culotte").attr("src","");
            $("#video_culotte").attr("src",video);
            
             
        });
    /*-----------------------------------------------------------------------------*/
    
     $( "#culotte-hover" ).click(
        function() {
      
            $( "#video_culotte" ).css('display', 'block');
            
            $( "#video_robert" ).css('display', 'none');
            $( "#video_romain" ).css('display', 'none');
            $( "#video_diable" ).css('display', 'none');
            $( "#video_plateau" ).css('display', 'none');
            
            $( "#texte_culotte" ).css('display', 'block');
            
            $( "#texte_robert" ).css('display', 'none');
            $( "#texte_romain" ).css('display', 'none');
            $( "#texte_diable" ).css('display', 'none');
            $( "#texte_plateau" ).css('display', 'none');
            
            var video = $("#video_robert").attr("src");
            $("#video_robert").attr("src","");
            $("#video_robert").attr("src",video);
            
             var video = $("#video_romain").attr("src");
            $("#video_romain").attr("src","");
            $("#video_romain").attr("src",video);
            
             var video = $("#video_diable").attr("src");
            $("#video_diable").attr("src","");
            $("#video_diable").attr("src",video);
            
             var video = $("#video_plateau").attr("src");
            $("#video_plateau").attr("src","");
            $("#video_plateau").attr("src",video);
            
             var video = $("#video_culotte").attr("src");
            $("#video_culotte").attr("src","");
            $("#video_culotte").attr("src",video);
            
            
        });
    
});
      