/**
 * 互动古文教学平台 - 《论语·十二章》原文核心词解动态数据包 (精简白话规范版)
 */

const poemData = {
    chapter_1: [
        // 子曰：“学而时习之，不亦说乎？
        { text: "子曰", py: "zǐ yuē", zh: "孔子说。子，古代对男子的尊称，这里特指孔子。", en: "The Master said" },
        { text: "：", punc: true },
        { text: "“", punc: true },
        { text: "学", py: "xue", zh: "学习、研究文学与做人的道理。", en: "To learn / study" },
        { text: "而", py: "ér", zh: "连词，表示顺承，相当于‘然后’或‘并且’。", en: "and then" },
        { text: "时", py: "shí", zh: "名词作状语，按时、经常、在适当的时候。", en: "at constant times / regularly", exam: true },
        { text: "习", py: "xí", zh: "实习、温习、复习、实践。指将学到的知识落实到行动中。", en: "to practice / review", exam: true },
        { text: "之", py: "zhī", zh: "代词，代指学过的知识或道理。", en: "it (what has been learned)" },
        { text: "，", punc: true },
        { text: "不", py: "bú", zh: "与后面的‘亦……乎’连用，构成反问句。", en: "not" },
        { text: "亦", py: "yì", zh: "副词，也、不也是。", en: "also" },
        { text: "说", py: "yuè", zh: "通假字，通‘悦’，意思是愉快、高兴。", en: "pleased / delighted (interchangeable with 悦)", exam: true },
        { text: "乎", py: "hū", zh: "助词，表反问语气，相当于‘吗’。", en: "isn't it?" },
        { text: "？", punc: true },

        // 有朋自远方来，不亦乐乎？
        { text: "有", py: "yǒu", zh: "有、存在。", en: "To have" },
        { text: "朋", py: "péng", zh: "志同道合的人。这里指有共同理想与追求的朋友、弟子。", en: "friends / like-minded people", exam: true },
        { text: "自", py: "zì", zh: "介词，从、由。", en: "from" },
        { text: "远方", py: "yuǎn fāng", zh: "远方：遥远的地方。", en: "afar / distant places" },
        { text: "来", py: "lái", zh: "前来、来到。", en: "to come" },
        { text: "，", punc: true },
        { text: "不", py: "bú", zh: "与后面的‘亦……乎’连用，构成反问句。", en: "not" },
        { text: "亦", py: "yì", zh: "也。", en: "also" },
        { text: "乐", py: "lè", zh: "快乐、喜悦。", en: "joyful / happy" },
        { text: "乎", py: "hū", zh: "语气助词，表反问。", en: "isn't it?" },
        { text: "？", punc: true },

        // 人不知而不愠，不亦君子乎？”（《学而》）
        { text: "人", py: "rén", zh: "别人、人家。", en: "Others / people" },
        { text: "不知", py: "bù zhī", zh: "别人不了解自己的才华或道德修养。", en: "do not understand" },
        { text: "而", py: "ér", zh: "连词，表转折，相当于‘却’、‘可是’。", en: "yet / but", exam: true },
        { text: "不", py: "bú", zh: "没有。", en: "not" },
        { text: "愠", py: "yùn", zh: "生气、发怒、怨恨。这里指内心感到怨恨或不快。", en: "resentful / angry", exam: true },
        { text: "，", punc: true },
        { text: "不", py: "bú", zh: "与后面的‘亦……乎’连用，构成反问句。", en: "not" },
        { text: "亦", py: "yì", zh: "也。", en: "also" },
        { text: "君子", py: "jūn zǐ", zh: "古代指地位高的人，后来特指道德高尚、学问深厚、有修修养的完美人才。", en: "gentleman / person of noble character", exam: true },
        { text: "乎", py: "hū", zh: "表反问语气助词。", en: "isn't it?" },
        { text: "”", punc: true },
        { text: "（", punc: true },
        { text: "《学而》", py: "xué ér", zh: "本章出自《论语》第一篇《学而篇》。", en: "From the chapter Xue Er" },
        { text: "）", punc: true }
    ],
    chapter_2: [
        // 曾子曰：“吾日三省吾身：
        { text: "曾子", py: "zēng zǐ", zh: "孔子的弟子，名参，字子舆。被后世尊称为‘宗圣’。", en: "Zengzi / Master Zeng" },
        { text: "曰", py: "yuē", zh: "说。", en: "said" },
        { text: "：", punc: true },
        { text: "“", punc: true },
        { text: "吾", py: "wú", zh: "代词，我。", en: "I / myself" },
        { text: "日", py: "rì", zh: "名词作状语，每日、每天。", en: "daily / every day", exam: true },
        { text: "三", py: "sān", zh: "数词表示虚指，多次、多次反省。古代常以‘三’‘九’表示多。", en: "multiple times / thrice" },
        { text: "省", py: "xǐng", zh: "动词，检查、反省、考察自己的言行。", en: "to examine / reflect on", exam: true },
        { text: "吾身", py: "wú shēn", zh: "我自己、自身。", en: "myself / my own conduct" },
        { text: "：", punc: true },

        // 为人谋而不忠乎？
        { text: "为", py: "wèi", zh: "介词，替、帮。", en: "for / on behalf of" },
        { text: "人", py: "rén", zh: "别人、人家。", en: "others" },
        { text: "谋", py: "móu", zh: "动词，谋划、筹办事情。这里指替别人办事。", en: "to plan / transact business" },
        { text: "而", py: "ér", zh: "连词，表转折，相当于‘却’、‘可是’。", en: "yet / but" },
        { text: "不", py: "bù", zh: "副词，没有。", en: "not" },
        { text: "忠", py: "zhōng", zh: "尽心竭力。这里指对人尽心尽力。", en: "loyal / devoted / doing one's utmost", exam: true },
        { text: "乎", py: "hū", zh: "语气助词，表反问，相当于‘吗’。", en: "isn't it?" },
        { text: "？", punc: true },

        // 与朋友交而不信乎？
        { text: "与", py: "yǔ", zh: "介词，同、跟。", en: "with" },
        { text: "朋友", py: "péng you", zh: "朋友。同师为朋，同志为友。", en: "friends" },
        { text: "交", py: "jiāo", zh: "动词，交往、结交。", en: "to associate / interact" },
        { text: "而", py: "ér", zh: "连词，表转折。", en: "yet / but" },
        { text: "不", py: "bú", zh: "副词，没有。", en: "not" },
        { text: "信", py: "xìn", zh: "诚信、诚实。这里指真诚诚实，说话算数。", en: "trustworthy / faithful / sincere", exam: true },
        { text: "乎", py: "hū", zh: "语气助词。", en: "isn't it?" },
        { text: "？", punc: true },

        // 传不习乎？”（《学而》）
        { text: "传", py: "chuán", zh: "动词用作名词，老师传授的知识、学业。", en: "what has been passed down / teachings", exam: true },
        { text: "不", py: "bù", zh: "副词，没有。", en: "not" },
        { text: "习", py: "xí", zh: "温习、复习、实践练习。", en: "to review / practice" },
        { text: "乎", py: "hū", zh: "语气助词。", en: "isn't it?" },
        { text: "”", punc: true },
        { text: "（", punc: true },
        { text: "《学而》", py: "xué ér", zh: "本章同样出自《论语》第一篇《学而篇》。", en: "From the chapter Xue Er" },
        { text: "）", punc: true }
    ] // 第二章的数组结束
}; // 🎯 整个大对象的关闭括号（对应你截图第 52 行的右大括号）

console.log("成功更新：lunyv_text 第一和第二章纯净词解数据");
