// تحديد جميع العناصر التي تحتوي على الكلاس 'animate-section'
const sections = document.querySelectorAll('.animate-section');

// تعريف الخيارات لـ IntersectionObserver
const options = {
  root: null,  // viewport
  rootMargin: '0px',  // المسافة التي يجب أن يكون العنصر قريبًا منها في الـ viewport
  threshold: 0.5,  // يتم تفعيل الأنيميشن عندما يكون 50% من العنصر مرئيًا
};

// إنشاء الـ IntersectionObserver
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    console.log(entry.isIntersecting);  // تحقق مما إذا كان العنصر مرئيًا
    if (entry.isIntersecting) {
      // إضافة الكلاسات المطلوبة لبدء الأنيميشن عند دخول العنصر في الـ viewport
      entry.target.classList.add('animate__animated', 'animate__backInDown', 'animate__fadeInUp');
      // إزالة المراقبة بعد تنفيذ الأنيميشن (إذا كنت تريد فقط تنفيذ الأنيميشن مرة واحدة)
      observer.unobserve(entry.target);
    }
  });
}, options);

// مراقبة كل قسم
sections.forEach(section => {
  observer.observe(section);
});
