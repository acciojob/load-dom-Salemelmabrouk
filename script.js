//your JS code here. If required.
   document.addEventListener("DOMContentLoaded", function() {
            
            var paragraph = document.getElementById("body").createElement("p");
            
            paragraph.textContent = "DOM load success";
            
            document.body.appendChild(paragraph);
        });