function doFirst(){

// -------- menu --------
    
    const hamburger = document.querySelector('.hamburger');
    const sidemenu = document.querySelector('.menu');
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        sidemenu.classList.toggle('active');
    })

    // mobile
    const mobilehamburger = document.querySelector('.nav_mobile_hamburger');const drophamburger = document.querySelector('.nav_mobile_hamburger');
    const mobilemenu = document.querySelector('.menu');
    mobilehamburger.addEventListener('click', () => {
        mobilehamburger.classList.toggle('active');
        mobilemenu.classList.toggle('active');
    })

// -------- content-select --------

    // 找到 select 元素 
    const pageSelect = document.querySelector('#pageSelect');

    // 監聽 select 的變更事件
    pageSelect.addEventListener('change' ,function(){

        // 獲取選中的值
        const selectedPage = pageSelect.value;

        if(selectedPage){
            window.location.href = selectedPage;  // 跳轉到選中的網址
        }
    });


}
window.addEventListener('load',doFirst);
