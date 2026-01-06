// فرم تماس Netlify
const form = document.querySelector("form");
form.addEventListener("submit", function(e){
    e.preventDefault();
    const formData = new FormData(form);
    fetch("/", { method:"POST", body:formData })
    .then(()=> { alert("پیام شما با موفقیت ارسال شد!"); form.reset(); })
    .catch((err)=> alert("مشکلی پیش آمد: "+err));
});

// افکت اسکرول برای بخش‌ها
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;
    sections.forEach(section => {
        if(scrollY + window.innerHeight*0.8 > section.offsetTop){
            section.classList.add("visible");
        }
    });
});

// گالری Lightbox
const lightbox = new SimpleLightbox('.gallery a');
