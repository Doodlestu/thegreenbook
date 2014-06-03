
(function ($) {
    $(document).ready(function () {

        $('div[data-role="infobox-header"]').click(function () {

            var tag = $(this).attr("data-tag");
            
            $("div[data-role='infobox-flyout']:not(div[data-tag='" + tag + "'])").slideUp('fast');

            $("div[data-tag='" + tag + "'][data-role='infobox-flyout']").slideToggle('fast');

            $(this).children("div.icon").children("span").toggleClass("icon-img-down");
          
        });
    });

})(jQuery);

function myFunction()
{
var x;
var r=confirm("Here is is a popup");
if (r==true)
  {
  x="You pressed OK!";
  }
else
  {
  x="You pressed Cancel!";
  }
document.getElementById("demo").innerHTML=x;
}