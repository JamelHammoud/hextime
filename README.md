# A clock that represents the time as hex color values
I saw a project a little while ago, where I discovered that the time (in format 00:00:00) works perfectly for hexadecimal codes. I decided to create a <i>very</i> small project using vanilla JS, to represent the live time as a color. 

<pre>
<code>setInterval(function() {
  today = new Date();
  hex = "#" + (today.getHours() < 10 ? '0' : '') + today.getHours() + "" 
      + (today.getMinutes() < 10 ? '0' : '') + today.getMinutes() + "" 
      + (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();
  document.querySelector("#clock").innerHTML = hex;
  document.body.style.backgroundColor = hex;
}, 1)</code>
</pre>

This small codeblock gets the current time, formats it (placing a zero before the number if it is less than ten) and then appends an <code>#</code> before it. That newly created hex code is then placed within the <code>#clock</code> element, and is set as the <code>backgroundColor</code> of the body. Changing the color of the background with the hex color gives the site an almost meditative feel. 

Feel free to play around with the code!

See it live <a href="https://jamelhammoud.com/projects/hextime/">Here</a>.
