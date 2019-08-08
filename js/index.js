const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM <br> Is <br> Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let ctaImg = document.getElementById("cta-img")
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let link1 = document.querySelector("a:first-child")
link1.textContent = siteContent["nav"]["nav-item-1"]
document.querySelector("a:first-child").style.color = "red" 

let link2 = document.querySelector("a:nth-child(2)")
link2.textContent = siteContent["nav"]["nav-item-2"]
document.querySelector("a:nth-child(2)").style.color = "orange"

let link3 = document.querySelector("a:nth-child(3)")
link3.textContent = siteContent["nav"]["nav-item-3"]
document.querySelector("a:nth-child(3)").style.color = "#CCCC00"

let link4 = document.querySelector("a:nth-child(4)")
link4.textContent = siteContent["nav"]["nav-item-4"]
document.querySelector("a:nth-child(4)").style.color = "green"

let link5 = document.querySelector("a:nth-child(5)")
link5.textContent = siteContent["nav"]["nav-item-5"]
document.querySelector("a:nth-child(5)").style.color = "blue"

let link6 = document.querySelector("a:nth-child(6)")
link6.textContent = siteContent["nav"]["nav-item-6"]
document.querySelector("a:nth-child(6)").style.color = "purple"

let title = document.querySelector('h1')
title.innerHTML = siteContent["cta"]["h1"]

let button1 = document.querySelector('button')
button1.textContent = siteContent["cta"]["button"]
document.querySelector('button').style.backgroundImage = "linear-gradient(red, yellow, green, blue)" 
document.querySelector('button').style.border = "0px solid black"
document.querySelector('button').style.borderRadius = "10px"
document.querySelector('button').style.height = "50px"
document.querySelector('button').style.width = "200px"
document.querySelector('button').style.fontSize = "20px"
document.querySelector('button').style.fontWeight = "600"

let topLefth4 = document.querySelector('h4:first-child')
topLefth4.textContent = siteContent["main-content"]["features-h4"]

let allh4s = document.querySelectorAll('h4')
allh4s[1].textContent = siteContent["main-content"]["about-h4"]
allh4s[2].textContent = siteContent["main-content"]["services-h4"]
allh4s[3].textContent = siteContent["main-content"]["product-h4"]
allh4s[4].textContent = siteContent["main-content"]["vision-h4"]
allh4s[5].textContent = siteContent["contact"]["contact-h4"]

let allps = document.querySelectorAll('p')
allps[0].textContent = siteContent["main-content"]["features-content"]
allps[1].textContent = siteContent["main-content"]["about-content"]
allps[2].textContent = siteContent["main-content"]["services-content"]
allps[3].textContent = siteContent["main-content"]["product-content"]
allps[4].textContent = siteContent["main-content"]["vision-content"]
allps[5].textContent = siteContent["contact"]["address"]
allps[6].textContent = siteContent["contact"]["phone"]
allps[7].textContent = siteContent["contact"]["email"]
allps[8].textContent = siteContent["footer"]["copyright"]


