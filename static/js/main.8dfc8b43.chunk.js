(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],{14:function(e,a,t){},26:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(7),s=t.n(r),i=(t(14),t(1)),o=t(2),c=t(4),m=t(3),u=t(5),p=function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},"Hey there, I'm ",e.name),l.a.createElement("h3",null,"I am a ",e.role,".",e.roleDescription),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("i",{className:e.className})))}))))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),h=function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:"images/profilepic.jpg",alt:""})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,e.aboutme,e.buzzwords&&e.buzzwords.map((function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},e.b,l.a.createElement("br",null)))}))))))}}]),a}(n.Component),d=function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map((function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.UniversityName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing))))})))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map((function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.CompanyName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfLeaving," ",e.YearOfLeaving)),l.a.createElement("p",null,e.Achievements)))})))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},e.skills&&e.skills.map((function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("p",{className:"info"},e.skillname,l.a.createElement("br",null))))})))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"row nine columns main-col"},l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("p",{className:"info"},"Would you prefer a good old fashioned resume ?  Click ",l.a.createElement("a",{href:"../Umesh_M_Resume.pdf",download:!0},"here")," to get it."))))))}}]),a}(n.Component),E=t(8),v=function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Check Out Some of My Work"),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e.portfolio&&e.portfolio.map((function(e){return l.a.createElement("div",{className:"columns portfolio-item"},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("img",Object(E.a)({src:"".concat(e.imgurl),className:"img-fluid",alt:"description of"},"className","item-img")),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,e.name),l.a.createElement("p",null,e.description)))),l.a.createElement("a",{href:e.srcurl,target:"_blank"},l.a.createElement("p",null,"View Source")))}))))))}}]),a}(n.Component),f=(n.Component,function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"ten columns"},l.a.createElement("p",{className:"lead"},"Feel free to contact me for any work or suggestions"))),l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"ten columns"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"lead"},l.a.createElement("span",null,e.name),l.a.createElement("br",null),l.a.createElement("span",null,e.address),l.a.createElement("br",null),l.a.createElement("span",null,e.website),l.a.createElement("br",null),l.a.createElement("span",null,e.mail)))))}}]),a}(n.Component)),g=function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map((function(e){return l.a.createElement("li",null,l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}))),l.a.createElement("ul",{className:"copyright"},l.a.createElement("li",null,"Thi page was made using ReactJS"))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),b={imagebaseurl:"https://umesh-lewa.github.io/",name:"Umesh",role:"Software Developer",linkedinId:"https://in.linkedin.com/in/umesh-moorthy-a8803713a",skypeid:"https://join.skype.com/invite/hsz5YB8IIcyh",roleDescription:" I like dabbling in various parts of fullstack development and like to learn new technologies, develop games or simply play them in my free time.",socialLinks:[{name:"linkedin",url:"https://in.linkedin.com/in/umesh-moorthy-a8803713a",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/umesh-lewa",className:"fa fa-github"},{name:"skype",url:"https://join.skype.com/invite/hsz5YB8IIcyh",className:"fa fa-skype"}],aboutme:"I've finished my Bachelors in Engineering and have been working in industry for 1.5+ years.",buzzwords:[{b:"A few Buzzwords:"},{b:"Test Driven Development"},{b:"Multi Cloud Environment"},{b:"Continous Integration"}],address:"Chennai, India",website:"+91 95001 30553",mail:"umesh.lewa@yahoo.com",education:[{UniversityName:"Anna University - MIT",specialization:"Electronics Engineering",MonthOfPassing:"Aug 2014 - May",YearOfPassing:"2018",Achievements:"Some Achievements"}],work:[{CompanyName:"Striim",specialization:"Software Development Intern",MonthOfLeaving:"Aug 2018 - ",YearOfLeaving:"Mar 2019",Achievements:"Developed data integration features to read/write data to various cloud services and databases and created CI/CD pipelines to enable DevOps"},{CompanyName:"Servion Global",specialization:"Software Engineer",MonthOfLeaving:"May 2019 - ",YearOfLeaving:"Present",Achievements:"Developed ChatBots, Responsive websites and IVR Applications to provide Omni-Chanel customer experience"}],skillsDescription:"Your skills here",skills:[{skillname:"WebDev  \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0-\xa0\xa0\xa0 SpringBoot"},{skillname:"Environments \xa0\xa0\xa0\xa0\xa0\xa0-\xa0\xa0\xa0 Windows / Linux(Ubuntu / CentOS) / Mac"},{skillname:"Deployment \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0-\xa0\xa0\xa0 Netlify / Heroku / Tomcat"},{skillname:"Cloud Services \xa0\xa0\xa0\xa0\xa0\xa0-\xa0\xa0\xa0 Google Cloud Storage / Google Cloud Spanner        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0-\xa0\xa0\xa0  Azure EventHub / Azure CosmosDB / AWS S3"},{skillname:"CRM \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0-\xa0\xa0\xa0 DialogFlow / Twilio "},{skillname:"Containerization \xa0\xa0\xa0-\xa0\xa0\xa0 Docker / VirtualBox"},{skillname:"DevOps \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0-\xa0\xa0\xa0 Jenkins / EC2 / BASH / CronJobs"},{skillname:"Backend \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0-\xa0\xa0\xa0 Java / SQL"},{skillname:"GameDev \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0-\xa0\xa0\xa0 Python / Lua / Godot"},{skillname:"Testing \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0-\xa0\xa0\xa0 ChorusBDD / TestNG"},{skillname:"Version Control \xa0\xa0\xa0\xa0\xa0\xa0-\xa0\xa0\xa0 Git / SVN"}],portfolio:[{name:"Cricket Game",description:"An Implementation of the Game Cricket using HTML,CSS,Bootstrap and TypeScript",imgurl:"../images/portfolio/cricket.png",srcurl:"https://github.com/umesh-lewa/Cricket-TS"},{name:"NYTimes",description:"News Portal using HTML,CSS,Bootstrap and Javascript, getting data from New York Times API",imgurl:"../images/portfolio/kisspng-computer-icons-newspaper-circle-mockup-free-5b56cf94432975.6273383415324158922751.png",srcurl:"https://github.com/umesh-lewa/newyork-times-api"},{name:"URL Shortener",description:"A URL shortening application similar to bit.ly built with HTML,CSS,Javascript in the frontend and Node, Express and MongoDB on the backend",imgurl:"../images/portfolio/icons8-shorten-urls-480.png",srcurl:"https://github.com/umesh-lewa/urlshortener-backend"},{name:"EmailServiceApp",description:"Send Emails Automatically",imgurl:"../images/portfolio/coffee.jpg",srcurl:"https://github.com/umesh-lewa/EmailServiceApp"},{name:"Hangman-Python",description:"Hangman Game using Python to be used in CLI",imgurl:"../images/portfolio/hang.png",srcurl:"https://github.com/umesh-lewa/Hangman-Python"},{name:"ColorGame-RGB",description:"RGB color guessing game implemented in Javascript",imgurl:"../images/portfolio/rgb.png",srcurl:"https://github.com/umesh-lewa/ColorGame-RGB"},{name:"2D CrossOver - PyGame",description:"2D ShootEmUp",imgurl:"../images/portfolio/console.jpg",srcurl:"https://github.com/umesh-lewa/pygame-2D-ShootEmUpCrossOver"},{name:"PizzaBot - DialogFlow",description:"Virtual Assistant",imgurl:"../images/portfolio/origami.jpg",srcurl:"https://github.com/umesh-lewa/dialogflow-PizzaBot"}],"space-invaders":[{description:"This is a sample testimonial",name:"Some technical guy"},{description:"This is a sample testimonial",name:"Some technical guy"}],testimonials:[{description:"This is a sample testimonial",name:"Some technical guy"},{description:"This is a sample testimonial",name:"Some technical guy"}]},N=(t(15),function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=document.createElement("script");e.async=!0,e.src="space-invaders.js",this.div.appendChild(e)}},{key:"render",value:function(){var e=this;this.props.resumeData;return l.a.createElement("div",{className:"row section-head",ref:function(a){return e.div=a}})}}]),a}(n.Component)),w=function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p,{resumeData:b}),l.a.createElement(h,{resumeData:b}),l.a.createElement(d,{resumeData:b}),l.a.createElement(v,{resumeData:b}),l.a.createElement(N,{resumeData:b}),l.a.createElement(f,{resumeData:b}),l.a.createElement(g,{resumeData:b}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,a,t){e.exports=t(26)}},[[9,1,2]]]);
//# sourceMappingURL=main.8dfc8b43.chunk.js.map