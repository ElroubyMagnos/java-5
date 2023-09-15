var popup = document.createElement('div');
popup.className = 'popup';
document.body.appendChild(popup);

var imgopen = document.getElementsByClassName('open');

for (var i = 0; i < imgopen.length; i++)
{
    imgopen[i].addEventListener('click', function(){
        popup.style.display = 'block';
        popup.innerHTML = '';
        popup.onclick = function () {
            popup.style.display = 'none';
        };
        popup.style.textAlign = 'center';
        var theclone = this.cloneNode(true);
        theclone.style.width = '75%';
        theclone.style.margin = '50px auto';
        popup.appendChild(theclone);
       
    });
}

var AllColors = document.getElementsByClassName('color');
for (var i = 0; i < AllColors.length; i++)
{
    AllColors[i].addEventListener('click', function (e) {
        
        var attr = this.getAttribute('data-index');
        switch (attr)
        {
            case '0':
                document.documentElement.style.setProperty('--main-color', '#EBE76C');
                document.documentElement.style.setProperty('--btn-color', '#F0B86E');
                document.documentElement.style.setProperty('--hover-color', '#ED7B7B');
                document.documentElement.style.setProperty('--secondmain-color', '#836096');
                break;
            case '1':
                document.documentElement.style.setProperty('--main-color', '#0E21A0');
                document.documentElement.style.setProperty('--btn-color', '#4D2DB7');
                document.documentElement.style.setProperty('--hover-color', '#9D44C0');
                document.documentElement.style.setProperty('--secondmain-color', '#EC53B0');
                break;
            case '2':
                document.documentElement.style.setProperty('--main-color', '#F0F0F0');
                document.documentElement.style.setProperty('--btn-color', '#213555');
                document.documentElement.style.setProperty('--hover-color', '#4F709C');
                document.documentElement.style.setProperty('--secondmain-color', '#E5D283');
                break;
        }
    });
}
class Dynamics
{
    static CurrentPage = 1;

    static firstpage = document.getElementById('firstpage');
    static secondpage = document.getElementById('secondpage');
    static thirdpage = document.getElementById('thirdpage');
    static fourthpage = document.getElementById('fourthpage');
}

var imageindex = 2;

setInterval(() => {

    document.querySelector('.backgroundbanner').style.backgroundImage = `url(\'/images/bg${imageindex++}.jpg\')`;
    if (imageindex > 3)
        imageindex = 1;
}, 2000);

function LoadPage()
{
    var navbtns = document.querySelectorAll('nav ul li button');
    for (let i = 0; i < navbtns.length; i++)
    {
        navbtns[i].style.backgroundColor = Dynamics.CurrentPage - 1 === i ? '#ED7B7B' : '#F0B86E';
    }
    
    switch(Dynamics.CurrentPage)
    {
        default:
        case 1:
            Dynamics.firstpage.style.display = 'block';
            Dynamics.secondpage.style.display = 'none';
            Dynamics.thirdpage.style.display = 'none';
            Dynamics.fourthpage.style.display = 'none';
        break;
        case 2:
            Dynamics.firstpage.style.display = 'none';
            Dynamics.secondpage.style.display = 'block';
            Dynamics.thirdpage.style.display = 'none';
            Dynamics.fourthpage.style.display = 'none';
        break;
        case 3:
            Dynamics.firstpage.style.display = 'none';
            Dynamics.secondpage.style.display = 'none';
            Dynamics.thirdpage.style.display = 'block';
            Dynamics.fourthpage.style.display = 'none';
        break;
        case 4:
            Dynamics.firstpage.style.display = 'none';
            Dynamics.secondpage.style.display = 'none';
            Dynamics.thirdpage.style.display = 'none';
            Dynamics.fourthpage.style.display = 'block';
        break;
    }
}

LoadPage();


var AddedSlider = false;
var Addedbanner = false;

window.onscroll = function()
{
    updownperc = (document.documentElement.scrollTop / document.body.scrollHeight) * 100;
    
    if (updownperc > 5 && !AddedSlider)
    {
        document.getElementById('bb').innerHTML += `
        <div class="backgroundbanner">
            <div class="insidebanner">
                <h1>The only place for your life</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, unde labore. In cupiditate minima culpa. Mollitia fugit possimus sed doloribus ex cumque eos? Aperiam praesentium quo, incidunt provident repudiandae dolorum?</p>
            </div>
        </div>
            `;
        AddedSlider = true;
    }

    if (updownperc > 50 && !Addedbanner)
    {
        document.getElementById('scrolling').innerHTML += `
        <div style="transform: translateY(10%);" class="scrollpanel">
                <img src="/images/fb.png" alt="">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsam deserunt nulla ad alias nam totam labore illo animi consectetur asperiores veritatis dolor suscipit recusandae accusantium, doloremque obcaecati sit veniam?</p>
            </div>
            <div class="scrollpanel">
                <img src="https://cdn-icons-png.flaticon.com/512/3670/3670151.png" alt="">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsam deserunt nulla ad alias nam totam labore illo animi consectetur asperiores veritatis dolor suscipit recusandae accusantium, doloremque obcaecati sit veniam?</p>
            </div>
            <div style="transform: translateY(10%);" class="scrollpanel">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsam deserunt nulla ad alias nam totam labore illo animi consectetur asperiores veritatis dolor suscipit recusandae accusantium, doloremque obcaecati sit veniam?</p>
            </div>
        `;
        Addedbanner = true;
    }
};