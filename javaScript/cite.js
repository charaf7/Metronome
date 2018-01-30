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
            
            
            
            $( "#transcriptionCiteRobert #retrCiteRobert" ).css('display', 'block');
            
            $( "#retrCiteRomain" ).css('display', 'none');
            $( "#retrCiteDiable" ).css('display', 'none');
            $( "#retrCitePlateau" ).css('display', 'none');
            $( "#retrCiteCulotte" ).css('display', 'none');
            
             
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
            
            $( "#retrCiteRobert" ).css('display', 'none');
            $( "#transcriptionCiteRomain #retrCiteRomain" ).css('display', 'block');
            $( "#retrCiteDiable" ).css('display', 'none');
            $( "#retrCitePlateau" ).css('display', 'none');
            $( "#retrCiteCulotte" ).css('display', 'none');
            
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
            
             $( "#retrCiteRobert" ).css('display', 'none');
            $( "#retrCiteRomain" ).css('display', 'none');
            $( "#transcriptionCiteDiable #retrCiteDiable" ).css('display', 'block');
            $( "#retrCitePlateau" ).css('display', 'none');
            $( "#retrCiteCulotte" ).css('display', 'none');
            
            
            
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
            
             $( "#retrCiteRobert" ).css('display', 'none');
            $( "#retrCiteRomain" ).css('display', 'none');
            $( "#retrCiteDiable" ).css('display', 'none');
            $( "#transcriptionCitePlateau #retrCitePlateau" ).css('display', 'block');
            $( "#retrCiteCulotte" ).css('display', 'none');
            
             
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
            
             $( "#retrCiteRobert" ).css('display', 'none');
            $( "#retrCiteRomain" ).css('display', 'none');
            $( "#retrCiteDiable" ).css('display', 'none');
            $( "#retrCitePlateau" ).css('display', 'none');
            $( "#transcriptionCiteCulotte #retrCiteCulotte" ).css('display', 'block');
            
            
            
        });
    
});
      