//Nav-container-1
let nav_container_1 = document.getElementById('nav-container-1');
nav_container_1.style = `max-width:1200px;margin:0 auto;display:flex;justify-content:space-between;align-items:center`;

let info_container = document.getElementById('info-container');
info_container.setAttribute('style','display:flex;align-items:center;font-size:13px;font-family:sans-serif;')

let email_container = document.getElementById('email-container');
email_container.innerHTML = `<i class="fa fa-envelope-o" aria-hidden="true"></i>info@reen.com`;
email_container.style = `color:#506a85;padding-right:60px;`;
let email_icon = email_container.querySelector('i');
email_icon.style = `padding-right:7px; font-size:15px;`

let contact_container = document.getElementById('contact-container');
contact_container.innerHTML = `<i class="fa fa-mobile" aria-hidden="true"></i>+00 (123) 456 78 90`;
contact_container.style = `color:#506a85`;
let contact_icon = contact_container.querySelector('i');
contact_icon.style = `padding-right:7px; font-size:20px;`

let social_container = document.getElementById('social-container');
social_container.innerHTML =`<i class="fa fa-facebook" aria-hidden="true"></i>
                        <i class="fa fa-google-plus" aria-hidden="true"></i>
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                        <i class="fa fa-pinterest-p" aria-hidden="true"></i>
                        <i class="fa fa-behance" aria-hidden="true"></i>
                        <i class="fa fa-snapchat-ghost" aria-hidden="true"></i>`;
social_container.style = `color:#506a85;`
let icons = social_container.querySelectorAll('i');
icons.forEach((icon)=>{
    icon.classList.add('my-social-icons')
})

//Nav-container-2
let nav_container_2 = document.getElementById('nav-container-2');
nav_container_2.style = `max-width:1200px;height:150px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;font-family:sans-serif;`

let img_1 = document.getElementById('image-1');
img_1.src = "images/Home-Agency/Reen.png";

let nav_list_items = document.getElementById('nav-list-items');
nav_list_items.style = `padding:0px;`
let data = ['HOME','PORTFOLIO','BLOG','PAGES','FEATURES','MEGA MENU','CONTACT'];
data.forEach((items)=>{
    let li = document.createElement('li');
    li.innerText = items;
    li.style = `display:inline-block;padding:0px 15px;font-size:15px;color: #506a85;font-weight:700;`
    nav_list_items.appendChild(li);
})

let search_icon_container = document.getElementById('search-icon-container')
search_icon_container.innerHTML = `<i class="fa fa-search" aria-hidden="true"></i>`;
let search_icon = search_icon_container.querySelector('i');
search_icon.setAttribute('style','color:#506a85;font-size:13px;')

//Main-Design-Container
let design_container = document.getElementById('design-container');
design_container.style = `max-width:1200px;margin:0 auto;text-align:center;transform:translateY(100%)`

let design_text_container = document.getElementById('design-text-container');

let design_heading = document.getElementById('design-heading');
design_heading.innerHTML = `MADE FOR DESIGNERS`;
design_heading.style = `margin:0px;font-size: 78px;letter-spacing: 5px;line-height: 88px;color:#fff;font-weight:700;font-family:sans-serif`

let design_para = document.getElementById('design-para');
design_para.innerHTML = `Create your online portfolio in minutes with the professionally and lovingly designed REEN website template.
                         Customize your site with versatile and easy to use features.`
design_para.setAttribute('style','max-width:960px;margin:0 auto;font-size:24px;color:#a3b1bf;font-family:sans-serif;')

let design_button_container = document.getElementById('design-button-container');
design_button_container.style = `line-height:10;`

let design_button = document.getElementById('design-button');
design_button.innerHTML = `GET STARTED NOW`;
design_button.classList.add('design-button-class')
let design_curentCase = 'lower';

function change(){
    if(design_curentCase === 'lower'){
        colors = ['palegreen','lightskyblue','plum','lightsalmon','deeppink','darkkhaki','coral','tan','bisque','darkturquoise','dogerblue']
        design_heading.style.color = colors[Math.floor(Math.random()*11)];
        design_para.style.color = colors[Math.floor(Math.random()*10)];
        design_button.style.color = design_heading.style.color;
        design_button.style.borderColor = design_para.style.color;
    }
}
//Clean
let clean_container = document.getElementById('clean-container');
clean_container.setAttribute('style','max-width:1200px;height:675px;margin:0 auto;display:flex;flex-direction:column;justify-content:space-evenly;position:relative;');

