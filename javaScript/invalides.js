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
    
     $( "#vendeur" ).hover(
        function() {
      
            $( "#vendeur-hover" ).css('display', 'block');
        }, function() {
      
            $( "#vendeur-hover" ).css('display', 'none');
    }
    );
    
      $( "#vendeur-hover" ).hover(
        function() {
      
            $( "#vendeur-hover" ).css('display', 'block');
             $( "#vendeur" ).css('display', 'none');
            
        }, function() {
      
            $( "#vendeur-hover" ).css('display', 'none');
             $( "#vendeur" ).css('display', 'block');
    }
    );
    
    
    $( "#canne" ).hover(
        function() {
      
            $( "#canne-hover" ).css('display', 'block');
        }, function() {
      
            $( "#canne-hover" ).css('display', 'none');
    }
    );
    
      $( "#canne-hover" ).hover(
        function() {
      
            $( "#canne-hover" ).css('display', 'block');
             $( "#canne" ).css('display', 'none');
            
        }, function() {
      
            $( "#canne-hover" ).css('display', 'none');
             $( "#canne" ).css('display', 'block');
    }
    );
     /*-----------------------------------------------------------------------------*/
    
     $( "#berceau-hover" ).click(
        function() {
      
            $( "#video_berceau" ).css('display', 'block');
            
            $( "#video_raisin" ).css('display', 'none');
            $( "#video_pont" ).css('display', 'none');
            $( "#video_vendeur" ).css('display', 'none');
            $( "#video_canne" ).css('display', 'none');
            
            $( "#texte_berceau" ).css('display', 'block');
            
            $( "#texte_raisin" ).css('display', 'none');
            $( "#texte_pont" ).css('display', 'none');
            $( "#texte_vendeur" ).css('display', 'none');
            $( "#texte_canne" ).css('display', 'none');
            
            var video = $("#video_berceau").attr("src");
            $("#video_berceau").attr("src","");
            $("#video_berceau").attr("src",video);
            
             var video = $("#video_pont").attr("src");
            $("#video_pont").attr("src","");
            $("#video_pont").attr("src",video);
            
             var video = $("#video_vendeur").attr("src");
            $("#video_vendeur").attr("src","");
            $("#video_vendeur").attr("src",video);
            
             var video = $("#video_raisin").attr("src");
            $("#video_raisin").attr("src","");
            $("#video_raisin").attr("src",video);
            
             var video = $("#video_canne").attr("src");
            $("#video_canne").attr("src","");
            $("#video_canne").attr("src",video);
            
             
        });
    
     /*-----------------------------------------------------------------------------*/
    
     $( "#raisin-hover" ).click(
        function() {
            $( "#video_raisin" ).css('display', 'block');
            
            $( "#video_berceau" ).css('display', 'none');
            $( "#video_pont" ).css('display', 'none');
            $( "#video_vendeur" ).css('display', 'none');
            $( "#video_canne" ).css('display', 'none');
            
            $( "#texte_raisin" ).css('display', 'block');
            
            $( "#texte_berceau" ).css('display', 'none');
            $( "#texte_pont" ).css('display', 'none');
            $( "#texte_vendeur" ).css('display', 'none');
            $( "#texte_canne" ).css('display', 'none');
             
       
             var video = $("#video_berceau").attr("src");
            $("#video_berceau").attr("src","");
            $("#video_berceau").attr("src",video);
            
             var video = $("#video_pont").attr("src");
            $("#video_pont").attr("src","");
            $("#video_pont").attr("src",video);
            
             var video = $("#video_vendeur").attr("src");
            $("#video_vendeur").attr("src","");
            $("#video_vendeur").attr("src",video);
            
             var video = $("#video_raisin").attr("src");
            $("#video_raisin").attr("src","");
            $("#video_raisin").attr("src",video);
            
             var video = $("#video_canne").attr("src");
            $("#video_canne").attr("src","");
            $("#video_canne").attr("src",video);
            
            
        });
    
    /*-----------------------------------------------------------------------------*/
    
     $( "#pont-hover" ).click(
        function() {
      
            $( "#video_pont" ).css('display', 'block');
            
            $( "#video_berceau" ).css('display', 'none');
            $( "#video_raisin" ).css('display', 'none');
            $( "#video_vendeur" ).css('display', 'none');
            $( "#video_canne" ).css('display', 'none');
            
             $( "#texte_pont" ).css('display', 'block');
            
            $( "#texte_berceau" ).css('display', 'none');
            $( "#texte_raisin" ).css('display', 'none');
            $( "#texte_vendeur" ).css('display', 'none');
            $( "#texte_canne" ).css('display', 'none');
             
            var video = $("#video_berceau").attr("src");
            $("#video_berceau").attr("src","");
            $("#video_berceau").attr("src",video);
            
             var video = $("#video_pont").attr("src");
            $("#video_pont").attr("src","");
            $("#video_pont").attr("src",video);
            
             var video = $("#video_vendeur").attr("src");
            $("#video_vendeur").attr("src","");
            $("#video_vendeur").attr("src",video);
            
             var video = $("#video_raisin").attr("src");
            $("#video_raisin").attr("src","");
            $("#video_raisin").attr("src",video);
            
             var video = $("#video_canne").attr("src");
            $("#video_canne").attr("src","");
            $("#video_canne").attr("src",video);
            
            
            
        });
    
    /*-----------------------------------------------------------------------------*/
    
     $( "#vendeur-hover" ).click(
        function() {
      
          $( "#video_vendeur" ).css('display', 'block');
            
            $( "#video_berceau" ).css('display', 'none');
            $( "#video_raisin" ).css('display', 'none');
            $( "#video_pont" ).css('display', 'none');
            $( "#video_canne" ).css('display', 'none');
            
            $( "#texte_vendeur" ).css('display', 'block');
            
            $( "#texte_berceau" ).css('display', 'none');
            $( "#texte_raisin" ).css('display', 'none');
            $( "#texte_pont" ).css('display', 'none');
            $( "#texte_canne" ).css('display', 'none');
            
             var video = $("#video_berceau").attr("src");
            $("#video_berceau").attr("src","");
            $("#video_berceau").attr("src",video);
            
             var video = $("#video_pont").attr("src");
            $("#video_pont").attr("src","");
            $("#video_pont").attr("src",video);
            
             var video = $("#video_vendeur").attr("src");
            $("#video_vendeur").attr("src","");
            $("#video_vendeur").attr("src",video);
            
             var video = $("#video_raisin").attr("src");
            $("#video_raisin").attr("src","");
            $("#video_raisin").attr("src",video);
            
             var video = $("#video_canne").attr("src");
            $("#video_canne").attr("src","");
            $("#video_canne").attr("src",video);
            
            
             
        });
    /*-----------------------------------------------------------------------------*/
    
     $( "#canne-hover" ).click(
        function() {
      
            $( "#video_canne" ).css('display', 'block');
            
            $( "#video_berceau" ).css('display', 'none');
            $( "#video_raisin" ).css('display', 'none');
            $( "#video_pont" ).css('display', 'none');
            $( "#video_vendeur" ).css('display', 'none');
            
            $( "#texte_canne" ).css('display', 'block');
            
            $( "#texte_berceau" ).css('display', 'none');
            $( "#texte_raisin" ).css('display', 'none');
            $( "#texte_pont" ).css('display', 'none');
            $( "#texte_vendeur" ).css('display', 'none');
            
             var video = $("#video_berceau").attr("src");
            $("#video_berceau").attr("src","");
            $("#video_berceau").attr("src",video);
            
             var video = $("#video_pont").attr("src");
            $("#video_pont").attr("src","");
            $("#video_pont").attr("src",video);
            
             var video = $("#video_vendeur").attr("src");
            $("#video_vendeur").attr("src","");
            $("#video_vendeur").attr("src",video);
            
             var video = $("#video_raisin").attr("src");
            $("#video_raisin").attr("src","");
            $("#video_raisin").attr("src",video);
            
             var video = $("#video_canne").attr("src");
            $("#video_canne").attr("src","");
            $("#video_canne").attr("src",video);
            
            
        });
    
});
      