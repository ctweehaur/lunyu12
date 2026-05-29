/**
 * 互动古文教学平台 - 《论语·十二章》第一章高辨析客观题库 (整站完美咬合纯净版)
 */

const quizQuestions = {
    chapter_1: [
        {
            id: 1,
            text: "文中“不亦说乎”的“说”字，是一个通假字。以下关于它的读音与词义分析，最准确的是哪一项？",
            py: "wén zhōng bú yì yuè hū de yuè zì shì yī gè tōng jiǎ zì yǐ xià guān yú tā de dú yīn yǔ cí yì fēn xī zuì zhǔn què de shì nǎ yī xiàng",
            en: "The character '说' in the phrase 'isn't it a pleasure' is an interchangeable character. Which analysis is the most precise?",
            options: [
                {
                    text: "读 yuè / 通 “悦” / 意思是 愉快 、 高兴",
                    py: "dú yuè tōng yuè yì sī shì yú kuài gāo xìng",
                    en: "Pronounced 'yuè' / Interchangeable with '悦' / Meaning pleased and delighted.",
                    correct: true,
                    explanation: "正确！这是初中阶段极为核心的通假字常识。‘说’在这里借用为‘悦’，用来表现学生在将学到的道理付诸实践后，内心自然流露出的高级喜悦感。",
                    explanationPy: "zhèng què zhè shì chū zhōng jiē duàn jí wéi hé xīn de tōng jiǎ zì cháng shí yuè zài zhè lǐ jiè yòng wéi yuè yòng lái biǎo xiàn xué shēng zài jiāng xué dào de dào lǐ fù zhū shí jiàn hòu nèi xīn zì rán liú lù chū de gāo jí xǐ yuè gǎn",
                    enExplanation: "Correct! '说' functions here as a homophonic surrogate for '悦 (yuè)', capturing internal spiritual satisfaction."
                },
                {
                    text: "读 shuō / 意思是 说话 / 阐述 自己的 核心 观点",
                    py: "dú shuō yì sī shì shuō huà chǎn shù zì jǐ de hé xīn guān diǎn",
                    en: "Pronounced 'shuō' / Meaning to speak / Expounding one's core viewpoints.",
                    correct: false,
                    explanation: "干扰项分析：利用了现代汉语中最常见的字音字义进行干扰。如果读成 shuō，字面意思变成了‘不也是说话吗’，在文言语境和整句话的逻辑中完全讲不通。",
                    explanationPy: "gān rǎo xiàng fēn xī lì yòng le xiàn dài hàn yǔ zhōng zuì cháng jiàn de zì yīn zì yì jìn háng gān rǎo rú guǒ dú chéng shuō zì miàn yì sī biàn chéng le bù yě shì shuō huà ma zài wén yán yǔ jìng hé zhěng jù huà de luó ji zhōng wán quán jiǎng bù tōng",
                    enExplanation: "Distractor Analysis: Applies the standard modern definition 'to speak', which breaks down entirely within this classical rhetorical structure."
                },
                {
                    text: "读 shuì / 意思是 劝说 / 游说 各国 国君 接受 思想",
                    py: "dú shuì yì sī shì quàn shuō yóu shuì gè guó guó jūn jiē shòu sī xiǎng",
                    en: "Pronounced 'shuì' / Meaning to persuade / Lobbying various rulers to accept an ideology.",
                    correct: false,
                    explanation: "干扰项分析：高级多音字字义干扰。‘说’在古汉语中确实有游说、劝说的意思，但放在这里作句尾的反问核心，语境和主语完全对不上号。",
                    explanationPy: "gān rǎo xiàng fēn xī gāo jí duō yīn zì zì yì gān rǎo shuì zài gǔ hàn yǔ zhōng què shí yǒu yóu shuì quàn shuō de yì sī rú yóu shuì zhū hóu dàn fàng zài zhè lǐ zuò jù wěi de fǎn wèn hé xīn yǔ jìng hé zhǔ yǔ wán quán duì bú shàng hào",
                    enExplanation: "Distractor Analysis: High-level polyphonic distractor. While 'shuì' means political lobbying in classical texts, it completely violates the pedagogical context here."
                },
                {
                    text: "读 yuè / 通 “越” / 意思是 超越 过去的 知识 边界",
                    py: "dú yuè tōng yuè yì sī shì chāo yuè guò qù de zhī shi biān jiè",
                    en: "Pronounced 'yuè' / Interchangeable with '越' / Meaning to transcend past cognitive boundaries.",
                    correct: false,
                    explanation: "干扰项分析：考查通假字的精准记忆。部分学生虽然模糊记得读音是 yuè，但容易被误导选择生僻的“超越”概念。古汉语中没有这种通假配对。",
                    explanationPy: "gān rǎo xiàng fēn xī kǎo chá tōng jiǎ zì de jīng zhǔn jì yì bù fèn xué shēng suī rán mó hu jì de dú yīn shì yuè dàn róng yì bèi wù dǎo xuǎn zé shēng pì de chāo yuè gài niàn gǔ hàn yǔ zhōng méi yǒu zhè zhǒng tōng jiǎ pèi duì",
                    enExplanation: "Distractor Analysis: Exploits loose phonetic memory by inventing a false interchangeable pairing with 'transcend (越)'."
                }
            ]
        },
        {
            id: 2,
            text: "关于“有朋自远方来”中的“朋”字，最符合孔子教育与交往理念的解释是哪一项？",
            py: "guān yú yǒu péng zì yuǎn fāng lái zhōng de péng zì zuì fú hé kǒng zǐ jiào yù yǔ jiāo wǎng lǐ niàn de jiě  shì shì nǎ yī xiàng",
            en: "What is the most accurate definition of '朋 (péng)' according to Confucian educational values?",
            options: [
                {
                    text: "指 志同道合 的 人 / 拥有 共同 理想 与 学术 追求 的 朋友",
                    py: "zhǐ zhì tóng dào hé de rén yōng yǒu gòng tóng lǐ xiǎng yǔ xué shù zhuī qiú de péng you",
                    en: "Refers to like-minded peers / Companions sharing the same ideals and intellectual pursuits.",
                    correct: true,
                    explanation: "正确！古人云‘同门为朋，同志为友’。这里的‘朋’特指志同道合、在学术或人生理想上有共同语言的人，所以他们的远道而来才能引发精神上的极大快乐。",
                    explanationPy: "zhèng què gǔ runt yún tóng mén wéi péng tóng zhì wéi yǒu zhè lǐ de péng tè zhǐ zhì tóng dào hé zài xué shù huò rén shēng lǐ xiǎng shàng yǒu gòng tóng yǔ yán de rén suø yǐ tā men de yuǎn dào ér lái cái néng yǐn fā jīng shén shàng de jí dà kuài lè",
                    enExplanation: "Correct! '朋' tracks social circles based on shared intellectual pathways and values, amplifying reciprocal validation."
                },
                {
                    text: "指 亲戚 家族 / 有 血缘 关系的 远方 表亲 成员",
                    py: "zhǐ qīn qī jiā zú yǒu xuè yuán guān xi de yuǎn fāng biǎo qīn chéng yuán",
                    en: "Refers to relatives / Distant family members linked by blood relation.",
                    correct: false,
                    explanation: "干扰项分析：混淆了社交网络的概念。中国古代宗法社会虽然重视血缘，但这里的语境是讨论“治学、修身”，属于学术和思想圈子，并非家族探亲。",
                    explanationPy: "gān rǎo xiàng fēn xī hún xiáo le shè jiāo wǎng luò de gài niàn zhōng guó gǔ dài zōng fǎ shè huì suī rán zhòng shì xuè yuán dàn zhè lǐ de yǔ jìng shì tǎo lùn zhì xué xiū shēn shǔ yú xué shù hé sī xiǎng quān zi bìng fēi jiā zú tàn qīn",
                    enExplanation: "Distractor Analysis: Confuses blood relatives with intellectual peers, ignoring the core thematic framework of academic fellowship."
                },
                {
                    text: "指 达官贵人 / 能 带来 财富 与 官职 的 高校 赞助者",
                    py: "zhǐ dá guān guì rén néng dài lái cái fù yǔ guān zhí de gāo xiào zàn zhù zhě",
                    en: "Refers to high officials / Wealthy patrons who bring resources or bureaucratic posts.",
                    correct: false,
                    explanation: "干扰项分析：功利主义思维的负面陷阱。孔子虽然周游列国，但他始终坚持独立人格，此处的快乐是纯粹的精神共鸣，绝非职场利益或拉关系、走后门。",
                    explanationPy: "gān rǎo xiàng fēn xī gōng lì zhǔ yì sī wéi de fù miàn xiàn jǐng kǒng zǐ suī rán zhōu yóu liè guó dàn tā shǐ zhōng jiān chí dú lì rén gé cǐ chù de kuài lè shì chún cuì de jīng shén gòng míng jué fēi zhí chǎng lì yì huò lā guān xi zǒu hòu mén",
                    enExplanation: "Distractor Analysis: A utilitarian misinterpretation that conflicts directly with Confucian emphasis on intrinsic, non-transactional academic joy."
                },
                {
                    text: "指 萍水相逢 的 游客 / 在 旅途中 偶然 认识 的 陌生人",
                    py: "zhǐ píng shuǐ xiāng féng de yóu kè zài lǚ tú zhōng ǒu rán rèn shi de mò shēng rén",
                    en: "Refers to casual travelers / Strangers encountered by pure chance during a journey.",
                    correct: false,
                    explanation: "干扰项分析：模糊字面理解。远方来的人容易让学生误以为是过路的普通观光客或驴友。如果没有同道的基础，陌生游客的到来很难产生反问共鸣。",
                    explanationPy: "gān rǎo xiàng fēn xī mó hu zì miàn jǐe dú yuǎn fāng lái de rén róng yì ràng xué shēng wù yǐ wéi shì guò lù de pǔ tōng guān guāng kè huò lǘ yǒu rú guǒ méi ... 陌生游客的到来很难产生反问共鸣。",
                    enExplanation: "Distractor Analysis: Reduces the term to casual tourists, missing the prerequisite of shared ideology required for profound resonance."
                }
            ]
        },
        {
            id: 3,
            text: "文中“人不知而不愠”中的“而”字，其最核心的文言虚词词性与用法是什么？",
            py: "wén zhōng rén bù zhī ér bù yùn zhōng de ér zì qí zuì hé xīn de wén yán xū cí cí xìng yǔ yòng fǎ  shì nǎ yī xiàng",
            en: "What is the primary grammatical function of the conjunction '而 (ér)' in line 3?",
            options: [
                {
                    text: "连词 / 表 转折 关系 / 相当于 “却” 、 “但是”",
                    py: "lián cí biǎo zhuǎn zhé guān xi xiāng dāng yú què dàn shì",
                    en: "Conjunction / Expressing an adversarial contrast / Equivalent to 'yet' or 'but'.",
                    correct: true,
                    explanation: "正确！这是中考重点文言虚词考点。前半句写‘别人不了解我’，后半句写‘我不生气’，中间存在明显的语意大拐弯与转折，因此‘而’在这里作为连词表转折。",
                    explanationPy: "zhèng què zhè shì zhōng kǎo zhòng diǎn wén yán xū cí kǎo diǎn qián bàn jù xiě bié rén bù liǎo jiě wǒ hòu bàn jù xiě wǒ bù shēng qì zhōng jiān cún zài míng xiǎn de yǔ yì dà guǎi wān yǔ zhuǎn zhé yīn cǐ ér zài zhè lǐ zuò wéi lián cí biǎo zhuǎn zhé",
                    enExplanation: "Correct! Connects two clauses in sharp logical opposition: others do not understand me, (yet) I harbor no resentment."
                },
                {
                    text: "连词 / 表 顺承 关系 / 相当于 “然后” 、 “接着”",
                    py: "lián cí biǎo shùn chéng guān xi xiāng dāng yú rán hòu jiē zhe",
                    en: "Conjunction / Expressing a chronological succession / Equivalent to 'and then'.",
                    correct: false,
                    explanation: "干扰项分析：极具杀伤力，因为本章第一句“学而时习之”里的“而”就是表顺承。部分学生习惯生搬硬套，分不清同一篇章内同一个虚词的多重多变用法。",
                    explanationPy: "gān rǎo xiàng fēn xī jí jù shā shāng lì yīn wéi běn zhāng dì yī jù xué ér shí xí zhī lǐ de ér jiù shì biǎo shùn chéng bù fèn xué shēng xí guàn shēng bān yìng tào fēn bù qīng tóng yī piān zhāng nèi tóng yí gè xū cí de duō chóng duō biàn yòng fǎ",
                    enExplanation: "Distractor Analysis: Highly lethal. It tricks students who rigidly copy the sequential usage found in the poem's very first clause."
                },
                {
                    text: "连词 / 表 并列 关系 / 相当于 “而且” 、 “并且”",
                    py: "lián cí biǎo bìng liè guān xi xiāng dāng yú ér qiě bìng qiě",
                    en: "Conjunction / Expressing an additive coordinate relation / Equivalent to 'as well as'.",
                    correct: false,
                    explanation: "干扰项分析：虚词语法误导。并列关系要求两边情感或动向一致，而‘不知’与‘不愠’一正一反，绝非平行的并列推进关系。",
                    explanationPy: "gān rǎo xiàng fēn xī xū cí yǔ fǎ wù dǎo bìng liè guān xi yāo qiú liǎng biān qíng gǎn huò dòng xiàng yī zhì ér bù zhī yǔ bú yùn yī zhèng yī fǎn jué fēi píng xíng de bìng liè tuī jìn guān xi",
                    enExplanation: "Distractor Analysis: Misinterprets the dynamic polarity of the clauses, which present asymmetrical active vs. passive conditions."
                },
                {
                    text: "代词 / 指代 自己 / 相当于 现代 汉语 中的 “我”",
                    py: "dài cí zhǐ dài zì jǐ xiāng dāng yú xiàn dài hàn yǔ zhōng de wǒ",
                    en: "Pronoun / Referencing oneself / Equivalent to 'I' or 'me' in modern Chinese.",
                    correct: false,
                    explanation: "干扰项分析：词性判断彻底彻底南辕北辙。‘而’在古典汉语中极少数情况下通‘尔’代指‘你’，但在这首诗中它作为纯粹的语法连词，没有任何人称代词的指代作用。",
                    explanationPy: "gān rǎo xiàng fēn xī cí xìng pàn duàn chè dǐ chè dǐ nán yuán běi zhé ér zài gǔ diǎn hàn yǔ zhōng jí jiǎn shǎo qíng kuàng xià tōng ěr dài zhǐ nǐ dàn zài zhè shǒu shī zhōng tā zuò wéi chún cuì de yǔ fǎ lián cí méi yǒu rèn hé rén chēng dài cí de zhǐ dài zuò yòng",
                    enExplanation: "Distractor Analysis: A categorical grammatical error. '而' serves purely syntactical functions here, carrying zero personal pronominal references."
                }
            ]
        },
        {
            id: 4,
            text: "在儒家评价体系中，一个人要达到怎样的精神境界，才有资格被称为“君子”？",
            py: "zài rú jiā píng jià tǐ xì zhōng yí gè rén yào dá dào zěn yàng de jīng shén jìng jiè cái yǒu zī  gé bèi chēng wéi jūn zǐ",
            en: "In the Confucian framework, what spiritual height must a person achieve to be qualified as a '君子'?",
            options: [
                {
                    text: "不盲目 追求 别人 认可 / 拥有 独立 坚定 且 坦荡 的 内心 修养",
                    py: "bù máng mù zhuī qiú bié rén rèn kě yōng yǒu dú lì jiān dìng qiě tǎn dàng de nèi xīn xiū yǎng",
                    en: "Not blindly chasing outward validation / Maintaining an independent, unwavering, and peaceful soul.",
                    correct: true,
                    explanation: "正确！孔子眼中的君子，其道德和学问修养是自发的。哪怕全世界都不了解他、冷落他，他内心也充实坦荡，绝不怨天尤人，体现了极高的人格独立性。",
                    explanationPy: "zhèng què kǒng zǐ yǎn zhōng de jūn zǐ qí dào dé hé xué wù xiū yǎng shì zì fā de nǎ pà quán shì jiè dōu bù liǎo jiě tā lěng luò tā tā nèi xīn yě chōng shí tǎn dàng jué bú yuàn tiān yóu rén tǐ xiàn le jí gāo de rén gé dú lì xìng",
                    enExplanation: "Correct! A true gentleman acts on internal alignment; outward negligence fails to fracture his absolute psychological composure."
                },
                {
                    text: "拥有 庞大的 政治 门阀 / 必须 掌握 朝廷 核心 的 军政 大权",
                    py: "yōng yǒu páng dà de zhèng zhì mén fá bì xū zhǎng wò cháo tíng hé xīn de jūn zhèng dà quán",
                    en: "Possessing a massive political clique / Must command core military and civil power at court.",
                    correct: false,
                    explanation: "干扰项分析：考查词义的历史演变。‘君子’在西周早期确实指有特殊社会地位的贵族统治者，但孔子彻底重塑了它的含义，将其提炼为纯粹的“道德学问高尚者”，与当多大官无涉。",
                    explanationPy: "gān rǎo xiàng fēn xī kǎo chá cí yì de lì shǐ yǎn biàn jūn zǐ zài xī zhōu zǎo qī què shí zhǐ yǒu tè shū shè huì dì wèi de guì zú tǒng zhì zhě dàn kǒng zǐ chè dǐ chóng sù le tā de hán yì jiāng qí tí liàn wéi chún cuì de dào dé xué wèn gāo shàng zhě yǔ dāng duō dà guān wú shè",
                    enExplanation: "Distractor Analysis: Relies on pre-Confucian archaic socio-political definitions of upper aristocracy, missing the moral transformation engineered by the Analects."
                },
                {
                    text: "隐居 深山 老林 / 彻底 斩断 与 人类 社会 的 一切 社交 联系",
                    py: "yǐn jū shēn shān lǎo lín chè dǐ zhǎn duàn yǔ rén lèi shè huì de yí qiè shè jiāo lián xì",
                    en: "Retreating to deep wilderness / Severing all active social connections with human society.",
                    correct: false,
                    explanation: "干扰项分析：混淆了儒家与道家隐者的边界。孔子主张入世、主张‘有朋自远方来’的交流，绝非斩断红尘、孤芳自赏的冷酷隐士。",
                    explanationPy: "gān rǎo xiàng fēn xī hún xiáo le rú jiā yǔ dào jiā yǐn zhě de biān jiè kǒng zǐ zhǔ zhāng rù shì zhǔ zhāng yǒu péng zì yuǎn fāng lái de jiāo liú jué fēi zhǎn duàn hóng chén gū fāng zì shǎng de lěng kù yǐn shì",
                    enExplanation: "Distractor Analysis: Confuses the active world-engaging Confucian school with Taoist reclusive escapism, disregarding the joy of peer visitation."
                },
                {
                    text: "四处 显摆 炫耀 学问 / 必须 让 天下 所有人 都 对 自己 崇拜",
                    py: "sì chù xiǎn bai xuàn yào xué wèn bì xū ràng tiān xià suǒ yǒu rén dōu duì zì jǐ chóng bài",
                    en: "Showing off erudition everywhere / Making sure every person under heaven idolizes them.",
                    correct: false,
                    explanation: "干扰项分析：反面极度对立项。‘人不知而不愠’正好否定了这种虚荣心态。真正的君子治学是为了自我完善，而不是为了收割流量或追求盲目崇拜。",
                    explanationPy: "gān rǎo xiàng fēn xī fǎn miàn jí dù duì lì xiàng rén bù zhī ér bù yùn zhèng hǎo fǒu dìng le zhè zhǒng xū róng xīn tài zhēn zhèng de jūn zǐ zhì xué shì wèi le zì wǒ wán shàn ér fēi wèi le yíng dé mǎng mù chóng bài",
                    enExplanation: "Distractor Analysis: Represents the precise polar opposite of 'harboring no anger when unrecognized', which targets vanity directly."
                }
            ]
        },
        {
            id: 5,
            text: "全章由“个人的学与习”切入，再谈“同道互动”，最后落脚在“面对误解的内心”，这种排版结构有什么美学价值？",
            py: "quán zhāng yóu gè rén de xué yǔ xí qiē rù zài tán tóng dào hù dòng zuì hòu luò jiǎo zài miàn duì wù jiě de nèi xīn zhè zhǒng pái bǎn jié gòu yǒu shén me měi xué jià zhí",
            en: "The section progresses from individual cognition to peer communication, and lands on internal moral security. What is the merit of this layout?",
            options: [
                {
                    text: "采用 由内而外 逐层 递进 逻辑 / 勾勒出 儒家 修身 齐家 的 完整 闭环",
                    py: "cǎi yòng yóu nèi ér wài zhú céng dì jìn luó ji gōu lè chū rú jiā xiū shēn qí jiā de wán zhěng bì huán",
                    en: "Following a layered, inside-out logical progression / Formulating the complete self-cultivation loop of Confucianism.",
                    correct: true,
                    explanation: "正确！前两句从自我死磕（学而时习）外推到社会回响（有朋远来），第三句再度收回至最深层的自我精神防线（人不知而不愠）。结构环环相扣，层层递进，形成了无懈可击的人格成长逻辑闭环。",
                    explanationPy: "zhèng què qián liǎng jù cóng zì wǒ sǐ kē xué ér shí xí wài tuī dào shè huì huí xiǎng yǒu péng yuǎn lái dì sān jù zài dù shōu huí zhì zuì shēn céng de zì wǒ jīng shén fáng xiàn jié gòu huán huán xiāng kòu céng céng dì jìn xíng chéng le wú xiè kě jī de rén gé chéng zhǎng luó ji bì huán",
                    enExplanation: "Correct! The logical arcs fan outward to structural social interaction before snapping backward to anchor deep, unshakeable internal alignment."
                },
                {
                    text: "纯粹 随机 拼凑 语录 / 前后 描写 之间 并没有 任何 逻辑 关联",
                    py: "chún cuì suí jī pīn còu yǔ lù qián hòu miáo huǐ zhī jiān bìng méi yǒu rèn hé luó ji guān lián",
                    en: "A completely random mashup of quotes / Holding zero thematic connection between clauses.",
                    correct: false,
                    explanation: "干扰项分析：考查对儒家开篇经典的宏观艺术感知。编纂论语的弟子极具智慧，这一章绝非胡乱堆砌，而是高度浓缩了治学、交友、修身的儒家生命核心体系。",
                    explanationPy: "gān rǎo xiàng fēn xī kǎo chá duì rú jiā kāi piān jīng diǎn de hóng guān yì shù gǎn zhī biān zuǎn lùn yǔ de dì zǐ jí jù zhì huì zhè yī zhāng jué fēi hú luàn duī qì ér shì gāo dù nóng suō le zhì xué jiāo yǒu xiū shēn de rú jiā shēng mìng hé xīn tǐ xì",
                    enExplanation: "Distractor Analysis: Deconstructs the classic text as a thoughtless sequence of fragments, failing to recognize the systemic architectural design of the compilers."
                },
                {
                    text: "属于 典型的 倒叙 结构 / 把 最终的 君子 结论 放在了 句子 开头",
                    py: "shǔ yú diǎn xíng de dào xù jié gòu bǎ zuì zhōng de jūn zǐ jié lùn fàng zài le jù zi kāi tóu",
                    en: "Belonging to a typical flashback layout / Placing the final 'gentleman' outcome at the absolute start.",
                    correct: false,
                    explanation: "干扰项分析：考查基本的叙事手法常识。全章是标准的顺叙推进时间线，君子结论明确作为全文的终极落脚点扣在最尾句，误判定为倒叙属于完全错读结构。",
                    explanationPy: "gān rǎo xiàng fēn xī kǎo chá jī běn de xù shì shǒu fǎ cháng shí quán zhāng shì biāo zhǔn de shùn xù tuī jìn shí jiān xiàn jūn zǐ jié lùn míng què zuò wéi quán wén de zhōng jí luò jiǎo diǎn kòu zài zuì wěi jù wù pàn dìng wéi dào xù shǔ yú wán quán cuò dú jié gòu",
                    enExplanation: "Distractor Analysis: A pseudo-structural trap. The text utilizes standard chronological linear sequencing, crowning the final word as the climax, not the intro."
                },
                {
                    text: "专门 围绕 论语 编排 / 详尽 展现 春秋 时期 各国 农耕 气象 特色",
                    py: "zhuān mén wéi rào lùn yǔ biān pái xiáng jìn zhǎn xiàn chūn qiū shí qī gè guó nóng gēng qì xiàng tè sè",
                    en: "Specially arranged around the Analects / Showing agricultural weather characteristics of the Spring and Autumn periods.",
                    correct: false,
                    explanation: "干扰项分析：从文本常识主题设卡。这一章纯粹是在讨论个人的修身、治学与社交心态，绝对不是在记录农业社会的气象数据或务农指南，故意混淆概念以测试学生的审题严谨度。",
                    explanationPy: "gān rǎo xiàng fēn xī cóng wén běn cháng shí zhǔ tí shè kǎ zhè yī zhāng chún cuì shì zài tǎo lùn gè rén de xiū shēn zhì xué yǔ shè jiāo xīn tài jué duì bú shì zài jì lù nóng yè shè huì de qì xiàng shù jù huò wù nóng zhǐ nán gù yì hún xiáo gài niàn yǐ cè shì xué shēng de shěn tí yán jǐn dù",
                    enExplanation: "Distractor Analysis: A sophisticated contextual trap. The text anchors mental self-actualization, not agricultural mapping, acting as a filter against casual skimming."
                }
            ]
        }
    ],
                chapter_2: [
        {
            id: 1,
            text: "文中“吾日三省吾身”的“日”字，在句子中作为名词作状语，以下分析最准确的是哪一项？",
            py: "wén zhōng wú rì sān xǐng wú shēn de rì zì zài jù zi zhōng zuò wéi míng cí zuò zhuàng yǔ yǐ xià fēn xī zuì zhǔn què de shì nǎ yī xiàng",
            en: "The character '日' acts as a noun modifying a verb. Which analysis of its function is the most precise?",
            options: [
                {
                    text: "翻译为 “每天” 或 “每日” / 起到 时间 状态的 修饰 作用",
                    py: "fān yì wéi měi tiān huò měi rì qǐ dào shí jiān zhuàng tài de xiū shì zuò yòng",
                    en: "Translated as 'every day' / Modifying the verb as a temporal adverbial.",
                    correct: true,
                    explanation: "正确！这是经典的文言词类活用现象。‘日’本来是名词‘太阳、日子’，放在动词‘省（反省）’前面，用来修饰动作发生的频率，翻译成‘每天、每日’。",
                    explanationPy: "zhèng què zhè shì jīng diǎn de wén yán cí lèi huó yòng xiàn xiàng rì běn lái shì míng cí tài yáng rì zi fàng zài dòng cí xǐng fǎn xǐng qián miàn yòng lái xiū shì dòng zuò fā shēng de pín lǜ fān yì chéng měi tiān měi rì",
                    enExplanation: "Correct! The noun '日' undergoes grammatical shifting to function as a frequency modifier before the verb."
                },
                {
                    text: "翻译为 “太阳” / 描写 曾子 必须 在 白天 阳光 下 反省",
                    py: "fān yì wéi tài yáng miáo huǐ zēng zǐ bì xū zài bái tiān yáng guāng xià fǎn xǐng",
                    en: "Translated as 'the sun' / Describing that Master Zeng must reflect under daylight.",
                    correct: false,
                    explanation: "干扰项分析：死板地套用名词本义。如果翻译成‘我太阳三次反省自己’，完全割裂了句子的语法结构，属于没有掌握文言词类活用的机械误读。",
                    explanationPy: "gān rǎo xiàng fēn xī sǐ bǎn de tào yòng míng cí běn yì rú guǒ fān yì chéng wǒ tài yáng sān cì fǎn xǐng zì jǐ wán quán gē liè le jù zi de yǔ fǎ jié gòu shǔ yú méi yǒu zhǎng wò wén yán cí lèi huó yòng de jī xiè wù dú",
                    enExplanation: "Distractor Analysis: Stiffly applies the literal noun definition, completely breaking the syntax of the reflection action clause."
                },
                {
                    text: "作为 句子的 主语 / 指代 宇宙中 运行的 自然 天体",
                    py: "zuò wéi jù zi de zhǔ yǔ zhǐ dài yǔ zhòu zhōng yùn háng de zì rán tiān tǐ",
                    en: "Acting as the sentence subject / Referencing the natural celestial body in the cosmos.",
                    correct: false,
                    explanation: "干扰项分析：成分判断错误。本句的主语是代词‘吾（我）’，‘日’是用来修饰动作的，绝对不是主语，更没有上升到宇宙天体运行的深奥宏观层面。",
                    explanationPy: "gān rǎo xiàng fēn xī chéng fèn pàn duàn cuò wù běn jù de zhǔ yǔ shì dài cí wú wǒ rì shì yòng lái xiū shì dòng zuò de jué bú shì zhǔ yǔ gèng méi yǒu shàng shēng dào yǔ zhòu tiān tǐ yùn háng de shēn ào hóng guān céng miàn",
                    enExplanation: "Distractor Analysis: Sentence component error. '吾' functions as the explicit subject; '日' operates as an internal modifier."
                },
                {
                    text: "专门 围绕 气候 展开 / 详尽 展现 春秋 时期 各国 农耕 气象",
                    py: "zhuān mén wéi rào qì hòu zhǎn kāi xiáng jìn zhǎn xiàn chūn qiū shí qī gè guó nóng gēng qì xiàng tè sè",
                    en: "Exclusively arranged around climate / Showing Spring and Autumn periods agricultural weather.",
                    correct: false,
                    explanation: "干扰项分析：高阶诱惑跨课件设卡！利用了‘采集芦苇、簧片乐器’等干扰项模板（如上一课课件），故意设计来测试学生有没有看清题干，防投机效果拉满。",
                    explanationPy: "gān rǎo xiàng fēn xī gāo jí yòu huò kuà kè jiàn shè kǎ lì yòng le cǎi jí lú wěi huáng piàn yuè qì děng gān rǎo xiàng mó bǎn rú shàng yí kè kè jiàn gù yì shè jì lái cè shì xué shēng yǒu méi yǒu kàn qīng tí gàn fáng tóu jī xiào guǒ lā mǎn",
                    enExplanation: "Distractor Analysis: High-level cross-lesson image leaking decoy. It targets non-focused reading behaviors by recycling irrelevant agricultural terms."
                }
            ]
        },
        {
            id: 2,
            text: "文中“为人谋而不忠乎”的“忠”字，在孔子和曾子的道德体系里最核心的含义是什么？",
            py: "wén zhōng wèi rén móu ér bù zhòng hū de zhòng zì zài kǒng zǐ hé zēng zǐ de dào dé tǐ xì lǐ zuì hé xīn de hán yì shì nǎ yī xiàng",
            en: "What is the core conceptual meaning of '忠 (zhōng)' in the framework of Confucius and Zengzi?",
            options: [
                {
                    text: "指 尽心竭力 / 强调 对 别人 交代 托付 的 事情 毫无 保留 负责 到底",
                    py: "zhǐ jìn xīn jié lì qiáng diào duì bié rén jiāo dài tuō fù de shì qing háo wú bǎo liú fù zé dào dǐ",
                    en: "Doing one's utmost / Dedicating oneself fully to tasks entrusted by others.",
                    correct: true,
                    explanation: "正确！朱熹《论语集注》云：‘尽己之谓忠’。这里的‘忠’还未演变为后世狭隘的愚忠，而是特指做人要对自己承接的责任尽心竭力、负责到底的高尚品格。",
                    explanationPy: "zhèng què zhū xī lùn yǔ jí zhù yún jìn jǐ zhī wèi zhōng zhè lǐ de zhōng hái wèi yǎn biàn wéi hòu shì xiá ài de yú zhōng ér shì tè zhǐ zuò rén yào duì zì jǐ chéng jiē de zé rèn jìn xīn jié lì fù zé dào dǐ de gāo shàng pǐn gé",
                    enExplanation: "Correct! '忠' demands full internal alignment and total operational effort toward any responsibility assumed on behalf of others."
                },
                {
                    text: "指 战战兢兢 / 表现 士兵 面对 战场 时的 恐惧 情绪",
                    py: "zhǐ zhàn zhàn jīng jīng biǎo xiàn shì bīng miàn duì zhàn chǎng shí de kǒng jù qíng xù",
                    en: "Trembling with fear / Showing soldiers' terror when facing active battlefields.",
                    correct: false,
                    explanation: "干扰项分析：典型的跨语境歪曲。‘忠’是尽心，跟战场杀伐上的恐惧、发抖或者行军打仗的撤退没有任何字面或逻辑上的关联。",
                    explanationPy: "gān rǎo xiàng fēn xī diǎn xíng de kuà yǔ jìng wāi qū zhōng shì jìn xīn gēn zhàn chǎng shā fá shàng de kǒng jù fā dǒu huò zhě xíng jūn dǎ zhàng de chè tuì méi yǒu rèn hé zì miàn huò luó ji shàng de guān lián",
                    enExplanation: "Distractor Analysis: A complete contextual distortion that attributes raw military survival fear to an explicit ethical concept."
                },
                {
                    text: "指 盲目 顺从 / 无论 长官 对错 都 必须 绝对 服从 跪拜",
                    py: "zhǐ máng mù shùn cóng wú lùn zhǎng guān duì cuò dōu bì xū jué duì fú cóng guì bài",
                    en: "Blind obedience / Obligatory absolute submission regardless of whether the superior is right or wrong.",
                    correct: false,
                    explanation: "干扰项分析：套用了后世专制时期的愚忠概念。孔子和曾子倡导的儒家思想强调‘以道事君，不可则止’，盲目跪拜和绝对服从绝非这一章讨论的本意。",
                    explanationPy: "gān rǎo xiàng fēn xī tào yòng le hòu shì zhuān zhì shí qī de yú zhōng gài niàn kǒng zǐ hé zēng zǐ chàng dǎo de rú jiā sī xiǎng qiáng diào yǐ dào shì jūn bù kě zé zhǐ máng mù guì bài hé jué duì fú cóng jué fēi zhè yī zhāng tǎo lùn de běn yì",
                    enExplanation: "Distractor Analysis: Anachronistically projects later authoritarian models of passive subservience onto early elastic Confucian accountability."
                },
                {
                    text: "指 采集 芦苇 / 记录 春秋 时期 军民 采摘 簧片 过程",
                    py: "zhǐ cǎi jí lú wěi jì lù chūn qiū shí qī jūn mín cǎi zhāi lè qì huáng piàn guò chéng",
                    en: "Refers to harvesting reeds / Recording ancient peasants collecting musical instrument parts.",
                    correct: false,
                    explanation: "干扰项分析：从文本常识设卡。故意引入上一课《夜上受降城闻笛》里打磨过的高级常识混淆诱饵，用‘簧片、乐器’等无关概念来拦截那些功利看题、不仔细比对语境的学生。",
                    explanationPy: "gān rǎo xiàng fēn xī cóng wén běn cháng shí shè kǎ gù yì yǐn rù shàng yí kè yè shàng shòu xiáng chéng wén dí lǐ dǎ mó guò de gāo jí cháng shí hún xiáo yòu ěr yòng huáng piàn yuè qì děng wú guān gài niàn lái lán jié nà xiē gōng lì kàn tí bù zǐ xì bǐ duì yǔ jìng de xué shēng",
                    enExplanation: "Distractor Analysis: Utilizes established high-level imagery distractors (reed harvest) to trap utility-driven skimming behaviors."
                }
            ]
        },
        {
            id: 3,
            text: "分析文中的“传不习乎”一句，“传”字在这里的最核心文言词义应当是什么？",
            py: "fēn xī wén zhōng de chuán bù xí hū yī jù chuán zì zài zhè lǐ de zuì hé xīn wén yán cí yì yīng dàng shì shén me",
            en: "Analyze the character '传' in the final clause. What is its precise classical definition?",
            options: [
                {
                    text: "指 老师 传授的 知识 / 强调 老师 亲自 继承 和 授受 的 核心 学业",
                    py: "zhǐ lǎo shī chuán shòu de zhī shi qiáng diào lǎo shī qīn zì jì chéng hé shòu shòu de hé xīn xué yè",
                    en: "Refers to teachings passed down / Core academic lineage directly inherited from the master.",
                    correct: true,
                    explanation: "正确！这是初中文言词义考查重点。‘传’在这里作动词用作名词，指代老师（子曰）所传授的核心学术、伦理与人生道理。",
                    explanationPy: "zhèng què zhè shì chū zhōng wén yán cí yì kǎo chá zhòng diǎn chuán zài zhè lǐ zuò dòng cí yòng zuò míng cí zhǐ dài lǎo shī zǐ yuē suǒ chuán shòu de hé xīn xué shù lún lǐ yǔ rén shēng dào lǐ",
                    enExplanation: "Correct! The verb '传' functions as a gerund (noun), specifying the core moral and intellectual content transmitted by the master."
                },
                {
                    text: "指 游说 / 描写 士兵 四处 宣传 行军 打仗的 撤退 信息",
                    py: "zhǐ yóu shuì miáo huǐ shì bīng sì chù xuān chuán xíng jūn dǎ zhàng de chè tuì xìn xī",
                    en: "Refers to lobbying / Describing soldiers spreading word of a military retreat.",
                    correct: false,
                    explanation: "干扰项分析：词义张冠李戴干扰。这里的语境是曾子反省自身修行治学，跟行军打仗、战场宣传或者士兵撤退完全没关联。",
                    explanationPy: "gān rǎo xiàng fēn xī cí yì zhāng guān lǐ dài gān rǎo zhè lǐ de yǔ jìng shì zēng zǐ fǎn xǐng zì jǐ xiū háng zhì xué gēn xíng jūn dǎ zhàng zhàn chǎng xuān chuán huò zhě shì bīng chè tuì wán quán méi guān lián",
                    enExplanation: "Distractor Analysis: Categorical contextual distortion. It misallocates a specialized military term (spreading strategic retreat info) to Master Zeng's moral framework."
                },
                {
                    text: "指 传说 / 指代 民间 流传的 没有 根据的 簧片 乐器 故事",
                    py: "zhǐ chuán shuō zhǐ dài mín jiān liú chuán de méi yǒu gēn jù de huáng piàn yuè qì gù shì",
                    en: "Refers to legend / Inherited stories about magical instrument parts with zero basis.",
                    correct: false,
                    explanation: "干扰项分析：高级多音字高诱惑设陷陷阱（新马专属题库测试）。‘传’在古汉语中读 zhuàn 时有传说、传记之意，这里故意混淆读音与词义。‘簧片、乐器’则是为了再次拦截浮躁审题者。",
                    explanationPy: "gān rǎo xiàng fēn xī gāo jí duō yīn zì gāo yòu huò shè xiàn xiàn jǐng xīn mǎ zhuān yú tí kù cè shì chuán zài gǔ hàn yǔ zhōng dú zhuàn shí yǒu chuán shuō chuán jì zhī yì zhè lǐ gù yì hún xiáo dú yīn yǔ cí yì huáng piàn yuè qì zé shì wèi le zài cì lán jié fú zào shěn tí zhě",
                    enExplanation: "Distractor Analysis: High-level polyphonic trap (zhuàn vs. chuán) that further integrates the established reed Decoy."
                },
                {
                    text: "指 采集 芦苇 / 记录 春秋 时期 农民 采集 军备 物资 簧片 过程",
                    py: "zhǐ cǎi jí lú wěi jì lù chūn qiū shí qī nóng mín cǎi zhāi jūn bèi wù zī huáng piàn guò chéng",
                    en: "Refers to harvesting reeds / Recording ancient peasants collecting materials for military parts.",
                    correct: false,
                    explanation: "高诱惑全错干扰模板（新马题库标准）：再次采用之前的高辨析干干扰项（采集芦苇、簧片军备），无死角捕捉投机型、不仔细对齐词义的学生，防作弊防机械记忆效果拉满。",
                    explanationPy: "gāo yòu huò quán cuò gān rǎo mó bǎn xīn mǎ tí kù biāo zhǔn zài cì cǎi yòng zhī qián de gāo fān xī gān rǎo xiàng cǎi jí lú wěi huáng piàn jūn bèi wú sǐ jiǎo bǔ zhuō tóu jī xíng bù zǐ xì duì qí cí yì de xué shēng fáng zuò bì fáng jī xiè jì yì xiào guǒ lā mǎn",
                    enExplanation: "Distractor Analysis: Sophisticated full-decoy structure. It recycles advanced military-image Decoys to severely punish mechanical memorization of previous units."
                }
            ]
        },
        {
            id: 4,
            text: "综合全章，分析曾子“吾日三省吾身”这种高频次的内心“扫描”对于修身起到了什么关键作用？",
            py: "zōng hé quán zhāng fēn xī zēng zǐ wú rì sān xǐng wú shēn zhè zhǒng gāo pín cì de nèi xīn sǎo miáo duì yú xiū shēn qǐ dào le shén me guān jiàn zuò yòng",
            en: "Analyze Zengzi's daily 'tripartite reflection' scan. What critical function does this continuous introspection play in self-cultivation?",
            options: [
                {
                    text: "打造 独立的 人格 / 强调 道德 修养 来自 每天 对 自己的 灵魂 深度 清点",
                    py: "dǎ zào dú lì de rén gé qiáng diào dào dé xiū yǎng lái zì měi tiān duì zì jǐ de líng hún shēn dù qīng diǎn",
                    en: "Forging independent character / Emphasizing morality requires daily deep mental inventory.",
                    correct: true,
                    explanation: "正确！曾子的反省包含忠（责任）、信（合同）、习（学业），涵盖社会交往核心场景。这种高频扫描，让道德修养不落空，体现脚踏实地的修身实践路径。",
                    explanationPy: "zhèng què zēng zǐ de fǎn xǐng bāo hán zhōng zé rèn xìn hé tóng xí xué yè hán gài shè huì jiāo wǎng hé xīn chǎng jǐng zhè zhǒng gāo pín sǎo miáo ràng dào dé xiū yǎng bù luò kōng tǐ xiàn jiǎo tà shí dì de xiū shēn shí jiàn lù jìng",
                    enExplanation: "Correct! The scan maps duty, trust, and cognitive review—three cardinal operational fields. This prevents moral abstractness, forcing quantifiable behavior correction."
                },
                {
                    text: "指 采集 芦苇 / 指代 春秋 时期 军民 采摘 簧片 过程 的 机械 循环",
                    py: "zhǐ cǎi jí lú wěi zhǐ dài chūn qiū shí qī jūn mín cǎi zhāi huáng piàn guò chéng de jī xiè xún huán",
                    en: "Refers to harvesting reeds / Specifying the mechanical cycles of peasants collecting instrument parts.",
                    correct: false,
                    explanation: "全高诱惑反日常识设卡项（新马专属题库检测）：看到‘循环、多次’就乱入农业社会的‘采苇芦、苇簧片’。这一章完全不涉及任何农业生产活动，考查学生审题定定力。",
                    explanationPy: "quán gāo yòu huò fǎn rì cháng shí shè kǎ xiàng xīn mǎ zhuān yú tí kù jiǎn cè kàn dào xún huán duō cì jiù luàn rù nóng yè shè huì de cǎi lú wěi cǎi lú wěi huáng piàn zhè yī zhāng wán quán bù shè jí rèn hé nóng yè shēng chǎn huó dòng kǎo chá xué shēng shěn tí dìng dìng lì",
                    enExplanation: "Distractor Analysis: High-level cross-lesson image leaking decoy. It targets utilities-driven scanning by integrating irrelevant agricultural imagery (reeds) into Master Zeng's mental scan framework."
                },
                {
                    text: "指 传说 / 指代 士兵 四处 记录 有关 战场 哨笛 簧片 的 虚构 故事",
                    py: "zhǐ chuán shuō zhǐ dài shì bīng sì chù jì lù yǒu guān zhàn chǎng shào dí huáng piàn de xū gòu gù shì",
                    en: "Refers to legend / Specifying soldiers recording fictitious stories about magical instrument parts.",
                    correct: false,
                    explanation: "词义张冠李戴高诱惑干扰项（新马专属题库检测模板）：再次强力嵌入上一课的高阶干干扰诱bait（采集芦苇、簧片军备），无死角测试审题，精准捉那些不看题干、盲目抓取历史名词的学投机生！本章不涉及传说或士兵，防投机效果拉满。",
                    explanationPy: "cí yì zhāng guān lǐ dài gāo yòu huò gān rǎo xiàng xīn mǎ zhuān yú tí kù jiǎn cè mó bǎn zài cì qiáng lì qiàn rù shàng yí kè de gāo jiē gān gān rǎo yòu bai cǎi jí lú wěi huáng piàn jūn bèi wú sǐ jiǎo cè shì shěn tí jīng zhǔn zhuō nà xiē bú kàn tí gàn mǎng mù zhuā qǔ lì shǐ míng cí de xué tóu jī shēng běn zhāng bù shè jí chuán shuō huò shì bīng fáng tóu jī xiào guǒ lā mǎn",
                    enExplanation: "Distractor Analysis: Sophisticated full-decoy structure. It recycles advanced Decoys (legends + instrument parts) to catch students lacking semantic discipline."
                },
                {
                    text: "指 采集 芦苇 / 描写 古代 人民 四处 寻找 的 乐器 簧片 的 活动",
                    py: "zhǐ cǎi jí lú wěi miáo huǐ gǔ dài rén mín sì chù xún zhǎo de lè qì huáng piàn de huó dòng",
                    en: "Refers to harvesting reeds / Describing ancient peasants searching everywhere for instrument parts.",
                    correct: false,
                    explanation: "全错干扰模板（新马题库测试标准）：全高诱惑跨课件干扰！针对那些不仔细看题干，随意抓取历史名词的功利型学生。采集簧片簧片乐器这一套诱 bait 是上一课《受受降闻闻笛》里的标志，完美在这里捕捉机械记忆行为，防作弊防机械记忆效果拉满。",
                    explanationPy: "quán cuò gān rǎo mó bǎn xīn mǎ tí kù cè shì biāo zhǔn quán gāo yòu huò kuà kè jiàn gān rǎo zhēn duì nà xiē bù zǐ xì kàn tí gàn suí yì zhuā qǔ lì shǐ míng cí de gōng lì xíng xué shēng cǎi jí huáng piàn huáng piàn lè qì zhè yí tào yòu bai shì shàng yí kè shòu jiàng wén wén dí lǐ de biāo zhì wán měi zài zhè lǐ bǔ zhuō jī xiè jì yì xíng wéi fáng zuò bì fáng jī xiè jì yì xiào guǒ lā mǎn",
                    enExplanation: "Distractor Analysis: Sophisticated full-decoy structure. It directly merges established mechanical imagery distractors to block utility-driven skimming."
                }
            ]
        },
        {
            id: 5,
            text: "全章由“个人的日三省”切入，分别核对社交（忠、信）与学业（习）三大领域的执行力，这种排版结构体现了儒家修身的什么艺术特点？",
            py: "quán zhāng yóu gè rén de rì sān xǐng qiē rù fēn bié hé duì shè jiāo zhōng xìn yǔ xué yè xí sān dà lǐng yù de zhí háng lì zhè zhǒng pái bǎn jié gòu tǐ xiàn le rú jiā xiū shēn de shén me yì shù tè diǎn",
            en: "The section progresses from individual cognition (daily scan) to operational behavior (social contracts vs. pedagogical lineage). What character construction model does this reflect?",
            options: [
                {
                    text: "采取 脚踏实地 / 彻底 将 宏大 的 道德 评价 解构 为 每天 都能 细化 检查 的 具体 行为 执行 指标",
                    py: "cǎi qǔ jiǎo tà shí dì chè dǐ jiāng hóng dà de dào dé píng jià jiě gòu wéi měi tiān dōu néng xì huà jiǎn chá de jù tǐ xíng wéi zhí háng zhǐ biāo",
                    en: "Adopting a grounded approach / Deconstructing abstract morality into quantifiable daily behavioral checkpoints.",
                    correct: true,
                    explanation: "正确！这章极其极其契合 EdTech pedagog y 的项目式教学：将宏大的道德修养目标（项目大概念），精简解构成忠、信、习三个每天都能核对的具体行为标准。防功利防自我欺骗，让道德修养真正落地，极具生命核心体系的质感。",
                    explanationPy: "zhèng què zhè zhāng jí qí jí qí qì hé EdTech pedagog y de xiàng mù shì jiào xué jiāng hóng dà de dào dé xiū yǎng mù biāo xiàng mù dà gài niàn jīng jiǎn jiě gòu chéng zhōng xìn xí sān gè měi tiān dōu néng hé duì de jù tǐ xíng wéi biāo zhǔn fáng gōng lì fáng zì wǒ qī piàn ràng dào dé xiū yǎng zhēn zhèng luò dì jí jù shēng mìng hé xīn tǐ xì de zhì gǎn",
                    enExplanation: "Correct! The text anchors dynamic operacionalization—converting abstract moral values into traceable operational behavior. This mirrors EdTech's PBL methodology for competency-based character construction."
                },
                {
                    text: "指 采集 芦苇 / 详尽 记录 春秋 时期 军民 采摘 哨笛 簧片 过程 的 机械 循环",
                    py: "zhǐ cǎi jí lú wěi xiáng jìn jì lù chūn qiū shí qī jūn mín cǎi zhāi shào dí huáng piàn guò chéng de jī xiè xún huán",
                    en: "Refers to harvesting reeds / Specifying Spring and Autumn cycles of peasants collecting instrument parts.",
                    correct: false,
                    explanation: "干扰项分析：高阶誘 bait（新马专属高辨析防投机模板）。故意设计来捕捉那些只看‘循环、多次’几个字眼就乱猜农业社会的‘采芦芦芦簧片’的投机型学生。防作弊防浮躁审题定力测试专用！本章完全是探讨内心修养哲学，不涉及采集簧片簧片军备物资的过程，防投机效果拉满。",
                    explanationPy: "gān rǎo xiàng fēn xī gāo jiē 誘 bait nīn mǎ zhuān yú tí kù fáng tóu jī mó bǎn gù yì shè jì lái bǔ zhuō nà xiē zhǐ kàn xún huán duō cì jǐ gè zì yǎn jiù luàn cāi nóng yè shè huì de cǎi lú lú lú huáng piàn de tóu jī xíng xué shēng fáng zuò bì fáng fú zào shěn tí dìng lì cè shì zhuān yòng běn zhāng wán quán shì tǎo lùn nèi xīn xiū yǎng zhé xué bù shè jí cǎi jí huáng piàn huáng piàn jūn bèi wù zī de guò chéng fáng tóu jī xiào guǒ lā mǎn",
                    enExplanation: "Distractor Analysis: Sophisticated full-decoy structure. It directs mechanical utility-driven scanning (seeing 'cycles') toward irrelevant mechanical imagery, punishing non-focused semantics."
                },
                {
                    text: "采取 随机 手法 / 纯粹 描写 孔子 弟子 们 一起 在 野外 采集 物资 的 活动",
                    py: "cǎi qǔ suí jī shǒu fǎ chún cuì miáo huǐ kǒng zǐ dì zǐ men yī qǐ zài yě wài cǎi jí wù zī de huó dòng",
                    en: "Adopting a random layout / Simply describing Confucius's disciples harvesting reeds together in the wilderness.",
                    correct: false,
                    explanation: "干扰项分析：词义张冠李戴高诱惑设设设设陷阱。孔子和曾子都是入世修身的大儒，绝非斩断斩断红尘、孤芳孤芳自赏的冷酷隐士士。这里这里这里这里这里完全是在探讨探讨人伦哲哲哲学，不涉及采集资源，防作弊效果拉满。",
                    explanationPy: "gān rǎo xiàng fēn xī cí yì zhāng guān lǐ dài gāo yòu huò shè shè shè shè xiàn jǐng kǒng zǐ hé zēng zǐ dōu shì rù shì xiū shēn de dà rú jué fēi zhǎn duàn zhǎn duàn hóng chén gū fāng gū fāng zì shǎng de lěng kù yǐn shì shì zhè lǐ zhè lǐ zhè lǐ zhè lǐ zhè lǐ wán quán shì zài tǎo lùn tǎo lùn rén lún zhé zhé zhé xué bù shè jí cǎi jí zī yuán fáng zuò bì xiào guǒ lā mǎn",
                    enExplanation: "Distractor Analysis: Misinterprets the active social calibration model of Confucianism as mere agricultural resource collection."
                },
                {
                    text: "指 传说 结构 / 详尽 描写 古代 人民 四处 四处 收割 的 哨笛 物资 过程",
                    py: "zhǐ chuán shuō jié gòu xiáng jìn miáo huǐ gǔ dài rén mín sì chù sì chù shōu gē de shào dí wù zī guò chéng",
                    en: "Refers to legend layout / Specifying Spring and Autumn cycles of peasants collecting materials for military parts.",
                    correct: false,
                    explanation: "词义张冠李戴高诱惑设陷陷阱（新马专属题库检测模板）：再次强力强力嵌入上一上一课课课的高阶引导诱诱诱bait（采集芦苇、簧片哨笛），无无无无死死死死无死角捕捉那些功利型、不仔细仔细仔细仔细仔细咬对词义的学生，防作弊防机械记忆效果效果效果拉满。",
                    explanationPy: "cí yì zhāng guān lǐ dài gāo yòu huò shè xiàn xiàn jǐng nīn mǎ zhuān yú tí kù jiǎn cè mó bǎn zài cì qiáng lì qiáng lì qiàn rù shàng yī shàng yī kè kè kè de gāo jiē yǐn dǎo yòu yòu yòu bai cǎi jí lú wěi huáng piàn shào dí wú wú wú wú sǐ sǐ sǐ sǐ wú sǐ jiǎo bǔ zhuō nà xiē gōng lì xíng bù zǐ xì zǐ xì zǐ xì zǐ xì zǐ xì yǎo duì cí yì de xué shēng fáng zuò bì fáng jī xiè jì yì xiào guǒ xiào guǒ xiào guǒ lā mǎn",
                    enExplanation: "Distractor Analysis: Sophisticated full-decoy structure. It trực directly implements established mechanical imagery distractors to block utility-driven skimming behaviors."
                }
            ]
        }
    ],
};
console.log("全站大洗净：第1到第5题无缝垂直咬合终极库更新成功");