let clean_text_container = document.getElementById('clean-text-container');
clean_text_container.setAttribute('style','width:830px;margin:0 auto;text-align:center;')

let clean_button_container = document.getElementById('clean-button-container');
clean_button_container.style = `position:absolute;right:0px;top:17px;`
clean_button_container.addEventListener('click',function(){
    let main_clean_container = document.querySelector('.main-clean-container');

    if(clean_button_container.innerHTML === 'Dark'){
        clean_button_container.innerHTML = 'Light';
        main_clean_container.classList.add('main-clean-container-1')
        clean_heading.style.color = 'green'
        clean_para_1.style.color = '#00bb9b'
        clean_para_2.style.color = '#00bb9b'
        pcq_heading.forEach((item)=>{
            item.setAttribute('style','margin-top:0px;font-size:26px;color:green;font-family:sans-serif;')
        })
        pcq_para.forEach((item)=>{
            item.setAttribute('style','font-size:16px;font-family:sans-serif;color:#00bb9b;line-height:1.4;')
        })
    }else{
        clean_button_container.innerHTML = 'Dark';
        main_clean_container.classList.remove('main-clean-container-1')
        clean_heading.style.color = '#506a85'
        clean_para_1.style.color = '#73879c'
        clean_para_2.style.color = '#73879c'
        pcq_heading.forEach((item)=>{
            item.setAttribute('style','margin-top:0px;font-size:26px;color:#506a85;font-family:sans-serif;')
        })
        pcq_para.forEach((item)=>{
            item.setAttribute('style','font-size:16px;font-family:sans-serif;color:#73879c;line-height:1.4;')
        })
    }
});

let clean_heading = document.getElementById('clean-heading');
clean_heading.innerHTML = `Beautiful.Clean.Responsive`
clean_heading.style = `font-size:44px;color:#506a85;font-weight:700;font-family:sans-serif;margin-top:0px;`

let clean_para_1 = document.getElementById('clean-para-1');
clean_para_1.innerHTML = `REEN is a high-quality solution for those who want a beautiful website in no time.`
clean_para_1.style = `color:#73879c;font-family:sans-serif;font-size:22px;margin:0;line-height:1.5;`

let clean_para_2 = document.getElementById('clean-para-2');
clean_para_2.innerHTML = `It's fully responsive and will adapt itself to any mobile device. iPad, iPhone, Android, it doesn't matter. Your content will always looks its absolute best.`
clean_para_2.style = `color:#73879c;font-family:sans-serif;font-size:22px;margin:0;line-height:1.5;`

let main_clean_pcq_container = document.getElementById('main-clean-pcq-container');
main_clean_pcq_container.setAttribute('style','max-width:1200px;margin:0 auto;display:flex;justify-content: space-between;');

let clean_pcq_container = document.querySelectorAll('.clean-pcq-container');
clean_pcq_container.forEach((item)=>{
    item.style = `display:flex;`
})

let clean_pcq_image_container = document.querySelectorAll('.clean-pcq-image-container');
clean_pcq_image_container.forEach((item)=>{
    item.setAttribute('style','width:110px;text-align:center;')
})

let clean_pcq_text_container = document.querySelectorAll('.clean-pcq-text-container');
clean_pcq_text_container.forEach((item)=>{
    item.setAttribute('style','width:285px;height:180px;text-align:left')
})

let pcq_heading = document.querySelectorAll('.pcq-heading');
pcq_heading.forEach((item)=>{
    item.setAttribute('style','margin-top:0px;font-size:26px;color:#506a85;font-family:sans-serif;')
})

let pcq_para = document.querySelectorAll('.pcq-para');
pcq_para.forEach((item)=>{
    item.setAttribute('style','font-size:16px;font-family:sans-serif;color:#73879c;line-height:1.4;')
})
// Color
let color_container = document.getElementById('color-container');
color_container.style = `max-width:1200px;height:1270px;margin:0 auto;display:flex;flex-direction:column;justify-content:center;`

let color_text_container = document.getElementById('color-text-container');
color_text_container.style = `text-align:center;`

let color_heading_container = document.getElementById('color-heading-container');
color_heading_container.style = `font-size:44px;color:#506a85;font-family:sans-serif;font-weight:700;`

