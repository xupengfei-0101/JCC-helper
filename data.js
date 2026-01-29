// 游戏数据
const gameData = {
    // 英雄数据 - S16赛季完整100个英雄
    heroes: [
        // ========== 1费英雄 (14个) ==========
        { id: 1, name: '艾尼维亚', icon: '🦅', cost: 1, traits: ['弗雷尔卓德', '神谕者'] },
        { id: 2, name: '娑娜', icon: '🎵', cost: 1, traits: ['德玛西亚', '神谕者'] },
        { id: 3, name: '布里茨', icon: '🤖', cost: 1, traits: ['祖安', '主宰'] },
        { id: 4, name: '烬', icon: '🎭', cost: 1, traits: ['艾欧尼亚', '枪手'] },
        { id: 5, name: '奇亚娜', icon: '💎', cost: 1, traits: ['以绪塔尔', '裁决战士'] },
        { id: 6, name: '慎', icon: '🥷', cost: 1, traits: ['艾欧尼亚', '护卫'] },
        { id: 7, name: '璐璐', icon: '🧚', cost: 1, traits: ['约德尔人', '法师'] },
        { id: 8, name: '凯特琳', icon: '🎯', cost: 1, traits: ['皮尔特沃夫', '狙神'] },
        { id: 9, name: '俄洛伊', icon: '🐙', cost: 1, traits: ['比尔吉沃特', '斗士'] },
        { id: 10, name: '佛耶戈', icon: '👑', cost: 1, traits: ['暗影岛', '迅击战士'] },
        { id: 11, name: '兰博', icon: '🔥', cost: 1, traits: ['约德尔人', '护卫'] },
        { id: 12, name: '克格莫', icon: '🦎', cost: 1, traits: ['虚空', '狙神'] },
        { id: 13, name: '嘉文四世', icon: '🛡️', cost: 1, traits: ['德玛西亚', '护卫'] },
        { id: 14, name: '贝蕾亚', icon: '⚔️', cost: 1, traits: ['诺克萨斯', '裁决战士'] },
        
        // ========== 2费英雄 (19个) ==========
        { id: 15, name: '艾克', icon: '⏰', cost: 2, traits: ['祖安', '迅击战士'] },
        { id: 16, name: '艾希', icon: '❄️', cost: 2, traits: ['弗雷尔卓德', '狙神'] },
        { id: 17, name: '奥莉安娜', icon: '⚙️', cost: 2, traits: ['皮尔特沃夫', '法师'] },
        { id: 18, name: '巴德', icon: '🎵', cost: 2, traits: ['以绪塔尔', '神谕者'] },
        { id: 19, name: '波比', icon: '🔨', cost: 2, traits: ['约德尔人', '护卫'] },
        { id: 20, name: '崔丝塔娜', icon: '💥', cost: 2, traits: ['约德尔人', '枪手'] },
        { id: 21, name: '崔斯特', icon: '🎴', cost: 2, traits: ['比尔吉沃特', '法师'] },
        { id: 22, name: '厄斐琉斯', icon: '🌙', cost: 2, traits: ['巨神峰', '狙神'] },
        { id: 23, name: '格雷福斯', icon: '🔫', cost: 2, traits: ['比尔吉沃特', '枪手'] },
        { id: 24, name: '科加斯', icon: '👾', cost: 2, traits: ['虚空', '主宰'] },
        { id: 25, name: '雷克赛', icon: '🦂', cost: 2, traits: ['虚空', '斗士'] },
        { id: 26, name: '妮蔻', icon: '🦎', cost: 2, traits: ['以绪塔尔', '护卫'] },
        { id: 27, name: '塞恩', icon: '💀', cost: 2, traits: ['诺克萨斯', '护卫'] },
        { id: 28, name: '泰达米尔', icon: '⚔️', cost: 2, traits: ['弗雷尔卓德', '迅击战士'] },
        { id: 29, name: '提莫', icon: '🍄', cost: 2, traits: ['约德尔人', '狙神'] },
        { id: 30, name: '蔚', icon: '👊', cost: 2, traits: ['皮尔特沃夫', '斗士'] },
        { id: 31, name: '亚索', icon: '🌪️', cost: 2, traits: ['艾欧尼亚', '迅击战士'] },
        { id: 32, name: '约里克', icon: '⚰️', cost: 2, traits: ['暗影岛', '主宰'] },
        { id: 33, name: '赵信', icon: '🗡️', cost: 2, traits: ['艾欧尼亚', '迅击战士'] },
        
        // ========== 3费英雄 (18个) ==========
        { id: 34, name: '阿狸', icon: '🦊', cost: 3, traits: ['艾欧尼亚', '法师'] },
        { id: 35, name: '德莱厄斯', icon: '🪓', cost: 3, traits: ['诺克萨斯', '征服者'] },
        { id: 36, name: '德莱文', icon: '🎯', cost: 3, traits: ['诺克萨斯', '枪手'] },
        { id: 37, name: '格温', icon: '✂️', cost: 3, traits: ['暗影岛', '迅击战士'] },
        { id: 38, name: '金克丝', icon: '💣', cost: 3, traits: ['祖安', '枪手'] },
        { id: 39, name: '凯南', icon: '⚡', cost: 3, traits: ['艾欧尼亚', '约德尔人', '法师'] },
        { id: 40, name: '可酷伯&悠米', icon: '🐱', cost: 3, traits: ['约德尔人', '神谕者'] },
        { id: 41, name: '乐芙兰', icon: '🎭', cost: 3, traits: ['诺克萨斯', '法师'] },
        { id: 42, name: '蕾欧娜', icon: '☀️', cost: 3, traits: ['巨神峰', '护卫'] },
        { id: 43, name: '洛里斯', icon: '🛡️', cost: 3, traits: ['德玛西亚', '神盾使'] },
        { id: 44, name: '马尔扎哈', icon: '🦗', cost: 3, traits: ['虚空', '法师'] },
        { id: 45, name: '蒙多', icon: '💉', cost: 3, traits: ['祖安', '斗士'] },
        { id: 46, name: '米利欧', icon: '🔥', cost: 3, traits: ['以绪塔尔', '神谕者'] },
        { id: 47, name: '诺提勒斯', icon: '⚓', cost: 3, traits: ['比尔吉沃特', '神盾使'] },
        { id: 48, name: '普朗克', icon: '🏴‍☠️', cost: 3, traits: ['比尔吉沃特', '枪手'] },
        { id: 49, name: '瑟庄妮', icon: '🐗', cost: 3, traits: ['弗雷尔卓德', '护卫'] },
        { id: 50, name: '薇恩', icon: '🏹', cost: 3, traits: ['德玛西亚', '狙神'] },
        { id: 51, name: '佐伊', icon: '✨', cost: 3, traits: ['巨神峰', '法师'] },
        
        // ========== 4费英雄 (23个) ==========
        { id: 52, name: '安倍萨', icon: '🐺', cost: 4, traits: ['弗雷尔卓德', '征服者'] },
        { id: 53, name: '卑尔维斯', icon: '🦇', cost: 4, traits: ['暗影岛', '迅击战士'] },
        { id: 54, name: '布隆', icon: '🛡️', cost: 4, traits: ['弗雷尔卓德', '神盾使'] },
        { id: 55, name: '厄运小姐', icon: '🔫', cost: 4, traits: ['比尔吉沃特', '枪手'] },
        { id: 56, name: '菲兹', icon: '🐟', cost: 4, traits: ['比尔吉沃特', '约德尔人', '迅击战士'] },
        { id: 57, name: '盖伦', icon: '⚔️', cost: 4, traits: ['德玛西亚', '护卫'] },
        { id: 58, name: '卡莉斯塔', icon: '👻', cost: 4, traits: ['暗影岛', '枪手'] },
        { id: 59, name: '卡莎', icon: '🦋', cost: 4, traits: ['虚空', '枪手'] },
        { id: 60, name: '拉克丝', icon: '💫', cost: 4, traits: ['德玛西亚', '法师'] },
        { id: 61, name: '雷克顿', icon: '🐊', cost: 4, traits: ['恕瑞玛', '征服者'] },
        { id: 62, name: '丽桑卓', icon: '❄️', cost: 4, traits: ['弗雷尔卓德', '法师'] },
        { id: 63, name: '奈德丽', icon: '🐆', cost: 4, traits: ['以绪塔尔', '迅击战士'] },
        { id: 64, name: '萨勒芬妮', icon: '🎤', cost: 4, traits: ['皮尔特沃夫', '法师'] },
        { id: 65, name: '斯卡纳', icon: '🦂', cost: 4, traits: ['以绪塔尔', '护卫'] },
        { id: 66, name: '斯维因', icon: '🦅', cost: 4, traits: ['诺克萨斯', '法师'] },
        { id: 67, name: '孙悟空', icon: '🐵', cost: 4, traits: ['艾欧尼亚', '斗士'] },
        { id: 68, name: '塔里克', icon: '💎', cost: 4, traits: ['巨神峰', '神盾使'] },
        { id: 69, name: '维嘉', icon: '🌟', cost: 4, traits: ['约德尔人', '法师'] },
        { id: 70, name: '沃里克', icon: '🐺', cost: 4, traits: ['祖安', '斗士'] },
        { id: 71, name: '峡谷先锋', icon: '👁️', cost: 4, traits: ['虚空', '主宰'] },
        { id: 72, name: '辛吉德', icon: '☠️', cost: 4, traits: ['祖安', '主宰'] },
        { id: 73, name: '永恩', icon: '👹', cost: 4, traits: ['艾欧尼亚', '迅击战士'] },
        { id: 74, name: '芸阿娜', icon: '🏹', cost: 4, traits: ['艾欧尼亚', '狙神'] },
        { id: 75, name: '黛安娜', icon: '🌙', cost: 4, traits: ['巨神峰', '迅击战士'] },
        
        // ========== 5费英雄 (18个) ==========
        { id: 76, name: '阿兹尔', icon: '🏜️', cost: 5, traits: ['恕瑞玛', '法师'] },
        { id: 77, name: '安妮', icon: '🧸', cost: 5, traits: ['诺克萨斯', '法师'] },
        { id: 78, name: '奥恩', icon: '🔨', cost: 5, traits: ['弗雷尔卓德', '护卫'] },
        { id: 79, name: '锤石', icon: '⛓️', cost: 5, traits: ['暗影岛', '神盾使'] },
        { id: 80, name: '费德提克', icon: '👻', cost: 5, traits: ['暗影岛', '法师'] },
        { id: 81, name: '海克斯霸王龙', icon: '🦖', cost: 5, traits: ['皮尔特沃夫', '征服者'] },
        { id: 82, name: '基兰', icon: '⏳', cost: 5, traits: ['以绪塔尔', '神谕者'] },
        { id: 83, name: '吉格斯', icon: '💥', cost: 5, traits: ['祖安', '约德尔人', '法师'] },
        { id: 84, name: '加里奥', icon: '🗿', cost: 5, traits: ['德玛西亚', '神盾使'] },
        { id: 85, name: '卢锡安&塞纳', icon: '👫', cost: 5, traits: ['德玛西亚', '枪手'] },
        { id: 86, name: '梅尔', icon: '✨', cost: 5, traits: ['皮尔特沃夫', '法师'] },
        { id: 87, name: '千珏', icon: '🐺', cost: 5, traits: ['暗影岛', '狙神'] },
        { id: 88, name: '瑟提', icon: '👊', cost: 5, traits: ['艾欧尼亚', '斗士'] },
        { id: 89, name: '塔姆', icon: '🐸', cost: 5, traits: ['比尔吉沃特', '主宰'] },
        { id: 90, name: '泽拉斯', icon: '⚡', cost: 5, traits: ['恕瑞玛', '法师'] },
        { id: 91, name: '沃利贝尔', icon: '🐻', cost: 5, traits: ['弗雷尔卓德', '斗士'] },
        { id: 92, name: '希瓦娜', icon: '🐉', cost: 5, traits: ['德玛西亚', '斗士'] },
        { id: 93, name: '亚托克斯', icon: '😈', cost: 5, traits: ['暗裔', '征服者'] },
        
        // ========== 7费英雄 (7个) ==========
        { id: 94, name: '奥瑞利安·索尔', icon: '🐲', cost: 7, traits: ['巨神峰', '铸星龙王'] },
        { id: 95, name: '纳什男爵', icon: '👁️', cost: 7, traits: ['虚空', '征服者'] },
        { id: 96, name: '瑞兹', icon: '📜', cost: 7, traits: ['符文法师'] },
        { id: 97, name: '塞拉斯', icon: '⛓️', cost: 7, traits: ['德玛西亚', '法师'] },
        { id: 98, name: '亚恒', icon: '⚔️', cost: 7, traits: ['艾欧尼亚', '不落魔锋'] },
        { id: 99, name: '岩宝', icon: '🪨', cost: 7, traits: ['以绪塔尔', '斗士'] },
        { id: 100, name: '腕豪', icon: '💪', cost: 7, traits: ['艾欧尼亚', '斗士'] },
    ],
    
    // 装备数据 - S16赛季完整装备
    equipment: [
        // ========== 基础装备 (9个) ==========
        { id: 1, name: '暴风之剑', icon: '⚔️', type: 'BASE', effect: '攻击力+10' },
        { id: 2, name: '反曲之弓', icon: '🏹', type: 'BASE', effect: '攻击速度+10%' },
        { id: 3, name: '无用大棒', icon: '📿', type: 'BASE', effect: '法术强度+10' },
        { id: 4, name: '女神之泪', icon: '💧', type: 'BASE', effect: '法力值+15' },
        { id: 5, name: '锁子甲', icon: '🛡️', type: 'BASE', effect: '护甲+20' },
        { id: 6, name: '负极斗篷', icon: '🧥', type: 'BASE', effect: '魔抗+20' },
        { id: 7, name: '巨人腰带', icon: '💪', type: 'BASE', effect: '生命值+150' },
        { id: 8, name: '拳套', icon: '🥊', type: 'BASE', effect: '暴击率+10%' },
        { id: 9, name: '金铲铲', icon: '⛏️', type: 'BASE', effect: '合成转职装备' },
        { id: 10, name: '金锅锅', icon: '🍲', type: 'BASE', effect: '合成职业转职装备' },
        
        // ========== 输出装备 (AD) ==========
        { id: 11, name: '无尽之刃', icon: '⚔️', type: 'AD', effect: '+20攻击力 +20%暴击率 | 暴击伤害+50%', formula: '暴风之剑+拳套' },
        { id: 12, name: '巨人杀手', icon: '🔪', type: 'AD', effect: '+10攻击力 +10%攻击速度 | 对高血量额外伤害', formula: '暴风之剑+反曲之弓' },
        { id: 13, name: '正义之手', icon: '⚖️', type: 'AD', effect: '+10攻击力 +15法力值 | 攻击回蓝', formula: '暴风之剑+女神之泪' },
        { id: 14, name: '饮血剑', icon: '🩸', type: 'AD', effect: '+10攻击力 +20魔抗 | 吸血20%', formula: '暴风之剑+负极斗篷' },
        { id: 15, name: '轻语', icon: '🌪️', type: 'AD', effect: '+10攻击力 +20护甲 | 破甲40%', formula: '暴风之剑+锁子甲' },
        { id: 16, name: '血手', icon: '🛡️', type: 'AD', effect: '+10攻击力 +150生命值 | 护盾+复活', formula: '暴风之剑+巨人腰带' },
        { id: 17, name: '海克斯科技枪刃', icon: '🔫', type: 'AD', effect: '+10攻击力 +10法术强度 | 全能吸血', formula: '暴风之剑+无用大棒' },
        
        // ========== 攻速装备 ==========
        { id: 18, name: '羊刀', icon: '🗡️', type: 'AS', effect: '+20%攻击速度 | 攻速叠加', formula: '反曲之弓+反曲之弓' },
        { id: 19, name: '鬼索的狂暴之刃', icon: '⚡', type: 'AS', effect: '+10%攻击速度 +10法术强度 | 攻速+法强', formula: '反曲之弓+无用大棒' },
        { id: 20, name: '纳什之牙', icon: '🦷', type: 'AS', effect: '+10%攻击速度 +10法术强度 | 攻速+法强', formula: '反曲之弓+无用大棒' },
        { id: 21, name: '斯塔缇克电刃', icon: '⚡', type: 'AS', effect: '+10%攻击速度 +15法力值 | 攻击触发闪电', formula: '反曲之弓+女神之泪' },
        { id: 22, name: '火炮', icon: '🎯', type: 'AS', effect: '+10%攻击速度 +10%暴击率 | 射程+', formula: '反曲之弓+拳套' },
        { id: 23, name: '泰坦的坚决', icon: '🛡️', type: 'AS', effect: '+10%攻击速度 +20护甲 | 护盾+控制', formula: '反曲之弓+锁子甲' },
        { id: 24, name: '破败王者之刃', icon: '👑', type: 'AS', effect: '+10%攻击速度 +150生命值 | 吸血+减速', formula: '反曲之弓+巨人腰带' },
        
        // ========== 法术装备 (AP) ==========
        { id: 25, name: '灭世者的死亡之帽', icon: '🎩', type: 'AP', effect: '+20法术强度 | 法强+75%', formula: '无用大棒+无用大棒' },
        { id: 26, name: '珠光护手', icon: '💫', type: 'AP', effect: '+10法术强度 +10%暴击率 | 法术暴击', formula: '无用大棒+拳套' },
        { id: 27, name: '离子火花', icon: '⚛️', type: 'AP', effect: '+10法术强度 +20魔抗 | 减魔抗+灼烧', formula: '无用大棒+负极斗篷' },
        { id: 28, name: '鬼书', icon: '📖', type: 'AP', effect: '+10法术强度 +20护甲 | 重伤', formula: '无用大棒+锁子甲' },
        { id: 29, name: '巨龙之爪', icon: '🐲', type: 'AP', effect: '+10法术强度 +150生命值 | 魔抗+反伤', formula: '无用大棒+巨人腰带' },
        
        // ========== 法力装备 ==========
        { id: 30, name: '青龙刀', icon: '🐉', type: 'MANA', effect: '+30法力值 | 技能回蓝', formula: '女神之泪+女神之泪' },
        { id: 31, name: '大天使之杖', icon: '👼', type: 'MANA', effect: '+15法力值 +10法术强度 | 法力值+法强', formula: '女神之泪+无用大棒' },
        { id: 32, name: '冰霜之心', icon: '❄️', type: 'MANA', effect: '+15法力值 +20护甲 | 减攻速', formula: '女神之泪+锁子甲' },
        { id: 33, name: '救赎', icon: '✝️', type: 'MANA', effect: '+15法力值 +150生命值 | 群体回血', formula: '女神之泪+巨人腰带' },
        
        // ========== 防御装备 (护甲) ==========
        { id: 34, name: '反甲', icon: '🛡️', type: 'DEF', effect: '+40护甲 | 反伤+护甲', formula: '锁子甲+锁子甲' },
        { id: 35, name: '日炎斗篷', icon: '🔥', type: 'DEF', effect: '+20护甲 +150生命值 | 灼烧敌人', formula: '锁子甲+巨人腰带' },
        { id: 36, name: '石像鬼石板甲', icon: '🗿', type: 'DEF', effect: '+20护甲 +20魔抗 | 护甲+回血', formula: '锁子甲+负极斗篷' },
        
        // ========== 防御装备 (魔抗) ==========
        { id: 37, name: '龙牙', icon: '🦷', type: 'DEF', effect: '+40魔抗 | 魔抗+护盾', formula: '负极斗篷+负极斗篷' },
        { id: 38, name: '绿甲', icon: '🟢', type: 'DEF', effect: '+20魔抗 +20护甲 | 魔抗+免疫控制', formula: '负极斗篷+锁子甲' },
        { id: 39, name: '冰甲', icon: '❄️', type: 'DEF', effect: '+20魔抗 +150生命值 | 减速敌人', formula: '负极斗篷+巨人腰带' },
        
        // ========== 生命装备 ==========
        { id: 40, name: '狂徒铠甲', icon: '❤️', type: 'HP', effect: '+300生命值 | 生命值+回血', formula: '巨人腰带+巨人腰带' },
        { id: 41, name: '振奋铠甲', icon: '💪', type: 'HP', effect: '+150生命值 +20护甲 | 回血+护盾', formula: '巨人腰带+锁子甲' },
        { id: 42, name: '心之钢', icon: '💗', type: 'HP', effect: '+150生命值 +10%暴击率 | 生命值成长', formula: '巨人腰带+拳套' },
        
        // ========== 暴击装备 ==========
        { id: 43, name: '最后的轻语', icon: '🌬️', type: 'CRIT', effect: '+10%暴击率 +20护甲 | 暴击+破甲', formula: '拳套+锁子甲' },
        { id: 44, name: '守护天使', icon: '😇', type: 'CRIT', effect: '+10%暴击率 +20护甲 | 复活', formula: '拳套+锁子甲' },
        { id: 45, name: '泽克的传送门', icon: '🌀', type: 'CRIT', effect: '+10%暴击率 +150生命值 | 传送+群伤', formula: '拳套+巨人腰带' },
        
        // ========== 转职装备 - 城邦 (金铲铲) ==========
        { id: 46, name: '虚空纹章', icon: '👁️', type: 'EMBLEM', effect: '使携带者获得虚空羁绊 | +10%攻击速度 +150生命值', formula: '金铲铲+反曲之弓' },
        { id: 47, name: '诺克萨斯纹章', icon: '🪓', type: 'EMBLEM', effect: '使携带者获得诺克萨斯羁绊 | +10攻击力 +150生命值', formula: '金铲铲+暴风之剑' },
        { id: 48, name: '约德尔人纹章', icon: '🍄', type: 'EMBLEM', effect: '使携带者获得约德尔人羁绊 | +20魔抗 +150生命值', formula: '金铲铲+负极斗篷' },
        { id: 49, name: '德玛西亚纹章', icon: '⚔️', type: 'EMBLEM', effect: '使携带者获得德玛西亚羁绊 | +20护甲 +150生命值', formula: '金铲铲+锁子甲' },
        { id: 50, name: '祖安纹章', icon: '☠️', type: 'EMBLEM', effect: '使携带者获得祖安羁绊 | +10%暴击率 +150生命值', formula: '金铲铲+拳套' },
        { id: 51, name: '弗雷尔卓德纹章', icon: '❄️', type: 'EMBLEM', effect: '使携带者获得弗雷尔卓德羁绊 | +150生命值 +150生命值', formula: '金铲铲+巨人腰带' },
        { id: 52, name: '比尔吉沃特纹章', icon: '🏴‍☠️', type: 'EMBLEM', effect: '使携带者获得比尔吉沃特羁绊 | +15法力值 +150生命值', formula: '金铲铲+女神之泪' },
        { id: 53, name: '艾欧尼亚纹章', icon: '🌸', type: 'EMBLEM', effect: '使携带者获得艾欧尼亚羁绊 | +10法术强度 +150生命值', formula: '金铲铲+无用大棒' },
        { id: 54, name: '暗影岛纹章', icon: '👻', type: 'EMBLEM', effect: '使携带者获得暗影岛羁绊 | +300生命值', formula: '金铲铲+金铲铲' },
        { id: 55, name: '以绪塔尔纹章', icon: '💎', type: 'EMBLEM', effect: '使携带者获得以绪塔尔羁绊 | +300生命值', formula: '金铲铲+金铲铲' },
        { id: 56, name: '巨神峰纹章', icon: '⭐', type: 'EMBLEM', effect: '使携带者获得巨神峰羁绊 | +300生命值', formula: '金铲铲+金铲铲' },
        { id: 57, name: '皮尔特沃夫纹章', icon: '⚙️', type: 'EMBLEM', effect: '使携带者获得皮尔特沃夫羁绊 | +300生命值', formula: '金铲铲+金铲铲' },
        { id: 58, name: '恕瑞玛纹章', icon: '🏜️', type: 'EMBLEM', effect: '使携带者获得恕瑞玛羁绊 | +300生命值', formula: '金铲铲+金铲铲' },
        
        // ========== 转职装备 - 职业 (金锅锅) ==========
        { id: 59, name: '迅击战士纹章', icon: '⚡', type: 'EMBLEM', effect: '使携带者获得迅击战士羁绊 | +10%攻击速度 +150生命值', formula: '金锅锅+反曲之弓' },
        { id: 60, name: '神谕者纹章', icon: '🔮', type: 'EMBLEM', effect: '使携带者获得神谕者羁绊 | +15法力值 +150生命值', formula: '金锅锅+女神之泪' },
        { id: 61, name: '法师纹章', icon: '🔮', type: 'EMBLEM', effect: '使携带者获得法师羁绊 | +10法术强度 +150生命值', formula: '金锅锅+无用大棒' },
        { id: 62, name: '斗士纹章', icon: '💪', type: 'EMBLEM', effect: '使携带者获得斗士羁绊 | +150生命值 +150生命值', formula: '金锅锅+巨人腰带' },
        { id: 63, name: '征服者纹章', icon: '💪', type: 'EMBLEM', effect: '使携带者获得征服者羁绊 | +10%暴击率 +150生命值', formula: '金锅锅+拳套' },
        { id: 64, name: '裁决战士纹章', icon: '⚔️', type: 'EMBLEM', effect: '使携带者获得裁决战士羁绊 | +10攻击力 +150生命值', formula: '金锅锅+暴风之剑' },
        { id: 65, name: '主宰纹章', icon: '👹', type: 'EMBLEM', effect: '使携带者获得主宰羁绊 | +20魔抗 +150生命值', formula: '金锅锅+负极斗篷' },
        { id: 66, name: '护卫纹章', icon: '🛡️', type: 'EMBLEM', effect: '使携带者获得护卫羁绊 | +20护甲 +150生命值', formula: '金锅锅+锁子甲' },
        { id: 67, name: '枪手纹章', icon: '🔫', type: 'EMBLEM', effect: '使携带者获得枪手羁绊 | +300生命值', formula: '金锅锅+金锅锅' },
        { id: 68, name: '狙神纹章', icon: '🎯', type: 'EMBLEM', effect: '使携带者获得狙神羁绊 | +300生命值', formula: '金锅锅+金锅锅' },
        { id: 69, name: '神盾使纹章', icon: '🛡️', type: 'EMBLEM', effect: '使携带者获得神盾使羁绊 | +300生命值', formula: '金锅锅+金锅锅' },
        
        // ========== 奥恩神器 ==========
        { id: 70, name: '钻石之手', icon: '💎', type: 'ORNN', effect: '法强+生命值，受到伤害时1.5秒免疫伤害', formula: '奥恩锻造' },
        { id: 71, name: '永恒凛冬', icon: '❄️', type: 'ORNN', effect: '攻击减速敌人，7层减速眩晕目标', formula: '奥恩锻造' },
        { id: 72, name: '中娅悖论', icon: '⏳', type: 'ORNN', effect: '法强+双抗，受伤时无敌3秒并清除仇恨', formula: '奥恩锻造' },
        { id: 73, name: '光盾徽章', icon: '🛡️', type: 'ORNN', effect: '双抗+50，每3秒给最低血量友军护盾', formula: '奥恩锻造' },
        { id: 74, name: '幽魂弯刀', icon: '👻', type: 'ORNN', effect: '开局跳后排，8秒后威胁敌方后排', formula: '奥恩锻造' },
        { id: 75, name: '视界专注', icon: '👁️', type: 'ORNN', effect: '双抗+生命+法力，眩晕时造成额外魔法伤害', formula: '奥恩锻造' },
        { id: 76, name: '诡术师之镜', icon: '🪞', type: 'ORNN', effect: '复制携带者，复制体继承装备', formula: '奥恩锻造' },
        { id: 77, name: '无终恨意', icon: '⚔️', type: 'ORNN', effect: '护甲+生命，破盾时造成护盾值伤害', formula: '奥恩锻造' },
        { id: 78, name: '投机者', icon: '🎲', type: 'ORNN', effect: '攻速+暴击，适合攻速流和决斗棋子', formula: '奥恩锻造' },
        { id: 79, name: '巫妖之祸', icon: '💀', type: 'ORNN', effect: '法强+法力，技能后首次普攻造成额外伤害', formula: '奥恩锻造' },
        { id: 80, name: '飞升护符', icon: '🏜️', type: 'ORNN', effect: '双攻+生命，22秒后获得100%生命值和120%伤害', formula: '奥恩锻造' },
        { id: 81, name: '禁忌雕像', icon: '🗿', type: 'ORNN', effect: '双抗+生命，50%护盾转换为生命值', formula: '奥恩锻造' },
        { id: 82, name: '鱼骨头', icon: '🐟', type: 'ORNN', effect: '攻击力+攻速，攻击距离翻倍但随机攻击', formula: '奥恩锻造' },
        { id: 83, name: '死亡之舞', icon: '💃', type: 'ORNN', effect: '攻击力+护甲，延迟承受伤害并回血', formula: '奥恩锻造' },
        { id: 84, name: '连指手套', icon: '🧤', type: 'ORNN', effect: '攻击必定暴击或施法，适合混伤英雄', formula: '奥恩锻造' },
        { id: 85, name: '烁刃', icon: '⚡', type: 'ORNN', effect: '攻速+法强，普攻和技能交替强化', formula: '奥恩锻造' },
        { id: 86, name: '暗裔镰刀', icon: '😈', type: 'ORNN', effect: '攻击力+吸血，获得暗裔羁绊', formula: '奥恩锻造' },
        { id: 87, name: '夜刃', icon: '🌙', type: 'ORNN', effect: '攻击力+暴击+吸血，暴击回血更多', formula: '奥恩锻造' },
        { id: 88, name: '暗爪', icon: '🦅', type: 'ORNN', effect: '攻击力+攻速，攻击降低敌人护甲', formula: '奥恩锻造' },
    ],
    
    // 阵容数据
    lineups: [
    {
        id: 1,
        name: '比尔吉沃特女枪',
        tier: 'S',
        heroes: [55, 21, 48, 47, 23, 56],
        mainCarry: 55,
        equipment: {
            main: [11, 12, 14],
            sub: [35, 34, 37]
        },
        traits: ['6比尔吉沃特', '4枪手', '2约德尔人'],
        description: '16.3b版本T0阵容，女枪伤害大幅提升58%',
        winRate: '32%+',
        stages: {
            early: {
                level: '2-1至3-2',
                economy: '连胜连败均可，保证血量健康',
                heroes: ['崔斯特', '格雷福斯', '普朗克'],
                equipment: '优先合成女枪装备：无尽、巨杀、饮血',
                tips: '用比尔吉沃特2费卡过渡，女枪16.3b大幅加强'
            },
            mid: {
                level: '3-2至4-7',
                economy: '3-2拉6人口，4-1拉7级',
                heroes: ['找两星女枪、诺提勒斯'],
                equipment: '女枪：无尽+巨杀+饮血/轻语',
                tips: '女枪主要技能伤害从145/220提升至230/345'
            },
            late: {
                level: '5-1至6-1',
                economy: '5-1拉8人口，补齐6比尔吉沃特',
                heroes: ['菲兹、塔姆等五费卡'],
                equipment: '前排：日炎、反甲、龙牙',
                tips: '比尔吉沃特虽被削弱但仍提供15%免费双攻'
            }
        }
    },
    {
        id: 2,
        name: '暗裔剑魔',
        tier: 'S',
        heroes: [93, 35, 52, 61],
        mainCarry: 93,
        equipment: {
            main: [86, 11, 14],
            sub: [35, 34, 40]
        },
        traits: ['3暗裔', '4征服者', '2诺克萨斯'],
        description: '16.3b版本T0阵容，暗裔羁绊伤害提升233%',
        winRate: '31%+',
        stages: {
            early: {
                level: '2-1至3-2',
                economy: '连胜连败均可，保证血量',
                heroes: ['德莱厄斯', '贝蕾亚'],
                equipment: '优先合成暗裔镰刀（必备）',
                tips: '用征服者/诺克萨斯棋子过渡'
            },
            mid: {
                level: '3-2至4-7',
                economy: '7级找剑魔，优先合成暗裔镰刀',
                heroes: ['剑魔、德莱厄斯、安倍萨'],
                equipment: '剑魔：暗裔镰刀+无尽+饮血/血手',
                tips: '3暗裔伤害从100提升至333，提升巨大'
            },
            late: {
                level: '5-1至6-1',
                economy: '8人口补齐3暗裔羁绊',
                heroes: ['雷克顿等高费卡'],
                equipment: '前排：日炎、反甲、狂徒',
                tips: '剑魔生命值提升至1000，法力值降低至0/20'
            }
        }
    },
    {
        id: 3,
        name: '虚空卡莎',
        tier: 'A',
        heroes: [59, 44, 24, 12, 71, 72, 3],
        mainCarry: 59,
        equipment: {
            main: [18, 11, 12],
            sub: [34, 37, 36]
        },
        traits: ['4虚空', '4主宰', '3祖安'],
        description: '16.3版本7级即可解锁，2虚空必给进攻型突变',
        winRate: '29%+',
        stages: {
            early: {
                level: '2-1至3-2',
                economy: '正常过渡，连胜连败均可',
                heroes: ['蚂蚱、科加斯、雷克赛'],
                equipment: '优先合成卡莎装备：羊刀、无尽、巨杀',
                tips: '2虚空必给进攻型突变，前期战力更强'
            },
            mid: {
                level: '3-2至4-7',
                economy: '7级即可解锁卡莎（16.3版本优化）',
                heroes: ['凑齐虚空+主宰羁绊'],
                equipment: '卡莎：羊刀、无尽、巨杀',
                tips: '7级解锁提前发力，节奏更好'
            },
            late: {
                level: '5-1至6-1',
                economy: '8人口成型，9人口补吉格斯',
                heroes: ['4虚空4主宰3祖安阵型'],
                equipment: '前排：反甲、龙牙、石像鬼',
                tips: '虚空突变优化，主宰纹章虽被削弱但仍可用'
            }
        }
    },
    {
        id: 4,
        name: '暗影岛滑板鞋',
        tier: 'A',
        heroes: [58, 79, 87, 80, 53],
        mainCarry: 58,
        equipment: {
            main: [18, 11, 12],
            sub: [30, 26, 31]
        },
        traits: ['5暗影岛', '3枪手', '2神谕者'],
        description: '16.3版本BUG修复，锤石加强，千珏机制改动',
        winRate: '28%+',
        stages: {
            early: {
                level: '2-1至3-2',
                economy: '连胜连败均可，保证血量',
                heroes: ['佛耶戈、约里克'],
                equipment: '优先合成滑板鞋装备：羊刀、无尽',
                tips: '用暗影岛棋子过渡'
            },
            mid: {
                level: '3-2至4-7',
                economy: '7级找两星滑板鞋和锤石',
                heroes: ['滑板鞋、锤石、卑尔维斯'],
                equipment: '锤石：青龙刀、珠光护手、大天使',
                tips: '滑板鞋技能后摇BUG已修复，输出更流畅'
            },
            late: {
                level: '5-1至6-1',
                economy: '8人口补充千珏开启闭环',
                heroes: ['千珏、费德提克'],
                equipment: '前排：日炎、反甲、龙牙',
                tips: '锤石被动吸血提升至75%，千珏改为提供护盾'
            }
        }
    },
    {
        id: 5,
        name: '皮尔特沃夫梅尔',
        tier: 'A',
        heroes: [86, 17, 64, 30, 8, 81],
        mainCarry: 86,
        equipment: {
            main: [25, 26, 30],
            sub: [35, 34, 40]
        },
        traits: ['6皮尔特沃夫', '4法师', '2斗士'],
        description: '16.3b版本梅尔大幅加强，皮尔特沃夫羁绊优化',
        winRate: '27%+',
        stages: {
            early: {
                level: '2-1至3-2',
                economy: '连胜连败均可',
                heroes: ['奥莉安娜', '凯特琳'],
                equipment: '优先合成法术装备',
                tips: '用皮尔特沃夫2费卡过渡'
            },
            mid: {
                level: '3-2至4-7',
                economy: '7级找发条、萨勒芬妮',
                heroes: ['发条、萨勒芬妮、蔚'],
                equipment: '法师装备：帽子、珠光、青龙',
                tips: '发条解锁条件降低，更容易获得'
            },
            late: {
                level: '5-1至6-1',
                economy: '8人口找梅尔，补齐6皮尔特沃夫',
                heroes: ['梅尔、海克斯霸龙'],
                equipment: '梅尔：帽子、珠光、青龙/大天使',
                tips: '梅尔飞弹伤害从40/60/90提升至65/100/150'
            }
        }
    },
    {
        id: 6,
        name: '以绪塔尔奇亚娜',
        tier: 'A',
        heroes: [5, 18, 46, 26, 65, 63],
        mainCarry: 5,
        equipment: {
            main: [11, 12, 15],
            sub: [30, 31, 26]
        },
        traits: ['5以绪塔尔', '2裁决战士', '2神谕者'],
        description: '16.3版本以绪塔尔探险优化，奇亚娜太阳碎片获取提升',
        winRate: '26%+',
        stages: {
            early: {
                level: '2-1至3-2',
                economy: '完成以绪塔尔小任务，积累太阳碎片',
                heroes: ['奇亚娜', '巴德', '妮蔻'],
                equipment: '优先合成奇亚娜装备：无尽、巨杀、轻语',
                tips: '奇亚娜太阳碎片获取大幅提升（20/30/40⇒30/50/80）'
            },
            mid: {
                level: '3-2至4-7',
                economy: '7级找两星奇亚娜和巴德',
                heroes: ['奇亚娜、巴德、米利欧'],
                equipment: '巴德：青龙刀、大天使、珠光',
                tips: '以绪塔尔探险难度降低，更容易完成'
            },
            late: {
                level: '5-1至6-1',
                economy: '8人口成型，兑换以绪塔尔奖励',
                heroes: ['斯卡纳、奈德丽等高费卡'],
                equipment: '前排：日炎、反甲、狂徒',
                tips: '以绪塔尔奖励优化，更容易获得英雄复制器'
            }
        }
    },
    {
        id: 7,
        name: '巨神峰龙王（已削弱）',
        tier: 'B',
        heroes: [22, 51, 42, 75, 68, 54, 78, 80, 94],
        mainCarry: 94,
        equipment: {
            main: [20, 26, 30],
            sub: [35, 34, 37]
        },
        traits: ['6巨神峰', '2神盾使'],
        description: '16.3b版本大幅削弱，不再推荐',
        winRate: '22%',
        stages: {
            early: {
                level: '2-1至3-2',
                economy: '经济类强化开局',
                heroes: ['佐伊', '厄斐琉斯', '蕾欧娜'],
                equipment: '优先合成龙王装备：纳什、珠光、青龙',
                tips: '龙王法力值大砍（25/75⇒0/85），起手慢'
            },
            mid: {
                level: '3-5至4-7',
                economy: '3-5拉7级，找宝石解锁皎月',
                heroes: ['两星蕾欧娜解锁皎月'],
                equipment: '龙王解锁后拆装备',
                tips: '流星伤害腰斩（1000/1500⇒500/750）'
            },
            late: {
                level: '5-1至6-1',
                economy: '5-1拉8级',
                heroes: ['补齐巨神峰羁绊'],
                equipment: '前排肉装',
                tips: '龙王已从T0跌落至B级，不推荐'
            }
        }
    },
    {
        id: 8,
        name: '闭环金克丝（已削弱）',
        tier: 'B',
        heroes: [38, 49, 54, 68, 16, 17],
        mainCarry: 38,
        equipment: {
            main: [18, 15, 12],
            sub: [35, 34, 37]
        },
        traits: ['4护卫', '4枪手'],
        description: '16.3b版本削弱，竞争力下降',
        winRate: '24%',
        stages: {
            early: {
                level: '2-1至3-2',
                economy: '连胜连败均可',
                heroes: ['金克丝', '瑟庄妮', '布里茨'],
                equipment: '优先合成金克丝装备：羊刀、轻语、巨杀',
                tips: '金克丝技能伤害被削弱（65/100/155⇒60/80/145）'
            },
            mid: {
                level: '3-2至4-7',
                economy: '3-2拉6人口，4-1拉7级',
                heroes: ['找两星金克丝、布隆'],
                equipment: '金克丝：羊刀+轻语+巨杀',
                tips: '发条护盾大幅削弱（80/120/200/280⇒60/90/130/200）'
            },
            late: {
                level: '5-1至6-1',
                economy: '5-1拉8人口',
                heroes: ['补齐羁绊'],
                equipment: '前排肉装',
                tips: '金克丝已从T0跌落至B级，不推荐'
            }
        }
    }
]
};
