// 全局变量
let selectedHeroes = [];
let selectedEquipment = [];
let currentCostFilter = 'all';

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    initHeroList();
    initEquipmentList();
    initEventListeners();
    displayAllLineups();
});

// 初始化英雄列表
function initHeroList() {
    const heroList = document.getElementById('heroList');
    displayHeroes(gameData.heroes);
}

// 显示英雄
function displayHeroes(heroes) {
    const heroList = document.getElementById('heroList');
    heroList.innerHTML = '';
    
    heroes.forEach(hero => {
        const heroItem = document.createElement('div');
        heroItem.className = 'hero-item';
        heroItem.dataset.heroId = hero.id;
        heroItem.dataset.cost = hero.cost;
        
        // 羁绊标签
        const traitTags = hero.traits.map(trait => 
            `<span class="mini-trait-tag">${trait}</span>`
        ).join('');
        
        heroItem.innerHTML = `
            <div class="hero-icon">${hero.icon}</div>
            <div class="hero-name">${hero.name}</div>
            <div class="hero-cost">${hero.cost}费</div>
            <div class="hero-traits-mini">${traitTags}</div>
        `;
        
        heroItem.addEventListener('click', () => toggleHero(hero));
        heroList.appendChild(heroItem);
    });
}

// 初始化装备列表
function initEquipmentList() {
    const equipmentList = document.getElementById('equipmentList');
    
    gameData.equipment.forEach(equip => {
        const equipItem = document.createElement('div');
        equipItem.className = 'equipment-item';
        equipItem.dataset.equipId = equip.id;
        
        equipItem.innerHTML = `
            <div class="equipment-icon">${equip.icon}</div>
            <div class="equipment-name">${equip.name}</div>
        `;
        
        equipItem.addEventListener('click', () => toggleEquipment(equip));
        equipmentList.appendChild(equipItem);
    });
}

// 初始化事件监听
function initEventListeners() {
    // 英雄搜索
    document.getElementById('heroSearch').addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const filteredHeroes = gameData.heroes.filter(hero => 
            hero.name.toLowerCase().includes(searchTerm)
        );
        displayHeroes(filteredHeroes);
        updateHeroSelection();
    });
    
    // 装备搜索
    document.getElementById('equipSearch').addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const equipmentList = document.getElementById('equipmentList');
        const items = equipmentList.querySelectorAll('.equipment-item');
        
        items.forEach(item => {
            const equipId = parseInt(item.dataset.equipId);
            const equip = gameData.equipment.find(e => e.id === equipId);
            if (equip.name.toLowerCase().includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
    
    // 费用筛选
    document.querySelectorAll('.cost-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.cost-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            currentCostFilter = this.dataset.cost;
            filterHeroesByCost(currentCostFilter);
        });
    });
    
    // 查询按钮
    document.getElementById('searchBtn').addEventListener('click', searchLineups);
    
    // 重置按钮
    document.getElementById('resetBtn').addEventListener('click', resetFilters);
    
    // 弹窗关闭
    document.querySelector('.close').addEventListener('click', closeModal);
    window.addEventListener('click', function(e) {
        const modal = document.getElementById('lineupModal');
        if (e.target === modal) {
            closeModal();
        }
    });
}