let color_para_container = document.getElementById('color-para-container');
color_para_container.style = `font-size:22px;color:#73879c;font-family:sans-serif;font-weight:700;margin-bottom:80px`

let main_color_box_container = document.getElementById('main-color-box-container');
main_color_box_container.style = `display:flex;justify-content:space-between;`

let big_box_text_container = document.querySelectorAll('.big-box-text-container');
big_box_text_container.forEach((item)=>{
    item.style = `background-color:#fff;box-shadow: inset 0px -1px 0.5px #e6e9ed;width: 570px;height:122px;border-radius:3px;text-align:center;`
})

let big_box_heading = document.querySelectorAll('.big-box-heading');
big_box_heading.forEach((item)=>{
    item.setAttribute('style','font-size:20px;font-family:sans-serif;font-weight:700;')
});

let big_box_para = document.querySelectorAll('.big-box-para');
big_box_para.forEach((item)=>{
    item.setAttribute('style','font-size:14px;color:#73879c;font-family:sans-serif;')
});

let color_big_box_1 = document.getElementById('color-big-box-1');
color_big_box_1.style = `display:flex;flex-direction:column;align-items:center;`

let color_big_box_2 = document.getElementById('color-big-box-2');
color_big_box_2.style = `display:flex;flex-direction:column;align-items:center;`

let color_small_box_1 = document.getElementById('color-small-box-1');
color_small_box_1.style = `height:265px;display:flex;justify-content:space-between;align-items:flex-end`

let color_small_box_2 = document.getElementById('color-small-box-2');
color_small_box_2.style = `height:265px;display:flex;justify-content:space-between;align-items:flex-end;`

let big_box = document.querySelectorAll('.big-box');
let small_box = document.querySelectorAll('.small-box');
big_box.forEach((items)=>{
    items.setAttribute('style','background-color:#00bb9b;width:570px;height:390px;')
});
small_box.forEach((items)=>{
    items.setAttribute('style','background-color:#00bb9b;width:270px;height:185px;')
});

let color_dots_container = document.getElementById('color-dots-container');
color_dots_container.style = `display:flex;justify-content:center;margin-top:45px;`

let allDots = document.querySelectorAll('.dot');
allDots.forEach((items)=>{
    items.addEventListener('click',function(){
        allDots.forEach((dot) => dot.style.backgroundColor = '');
        big_box.forEach((box) =>{
            let randomColor = getRandomColor()
            box.style.backgroundColor = randomColor;
        })
        small_box.forEach((box) =>{
            let randomColor = getRandomColor()
            box.style.backgroundColor = randomColor;
        })
        let randomColor = getRandomColor();
        items.style.backgroundColor = randomColor;
    })
})

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Work
let work_container = document.getElementById('work-container');
work_container.style = `max-width:1200px;height:930px;color:#fff;margin:0 auto;text-align:center;transform: translateY(80px);`

let work_heading_container = document.getElementById('work-heading-container');
work_heading_container.style = `font-size:44px;color:#506a85;font-weight:700;font-family:sans-serif;`

let work_para_container_1 = document.getElementById('work-para-container-1');
work_para_container_1.style = `color:#73879c;font-family:sans-serif;font-size:22px;margin-bottom:0px;line-height:2;`

let work_para_container_2 = document.getElementById('work-para-container-2');
work_para_container_2.style = `color:#73879c;font-family:sans-serif;font-size:22px;margin-top:0px;`

let work_button = document.querySelector('.work-button');
let text = 'upper';
work_button.addEventListener('click',function(){
    let randomColor = getRandomColor();
    if(text === 'upper'){
        work_heading_container.innerHTML = work_heading_container.innerHTML.toUpperCase();
        work_para_container_1.innerHTML = work_para_container_1.innerHTML.toUpperCase();
        work_para_container_2.innerHTML = work_para_container_2.innerHTML.toUpperCase();
        text = 'lower';
    }else{
        work_heading_container.innerHTML = work_heading_container.innerHTML.toLowerCase();
        work_para_container_1.innerHTML = work_para_container_1.innerHTML.toLowerCase();
        work_para_container_2.innerHTML = work_para_container_2.innerHTML.toLowerCase();
        text = 'upper';
    }
    work_button.style.backgroundColor = randomColor;
})
