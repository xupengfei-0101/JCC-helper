// 装备合成页面脚本
let currentTypeFilter = 'all';
let searchKeyword = '';

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    displayBaseEquipment();
    displayEquipment();
    initEventListeners();
});

// 初始化事件监听
function initEventListeners() {
    // 类型筛选
    document.querySelectorAll('.type-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.type-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentTypeFilter = this.dataset.type;
            displayEquipment();
        });
    });

    // 搜索
    document.getElementById('equipSearch').addEventListener('input', function(e) {
        searchKeyword = e.target.value.toLowerCase();
        displayEquipment();
    });
}

// 显示基础装备
function displayBaseEquipment() {
    const grid = document.getElementById('baseEquipment');
    const baseEquipment = gameData.equipment.filter(e => e.type === 'BASE');
    
    grid.innerHTML = '';
    baseEquipment.forEach(equip => {
        const card = document.createElement('div');
        card.className = 'base-equip-card';
        card.innerHTML = `
            <div class="equip-icon-large">${equip.icon}</div>
            <div class="equip-name">${equip.name}</div>
            <div class="equip-effect">${equip.effect}</div>
        `;
        grid.appendChild(card);
    });
}

// 显示成型装备
function displayEquipment() {
    const grid = document.getElementById('equipmentGrid');
    
    // 筛选装备（排除基础装备）
    let filteredEquipment = gameData.equipment.filter(equip => {
        if (equip.type === 'BASE') return false;
        
        // 类型筛选
        if (currentTypeFilter !== 'all' && equip.type !== currentTypeFilter) {
            return false;
        }
        
        // 搜索筛选
        if (searchKeyword && !equip.name.toLowerCase().includes(searchKeyword)) {
            return false;
        }
        
        return true;
    });

    // 更新计数
    document.getElementById('equipCount').textContent = `(${filteredEquipment.length}件成型装备)`;

    // 清空并重新渲染
    grid.innerHTML = '';
    
    if (filteredEquipment.length === 0) {
        grid.innerHTML = '<p style="color: #888; text-align: center; padding: 40px; grid-column: 1/-1;">未找到匹配的装备</p>';
        return;
    }

    filteredEquipment.forEach(equip => {
        const equipCard = createEquipmentCard(equip);
        grid.appendChild(equipCard);
    });
}

// 创建装备卡片
function createEquipmentCard(equip) {
    const card = document.createElement('div');
    card.className = 'equipment-card';
    
    // 类型颜色
    const typeColors = {
        'AD': '#ff6b6b',
        'AS': '#ffd700',
        'AP': '#4ecdc4',
        'MANA': '#45b7d1',
        'DEF': '#95a5a6',
        'HP': '#e74c3c',
        'CRIT': '#f39c12',
        'EMBLEM': '#9b59b6',
        'ORNN': '#ff4757'
    };
    
    const typeColor = typeColors[equip.type] || '#888';
    
    // 类型名称
    const typeNames = {
        'AD': '物理',
        'AS': '攻速',
        'AP': '法术',
        'MANA': '法力',
        'DEF': '防御',
        'HP': '生命',
        'CRIT': '暴击',
        'EMBLEM': '转职',
        'ORNN': '神器'
    };
    
    const typeName = typeNames[equip.type] || equip.type;
    
    card.innerHTML = `
        <div class="equipment-card-header" style="border-bottom: 3px solid ${typeColor}">
            <div class="equip-icon-large">${equip.icon}</div>
            <div class="equip-type-badge" style="background: ${typeColor}">${typeName}</div>
        </div>
        <div class="equipment-card-body">
            <h3 class="equipment-card-name">${equip.name}</h3>
            <div class="equipment-effect">${equip.effect}</div>
            ${equip.formula ? `<div class="equipment-formula">
                <span style="color: #ffd700;">合成：</span>${equip.formula}
            </div>` : ''}
        </div>
    `;
    
    return card;
}
