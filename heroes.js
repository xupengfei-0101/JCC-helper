// 英雄图鉴页面脚本
let currentCostFilter = 'all';
let currentTraitFilter = 'all';
let searchKeyword = '';

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    displayHeroes();
    initEventListeners();
});

// 初始化事件监听
function initEventListeners() {
    // 费用筛选
    document.querySelectorAll('.cost-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.cost-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentCostFilter = this.dataset.cost;
            displayHeroes();
        });
    });

    // 羁绊筛选
    document.querySelectorAll('.trait-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.trait-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentTraitFilter = this.dataset.trait;
            displayHeroes();
        });
    });

    // 搜索
    document.getElementById('heroSearch').addEventListener('input', function(e) {
        searchKeyword = e.target.value.toLowerCase();
        displayHeroes();
    });
}

// 显示英雄
function displayHeroes() {
    const grid = document.getElementById('heroesGrid');
    
    // 筛选英雄
    let filteredHeroes = gameData.heroes.filter(hero => {
        // 费用筛选
        if (currentCostFilter !== 'all' && hero.cost !== parseInt(currentCostFilter)) {
            return false;
        }
        
        // 羁绊筛选
        if (currentTraitFilter !== 'all' && !hero.traits.includes(currentTraitFilter)) {
            return false;
        }
        
        // 搜索筛选
        if (searchKeyword && !hero.name.toLowerCase().includes(searchKeyword)) {
            return false;
        }
        
        return true;
    });

    // 更新计数
    document.getElementById('heroCount').textContent = `(${filteredHeroes.length}个英雄)`;

    // 清空并重新渲染
    grid.innerHTML = '';
    
    if (filteredHeroes.length === 0) {
        grid.innerHTML = '<p style="color: #888; text-align: center; padding: 40px; grid-column: 1/-1;">未找到匹配的英雄</p>';
        return;
    }

    filteredHeroes.forEach(hero => {
        const heroCard = createHeroCard(hero);
        grid.appendChild(heroCard);
    });
}

// 创建英雄卡片
function createHeroCard(hero) {
    const card = document.createElement('div');
    card.className = 'hero-card';
    
    // 费用颜色
    const costColors = {
        1: '#888',
        2: '#4CAF50',
        3: '#2196F3',
        4: '#9C27B0',
        5: '#FF9800',
        7: '#FFD700'
    };
    
    const costColor = costColors[hero.cost] || '#888';
    
    // 羁绊标签
    const traitTags = hero.traits.map(trait => 
        `<span class="trait-tag">${trait}</span>`
    ).join('');
    
    card.innerHTML = `
        <div class="hero-card-header" style="border-bottom: 3px solid ${costColor}">
            <div class="hero-icon-large">${hero.icon}</div>
            <div class="hero-cost-badge" style="background: ${costColor}">${hero.cost}费</div>
        </div>
        <div class="hero-card-body">
            <h3 class="hero-card-name">${hero.name}</h3>
            <div class="hero-traits">
                ${traitTags}
            </div>
        </div>
    `;
    
    return card;
}
