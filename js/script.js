

document.getElementById("contact").innerHTML = `${'<i class="fa fa-instagram" aria-hidden="true"></i> <span>info@reen.com </span>  <span>7887930245</span>'} `;
document.getElementById("navbar").innerHTML = `${'<li id="logo"><img src="images/logo.png"></li><li>Home</li><li>Portfolio</li><li>Blog</li><li>Pages</li><li>Features</li><li>Mega Menu</li><li>Contact</li>'} `;




var style = document.createElement('style');
style.innerHTML = `
#wapper{
    margin: 0 auto;
    max-width:1920px;
}
#header{
    margin: 0 auto;
    max-width:1170px;
}
#contact{
    padding:3px
}
#social {
    display: flex;
    list-style: none;
    margin:0;
    padding:0;

}
#head{
    display:flex;
    justify-content: space-between;
    color: red;
    background-color: #f5f7f9;
 }
 #social li{
    margin: 10px;
 }
 #navbar{
    margin:0px;
    padding: 0px;
    display:flex;
    align-items: center;
    list-style: none;
    font-size: 15px;
    text-transform: uppercase;
    color: #506a85;
    font-weight: 700;
    font-family: "Source Sans Pro";
   
 }

 #navbar li{
    margin-right:45px;
    padding: 35px 0px;
 }


`;
document.head.appendChild(style);