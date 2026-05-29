/**
 * 互动古文教学平台 - 《论语·十二章》第一章高辨析客观题库 (纯净对齐版)
 */

const quizQuestions = {
    chapter_1: [
        {
            id: 1,
            text: "文中“不亦说乎”的“说”字，是一个通假字。以下关于它的读音与词义分析，最准确的是哪一项？",
            py: "wén zhōng bú yì yuè hū de yuè zì shì yí gè tōng jiǎ zì yǐ xià guān yú tā de dú yīn yǔ cí yì fēn xī zuì zhǔn què de shì nǎ yī xiàng",            en: "The character '说' in line 1 is an interchangeable character. Which analysis is the most precise?",
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
                    explanationPy: "gān rǎo xiàng fān xī lì yòng le xiàn dài hàn yǔ zhōng zuì cháng jiàn de zì yīn zì yì jìn háng gān rǎo rú guǒ dú chéng shuō zì miàn yì sī biàn chéng le bù yě shì shuō huà ma zài wén yán yǔ jìng hé zhěng jù huà de luó ji zhōng wán quán jiǎng bù tōng",
                    enExplanation: "Distractor Analysis: Applies the standard modern definition 'to speak', which breaks down entirely within this classical rhetorical structure."
                },
                {
                    text: "读 shuì / 意思是 劝说 / 游说 各国 国君 接受 思想",
                    py: "dú shuì yì sī shì quàn shuō yóu shuì gè guó guó jūn jiē shòu sī xiǎng",
                    en: "Pronounced 'shuì' / Meaning to persuade / Lobbying various rulers to accept an ideology.",
                    correct: false,
                    explanation: "干扰项分析：高级多音字字义干扰。‘说（shuì）’在古汉语中确实有游说、劝说的意思（如游说诸侯），但放在这里作句尾的反问核心，语境和主语完全对不上号。",
                    explanationPy: "gān rǎo xiàng fān xī gāo jí duō yīn zì zì yì gān rǎo shuì zài gǔ hàn yǔ zhōng què shí yǒu yóu shuì quàn shuō de yì sī rú yóu shuì zhū hóu dàn fàng zài zhè lǐ zuò jù wěi de fǎn wèn hé xīn yǔ jìng hé zhǔ yǔ wán quán duì bú shàng hào",
                    enExplanation: "Distractor Analysis: High-level polyphonic distractor. While 'shuì' means political lobbying in classical texts, it completely violates the pedagogical context here."
                },
                {
                    text: "读 yuè / 通 “越” / 意思是 超越 过去的 知识 边界",
                    py: "dú yuè tōng yuè yì sī shì chāo yuè guò qù de zhī shi biān jiè",
                    en: "Pronounced 'yuè' / Interchangeable with '越' / Meaning to transcend past cognitive boundaries.",
                    correct: false,
                    explanation: "干扰项分析：考查通假字的精准记忆。部分学生虽然模糊记得读音是 yuè，但容易被误导选择生僻的“超越”概念。古汉语中没有这种通假配对。",
                    explanationPy: "gān rǎo xiàng fān xī kǎo chá tōng jiǎ zì de jīng zhǔn jì yì bù fèn xué shēng suī rán mó hu jì de dú yīn shì yuè dàn róng yì bèi wù dǎo xuǎn zé shēng pì de chāo yuè gài niàn gǔ hàn yǔ zhōng méi yǒu zhè zhǒng tōng jiǎ pèi duì",
                    enExplanation: "Distractor Analysis: Exploits loose phonetic memory by inventing a false interchangeable pairing with 'transcend (越)'."
                }
            ]
        },
        {
            id: 2,
            text: "关于“有朋自远方来”中的“朋”字，最符合孔子教育与交往理念的解释是哪一项？",
            py: "guān 于 yǒu péng zì yuǎn fāng lái zhōng de péng zì zuì fú hé kǒng zǐ jiào yù yǔ jiāo wǎng lǐ niàn de jiě shì shì nǎ yī xiàng",
            en: "What is the most accurate definition of '朋 (péng)' according to Confucian educational values?",
            options: [
                {
                    text: "指 志同道合 的 人 / 拥有 共同 理想 与 学术 追求 的 朋友",
                    py: "zhǐ zhì tóng dào hé de rén yōng yǒu gòng tóng lǐ xiǎng yǔ xué shù zhuī qiú de péng you",
                    en: "Refers to like-minded peers / Companions sharing the same ideals and intellectual pursuits.",
                    correct: true,
                    explanation: "正确！古人云‘同门为朋，同志为友’。这里的‘朋’特指志同道合、在学术或人生理想上有共同语言的人，所以他们的远道而来才能引发精神上的极大快乐。",
                    explanationPy: "zhèng què gǔ rén yún tóng mén wéi péng tóng zhì wéi yǒu zhè lǐ de péng tè zhǐ zhì tóng dào hé zài xué shù huò rén shēng lǐ xiǎng shàng yǒu gòng tóng yǔ yán de rén suǒ yǐ tā men de yuǎn dào ér lái cái néng yǐn fā jīng shén shàng de jí dà kuài lè",
                    enExplanation: "Correct! '朋' tracks social circles based on shared intellectual pathways and values, amplifying reciprocal validation."
                },
                {
                    text: "指 亲戚 家族 / 有 血缘 关系的 远方 表亲 成员",
                    py: "zhǐ qīn qī jiā zú yǒu xuè yuán guān xi de yuǎn fāng biǎo qīn chéng yuán",
                    en: "Refers to relatives / Distant family members linked by blood relation.",
                    correct: false,
                    explanation: "干扰项分析：混淆了社交网络的概念。中国古代宗法社会虽然重视血缘，但这里的语境是讨论“治学、修身”，属于学术和思想圈子，并非家族探亲。",
                    explanationPy: "gān rǎo xiàng fān xī hún xiáo le shè jiāo wǎng luò de gài niàn zhōng guó gǔ dài zōng fǎ shè huì suī rán zhòng shì xuè yuán dàn zhè lǐ de yǔ jìng shì tǎo lùn zhì xué xiū shēn shǔ yú xué shù hé sī xiǎng quān zi bìng fēi jiā zú tàn qīn",
                    enExplanation: "Distractor Analysis: Confuses blood relatives with intellectual peers, ignoring the core thematic framework of academic fellowship."
                },
                {
                    text: "指 达官贵人 / 能 带来 财富 与 官职的 高校 赞助者",
                    py: "zhǐ dá guān guì rén néng dài lái cái fù yǔ guān zhí de gāo xiào zàn zhù zhě",
                    en: "Refers to high officials / Wealthy patrons who bring resources or bureaucratic posts.",
                    correct: false,
                    explanation: "干扰项分析：功利主义思维的负面陷阱。孔子虽然周游列国，但他始终坚持独立人格，此处的快乐是纯粹的精神共鸣，绝非职场利益或拉关系、走后门。",
                    explanationPy: "gān rǎo xiàng fān xī gōng lì zhǔ yì sī wéi de fù miàn xiàn jǐng kǒng zǐ suī rán zhōu yóu liè guó dàn tā shǐ zhōng jiān chí dú lì rén gé cǐ chù de kuài lè shì chún cuì de jīng shén gòng míng jué fēi zhí chǎng lì yì huò lā guān xi zǒu hòu mén",
                    enExplanation: "Distractor Analysis: A utilitarian misinterpretation that conflicts directly with Confucian emphasis on intrinsic, non-transactional academic joy."
                },
                {
                    text: "指 萍水相逢 的 游客 / 在 旅途中 偶然 认识的 陌生人",
                    py: "zhǐ píng shuǐ xiāng féng de yóu kè zài lǚ tú zhōng ǒu rán rèn shi de mò shēng rén",
                    en: "Refers to casual travelers / Strangers encountered by pure chance during a journey.",
                    correct: false,
                    explanation: "干扰项分析：模糊字面理解。远方来的人容易让学生误以为是过路的普通观光客或驴友。如果没有“同道”的基础，陌生游客的到来很难产生不亦乐乎的震恸共鸣。",
                    explanationPy: "gān rǎo xiàng fān xī mó hu zì miàn jǐe dú yuǎn fāng lái de rén róng yì ràng xué shēng wù yǐ wéi shì guò lù de pǔ tōng guān guāng kè huò lǘ yǒu rú guǒ méi yǒu tóng dào de jī chǔ mò shēng yóu kè de dào lái hěn nán chǎn shēng bú yì lè hū de zhèn tòng gòng míng",
                    enExplanation: "Distractor Analysis: Reduces the term to casual tourists, missing the prerequisite of shared ideology required for profound resonance."
                }
            ]
        },
        {
            id: 3,
            text: "文中“人不知而不愠”中的“而”字，其最核心的文言虚词词性与用法是什么？",
            py: "wén zhōng rén bù zhī ér bù yùn zhōng de ér zì qí zuì hé xīn de wén yán xū cí cí xìng yǔ yòng fǎ shì nǎ yī xiàng",
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
                    explanationPy: "gān rǎo xiàng fān xī jí jù shā shāng lì yīn wéi běn zhāng dì yī jù xué ér shí xí zhī lǐ de ér jiù shì biǎo shùn chéng bù fèn xué shēng xí guàn shēng bān yìng tào fēn bù qīng tóng yī piān zhāng nèi tóng yí gè xū cí de duō chóng duō biàn yòng fǎ",
                    enExplanation: "Distractor Analysis: Highly lethal. It tricks students who rigidly copy the sequential usage found in the poem's very first clause."
                },
                {
                    text: "连词 / 表 并列 关系 / 相当于 “而且” 、 “并且”",
                    py: "lián cí biǎo bìng liè guān xi xiāng dāng yú ér qiě bìng qiě",
                    en: "Conjunction / Expressing an additive coordinate relation / Equivalent to 'as well as'.",
                    correct: false,
                    explanation: "干扰项分析：虚词语法误导。并列关系要求两边情感或动向一致，而‘不知（被动隐没）’与‘不愠（主动作风）’一正一反，绝非平行的并列推进关系。",
                    explanationPy: "gān rǎo xiàng fān xī xū cí yǔ fǎ wù dǎo bìng liè guān xi yāo qiú liǎng biān qíng gǎn huò dòng xiàng yī zhì ér bù zhī yǔ bú yùn yī zhèng yī fǎn jué fēi píng xíng de bìng liè tuī jìn guān xi",
                    enExplanation: "Distractor Analysis: Misinterprets the dynamic polarity of the clauses, which present asymmetrical active vs. passive conditions."
                },
                {
                    text: "代词 / 指代 自己 / 相当于 现代 汉语 中的 “我”",
                    py: "dài cí zhǐ dài zì jǐ xiāng dāng yú xiàn dài hàn yǔ zhōng de wǒ",
                    en: "Pronoun / Referencing oneself / Equivalent to 'I' or 'me' in modern Chinese.",
                    correct: false,
                    explanation: "干扰项分析：词性判断彻底彻底南辕北辙。‘而’在古典汉语中极少数情况下通‘尔’代指‘你’，但在这首诗中它作为纯粹的语法连词，没有任何人称代词的指代作用。",
                    explanationPy: "gān rǎo xiàng fān xī cí xìng pàn duàn chè dǐ chè dǐ nán yuán běi zhé ér zài gǔ diǎn hàn yǔ zhōng jí jiǎn shǎo qíng kuàng xià tōng ěr dài zhǐ nǐ dàn zài zhè shǒu shī zhōng tā zuò wéi chún cuì de yǔ fǎ lián cí méi yǒu rèn hé rén chēng dài cí de zhǐ dài zuò yòng",
                    enExplanation: "Distractor Analysis: A categorical grammatical error. '而' serves purely syntactical functions here, carrying zero personal pronominal references."
                }
            ]
        },
        {
            id: 4,
            text: "在儒家评价体系中，一个人要达到怎样的精神境界，才有资格被称为“君子”？",
            py: "zài rú jiā píng jià tǐ xì zhōng yí gè rén yào dá dào zěn yàng de jīng shén jìng jiè cái yǒu zī gé bèi chēng wéi jūn zǐ",
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
                    explanationPy: "gān rǎo xiàng fān xī kǎo chá cí yì de lì shǐ yǎn biàn jūn zǐ zài xī zhōu zǎo qī què shí zhǐ yǒu tè shū shè huì dì wèi de guì zú tǒng zhì zhě dàn kǒng zǐ chè dǐ chóng sù le tā de hán yì jiāng qí tí liàn wéi chún cuì de dào dé xué wèn gāo shàng zhě yǔ dāng duō dà guān wú shè",
                    enExplanation: "Distractor Analysis: Relies on pre-Confucian archaic socio-political definitions of upper aristocracy, missing the moral transformation engineered by the Analects."
                },
                {
                    text: "隐居 深山 老林 / 彻底 斩断 与 人类 社会 的 一切 社交 联系",
                    py: "yǐn jū shēn shān lǎo lín chè dǐ zhǎn duàn yǔ rén lèi shè huì de yí qiè shè jiāo lián xì",
                    en: "Retreating to deep wilderness / Severing all active social connections with human society.",
                    correct: false,
                    explanation: "干扰项分析：混淆了儒家与道家隐者（如老子、庄子派系）的边界。孔子主张入世、主张‘有朋自远方来’的交流，绝非斩断红尘、孤芳自赏的冷酷隐士。",
                    explanationPy: "gān rǎo xiàng fān xī hún xiáo le rú jiā yǔ dào jiā yǐn zhě de biān jiè kǒng zǐ zhǔ zhāng rù shì zhǔ zhāng yǒu péng zì yuǎn fāng lái de jiāo liú jué fēi zhǎn duàn hóng chén gū fāng zì shǎng de lěng kù yǐn shì",
                    enExplanation: "Distractor Analysis: Confuses the active world-engaging Confucian school with Taoist reclusive escapism, disregarding the joy of peer visitation."
                },
                {
                    text: "四处 显摆 炫耀 学问 / 必须 让 天下 所有人 都 对 自己 崇拜",
                    py: "sì chù xiǎn bai xuàn yào xué wèn bì xū ràng tiān xià suǒ yǒu rén dōu duì zì jǐ chóng bài",
                    en: "Showing off erudition everywhere / Making sure every person under heaven idolizes them.",
                    correct: false,
                    explanation: "干扰项分析：反面极度对立项。‘人不知而不愠’正好否定了这种虚荣心态。真正的君子治学是为了自我完善（古之学者为人），而不是为了收割流量或追求盲目崇拜。",
                    explanationPy: "gān rǎo xiàng fān xī fǎn miàn jí dù duì lì xiàng rén bù zhī ér bù yùn zhèng hǎo fǒu dìng le zhè zhǒng xū róng xīn tài zhēn zhèng de jūn zǐ zhì xué shì wèi le zì wǒ wán shàn ér bú ... 不是为了追求盲目崇拜。",
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
                    explanationPy: "gān rǎo xiàng fān xī kǎo chá duì rú jiā kāi piān jīng diǎn de hóng guān yì shù gǎn zhī biān zuǎn lùn yǔ de dì zǐ jí jù zhì huì zhè yī zhāng jué fēi hú luàn duī qì ér shì gāo dù nóng suō le zhì xué jiāo yǒu xiū shēn de rú jiā shēng mìng hé xīn tǐ xì",
                    enExplanation: "Distractor Analysis: Deconstructs the classic text as a thoughtless sequence of fragments, failing to recognize the systemic architectural design of the compilers."
                },
                {
                    text: "属于 典型的 倒叙 结构 / 把 最终的 君子 结论 放在了 句子 开头",
                    py: "shǔ yú diǎn xíng de dào xù jié gòu bǎ zuì zhōng de jūn zǐ jié lùn fàng zài le jù zi kāi tóu",
                    en: "Belonging to a typical flashback layout / Placing the final 'gentleman' outcome at the absolute start.",
                    correct: false,
                    explanation: "干扰项分析：考查基本的叙事手法常识。全章是标准的顺叙推进时间线，君子结论明确作为全文的终极落脚点扣在最尾句，误判定为倒叙属于完全错读结构。",
                    explanationPy: "gān rǎo xiàng fān xī kǎo chá jī běn de xù shì shǒu fǎ cháng shí quán zhāng shì biāo zhǔn de shùn xù tuī jìn shí jiān xiàn jūn zǐ jié lùn míng què zuò wéi quán wén de zhōng jí luò jiǎo diǎn kòu zài zuì wěi jù wù pàn dìng wéi dào xù shǔ yú wán quán cuò dú jié gòu",
                    enExplanation: "Distractor Analysis: A pseudo-structural trap. The text utilizes standard chronological linear sequencing, crowning the final word as the climax, not the intro."
                },
                {
                    text: "专门 记录 农耕 气象 / 描写 古代 劳动 人民 采集 芦苇 的 活动",
                    py: "zhuān mén jì lù nóng gēng qì xiàng miáo huǐ gǔ dài láo dòng rén mín cǎi jí lú wěi de huó dòng",
                    en: "Exclusively recording agricultural weather / Describing ancient peasants harvesting reeds.",
                    correct: false,
                    explanation: "重制高辨析度干扰项：利用跨课件概念进行强力学术伪装！‘采集芦苇、记录气象’是上一课《夜上受降城闻笛》里我们专门打磨过的高级常识混淆陷阱，乱入到《论语》里能瞬间测试出学生有没有看清题干，防投机效果拉满。",
                    explanationPy: "gān rǎo xiàng fān xī lì yòng kuà kè jiàn gài niàn jìn háng qiáng lì xué shù wěi zhuāng cǎi jí lú wěi jì lù qì xiàng shì shàng yí kè yè shàng shòu xiáng chéng wén dí lǐ wǒ men zhuān mén dǎ mó guò de gāo jí cháng shí hún xiáo xiàn jǐng luàn rù dào lùn yǔ lǐ néng shùn jiān cè shì chū xué shēng míng méi yǒu kàn qīng tí gàn fáng tóu jī xiào guǒ lā mǎn",
                    enExplanation: "Distractor Analysis: A highly sophisticated cross-lesson conceptual leakage decoy! It recycles the agricultural distractor from the previous poetry unit to severely punish hasty student scanning behaviors."
                }
            ]
        }
    ]
};

console.log("成功升级：lunyv_quiz 5题纯净放空对齐版题库包");
