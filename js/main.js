document.addEventListener('DOMContentLoaded', function() {
    // 移动端菜单切换
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.style.display = mainNav.style.display === 'flex' ? 'none' : 'flex';
        });
    }
    
    // 加载更多按钮
    const loadMoreBtn = document.querySelector('.load-more button');
    
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            // 这里应该是异步加载更多内容的逻辑
            // 模拟加载中状态
            loadMoreBtn.textContent = '加载中...';
            setTimeout(() => {
                loadMoreBtn.textContent = '加载更多';
                // 这里只是提示用户，实际应该有更多卡片加载进来
                alert('更多内容加载功能需要后端支持');
            }, 1500);
        });
    }
    
    // 选项卡切换
    const tabLinks = document.querySelectorAll('.tabs a');
    
    if (tabLinks.length > 0) {
        tabLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // 移除所有活动状态
                tabLinks.forEach(item => item.classList.remove('active'));
                
                // 添加当前项活动状态
                this.classList.add('active');
                
                // 这里可以添加加载对应内容的逻辑
                const category = this.textContent;
                console.log(`切换到分类: ${category}`);
            });
        });
    }
    
    // 初始化筛选下拉菜单交互
    const filterItems = document.querySelectorAll('.dropdown-content a');
    const filterLabel = document.querySelector('.filter-dropdown span');
    
    if (filterItems.length > 0 && filterLabel) {
        filterItems.forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                const selectedFilter = this.textContent;
                filterLabel.innerHTML = `${selectedFilter} <i class="fas fa-chevron-down"></i>`;
                // 这里可以添加应用筛选的逻辑
                console.log(`应用筛选: ${selectedFilter}`);
            });
        });
    }
    
    // 图片懒加载（模拟）
    const lazyLoadImages = () => {
        const cardImages = document.querySelectorAll('.card-image img');
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        // 这里模拟图片加载效果
                        img.style.opacity = '0.3';
                        setTimeout(() => {
                            img.style.opacity = '1';
                        }, 300);
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            cardImages.forEach(img => {
                imageObserver.observe(img);
            });
        }
    };
    
    lazyLoadImages();
    
    // 卡片hover动画
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});