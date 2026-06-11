// 移动端菜单
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const nav = document.querySelector('.nav');

    if (mobileMenu && nav) {
        mobileMenu.addEventListener('click', function() {
            if (nav.style.display === 'flex') {
                nav.style.display = 'none';
            } else {
                nav.style.display = 'flex';
                nav.style.flexDirection = 'column';
                nav.style.position = 'absolute';
                nav.style.top = '70px';
                nav.style.left = '0';
                nav.style.width = '100%';
                nav.style.backgroundColor = '#fff';
                nav.style.padding = '20px';
                nav.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
            }
        });
    }

    // 询盘表单提交
    const inquiryForm = document.getElementById('inquiryForm');
    if (inquiryForm) {
        inquiryForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // 获取表单数据
            const formData = new FormData(this);
            const data = Object.fromEntries(formData.entries());

            // 显示成功提示
            const modal = document.getElementById('successModal');
            if (modal) {
                modal.classList.add('show');
            }

            // 清空表单
            this.reset();

            // 这里可以添加发送数据的代码
            console.log('询盘提交:', data);
        });
    }
});

// 关闭弹窗
function closeModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.classList.remove('show');
    }
}

// 点击弹窗外部关闭
window.addEventListener('click', function(e) {
    const modal = document.getElementById('successModal');
    if (modal && e.target === modal) {
        modal.classList.remove('show');
    }
});