// 费用筛选
function filterHeroesByCost(cost) {
    const heroList = document.getElementById('heroList');
    const items = heroList.querySelectorAll('.hero-item');
    
    items.forEach(item => {
        const heroCost = item.dataset.cost;
        if (cost === 'all' || heroCost === cost) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// 切换英雄选择
function toggleHero(hero) {
    const index = selectedHeroes.findIndex(h => h.id === hero.id);
    
    if (index > -1) {
        selectedHeroes.splice(index, 1);
    } else {
        selectedHeroes.push(hero);
    }
    
    updateHeroSelection();
    updateSelectedHeroes();
}

// 更新英雄选择状态
function updateHeroSelection() {
    const heroList = document.getElementById('heroList');
    const items = heroList.querySelectorAll('.hero-item');
    
    items.forEach(item => {
        const heroId = parseInt(item.dataset.heroId);
        if (selectedHeroes.some(h => h.id === heroId)) {
            item.classList.add('selected');
        } else {
            item.classList.remove('selected');
        }
    });
}

// 更新已选英雄显示
function updateSelectedHeroes() {
    const container = document.getElementById('selectedHeroes');
    container.innerHTML = '';
    
    if (selectedHeroes.length === 0) {
        container.innerHTML = '<p style="color: #888;">未选择英雄</p>';
        return;
    }
    
    selectedHeroes.forEach(hero => {
        const tag = document.createElement('div');
        tag.className = 'selected-tag';
        tag.innerHTML = `
            ${hero.icon} ${hero.name}
            <span class="remove-tag" onclick="removeHero(${hero.id})">×</span>
        `;
        container.appendChild(tag);
    });
}

// 移除英雄
function removeHero(heroId) {
    selectedHeroes = selectedHeroes.filter(h => h.id !== heroId);
    updateHeroSelection();
    updateSelectedHeroes();
}

// 切换装备选择
function toggleEquipment(equip) {
    const index = selectedEquipment.findIndex(e => e.id === equip.id);
    
    if (index > -1) {
        selectedEquipment.splice(index, 1);
    } else {
        selectedEquipment.push(equip);
    }
    
    updateEquipmentSelection();
    updateSelectedEquipment();
}

// 更新装备选择状态
function updateEquipmentSelection() {
    const equipmentList = document.getElementById('equipmentList');
    const items = equipmentList.querySelectorAll('.equipment-item');
    
    items.forEach(item => {
        const equipId = parseInt(item.dataset.equipId);
        if (selectedEquipment.some(e => e.id === equipId)) {
            item.classList.add('selected');
        } else {
            item.classList.remove('selected');
        }
    });
}

// 更新已选装备显示
function updateSelectedEquipment() {
    const container = document.getElementById('selectedEquipment');
    container.innerHTML = '';
    
    if (selectedEquipment.length === 0) {
        container.innerHTML = '<p style="color: #888;">未选择装备</p>';
        return;
    }
    
    selectedEquipment.forEach(equip => {
        const tag = document.createElement('div');
        tag.className = 'selected-tag';
        tag.innerHTML = `
            ${equip.icon} ${equip.name}
            <span class="remove-tag" onclick="removeEquipment(${equip.id})">×</span>
        `;
        container.appendChild(tag);
    });
}

// 移除装备
function removeEquipment(equipId) {
    selectedEquipment = selectedEquipment.filter(e => e.id !== equipId);
    updateEquipmentSelection();
    updateSelectedEquipment();
}

// 查询阵容
function searchLineups() {
    let filteredLineups = gameData.lineups;
    
    // 根据选择的英雄筛选
    if (selectedHeroes.length > 0) {
        filteredLineups = filteredLineups.filter(lineup => {
            return selectedHeroes.every(hero => 
                lineup.heroes.includes(hero.id)
            );
        });
    }
    
    // 根据选择的装备筛选
    if (selectedEquipment.length > 0) {
        filteredLineups = filteredLineups.filter(lineup => {
            const allEquipment = [...lineup.equipment.main, ...lineup.equipment.sub];
            return selectedEquipment.some(equip => 
                allEquipment.includes(equip.id)
            );
        });
    }
    
    displayLineups(filteredLineups);
}

// 显示所有阵容
function displayAllLineups() {
    displayLineups(gameData.lineups);
}

// 显示阵容
function displayLineups(lineups) {
    const container = document.getElementById('lineupResults');
    container.innerHTML = '';
    
    if (lineups.length === 0) {
        container.innerHTML = '<p style="color: #888; text-align: center; padding: 40px;">未找到匹配的阵容，请调整筛选条件</p>';
        return;
    }
    
    lineups.forEach(lineup => {
        const card = createLineupCard(lineup);
        container.appendChild(card);
    });
}

// 创建阵容卡片
function createLineupCard(lineup) {
    const card = document.createElement('div');
    card.className = 'lineup-card';
    
    // 获取英雄图标
    const heroIcons = lineup.heroes.map(heroId => {
        const hero = gameData.heroes.find(h => h.id === heroId);
        return hero ? hero.icon : '❓';
    }).join(' ');
    
    // 羁绊标签
    const traitTags = lineup.traits.map(trait => 
        `<span class="trait-tag">${trait}</span>`
    ).join('');
    
    card.innerHTML = `
        <div class="lineup-header">
            <div class="lineup-title">${lineup.name}</div>
            <div class="lineup-tier tier-${lineup.tier}">${lineup.tier}</div>
        </div>
        <div class="lineup-heroes">${heroIcons}</div>
        <div class="lineup-traits">${traitTags}</div>
        <div class="lineup-description">${lineup.description}</div>
        <div style="margin-top: 15px; color: #ffd700; font-size: 14px;">
            胜率: ${lineup.winRate}
        </div>
    `;
    
    card.addEventListener('click', () => showLineupDetail(lineup));
    
    return card;
}

// 显示阵容详情
function showLineupDetail(lineup) {
    const modal = document.getElementById('lineupModal');
    const detailContainer = document.getElementById('lineupDetail');
    
    // 获取英雄信息
    const heroesInfo = lineup.heroes.map(heroId => {
        const hero = gameData.heroes.find(h => h.id === heroId);
        return hero ? `<span style="font-size: 24px; margin: 0 5px;">${hero.icon} ${hero.name}</span>` : '';
    }).join('');
    
    // 获取主C英雄
    const mainCarry = gameData.heroes.find(h => h.id === lineup.mainCarry);
    
    // 获取装备信息
    const mainEquipment = lineup.equipment.main.map(equipId => {
        const equip = gameData.equipment.find(e => e.id === equipId);
        return equip ? `${equip.icon} ${equip.name}` : '';
    }).join(' + ');
    
    const subEquipment = lineup.equipment.sub.map(equipId => {
        const equip = gameData.equipment.find(e => e.id === equipId);
        return equip ? `${equip.icon} ${equip.name}` : '';
    }).join(' + ');
    
    detailContainer.innerHTML = `
        <h2 style="color: #ffd700; font-size: 32px; margin-bottom: 20px;">
            ${lineup.name} 
            <span class="lineup-tier tier-${lineup.tier}" style="font-size: 18px; margin-left: 15px;">${lineup.tier}</span>
        </h2>
        
        <div class="detail-section">
            <h3>📊 阵容概况</h3>
            <p style="color: #e0e0e0; line-height: 1.8; font-size: 16px;">
                <strong>胜率：</strong>${lineup.winRate}<br>
                <strong>描述：</strong>${lineup.description}<br>
                <strong>羁绊：</strong>${lineup.traits.join(' / ')}
            </p>
        </div>
        
        <div class="detail-section">
            <h3>👥 阵容配置</h3>
            <div style="font-size: 18px; line-height: 2;">
                ${heroesInfo}
            </div>
        </div>
        
        <div class="detail-section">
            <h3>⚔️ 装备推荐</h3>
            <p style="color: #e0e0e0; line-height: 1.8; font-size: 16px;">
                <strong>主C ${mainCarry ? mainCarry.name : ''}：</strong>${mainEquipment}<br>
                <strong>副C/前排：</strong>${subEquipment}
            </p>
        </div>
        
        <div class="detail-section">
            <h3>🎮 运营指南</h3>
            
            <div class="stage-guide">
                <h4>🌅 前期 (${lineup.stages.early.level})</h4>
                <ul>
                    <li><strong>经济：</strong>${lineup.stages.early.economy}</li>
                    <li><strong>英雄：</strong>${lineup.stages.early.heroes}</li>
                    <li><strong>装备：</strong>${lineup.stages.early.equipment}</li>
                    <li><strong>技巧：</strong>${lineup.stages.early.tips}</li>
                </ul>
            </div>
            
            <div class="stage-guide">
                <h4>☀️ 中期 (${lineup.stages.mid.level})</h4>
                <ul>
                    <li><strong>经济：</strong>${lineup.stages.mid.economy}</li>
                    <li><strong>英雄：</strong>${lineup.stages.mid.heroes}</li>
                    <li><strong>装备：</strong>${lineup.stages.mid.equipment}</li>
                    <li><strong>技巧：</strong>${lineup.stages.mid.tips}</li>
                </ul>
            </div>
            
            <div class="stage-guide">
                <h4>🌙 后期 (${lineup.stages.late.level})</h4>
                <ul>
                    <li><strong>经济：</strong>${lineup.stages.late.economy}</li>
                    <li><strong>英雄：</strong>${lineup.stages.late.heroes}</li>
                    <li><strong>装备：</strong>${lineup.stages.late.equipment}</li>
                    <li><strong>技巧：</strong>${lineup.stages.late.tips}</li>
                </ul>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
}

// 关闭弹窗
function closeModal() {
    document.getElementById('lineupModal').style.display = 'none';
}

// 重置筛选
function resetFilters() {
    selectedHeroes = [];
    selectedEquipment = [];
    currentCostFilter = 'all';
    
    document.getElementById('heroSearch').value = '';
    document.getElementById('equipSearch').value = '';
    
    document.querySelectorAll('.cost-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.cost === 'all') {
            btn.classList.add('active');
        }
    });
    
    updateHeroSelection();
    updateSelectedHeroes();
    updateEquipmentSelection();
    updateSelectedEquipment();
    
    displayHeroes(gameData.heroes);
    displayAllLineups();
}
